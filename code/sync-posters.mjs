import fs from 'node:fs/promises';
import path from 'node:path';

const rootDir = path.resolve(process.cwd());
const moviesPath = path.join(rootDir, 'movies.json');

function normalizeTitle(s) {
	return String(s)
		.toLowerCase()
		.replace(/&/g, 'and')
		.replace(/[^a-z0-9]+/g, ' ')
		.trim();
}

function extractCards(html) {
	// TMDB search results contain repeated "card" blocks.
	// We'll capture a reasonable slice around each card to extract title + poster.
	const cardRe = /<div class="card v4 tight[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g;
	return html.match(cardRe) ?? [];
}

function extractTitle(cardHtml) {
	const m = cardHtml.match(/<h2>\s*<a[^>]*>([^<]+)<\/a>\s*<\/h2>/i);
	return m?.[1]?.trim() ?? null;
}

function extractPosterUrl(cardHtml) {
	// poster is often in data-src (lazy) or src
	const m = cardHtml.match(/(?:data-src|src)="(https:\/\/image\.tmdb\.org\/t\/p\/[^"]+)"/i);
	return m?.[1] ?? null;
}

function toW500(url) {
	if (!url) return url;
	return url
		.replace(/\/w\d+_and_h\d+_bestv2\//, '/w500/')
		.replace(/\/w\d+\//, '/w500/');
}

async function fetchHtml(url) {
	const res = await fetch(url, {
		headers: {
			'User-Agent': 'Mozilla/5.0',
			'Accept': 'text/html,application/xhtml+xml'
		}
	});
	if (!res.ok) {
		throw new Error(`${res.status} ${res.statusText}`);
	}
	return await res.text();
}

async function main() {
	const args = new Set(process.argv.slice(2));
	const shouldWrite = args.has('--write');

	const moviesRaw = await fs.readFile(moviesPath, 'utf8');
	const movies = JSON.parse(moviesRaw);

	let changed = 0;

	for (const movie of movies) {
		const query = encodeURIComponent(movie.title);
		const url = `https://www.themoviedb.org/search?query=${query}`;

		let html;
		try {
			html = await fetchHtml(url);
		} catch (e) {
			console.warn(`WARN: failed to fetch search page for "${movie.title}": ${e.message}`);
			continue;
		}

		const cards = extractCards(html);
		const want = normalizeTitle(movie.title);

		let best = null;
		for (const card of cards.slice(0, 8)) {
			const title = extractTitle(card);
			const poster = extractPosterUrl(card);
			if (!title || !poster) continue;

			const norm = normalizeTitle(title);
			if (norm === want) {
				best = { title, poster: toW500(poster) };
				break;
			}

			// fallback: contains match
			if (!best && (norm.includes(want) || want.includes(norm))) {
				best = { title, poster: toW500(poster) };
			}
		}

		if (!best?.poster) {
			console.warn(`WARN: no poster found for "${movie.title}"`);
			continue;
		}

		if (movie.poster !== best.poster) {
			console.log(`UPDATE: ${movie.title}`);
			console.log(`  from: ${movie.poster}`);
			console.log(`  to:   ${best.poster}`);
			movie.poster = best.poster;
			changed++;
		}
	}

	if (shouldWrite && changed > 0) {
		await fs.writeFile(moviesPath, JSON.stringify(movies, null, 2) + '\n', 'utf8');
		console.log(`\nWrote ${changed} updated poster URL(s) to movies.json`);
	} else {
		console.log(`\n${changed} poster URL(s) would be updated. Re-run with --write to save.`);
	}
}

await main();

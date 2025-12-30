import fs from 'node:fs/promises';
import path from 'node:path';

const rootDir = path.resolve(process.cwd());
const moviesPath = path.join(rootDir, 'movies.json');

async function head(url) {
	try {
		const res = await fetch(url, { method: 'HEAD' });
		return { ok: res.ok, status: res.status };
	} catch (e) {
		return { ok: false, status: null, error: e?.message ?? String(e) };
	}
}

const movies = JSON.parse(await fs.readFile(moviesPath, 'utf8'));

const results = [];
for (const m of movies) {
	const r = await head(m.poster);
	results.push({ title: m.title, poster: m.poster, ...r });
}

const bad = results.filter(r => !r.ok);

for (const r of results) {
	if (r.ok) continue;
	console.log(`BAD: ${r.title}`);
	console.log(`  poster: ${r.poster}`);
	console.log(`  status: ${r.status ?? 'FETCH_FAILED'}${r.error ? ` (${r.error})` : ''}`);
}

console.log(`\nChecked ${results.length} poster URL(s). Bad: ${bad.length}.`);

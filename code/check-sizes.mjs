const bad = [
  '1mbmL0FIY9btvJod7bCgm9mK1Co',
  'ujERk3aKABXU3NDXOIxu6CxQH7c',
  '5FjtZBwHsdMbA1FjMWwF9r6zG2M',
  'yu6xP43oJq5fapmi9qA6Nsq64nN',
  'qvkiVFIzZUvBeW7AN7l4FU1a7wO'
];

const sizes = ['original', 'w780', 'w500', 'w342', 'w185', 'w92'];

for (const id of bad) {
  console.log(`\n${id}`);
  for (const size of sizes) {
    const url = `https://image.tmdb.org/t/p/${size}/${id}.jpg`;
    try {
      const res = await fetch(url, { method: 'HEAD' });
      console.log(`${size}: ${res.status}`);
    } catch (e) {
      console.log(`${size}: FETCH_FAILED (${e?.message ?? e})`);
    }
  }
}

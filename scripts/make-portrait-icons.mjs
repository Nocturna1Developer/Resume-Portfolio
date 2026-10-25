// Builds the header avatar and favicons from src/assets/portrait-source.png.
// Run: node scripts/make-portrait-icons.mjs
import sharp from 'sharp';

const out = (p) => decodeURIComponent(new URL(p, import.meta.url).pathname).replace(/^\/(\w:)/, '$1');
const src = out('../src/assets/portrait-source.png');
const face = { left: 180, top: 20, width: 880, height: 880 }; // head-and-shoulders square

const circle = (s) => Buffer.from(`<svg width="${s}" height="${s}"><circle cx="${s / 2}" cy="${s / 2}" r="${s / 2}"/></svg>`);
const round = (s) => sharp(src).extract(face).resize(s, s).composite([{ input: circle(s), blend: 'dest-in' }]).png();

await sharp(src).extract(face).resize(256, 256).jpeg({ quality: 86, mozjpeg: true }).toFile(out('../src/assets/avatar.jpg'));
await round(32).toFile(out('../public/favicon-32.png'));
await round(192).toFile(out('../public/favicon-192.png'));
await sharp(src).extract(face).resize(180, 180).png().toFile(out('../public/apple-touch-icon.png'));
console.log('portrait icons written');

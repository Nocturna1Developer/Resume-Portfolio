// Regenerates the social card and PNG favicons in /public.
// Run: node scripts/make-brand-images.mjs
import sharp from 'sharp';
import { readFile } from 'node:fs/promises';

const serif = "'Instrument Serif', Georgia, 'Times New Roman', serif";
const sans = "'Segoe UI', 'Helvetica Neue', Arial, sans-serif";

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#f6f4ef"/>
  <rect x="0" y="0" width="1200" height="10" fill="#9a3a12"/>
  <circle cx="110" cy="132" r="38" fill="#15171c"/>
  <text x="110" y="145" text-anchor="middle" font-family="${serif}" font-size="36" fill="#f6f4ef">CK</text>
  <text x="80" y="330" font-family="${serif}" font-size="112" fill="#15171c" letter-spacing="-2">Chinamay Kasareddy</text>
  <text x="82" y="405" font-family="${sans}" font-size="34" fill="#4b505a">Software engineer · simulations, multiplayer systems, full-stack web</text>
  <line x1="82" y1="480" x2="1118" y2="480" stroke="#c9c2b4" stroke-width="2"/>
  <text x="82" y="540" font-family="${sans}" font-size="28" font-weight="600" fill="#9a3a12">BUILDING · LEADING · TEACHING</text>
</svg>`;

await sharp(Buffer.from(og)).png().toFile(new URL('../public/og.png', import.meta.url).pathname.replace(/^\/(\w:)/, '$1'));

const icon = await readFile(new URL('../public/favicon.svg', import.meta.url));
const out = (n) => new URL(`../public/${n}`, import.meta.url).pathname.replace(/^\/(\w:)/, '$1');
await sharp(icon, { density: 400 }).resize(32, 32).png().toFile(out('favicon-32.png'));
await sharp(icon, { density: 400 }).resize(180, 180).flatten({ background: '#15171c' }).png().toFile(out('apple-touch-icon.png'));
console.log('brand images written');

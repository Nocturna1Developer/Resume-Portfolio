// Builds the combined showreel from local source videos (not committed).
// Usage: node scripts/make-reel.mjs "<source dir>" "<output dir>"
// Requires ffmpeg on PATH. Produces reel-1080p.mp4 (master), reel-720p.mp4 (web) and a poster.
import sharp from 'sharp';
import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const [src = 'I:/_VIDEOS_DEMO_REELS/SWE', out = 'I:/_VIDEOS_DEMO_REELS/SWE/reel-build'] = process.argv.slice(2);
const tmp = join(out, 'parts');
mkdirSync(tmp, { recursive: true });

const W = 1920, H = 1080, FPS = 30;
const serif = "'Instrument Serif', Georgia, 'Times New Roman', serif";
const sans = "'Segoe UI', Arial, sans-serif";

// type: 'wide' fills the frame; 'tall' sits centered over a blurred copy of itself.
const segments = [
  { card: null, file: 'yt-downloads/Dusk Games - Demo Reel (Constantly Changing).mp4', cuts: [[2.5, 69]], type: 'wide' },
  { card: ['Hyperion', 'Full-stack music streaming · Next.js, Supabase, Stripe'], file: 'yt-downloads/H Y P E R I O N - A minimalistic music app..mp4', cuts: [[68, 88], [130, 165]], type: 'wide' },
  { card: ['FormulateAI', '3D product customizer · Three.js, React, DALL·E API'], file: 'Formulate Website Showcase.mp4', cuts: [[0, 45]], type: 'wide' },
  { card: ['Advanced Lane Detection', 'Computer vision · Python, OpenCV'], file: 'Self Driving Car - Advanced Lane Finding.mp4', cuts: [[0, 40]], type: 'wide' },
  { card: ['SimpleReads', 'Goodreads-style book app · Flutter, Dart'], file: 'Basic Flutter Project.mp4', cuts: [[24, 64]], type: 'tall', crop: 'crop=iw*0.36:ih:iw*0.32:0' },
  { card: ['Gustify', 'iOS weather app · Swift'], file: 'Gustify. A weather app..mp4', cuts: [[0, 19.8]], type: 'tall' },
];

function cardSvg(title, sub, kicker) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <rect width="100%" height="100%" fill="#15171c"/>
  <rect x="160" y="${H / 2 - 150}" width="80" height="4" fill="#d9763f"/>
  <text x="160" y="${H / 2 - 90}" font-family="${sans}" font-size="30" font-weight="600" letter-spacing="4" fill="#d9763f">${kicker}</text>
  <text x="156" y="${H / 2 + 40}" font-family="${serif}" font-size="148" fill="#f6f4ef">${title}</text>
  <text x="160" y="${H / 2 + 120}" font-family="${sans}" font-size="40" fill="#b9b5ac">${sub}</text>
</svg>`;
}

function run(args) { execFileSync('ffmpeg', ['-hide_banner', '-v', 'error', '-y', ...args], { stdio: 'inherit' }); }

const enc = ['-c:v', 'libx264', '-preset', 'medium', '-crf', '18', '-pix_fmt', 'yuv420p', '-r', String(FPS),
  '-c:a', 'aac', '-b:a', '192k', '-ar', '48000', '-ac', '2'];

async function card(name, title, sub, kicker, dur) {
  const png = join(tmp, `${name}.png`);
  await sharp(Buffer.from(cardSvg(title, sub, kicker))).png().toFile(png);
  run(['-loop', '1', '-t', String(dur), '-i', png, '-f', 'lavfi', '-t', String(dur), '-i', 'anullsrc=r=48000:cl=stereo',
    '-vf', `fps=${FPS},format=yuv420p,fade=t=in:d=0.4,fade=t=out:st=${dur - 0.4}:d=0.4`, '-shortest', ...enc, join(tmp, `${name}.mp4`)]);
  return join(tmp, `${name}.mp4`);
}

function clip(name, seg, [a, b]) {
  const d = b - a;
  const f = 0.35;
  const base = seg.crop ? `${seg.crop},` : '';
  const vf = seg.type === 'tall'
    ? `[0:v]${base}split[m][b];[b]scale=${W}:${H}:force_original_aspect_ratio=increase,crop=${W}:${H},boxblur=30:3,eq=brightness=-0.15[bg];[m]scale=-2:${H}[fg];[bg][fg]overlay=(W-w)/2:0,fps=${FPS},format=yuv420p,fade=t=in:d=${f},fade=t=out:st=${d - f}:d=${f}[v]`
    : `[0:v]scale=${W}:${H}:force_original_aspect_ratio=decrease,pad=${W}:${H}:(ow-iw)/2:(oh-ih)/2:color=black,setsar=1,fps=${FPS},format=yuv420p,fade=t=in:d=${f},fade=t=out:st=${d - f}:d=${f}[v]`;
  const af = `[0:a]aresample=48000,loudnorm=I=-16:TP=-1.5:LRA=11,afade=t=in:d=${f},afade=t=out:st=${d - f}:d=${f}[a]`;
  const outFile = join(tmp, `${name}.mp4`);
  run(['-ss', String(a), '-t', String(d), '-i', join(src, seg.file), '-filter_complex', `${vf};${af}`, '-map', '[v]', '-map', '[a]', ...enc, outFile]);
  return outFile;
}

const parts = [await card('00-intro', 'Chinamay Kasareddy', 'Software engineer · selected work', 'SHOWREEL', 3)];
let i = 0;
for (const seg of segments) {
  i++;
  if (seg.card) parts.push(await card(`${i}-card`, seg.card[0], seg.card[1], 'PROJECT', 2.5));
  seg.cuts.forEach((c, j) => parts.push(clip(`${i}-clip${j}`, seg, c)));
}
parts.push(await card('99-outro', 'Chinamay Kasareddy', 'github.com/Nocturna1Developer', 'THANKS FOR WATCHING', 3));

const list = join(tmp, 'list.txt');
writeFileSync(list, parts.map((p) => `file '${p.replace(/\\/g, '/')}'`).join('\n'));
const master = join(out, 'reel-1080p.mp4');
run(['-f', 'concat', '-safe', '0', '-i', list, '-c', 'copy', '-movflags', '+faststart', master]);
run(['-i', master, '-vf', 'scale=1280:-2', '-c:v', 'libx264', '-preset', 'slow', '-crf', '27', '-pix_fmt', 'yuv420p',
  '-c:a', 'aac', '-b:a', '128k', '-movflags', '+faststart', join(out, 'reel-720p.mp4')]);
run(['-ss', '20', '-i', master, '-frames:v', '1', '-vf', 'scale=1600:-2', join(out, 'reel-poster.jpg')]);
rmSync(tmp, { recursive: true, force: true });
console.log('done:', out);

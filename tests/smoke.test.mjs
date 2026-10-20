// Smoke tests against the production build in dist/. Run `npm run build` first.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';

const dist = new URL('../dist/', import.meta.url);
const html = await readFile(new URL('index.html', dist), 'utf8');
const base = (process.env.BASE_PATH ?? '/Resume-Portfolio').replace(/\/?$/, '/');

test('every in-page anchor has a target', () => {
  const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
  const hrefs = [...html.matchAll(/href="#([^"]+)"/g)].map((m) => m[1]);
  for (const id of ['work', 'experience', 'about', 'contact', 'main', 'top']) assert.ok(ids.has(id), `missing #${id}`);
  for (const h of hrefs) assert.ok(ids.has(h), `broken anchor #${h}`);
});

test('local assets referenced by the page exist under the base path', async () => {
  const refs = [...html.matchAll(/(?:href|src|srcset)="([^"]+)"/g)]
    .flatMap((m) => m[1].split(',').map((s) => s.trim().split(' ')[0]))
    .filter((u) => u.startsWith('/'));
  assert.ok(refs.length > 0);
  for (const r of refs) {
    assert.ok(r.startsWith(base), `${r} is outside base ${base}`);
    await access(new URL(decodeURIComponent(r.slice(base.length)), dist));
  }
});

test('social image and essentials are present', async () => {
  await access(new URL('og.png', dist));
  await access(new URL('404.html', dist));
  assert.match(html, /<title>Chinamay Kasareddy/);
  assert.match(html, /rel="canonical"/);
  assert.match(html, /linkedin\.com\/in\//);
  assert.doesNotMatch(html, /mailto:|@gmail|Resume\.pdf/i);
  assert.doesNotMatch(html, /510-493|TODO|lorem/i);
});

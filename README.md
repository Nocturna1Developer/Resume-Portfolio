# Chinamay Kasareddy — portfolio

A single-page static portfolio built with [Astro](https://astro.build) and TypeScript, deployed to GitHub Pages.

## Local development

Requires **Node.js 22.22+** (Astro 7's minimum; CI uses Node 24).

```bash
npm ci
npm run dev        # http://localhost:4321/Resume-Portfolio/
npm run build      # astro check + static build to dist/
npm run preview
npm test           # smoke tests against dist/ (run build first)
```

## Editing content

- **All copy** lives in `src/data/content.ts`: hero, projects, experience, about and links. The site has no email address or résumé on purpose; contact goes through LinkedIn.
- **Images** go in `src/assets/projects/`. Astro generates AVIF/WebP at several widths, with explicit dimensions.
- **Showreel**: `public/media/showreel.mp4` (90 s, 1080p, about 21 MB) with poster `src/assets/reel-poster.jpg`. To swap it, replace the MP4 (re-mux with `ffmpeg -i in.mp4 -c copy -movflags +faststart public/media/showreel.mp4`) and the poster. `scripts/make-reel.mjs` holds the earlier automated 4:45 cut, which you can use as a starting point.
- **Social card and favicons**: edit `scripts/make-brand-images.mjs` or `public/favicon.svg`, then run `node scripts/make-brand-images.mjs`.
- Check `docs/CONTENT_AUDIT.md` before adding metrics. It records each claim's source and open questions.

## Deployment (GitHub Pages)

The site URL and base path come from two environment variables, read in `astro.config.mjs`:

| Variable | Default | Meaning |
|---|---|---|
| `SITE_URL` | `https://nocturna1developer.github.io` | Origin only |
| `BASE_PATH` | `/Resume-Portfolio` | `/` for a user site or custom domain, `/<repo>` for a project site |

The workflow (`.github/workflows/deploy.yml`) builds on every push to `main` with `BASE_PATH=/<repository name>`, runs the smoke tests, and deploys with `actions/deploy-pages`.

**One-time setup:** in the repository, go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**. Push to `main` and the site appears at `https://nocturna1developer.github.io/Resume-Portfolio/`.

**Renaming the repository:** nothing to change. The workflow uses the repository name.

**Serving at the root** (`https://nocturna1developer.github.io/`): the repository must be named `Nocturna1Developer.github.io`. In the workflow, set `BASE_PATH: /`.

**Custom domain:** add `public/CNAME` containing the domain, set `SITE_URL: https://your.domain` and `BASE_PATH: /` in the workflow, then set up the domain under Settings → Pages.

## Structure

```
src/data/content.ts        content (single source of truth)
src/pages/index.astro      the page and its section styles
src/pages/404.astro        hosting fallback linking back home
src/pages/robots.txt.ts    robots with sitemap URL derived from config
src/components/            ProjectCard, VideoEmbed (click-to-load, youtube-nocookie), Icon
src/layouts/Base.astro     <head>: SEO, Open Graph, JSON-LD Person
src/styles/global.css      design tokens and shared styles
tests/smoke.test.mjs       anchors, asset paths under the base, essentials
```

The showreel is a native `<video>` with `preload="none"`, so nothing downloads until someone presses play. The only client-side JavaScript is the small click-to-load YouTube script. Without it, video posters link straight to YouTube. Fonts (Inter, Instrument Serif) are self-hosted via Fontsource under the SIL Open Font License. There are no trackers.

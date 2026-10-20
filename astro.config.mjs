// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * Deployment target. Override with environment variables:
 *   SITE_URL  – origin only, e.g. https://nocturna1developer.github.io
 *   BASE_PATH – "/" for a user site or custom domain, "/<repo>" for a project site
 */
const site = process.env.SITE_URL ?? 'https://nocturna1developer.github.io';
const base = process.env.BASE_PATH ?? '/Resume-Portfolio';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  output: 'static',
  integrations: [sitemap({ filter: (page) => !page.includes('404') })],
  build: { inlineStylesheets: 'always' },
});

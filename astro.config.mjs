import { defineConfig } from 'astro/config';
// SITE_BASE: "/website" when served from a GitHub Pages project repo, "/" on a custom domain.
export default defineConfig({
  site: process.env.SITE_URL || 'https://yteam3211.github.io',
  base: process.env.SITE_BASE || '/',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});

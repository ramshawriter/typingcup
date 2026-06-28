// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE } from './src/consts.js';

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  output: 'static',
  integrations: [sitemap()],
  build: {
    // Produce clean directory-style URLs: /guides/degree-symbol/index.html
    format: 'directory',
  },
});

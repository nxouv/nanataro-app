import { defineConfig } from 'astro/config';
import embeds from 'astro-embed/integration';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://nanataro.app',
  integrations: [embeds(), mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  }
});
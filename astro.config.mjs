import { defineConfig } from 'astro/config';
import embeds from 'astro-embed/integration';

import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://nanataro.app',
  integrations: [embeds(), mdx()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  }
});
// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Update `site` if the final domain changes. It powers canonical URLs, the sitemap and social previews.
export default defineConfig({
  site: 'https://automateops.online',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  integrations: [sitemap({ filter: (page) => !page.includes('/thank-you') })],
  vite: {
    plugins: [tailwindcss()],
  },
});

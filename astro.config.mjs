// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.ambitsol.co',
  integrations: [sitemap()],
  redirects: {
    '/about-us': '/about',
    '/price': '/contact',
    '/faq': '/',
    '/services': '/services/finance-accounting-tax/uk/overview',
    '/privacy-policy': '/privacy',
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
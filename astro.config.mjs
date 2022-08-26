import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'http://boilerplate.test',
  integrations: [react(), sitemap()],
  site: 'tinonavarrodiaz.github.io',
  base: 'boilerplate-2022',
});

import { defineConfig } from 'astro/config';
import { inject } from '@vercel/analytics';

inject();

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
});

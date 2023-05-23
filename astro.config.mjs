import { defineConfig } from 'astro/config';
import { inject } from '@vercel/analytics';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), inject()],
});

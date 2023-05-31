import { defineConfig } from 'astro/config';
import { inject } from '@vercel/analytics';
import tailwind from "@astrojs/tailwind";
inject();
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()]
});
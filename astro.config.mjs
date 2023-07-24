import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import solid from "@astrojs/solid-js";
import svelte from "@astrojs/svelte";
import vue from "@astrojs/vue";
import preact from "@astrojs/preact";
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  include: ['**/*.astro', '**/*.tsx', '**/*.svelte',  '**/*.js'],
  integrations: [react(), solid(), svelte(), vue(), preact(), alpinejs()],
  output:"hybrid"
});
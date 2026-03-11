import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      $lib: path.resolve(__dirname, './src/lib'),
      $components: path.resolve(__dirname, './src/components'),
      $pages: path.resolve(__dirname, './src/pages'),
      $types: path.resolve(__dirname, './src/types'),
    },
  },
  server: {
    port: 5173,
  },
});

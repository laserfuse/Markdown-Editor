import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

export default defineConfig(({ command }) => ({
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        licence: fileURLToPath(new URL('./licence.html', import.meta.url)),
        guide: fileURLToPath(new URL('./guide.html', import.meta.url)),
        badges: fileURLToPath(new URL('./badges.html', import.meta.url)),
      },
    },
  },
  server: {
    watch: {
      usePolling: true,
      interval: 1000,
    },
  },
}));

import { defineConfig } from 'vite';

export default defineConfig({
  // Vercel runs `vite build` and serves /dist as the static site,
  // plus /api/*.js as serverless functions automatically. No special
  // server config needed here — `vercel dev` proxies /api for local testing.
  build: {
    outDir: 'dist',
  },
});

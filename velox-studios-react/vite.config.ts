import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        jogos: "jogos.html",
        kcbot: "kcbot.html",
        news: "novidades.html",
        sons: "sons.html",
        suporte: "suporte.html",
      },
    },
  },
});
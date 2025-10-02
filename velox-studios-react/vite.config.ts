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
        jogos: "public/jogos.html",
        kcbot: "public/kcbot.html",
        news: "public/novidades.html",
        sons: "public/sons.html",
        suporte: "public/suporte.html",
      },
    },
  },
});
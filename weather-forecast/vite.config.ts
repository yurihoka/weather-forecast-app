import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

export default defineConfig({
  root: "src",
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});

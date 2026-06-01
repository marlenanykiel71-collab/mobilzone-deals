import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "node:path";

// Standalone static SPA build for GitHub Pages / any FTP host.
// Outputs a flat structure: index.html in root + assets/ folder with
// relative ./assets/ paths so the site runs from any subdirectory.
export default defineConfig({
  root: path.resolve(__dirname),
  base: "./",
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths({ projects: [path.resolve(__dirname, "../tsconfig.json")] }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
  },
  publicDir: path.resolve(__dirname, "../public"),
  build: {
    outDir: path.resolve(__dirname, "../dist-static"),
    emptyOutDir: true,
    assetsDir: "assets",
    sourcemap: false,
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name]-[hash][extname]",
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
      },
    },
  },
});
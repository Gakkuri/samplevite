import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/static/", // so that asset URLs match Django's settings
  build: {
    manifest: "manifest.json",
    outDir: resolve(__dirname, "dist"),
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/main.jsx"),
      },
    },
  },
  server: {
    cors: {
      // the origin you will be accessing via browser
      origin: "http://127.0.0.1:8000",
    },
  },
});

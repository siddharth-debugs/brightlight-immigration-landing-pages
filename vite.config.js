import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves the site under /<repo-name>/.
  // Override at build time with: BASE=/your-repo/ npm run build
  base: process.env.BASE || "/brightlight-spousal-pr/",
});

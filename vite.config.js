import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Local dev: "/" so the site opens at http://localhost:5173/.
  // Production: GitHub Actions sets BASE=/<repo-name>/ so Vite emits
  // the correct asset paths for GitHub Pages.
  base: process.env.BASE || "/",
});

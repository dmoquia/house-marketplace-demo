import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import eslint from "vite-plugin-eslint";
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return {
    plugins: [react(), svgr(), eslint()],
    // build: {
    //   outDir: "./wwwroot/app/",
    //   sourcemap: true,
    // },
    // server: {
    //   port: 3000,
    // },
    build: {
      chunkSizeWarningLimit: 1600,
    },
  };
});

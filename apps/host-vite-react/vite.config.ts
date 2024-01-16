import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react()],
    build: {
      modulePreload: false,
      target: "ES2020",
      minify: true,
      cssCodeSplit: false,
    },
  };
});

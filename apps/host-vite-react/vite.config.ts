import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    // imported to resolved bundled react in Vite
    define: {
      "process.env": process.env,
    },
    plugins: [react()],
    build: {
      modulePreload: false,
      target: "ES2020",
      minify: true,
      cssCodeSplit: false,
    },
  };
});

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env": process.env,
  },
  plugins: [react()],
  build: {
    target: "ES2020",
    outDir: "dist",
    minify: true,
    lib: {
      entry: "./src/App.tsx",
      fileName: "vna",
      formats: ["es"],
    },
  },
});

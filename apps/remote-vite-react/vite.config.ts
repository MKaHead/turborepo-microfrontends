// import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // federation({
    //   name: "remote_vite_react",
    //   filename: "remoteEntry.js",
    //   // Modules to expose
    //   exposes: {
    //     "./page": "./src/App.tsx",
    //     "./component": "./src/Button.tsx",
    //   },
    //   shared: [],
    // }),
  ],
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

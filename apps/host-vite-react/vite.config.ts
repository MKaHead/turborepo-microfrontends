import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const { VITE_REMOTE_REACT_URL } = loadEnv(mode, process.cwd());
  const remoteViteReactUrl =
    mode === "production" ? VITE_REMOTE_REACT_URL : "http://localhost:3021";
  return {
    plugins: [
      react(),
      federation({
        name: "host_vite_react",
        filename: "remoteEntry.js",
        // Modules to expose
        remotes: {
          remote_vite_react: `${remoteViteReactUrl}/assets/remoteEntry.js`,
        },
        shared: [],
      }),
    ],
    build: {
      modulePreload: false,
      target: "esnext",
      minify: false,
      cssCodeSplit: false,
    },
  };
});

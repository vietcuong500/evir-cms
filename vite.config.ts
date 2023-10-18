import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  plugins: [react(), tsconfigPaths({})],
  server: {
    host: true,
    port: 3005,
    watch: {
      usePolling: true,
    },
  },
});

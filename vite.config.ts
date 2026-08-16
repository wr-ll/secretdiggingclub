import vinext from "vinext";
import { defineConfig } from "vite";

export default defineConfig({
  server: { watch: { usePolling: true } },
  plugins: [vinext()],
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  // config options
  plugins: [react({ jsxImportSource: "@emotion/react" })],
});

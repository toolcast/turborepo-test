import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "test-vite",
      formats: ["cjs", "es"],
      // the proper extensions will be added
      fileName: "test-vite",
    },
    commonjsOptions: {
      include: [],
      // exclude: ["wix-style-react-publisher"]
    },
  },
});

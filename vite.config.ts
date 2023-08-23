import { defineConfig } from "vite";
import path from "path";

// 環境に応じてファイル名を決定する
const fileName =
  process.env.MODE === "production" ? "ugocas.min.js" : "ugocas.js";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "EGAK",
      formats: ["es", "umd"],
      fileName: (format) => `ugocas${format === "umd" ? ".min" : ""}.js`,
    },
    minify: false,
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
});

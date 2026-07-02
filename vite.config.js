import { defineConfig } from "vite"
import { ViteEjsPlugin } from "vite-plugin-ejs"

export default defineConfig({
  root: "src",
  server: { hmr: false, open: true },
  plugins: [
    ViteEjsPlugin({
      title: "pod",
    }),
  ],
})

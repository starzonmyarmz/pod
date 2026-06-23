import { defineConfig } from 'vite'
import { ViteEjsPlugin } from 'vite-plugin-ejs'

export default defineConfig({
  root: 'src',
  server: { hmr: false },
  plugins: [
    ViteEjsPlugin({
      title: 'pod',
    }),
  ],
})

import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";

// Root stays at the repo root (not "play") so play/index.html can reference
// ../src/styles/*.css and ../src/images/* via plain root-relative URLs
// (/src/...). A "../" href resolves against the server root and can't
// escape it, so pinning root here avoids that dead end — no symlinks or
// /@fs/ paths needed.
export default defineConfig({
  server: { hmr: false, open: "/play/" },
  plugins: [
    ViteEjsPlugin({
      title: "pod — playground",
    }),
    {
      // Repo root has no index.html of its own, so a browser landing on "/"
      // (stale tab, manual bookmark, etc.) would otherwise 404.
      name: "redirect-root-to-play",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === "/") {
            res.writeHead(302, { Location: "/play/" });
            res.end();
            return;
          }
          next();
        });
      },
    },
  ],
});

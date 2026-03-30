import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://sadikchow.com",
  redirects: {
    "/blog": "/notes",
    "/blog/:slug": "/notes/:slug"
  },
  integrations: [sitemap()]
});

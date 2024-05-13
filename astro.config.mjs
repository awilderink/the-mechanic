import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";
import alpinejs from "@astrojs/alpinejs";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  site: "https://themechanic.nl",
  image: {
    domains: ["doorlinkenvoorraad.nl"]
  },
  integrations: [tailwind(), alpinejs(), db()],
  output: "server",
  adapter: vercel()
});
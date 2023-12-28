import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://themechanic.nl",
  integrations: [tailwind()],
  output: "server",
  adapter: vercel(),
});

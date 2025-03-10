import alpinejs from "@astrojs/alpinejs";
import { defineConfig, envField } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import node from "@astrojs/node";
import { loadEnv } from "vite";

const { DIRECTUS_URL } = loadEnv(process.env.NODE_ENV, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  site: "https://dev.themechanic.nl",
  image: {
    domains: [DIRECTUS_URL],
  },
  integrations: [alpinejs({ entrypoint: "./src/entrypoint.ts" })],
  vite: {
    plugins: [tailwindcss()],
  },
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  env: {
    schema: {
      DIRECTUS_URL: envField.string({ context: "server", access: "secret" }),
      DIRECTUS_TOKEN: envField.string({ context: "server", access: "secret" }),
    },
  },
});

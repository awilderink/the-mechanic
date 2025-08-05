import alpinejs from "@astrojs/alpinejs";
import { defineConfig, envField } from "astro/config";
import { loadEnv } from "vite";
import tailwindcss from "@tailwindcss/vite";
import node from "@astrojs/node";
import sanity from "@sanity/astro";
import react from "@astrojs/react";

const {
  PUBLIC_SANITY_STUDIO_PROJECT_ID,
  PUBLIC_SANITY_STUDIO_DATASET,
  PUBLIC_SANITY_PROJECT_ID,
  PUBLIC_SANITY_DATASET,
} = loadEnv(import.meta.env.MODE, process.cwd(), "");

const projectId =
  PUBLIC_SANITY_STUDIO_PROJECT_ID || PUBLIC_SANITY_PROJECT_ID || "bwy8myjl";
const dataset =
  PUBLIC_SANITY_STUDIO_DATASET || PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  output: "server",
  site: "https://dev.themechanic.nl",
  integrations: [
    alpinejs({ entrypoint: "./src/entrypoint.ts" }),
    sanity({
      projectId,
      dataset,
      useCdn: false,
      studioBasePath: "/admin",
    }),
    react(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: node({
    mode: "standalone",
  }),
});

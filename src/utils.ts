import type { DirectusFile } from "@directus/sdk";
import { DIRECTUS_URL } from "astro:env/server";

export const getDirectusUrl = (file: DirectusFile) => {
  return `${DIRECTUS_URL}/assets/${file.filename_disk}`;
};

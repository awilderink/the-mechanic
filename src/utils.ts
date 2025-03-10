import type { DirectusFile } from "@directus/sdk";
import { DIRECTUS_URL } from 'astro:env/server'

export const getDirectusAssetUrl = (file: DirectusFile) => {
  if (!file) return "/public/no-image.jpg";
	return `${DIRECTUS_URL}/assets/${file.id}`;
};
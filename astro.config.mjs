import alpinejs from '@astrojs/alpinejs';
import node from '@astrojs/node';
import react from '@astrojs/react';
import sanity from '@sanity/astro';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

const {
	PUBLIC_SANITY_STUDIO_PROJECT_ID,
	PUBLIC_SANITY_STUDIO_DATASET,
	PUBLIC_SANITY_PROJECT_ID,
	PUBLIC_SANITY_DATASET,
} = loadEnv(import.meta.env.MODE, process.cwd(), '');

const projectId =
	PUBLIC_SANITY_STUDIO_PROJECT_ID || PUBLIC_SANITY_PROJECT_ID || 'bwy8myjl';
const dataset =
	PUBLIC_SANITY_STUDIO_DATASET || PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
	output: 'server',
	site: 'https://dev.themechanic.nl',
	integrations: [
		alpinejs({ entrypoint: './src/entrypoint.ts' }),
		sanity({
			projectId,
			dataset,
			useCdn: false,
			studioBasePath: '/admin',
		}),
		react(),
	],
	vite: {
		plugins: [tailwindcss()],
	},
	adapter: node({
		mode: 'standalone',
	}),
});

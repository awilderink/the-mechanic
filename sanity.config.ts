import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './src/sanity/schemas';
import { structure } from './src/sanity/structure';

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'bwy8myjl';
const dataset = process.env.SANITY_STUDIO_DATASET || 'production';

export default defineConfig({
	name: 'the-mechanic',
	title: 'The Mechanic CMS',

	projectId,
	dataset,

	plugins: [structureTool({ structure }), visionTool()],

	schema: {
		types: schemaTypes,
	},
});

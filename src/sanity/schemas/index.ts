import { blockContent } from './blockContent';
import { blockTypes } from './blocks';
import { global } from './global';
import { home } from './home';
import { merk } from './merk';
import { page } from './page';
import { seo } from './seo';
import { teamMember } from './teamMember';
import { voorraad } from './voorraad';

export const schemaTypes = [
	global,
	home,
	page,
	teamMember,
	merk,
	voorraad,
	seo,
	blockContent,
	...blockTypes,
];

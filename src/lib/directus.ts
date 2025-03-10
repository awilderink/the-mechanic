import {
	type DirectusFile,
	createDirectus,
	rest,
	staticToken,
} from "@directus/sdk";

type Global = {
	title: string;
	description: string;
};

type Voorraad = {
	id: number;
	status: string;
	slug: string;
	merk: string;
	model: string;
	verkocht: boolean;
	highlight?: string;
	bouwjaar?: number
	prijs?: number;
	brandstof?: 'benzine' | 'diesel' | 'elektrisch' | 'hybride';
	fotos: number[] | { id: number; directus_files_id: DirectusFile }[];

	motor_inhoud: string;

	kleur: string;
	km_stand: number;
	teksten: { titel: string; tekst: string }[];
	date_created: "datetime";
	user_created: "datetime";
};

type Schema = {
	global: Global;
	voorraad: Voorraad[];
};

const directus = createDirectus<Schema>(
	"http://directus.49.13.165.246.sslip.io",
)
	.with(rest())
	.with(staticToken("g2Y2jzDpqZZvGxkC5ud-Bvwn_xJzmCFr"));

export default directus;

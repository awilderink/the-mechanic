import {
  type DirectusFile,
  createDirectus,
  rest,
  staticToken,
} from "@directus/sdk";
import { DIRECTUS_URL, DIRECTUS_TOKEN } from "astro:env/server";

interface Global {
  title: string;
  description: string;
}

interface Merk {
  id: string;
  naam: string;
}

interface Foto {
  id: number;
  directus_files_id: DirectusFile;
}

interface Voorraad {
  id: string;
  status: string;
  slug: string;
  model: string;
  verkocht: boolean;
  highlight?: string;
  bouwjaar?: number;
  prijs?: number;
  brandstof?: "benzine" | "diesel" | "elektrisch" | "hybride";
  motor_inhoud: string;
  kleur: string;
  km_stand: number;
  teksten: { titel: string; tekst: string }[];
  date_created: "datetime";
  user_created: "datetime";
  merk: number | Merk;
  fotos: number[] | Foto[];
}

interface Schema {
  global: Global;
  voorraad: Voorraad[];
  merken: Merk[];
}

const directus = createDirectus<Schema>(DIRECTUS_URL)
  .with(rest())
  .with(staticToken(DIRECTUS_TOKEN));

export default directus;

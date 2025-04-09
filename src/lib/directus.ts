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

export interface Home {
  id: string;
  banner: DirectusFile;
  banner_tekst: string;
  cta_1_url: string;
  cta_1_tekst: string;
  cta_2_url: string;
  cta_2_tekst: string;
}

export interface Merk {
  id: string;
  naam: string;
}

export interface Foto {
  id: number;
  directus_files_id: DirectusFile;
}

export interface Voorraad {
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
  home: Home;
  voorraad: Voorraad[];
  merken: Merk[];
  directus_files: DirectusFile[];
}

const directus = createDirectus<Schema>(DIRECTUS_URL)
  .with(rest())
  .with(staticToken(DIRECTUS_TOKEN));

export default directus;

import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

const client = createClient({
  projectId: "bwy8myjl", // Replace with your project ID
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-01-01",
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export interface SanityGlobal {
  _id: string;
  title: string;
  description?: string;
}

export interface SanityHome {
  _id: string;
  banner?: {
    asset: {
      _ref: string;
    };
    alt?: string;
  };
  bannerVideo?: {
    asset: {
      _ref: string;
    };
  };
  bannerTekst?: string;
  cta1Tekst?: string;
  cta1Url?: string;
  cta2Tekst?: string;
  cta2Url?: string;
}

export interface SanityMerk {
  _id: string;
  naam: string;
  logo?: {
    asset: {
      _ref: string;
    };
    alt?: string;
  };
}

export interface SanityDienst {
  _id: string;
  titel: string;
  slug: {
    current: string;
  };
  icoon?: {
    asset: {
      _ref: string;
    };
    alt?: string;
  };
  opsomming?: Array<{
    punt: string;
  }>;
}

export interface SanityReview {
  _id: string;
  naam: string;
  body: string;
  waardering: number;
}

export interface SanityVoorraad {
  _id: string;
  titel: string;
  slug: {
    current: string;
  };
  merk?: SanityMerk;
  prijs?: number;
  bouwjaar?: number;
  kilometerstand?: number;
  brandstof?: string;
  transmissie?: string;
  verkocht?: boolean;
  uitgelicht?: boolean;
  fotos?: Array<{
    asset: {
      _ref: string;
    };
    alt?: string;
  }>;
  beschrijving?: any[];
  specificaties?: Array<{
    label: string;
    waarde: string;
  }>;
}

export interface SanityTeamMember {
  _id: string;
  naam: string;
  functie: string;
  foto?: {
    asset: {
      _ref: string;
    };
    alt?: string;
  };
  beschrijving?: any[];
}

export interface SanityOverOns {
  _id: string;
  titel: string;
  subtitel?: string;
  heroAfbeelding?: {
    asset: {
      _ref: string;
    };
    alt?: string;
  };
  introTekst?: any[];
  verhaalTekst?: any[];
  tweedeAfbeelding?: {
    asset: {
      _ref: string;
    };
    alt?: string;
  };
}

export interface SanityPage {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  seo?: {
    title?: string;
    description?: string;
  };
  blocks?: any[];
}

export async function getGlobal(): Promise<SanityGlobal | null> {
  const query = `*[_type == "global"][0]{
    _id,
    title,
    description
  }`;

  return await client.fetch(query);
}

export async function getHome(): Promise<SanityHome | null> {
  const query = `*[_type == "home"][0]{
    _id,
    banner,
    bannerVideo,
    bannerTekst,
    cta1Tekst,
    cta1Url,
    cta2Tekst,
    cta2Url
  }`;

  return await client.fetch(query);
}

export async function getDiensten(): Promise<SanityDienst[]> {
  const query = `*[_type == "dienst"]{
    _id,
    titel,
    slug,
    icoon,
    opsomming
  }`;

  return await client.fetch(query);
}

export async function getReviews(): Promise<SanityReview[]> {
  const query = `*[_type == "review"]{
    _id,
    naam,
    body,
    waardering
  }`;

  return await client.fetch(query);
}

export async function getMerken(): Promise<SanityMerk[]> {
  const query = `*[_type == "merk"]{
    _id,
    naam,
    logo
  }`;

  return await client.fetch(query);
}

export async function getVoorraad(filters?: {
  merk?: string;
  verkocht?: boolean;
  uitgelicht?: boolean;
}): Promise<SanityVoorraad[]> {
  let filterString = "";

  if (filters) {
    const conditions = [];
    if (filters.merk) conditions.push(`merk->naam == "${filters.merk}"`);
    if (filters.verkocht !== undefined)
      conditions.push(`verkocht == ${filters.verkocht}`);
    if (filters.uitgelicht !== undefined)
      conditions.push(`uitgelicht == ${filters.uitgelicht}`);

    if (conditions.length > 0) {
      filterString = ` && (${conditions.join(" && ")})`;
    }
  }

  const query = `*[_type == "voorraad"${filterString}]{
    _id,
    titel,
    slug,
    merk->{
      _id,
      naam,
      logo
    },
    prijs,
    bouwjaar,
    kilometerstand,
    brandstof,
    transmissie,
    verkocht,
    uitgelicht,
    fotos,
    beschrijving,
    specificaties
  }`;

  return await client.fetch(query);
}

export async function getVoorraadItem(
  slug: string,
): Promise<SanityVoorraad | null> {
  const query = `*[_type == "voorraad" && slug.current == $slug][0]{
    _id,
    titel,
    slug,
    merk->{
      _id,
      naam,
      logo
    },
    prijs,
    bouwjaar,
    kilometerstand,
    brandstof,
    transmissie,
    verkocht,
    uitgelicht,
    fotos,
    beschrijving,
    specificaties
  }`;

  return await client.fetch(query, { slug });
}

export async function getOverOns(): Promise<SanityOverOns | null> {
  const query = `*[_type == "overOns"][0]{
    _id,
    titel,
    subtitel,
    heroAfbeelding,
    introTekst,
    verhaalTekst,
    tweedeAfbeelding
  }`;

  return await client.fetch(query);
}

export async function getPage(slug: string): Promise<SanityPage | null> {
  const query = `*[_type == "page" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    seo,
    blocks
  }`;

  return await client.fetch(query, { slug });
}

export async function getAllPages(): Promise<SanityPage[]> {
  const query = `*[_type == "page"]{
    _id,
    title,
    slug,
    seo
  }`;

  return await client.fetch(query);
}

export async function getTeamMembers(): Promise<SanityTeamMember[]> {
  const query = `*[_type == "teamMember"] | order(_createdAt asc) {
    _id,
    naam,
    functie,
    foto,
    beschrijving
  }`;

  return await client.fetch(query);
}

export default client;

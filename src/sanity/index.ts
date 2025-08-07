import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { defineQuery } from 'groq';

const client = createClient({
	projectId: 'bwy8myjl',
	dataset: 'production',
	useCdn: true,
	apiVersion: '2024-01-01',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => builder.image(source);

export const getGlobal = async () => {
	const globalQuery = defineQuery(`*[_type == "global"][0]{
    _id,
    title,
    description
  }`);

	return await client.fetch(globalQuery);
};

export const getHome = async () => {
	const homeQuery = defineQuery(`*[_type == "home"][0]{
    _id,
    blocks
  }`);

	return await client.fetch(homeQuery);
};

export const getMerken = async () => {
	const merkenQuery = defineQuery(`*[_type == "merk"]{
    _id,
    naam,
    logo
  }`);

	return await client.fetch(merkenQuery);
};

export const getVoorraad = async (filters?: {
	merk?: string;
	verkocht?: boolean;
	uitgelicht?: boolean;
}) => {
	const voorraadQuery = defineQuery(`*[_type == "voorraad" 
		&& (!defined($merk) || merk->naam == $merk)
		&& (!defined($verkocht) || verkocht == $verkocht)
		&& (!defined($uitgelicht) || uitgelicht == $uitgelicht)
	]{
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
  }`);

	return await client.fetch(voorraadQuery, {
		merk: filters?.merk || null,
		verkocht: filters?.verkocht ?? null,
		uitgelicht: filters?.uitgelicht ?? null,
	});
};

export const getVoorraadItem = async (slug: string) => {
	const voorraadItemQuery =
		defineQuery(`*[_type == "voorraad" && slug.current == $slug][0]{
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
  }`);

	return await client.fetch(voorraadItemQuery, { slug });
};

export const getPage = async (slug: string) => {
	const pageQuery = defineQuery(`*[_type == "page" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    seo,
    blocks
  }`);

	return await client.fetch(pageQuery, { slug });
};

export const getAllPages = async () => {
	const allPagesQuery = defineQuery(`*[_type == "page"]{
    _id,
    title,
    slug,
    seo
  }`);

	return await client.fetch(allPagesQuery);
};

export const getTeamMembers = async () => {
	const teamMembersQuery =
		defineQuery(`*[_type == "teamMember"] | order(_createdAt asc) {
    _id,
    naam,
    functie,
    foto,
    beschrijving
  }`);

	return await client.fetch(teamMembersQuery);
};

export default client;

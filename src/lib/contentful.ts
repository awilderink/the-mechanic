import contentful, { type EntryFieldTypes } from "contentful";

export interface BlogPost {
	contentTypeId: "blog_post";
	fields: {
		title: EntryFieldTypes.Text;
		image: EntryFieldTypes.AssetLink;
		content: EntryFieldTypes.RichText;
	};
}

export interface Voorraad {
  contentTypeId: "voorraad";
}

export const contentfulClient = contentful.createClient({
	space: import.meta.env.CONTENTFUL_SPACE_ID,
	accessToken: import.meta.env.DEV
		? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
		: import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
	host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});

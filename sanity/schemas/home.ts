import { defineType } from "sanity";

export default defineType({
  name: "home",
  title: "Homepage",
  type: "document",
  fields: [
    {
      name: "banner",
      title: "Banner Media",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "bannerVideo",
      title: "Banner Video (Optional)",
      type: "file",
      options: {
        accept: "video/*",
      },
    },
    {
      name: "bannerTekst",
      title: "Banner Text",
      type: "text",
    },
    {
      name: "cta1Tekst",
      title: "CTA 1 Text",
      type: "string",
    },
    {
      name: "cta1Url",
      title: "CTA 1 URL",
      type: "url",
    },
    {
      name: "cta2Tekst",
      title: "CTA 2 Text",
      type: "string",
    },
    {
      name: "cta2Url",
      title: "CTA 2 URL",
      type: "url",
    },
  ],
  preview: {
    select: {
      title: "bannerTekst",
      media: "banner",
    },
    prepare(selection) {
      return {
        title: "Homepage",
        subtitle: selection.title,
      };
    },
  },
});

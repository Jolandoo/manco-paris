import { defineField, defineType } from "sanity";

export const service = defineType({
  name: "service",
  title: "Service (pilier SGP)",
  type: "document",
  fields: [
    defineField({
      name: "glyph",
      title: "Glyphe (icône)",
      type: "string",
    }),
    defineField({
      name: "titleFr",
      title: "Titre (FR)",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "titleEn",
      title: "Titre (EN)",
      type: "string",
    }),
    defineField({
      name: "descFr",
      title: "Description (FR)",
      type: "text",
    }),
    defineField({
      name: "descEn",
      title: "Description (EN)",
      type: "text",
    }),
    defineField({
      name: "order",
      title: "Ordre d'affichage",
      type: "number",
    }),
  ],
  orderings: [{ title: "Ordre", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "titleFr", subtitle: "glyph" },
  },
});

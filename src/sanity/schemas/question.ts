import { defineField, defineType } from "sanity";

export const question = defineType({
  name: "question",
  title: "Question",
  type: "document",
  fields: [
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
      name: "category",
      title: "Catégorie",
      type: "string",
    }),
    defineField({
      name: "bodyFr",
      title: "Contenu (FR)",
      type: "text",
    }),
    defineField({
      name: "bodyEn",
      title: "Contenu (EN)",
      type: "text",
    }),
    defineField({
      name: "glyph",
      title: "Glyphe (icône)",
      type: "string",
    }),
    defineField({
      name: "contactName",
      title: "Nom du contact",
      type: "string",
    }),
    defineField({
      name: "contactTitle",
      title: "Titre du contact",
      type: "string",
    }),
    defineField({
      name: "contactEmail",
      title: "Email du contact",
      type: "string",
    }),
    defineField({
      name: "contactPhone",
      title: "Téléphone du contact",
      type: "string",
    }),
    defineField({
      name: "order",
      title: "Ordre d'affichage",
      type: "number",
    }),
  ],
  orderings: [{ title: "Ordre", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "titleFr", subtitle: "category" },
  },
});

import { defineField, defineType } from "sanity";

export const persona = defineType({
  name: "persona",
  title: "Persona",
  type: "document",
  fields: [
    defineField({
      name: "num",
      title: "Numéro",
      type: "string",
      validation: (r) => r.required(),
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
      name: "subtitleFr",
      title: "Sous-titre (FR)",
      type: "text",
    }),
    defineField({
      name: "subtitleEn",
      title: "Sous-titre (EN)",
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
    select: { title: "titleFr", subtitle: "num" },
  },
});

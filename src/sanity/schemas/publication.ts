import { defineField, defineType } from "sanity";

export const publication = defineType({
  name: "publication",
  title: "Publication",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titre",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "category",
      title: "Catégorie",
      type: "string",
      options: {
        list: [
          { title: "Article", value: "article" },
          { title: "Interview", value: "interview" },
          { title: "Webinaire", value: "webinaire" },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Date de publication",
      type: "datetime",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "locale",
      title: "Langue",
      type: "string",
      options: {
        list: [
          { title: "Français", value: "fr" },
          { title: "English", value: "en" },
        ],
      },
      initialValue: "fr",
    }),
    defineField({
      name: "thumbnail",
      title: "Vignette",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "body",
      title: "Contenu",
      type: "array",
      of: [
        { type: "block" },
        { type: "image", options: { hotspot: true } },
      ],
    }),
    defineField({
      name: "videoUrl",
      title: "URL vidéo (optionnel)",
      type: "url",
    }),
  ],
  preview: {
    select: { title: "title", category: "category", date: "publishedAt" },
    prepare({ title, category, date }) {
      return {
        title,
        subtitle: `${category} — ${date ? new Date(date).toLocaleDateString("fr-FR") : ""}`,
      };
    },
  },
});

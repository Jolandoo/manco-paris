import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Paramètres du site",
  type: "document",
  fields: [
    defineField({ name: "companyName", title: "Nom de la société", type: "string" }),
    defineField({ name: "address", title: "Adresse", type: "string" }),
    defineField({ name: "phone", title: "Téléphone", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "amfNumber", title: "Numéro AMF", type: "string" }),
    defineField({
      name: "socialLinks",
      title: "Réseaux sociaux",
      type: "object",
      fields: [
        defineField({ name: "linkedin", title: "LinkedIn", type: "url" }),
        defineField({ name: "twitter", title: "Twitter / X", type: "url" }),
      ],
    }),
  ],
});

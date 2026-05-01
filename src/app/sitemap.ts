import type { MetadataRoute } from "next";
import { getPublicationSlugs } from "@/sanity/queries";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://manco.paris";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = [
    "",
    "/publications",
    "/mentions-legales",
    "/informations-reglementaires",
  ];

  const locales = ["fr", "en"];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of staticPages) {
      entries.push({
        url: `${BASE_URL}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === "" ? "weekly" : "monthly",
        priority: page === "" ? 1 : 0.8,
      });
    }
  }

  const slugs = await getPublicationSlugs();
  for (const { slug, locale } of slugs) {
    entries.push({
      url: `${BASE_URL}/${locale}/publications/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  return entries;
}

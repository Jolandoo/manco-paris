import { client } from "./client";
import { projectId } from "./env";

export interface PublicationResult {
  _id: string;
  title: string;
  slug: string;
  category: "article" | "interview" | "webinaire";
  publishedAt: string;
  locale: string;
  thumbnailUrl: string | null;
  videoUrl: string | null;
}

import type { PortableTextBlock } from "@portabletext/types";

export interface PublicationDetailResult extends PublicationResult {
  body: PortableTextBlock[];
}

const isConfigured = !projectId.startsWith("your-");

export async function getPublications(locale: string): Promise<PublicationResult[]> {
  if (!isConfigured) return [];
  return client.fetch(
    `*[_type == "publication" && locale == $locale] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      category,
      publishedAt,
      locale,
      "thumbnailUrl": thumbnail.asset->url,
      videoUrl
    }`,
    { locale },
  );
}

export async function getPublication(slug: string, locale: string): Promise<PublicationDetailResult | null> {
  if (!isConfigured) return null;
  return client.fetch(
    `*[_type == "publication" && slug.current == $slug && locale == $locale][0] {
      _id,
      title,
      "slug": slug.current,
      category,
      publishedAt,
      locale,
      "thumbnailUrl": thumbnail.asset->url,
      videoUrl,
      body
    }`,
    { slug, locale },
  );
}

export async function getPublicationSlugs(): Promise<{ slug: string; locale: string }[]> {
  if (!isConfigured) return [];
  return client.fetch(
    `*[_type == "publication"] { "slug": slug.current, locale }`,
  );
}

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

export interface QuestionResult {
  _id: string;
  titleFr: string;
  titleEn: string;
  category: string;
  bodyFr: string;
  bodyEn: string;
  glyph: string;
  contactName: string;
  contactTitle: string;
  contactEmail: string;
  contactPhone: string;
  order: number;
}

export interface PersonaResult {
  _id: string;
  num: string;
  titleFr: string;
  titleEn: string;
  subtitleFr: string;
  subtitleEn: string;
  order: number;
}

export interface ServiceResult {
  _id: string;
  glyph: string;
  titleFr: string;
  titleEn: string;
  descFr: string;
  descEn: string;
  order: number;
}

export interface TeamMemberResult {
  _id: string;
  name: string;
  role: string;
  roleEn: string;
  photoUrl: string | null;
  bio: string;
  bioEn: string;
  email: string;
  phone: string | null;
  phone2: string | null;
  linkedin: string | null;
  order: number;
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

export async function getTeamMembers(): Promise<TeamMemberResult[]> {
  if (!isConfigured) return [];
  return client.fetch(
    `*[_type == "teamMember"] | order(order asc) {
      _id,
      name,
      role,
      roleEn,
      "photoUrl": photo.asset->url,
      bio,
      bioEn,
      email,
      phone,
      phone2,
      linkedin,
      order
    }`,
  );
}

export async function getQuestions(): Promise<QuestionResult[]> {
  if (!isConfigured) return [];
  return client.fetch(
    `*[_type == "question"] | order(order asc) {
      _id,
      titleFr,
      titleEn,
      category,
      bodyFr,
      bodyEn,
      glyph,
      contactName,
      contactTitle,
      contactEmail,
      contactPhone,
      order
    }`,
  );
}

export async function getPersonas(): Promise<PersonaResult[]> {
  if (!isConfigured) return [];
  return client.fetch(
    `*[_type == "persona"] | order(order asc) {
      _id,
      num,
      titleFr,
      titleEn,
      subtitleFr,
      subtitleEn,
      order
    }`,
  );
}

export async function getServices(): Promise<ServiceResult[]> {
  if (!isConfigured) return [];
  return client.fetch(
    `*[_type == "service"] | order(order asc) {
      _id,
      glyph,
      titleFr,
      titleEn,
      descFr,
      descEn,
      order
    }`,
  );
}

import type { Locale } from "./i18n";

export const site = {
  url: "https://www.secretdigging.club",
  discordInvite: "https://discord.gg/bxeV3W9zb9",
  discordServerId: "1508186565493526658",
};

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "list"; items: string[] };

export type WritingKind = "essay" | "working-paper" | "opinion-hc";

type PostTranslation = {
  title: string;
  subtitle: string;
  summary: string;
  tags: string[];
  blocks: ContentBlock[];
};

export type Post = {
  slug: string;
  author: string;
  date: string;
  kind: WritingKind;
  readingMinutes: number;
  translations: Record<Locale, PostTranslation>;
};

export type LocalizedPost = Omit<Post, "translations"> & PostTranslation;

// Add publications here only when the English, Japanese, and Korean versions
// are all ready. The README contains a copyable example entry.
export const posts: Post[] = [];

type PersonTranslation = {
  role: string;
  bio: string;
  interests: string[];
};

export type Person = {
  slug: string;
  name: string;
  links: { label: string; href: string }[];
  translations: Record<Locale, PersonTranslation>;
};

export type LocalizedPerson = Omit<Person, "translations"> & PersonTranslation;

// Profiles are opt-in. Add a person here only when their public profile is ready.
export const people: Person[] = [];

export function getPosts(locale: Locale): LocalizedPost[] {
  return posts.map(({ translations, ...post }) => ({ ...post, ...translations[locale] }));
}

export function getPost(slug: string, locale: Locale) {
  const post = posts.find((item) => item.slug === slug);
  if (!post) return undefined;
  const { translations, ...shared } = post;
  return { ...shared, ...translations[locale] };
}

export function getPeople(locale: Locale): LocalizedPerson[] {
  return people.map(({ translations, ...person }) => ({ ...person, ...translations[locale] }));
}

export function getPerson(slug: string, locale: Locale) {
  const person = people.find((item) => item.slug === slug);
  if (!person) return undefined;
  const { translations, ...shared } = person;
  return { ...shared, ...translations[locale] };
}

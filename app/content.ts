import type { Locale } from "./i18n";
import { artificialUtopiaInRuins } from "./publication-artificial-utopia";

export const site = {
  url: "https://www.secretdigging.club",
  discordInvite: "https://discord.gg/bxeV3W9zb9",
  discordServerId: "1508186565493526658",
};

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string; originalTitle?: string }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "list"; items: string[] }
  | { type: "notice"; lines: string[] };

export type WritingKind = "essay" | "working-paper" | "opinion-hc" | "translation";

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
  translations: Partial<Record<Locale, PostTranslation>>;
};

export type LocalizedPost = Omit<Post, "translations"> & PostTranslation;

// A publication can support all languages or a selected subset. It appears only
// in the language editions included in its translations object.
export const posts: Post[] = [artificialUtopiaInRuins];

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
export const people: Person[] = [
  {
    slug: "wrell",
    name: "wrell",
    links: [],
    translations: {
      en: { role: "Owner / site maintainer", bio: "", interests: [] },
      ja: { role: "オーナー / サイト管理者", bio: "", interests: [] },
      ko: { role: "소유자 / 사이트 관리자", bio: "", interests: [] },
    },
  },
];

export function getPosts(locale: Locale): LocalizedPost[] {
  return posts.flatMap(({ translations, ...post }) => {
    const translation = translations[locale];
    return translation ? [{ ...post, ...translation }] : [];
  });
}

export function getPost(slug: string, locale: Locale) {
  const post = posts.find((item) => item.slug === slug);
  if (!post) return undefined;
  const translation = post.translations[locale];
  if (!translation) return undefined;
  return {
    slug: post.slug,
    author: post.author,
    date: post.date,
    kind: post.kind,
    readingMinutes: post.readingMinutes,
    ...translation,
  };
}

export function getPostLocales(slug: string): Locale[] {
  const post = posts.find((item) => item.slug === slug);
  if (!post) return [];
  return (Object.keys(post.translations) as Locale[]).filter((locale) => post.translations[locale]);
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

import { siteTextEn } from "./site-text.en";
import { siteTextJa } from "./site-text.ja";
import { siteTextKo } from "./site-text.ko";

export const locales = ["en", "ja", "ko"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const localeNames: Record<Locale, string> = {
  en: "English",
  ja: "日本語",
  ko: "한국어",
};

export const htmlLocales: Record<Locale, string> = {
  en: "en",
  ja: "ja",
  ko: "ko",
};

export const messages = {
  en: siteTextEn,
  ja: siteTextJa,
  ko: siteTextKo,
} as const;

export function localePath(locale: Locale, path = "") {
  return `/${locale}${path}`;
}

export function formatDate(date: string, locale: Locale) {
  const language = locale === "ja" ? "ja-JP" : locale === "ko" ? "ko-KR" : "en-GB";
  return new Intl.DateTimeFormat(language, { year: "numeric", month: "short", day: "2-digit", timeZone: "UTC" }).format(new Date(`${date}T00:00:00Z`));
}

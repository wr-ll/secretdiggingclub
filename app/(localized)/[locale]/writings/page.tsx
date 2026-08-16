import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPosts } from "../../../content";
import { isLocale, locales, messages } from "../../../i18n";
import { WritingsSearch } from "../../../writings-search";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return { title: messages[locale].writings.title, description: messages[locale].writings.intro };
}

export default async function WritingsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = messages[locale].writings;

  return (
    <main className="wrap page-shell">
      <header className="page-intro"><h1 className="page-title">{copy.title}</h1><p className="page-intro-text">{copy.intro}</p></header>
      {getPosts(locale).length ? <WritingsSearch posts={getPosts(locale)} locale={locale} /> : <p className="empty-state">{copy.empty}</p>}
    </main>
  );
}

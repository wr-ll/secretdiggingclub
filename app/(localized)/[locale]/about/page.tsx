import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales, messages } from "../../../i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params; return isLocale(locale) ? { title: messages[locale].about.title, description: messages[locale].about.intro } : {};
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params; if (!isLocale(locale)) notFound(); const copy = messages[locale].about;
  return <main className="wrap page-shell"><header className="page-intro"><h1 className="page-title">{copy.title}</h1><p className="page-intro-text">{copy.intro}</p></header><div className="simple-page-copy"><article className="prose"><p>{copy.p1}</p><h2>{copy.serverTitle}</h2><p>{copy.server1}</p><p>{copy.server2}</p><h2>{copy.editorialTitle}</h2><p>{copy.editorial}</p></article></div></main>;
}

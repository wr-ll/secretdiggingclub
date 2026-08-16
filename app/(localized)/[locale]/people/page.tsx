import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPeople } from "../../../content";
import { isLocale, localePath, locales, messages } from "../../../i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return isLocale(locale) ? { title: messages[locale].people.title, description: messages[locale].people.intro } : {};
}

export default async function PeoplePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = messages[locale].people;
  const people = getPeople(locale);
  return (
    <main className="wrap page-shell">
      <header className="page-intro"><h1 className="page-title">{copy.title}</h1><p className="page-intro-text">{copy.intro}</p></header>
      {people.length ? <div className="profile-list">{people.map((person) => <article key={person.slug}><h2><a href={localePath(locale, `/people/${person.slug}`)}>{person.name}</a></h2><span className="profile-role">{person.role}</span><p className="profile-bio">{person.bio}</p></article>)}</div> : <p className="empty-state">{copy.empty}</p>}
    </main>
  );
}

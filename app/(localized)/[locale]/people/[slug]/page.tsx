import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PostList } from "../../../../components";
import { getPerson, getPosts, people } from "../../../../content";
import { isLocale, localePath, locales, messages } from "../../../../i18n";

export const dynamicParams = false;
export function generateStaticParams() { return locales.flatMap((locale) => people.map((person) => ({ locale, slug: person.slug }))); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const person = getPerson(slug, locale);
  return person ? { title: person.name, description: person.bio, alternates: { canonical: localePath(locale, `/people/${slug}`), languages: { en: `/en/people/${slug}`, ja: `/ja/people/${slug}`, ko: `/ko/people/${slug}` } } } : {};
}

export default async function ProfilePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const person = getPerson(slug, locale);
  if (!person) notFound();
  const copy = messages[locale].people;
  const authoredPosts = getPosts(locale).filter((post) => post.author === person.slug);

  return (
    <main className="wrap page-shell">
      <header className="profile-header"><h1 className="profile-name">{person.name}</h1><div className="profile-summary"><span className="profile-role">{person.role}</span><p>{person.bio}</p></div></header>
      <div className="profile-body">
        <dl className="profile-facts">
          <dt>{copy.interests}</dt><dd><ul>{person.interests.map((interest) => <li key={interest}>{interest}</li>)}</ul></dd>
          <dt>{copy.elsewhere}</dt><dd>{person.links.length ? person.links.map((link) => <p key={link.href}><a href={link.href} rel="me">{link.label}</a></p>) : <span>{copy.noLinks}</span>}</dd>
          <dt>{copy.policy}</dt><dd>{copy.policyText}</dd>
        </dl>
        <section aria-labelledby="profile-publications"><div className="section-heading"><h2 id="profile-publications">{copy.publications}</h2></div>{authoredPosts.length ? <PostList posts={authoredPosts} locale={locale} /> : <p>{copy.noPublications}</p>}<p className="back-link"><a href={localePath(locale, "/people")}>← {copy.allPeople}</a></p></section>
      </div>
    </main>
  );
}

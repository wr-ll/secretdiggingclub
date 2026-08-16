import { notFound } from "next/navigation";
import { PostList, SectionHeading } from "../../components";
import { getPeople, getPosts } from "../../content";
import { isLocale, localePath, messages } from "../../i18n";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: value } = await params;
  if (!isLocale(value)) notFound();
  const copy = messages[value];
  const posts = getPosts(value);
  const people = getPeople(value);

  return (
    <main>
      <section className="hero wrap" aria-labelledby="home-title">
        <div className="hero-shape" aria-hidden="true" />
        <h1 id="home-title">{copy.brandName}</h1>
        <p>{copy.description}</p>
        <div className="hero-links">
          <a className="button-link" href={localePath(value, "/discord")}>{copy.nav.discord}</a>
          <a href={localePath(value, "/writings")}>{copy.home.read}</a>
        </div>
      </section>

      <section className="wrap section-space" aria-labelledby="recent-heading">
        <SectionHeading id="recent-heading" title={copy.home.recent} link={{ href: localePath(value, "/writings"), label: copy.home.viewAll }} />
        {posts.length ? <PostList posts={posts.slice(0, 3)} locale={value} /> : <p className="empty-state">{copy.home.noWritings}</p>}
      </section>

      <section className="wrap simple-columns section-space" aria-label={copy.home.club}>
        <div>
          <h2>{copy.home.club}</h2>
          <p>{copy.home.clubText}</p>
          <p>{copy.home.privacy}</p>
          <a href={localePath(value, "/about")}>{copy.home.about}</a>
        </div>
        <div>
          <h2>{copy.home.people}</h2>
          {people.length ? <ul className="people-preview">
            {people.map((person) => (
              <li key={person.slug}><a href={localePath(value, `/people/${person.slug}`)}><span>{person.name}</span><span>{person.role}</span></a></li>
            ))}
          </ul> : <p className="empty-state">{copy.home.noPeople}</p>}
          <a href={localePath(value, "/people")}>{copy.home.allProfiles}</a>
        </div>
      </section>

      <section className="join-block">
        <div className="wrap">
          <h2>{copy.home.join}</h2>
          <p>{copy.home.joinText}</p>
          <a className="button-link" href={localePath(value, "/discord")}>{copy.home.serverInfo}</a>
        </div>
      </section>
    </main>
  );
}

import type { LocalizedPost } from "./content";
import { formatDate, localePath, messages, type Locale } from "./i18n";

export function SectionHeading({
  id,
  title,
  link,
}: {
  id: string;
  title: string;
  link?: { href: string; label: string };
}) {
  return (
    <div className="section-heading">
      <h2 id={id}>{title}</h2>
      {link ? <a href={link.href}>{link.label}</a> : null}
    </div>
  );
}

export function PostList({ posts, locale }: { posts: LocalizedPost[]; locale: Locale }) {
  const copy = messages[locale];
  return (
    <ul className="post-list">
      {posts.map((post) => (
        <li key={post.slug}>
          <a href={localePath(locale, `/writings/${post.slug}`)}>
            <span className="post-list-title">
              <strong>{post.title}</strong>
              <span>{post.summary}</span>
            </span>
            <span className="post-list-meta">
              {copy.kinds[post.kind]} · {formatDate(post.date, locale)}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

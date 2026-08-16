"use client";

import { useMemo, useState } from "react";
import type { LocalizedPost } from "./content";
import type { Locale } from "./i18n";
import { formatDate, localePath, messages } from "./i18n";

export function WritingsSearch({ posts, locale }: { posts: LocalizedPost[]; locale: Locale }) {
  const [query, setQuery] = useState("");
  const copy = messages[locale];
  const normalizedQuery = query.trim().toLocaleLowerCase(locale);

  const filteredPosts = useMemo(() => {
    if (!normalizedQuery) return posts;
    return posts.filter((post) => {
      const searchable = [post.title, post.summary, post.author, copy.kinds[post.kind], ...post.tags].join(" ").toLocaleLowerCase(locale);
      return searchable.includes(normalizedQuery);
    });
  }, [copy.kinds, locale, normalizedQuery, posts]);

  return (
    <div className="writings-search">
      <label htmlFor="writing-search">{copy.writings.search}</label>
      <input
        id="writing-search"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={copy.writings.placeholder}
        autoComplete="off"
      />
      {filteredPosts.length ? (
        <ul className="post-list">
          {filteredPosts.map((post) => (
            <li key={post.slug}>
              <a href={localePath(locale, `/writings/${post.slug}`)}>
                <span className="post-list-title">
                  <strong>{post.title}</strong>
                  <span>{post.summary}</span>
                </span>
                <span className="post-list-meta">{copy.kinds[post.kind]} · {formatDate(post.date, locale)}</span>
              </a>
            </li>
          ))}
        </ul>
      ) : <p className="search-empty">{copy.writings.noResults}</p>}
    </div>
  );
}

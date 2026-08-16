import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPerson, getPost, getPostLocales, posts } from "../../../../content";
import { formatDate, isLocale, localePath, messages } from "../../../../i18n";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.flatMap((post) => getPostLocales(post.slug).map((locale) => ({ locale, slug: post.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const post = getPost(slug, locale);
  if (!post) return {};
  const availableLocales = getPostLocales(slug);
  const languages = Object.fromEntries(availableLocales.map((item) => [item, localePath(item, `/writings/${slug}`)]));
  return {
    title: post.title, description: post.summary, authors: [{ name: post.author }],
    alternates: { canonical: localePath(locale, `/writings/${slug}`), languages: { ...languages, ...(availableLocales.includes("en") ? { "x-default": localePath("en", `/writings/${slug}`) } : {}) } },
    openGraph: { type: "article", title: post.title, description: post.summary, publishedTime: post.date, authors: [post.author], tags: post.tags },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const post = getPost(slug, locale);
  if (!post) notFound();
  const copy = messages[locale];
  const author = getPerson(post.author, locale);

  return (
    <main>
      <header className="article-header"><div className="wrap">
        <h1 className="article-title">{post.title}</h1><p className="article-subtitle">{post.subtitle}</p>
        <div className="article-details">
          <div><span className="detail-label">{copy.article.writtenBy}</span>{author ? <a href={localePath(locale, `/people/${post.author}`)}>{post.author}</a> : post.author}</div>
          <div><span className="detail-label">{copy.article.published}</span><time dateTime={post.date}>{formatDate(post.date, locale)}</time></div>
          <div><span className="detail-label">{copy.article.format}</span>{copy.kinds[post.kind]}</div>
          <div><span className="detail-label">{copy.article.length}</span>{post.readingMinutes} {copy.article.minutes}</div>
        </div>
      </div></header>
      <div className="wrap article-layout">
        <aside className="article-aside" aria-label={copy.article.tags}><p>{copy.article.tags}</p><ul className="tag-list">{post.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></aside>
        <article className="prose">
          {post.blocks.map((block, index) => {
            if (block.type === "heading") return <div className="article-section-heading" key={index}><h2>{block.text}</h2>{block.originalTitle ? <p><em>{block.originalTitle}</em></p> : null}</div>;
            if (block.type === "quote") return <blockquote key={index}><p>{block.text}</p>{block.attribution ? <cite>{block.attribution}</cite> : null}</blockquote>;
            if (block.type === "list") return <ul key={index}>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>;
            if (block.type === "notice") return <aside className="translation-notice" key={index}>{block.lines.map((line, lineIndex) => lineIndex === 0 ? <strong key={line}>{line}</strong> : <p key={line}>{line}</p>)}</aside>;
            return <p key={index}>{block.text}</p>;
          })}
        </article>
      </div>
    </main>
  );
}

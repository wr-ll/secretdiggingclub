import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { site } from "../../content";
import { LanguageSwitcher } from "../../language-client";
import { htmlLocales, isLocale, localePath, locales, messages } from "../../i18n";
import "../../globals.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: value } = await params;
  if (!isLocale(value)) return {};
  const copy = messages[value];

  return {
    metadataBase: new URL(site.url),
    title: { default: copy.brandName, template: `%s — ${copy.brandName}` },
    description: copy.description,
    applicationName: copy.brandName,
    authors: [{ name: copy.brandName }],
    keywords: ["doujin circle", "essays", "analysis", "independent research"],
    alternates: {
      canonical: localePath(value),
      languages: { en: "/en", ja: "/ja", ko: "/ko", "x-default": "/en" },
    },
    openGraph: { type: "website", siteName: copy.brandName, title: copy.brandName, description: copy.description, url: localePath(value), locale: value === "ja" ? "ja_JP" : value === "ko" ? "ko_KR" : "en_US" },
    twitter: { card: "summary", title: copy.brandName, description: copy.description },
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  };
}

export default async function LocalizedLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale: value } = await params;
  if (!isLocale(value)) notFound();
  const copy = messages[value];

  return (
    <html lang={htmlLocales[value]}>
      <body>
        <a className="skip-link" href="#main-content">{copy.ui.skipToContent}</a>
        <header className="site-header">
          <div className="wrap header-inner">
            <a className="wordmark" href={localePath(value)} aria-label={copy.ui.homeLabel}>{copy.brandName}</a>
            <div className="header-navs">
              <nav className="primary-nav" aria-label={copy.ui.primaryNavigation}>
                <a href={localePath(value, "/writings")}>{copy.nav.writings}</a>
                <a href={localePath(value, "/people")}>{copy.nav.people}</a>
                <a href={localePath(value, "/about")}>{copy.nav.about}</a>
                <a href={localePath(value, "/discord")}>{copy.nav.discord}</a>
              </nav>
              <LanguageSwitcher locale={value} label={copy.ui.languageNavigation} />
            </div>
          </div>
        </header>
        <div id="main-content">{children}</div>
        <footer className="site-footer">
          <div className="wrap footer-inner">
            <nav aria-label={copy.ui.footerNavigation}>
              <a href={localePath(value, "/writings")}>{copy.nav.writings}</a>
              <a href={localePath(value, "/people")}>{copy.nav.people}</a>
              <a href={localePath(value, "/about")}>{copy.nav.about}</a>
              <a href={localePath(value, "/discord")}>{copy.nav.discord}</a>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}

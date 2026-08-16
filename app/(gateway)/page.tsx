import { LocaleRedirect } from "../language-client";
import { localeNames, locales } from "../i18n";
import { siteTextEn } from "../site-text.en";

export default function GatewayPage() {
  return (
    <main className="language-gateway">
      <LocaleRedirect />
      <div className="hero-shape" aria-hidden="true" />
      <h1>{siteTextEn.brandName}</h1>
      <p>{siteTextEn.gateway.message}</p>
      <nav aria-label={siteTextEn.gateway.navigationLabel}>
        {locales.map((locale) => <a key={locale} href={`/${locale}`} lang={locale}>{localeNames[locale]}</a>)}
      </nav>
    </main>
  );
}

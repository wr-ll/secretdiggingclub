"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { localeNames, locales, type Locale } from "./i18n";

const storageKey = "sdc-language";
const restrictedRoutes: Record<string, Locale[]> = {
  "/writings/artificial-utopia-in-ruins": ["en", "ko"],
};

function detectLocale(): Locale {
  const stored = window.localStorage.getItem(storageKey);
  if (stored && locales.includes(stored as Locale)) return stored as Locale;

  const languages = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const language of languages) {
    const code = language.toLowerCase().split("-")[0];
    if (code === "ja" || code === "ko") return code;
  }

  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  if (timeZone === "Asia/Tokyo") return "ja";
  if (timeZone === "Asia/Seoul") return "ko";
  return "en";
}

export function LocaleRedirect() {
  useEffect(() => {
    window.location.replace(`/${detectLocale()}`);
  }, []);

  return null;
}

export function LanguageSwitcher({ locale, label }: { locale: Locale; label: string }) {
  const path = usePathname().replace(/^\/(en|ja|ko)(?=\/|$)/, "");

  return (
    <nav className="language-switcher" aria-label={label}>
      {locales.map((item) => {
        const targetPath = restrictedRoutes[path] && !restrictedRoutes[path].includes(item) ? "/writings" : path;
        return (
        <a
          key={item}
          href={`/${item}${targetPath}`}
          hrefLang={item}
          lang={item}
          aria-current={item === locale ? "page" : undefined}
          onClick={(event) => {
            event.preventDefault();
            window.localStorage.setItem(storageKey, item);
            window.location.assign(`/${item}${targetPath}${window.location.search}${window.location.hash}`);
          }}
        >
          {localeNames[item]}
        </a>
      )})}
    </nav>
  );
}

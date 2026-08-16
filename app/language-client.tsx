"use client";

import { useEffect } from "react";
import { localeNames, locales, type Locale } from "./i18n";

const storageKey = "sdc-language";

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
  return (
    <nav className="language-switcher" aria-label={label}>
      {locales.map((item) => (
        <a
          key={item}
          href={`/${item}`}
          hrefLang={item}
          lang={item}
          aria-current={item === locale ? "page" : undefined}
          onClick={(event) => {
            event.preventDefault();
            window.localStorage.setItem(storageKey, item);
            const path = window.location.pathname.replace(/^\/(en|ja|ko)(?=\/|$)/, "");
            window.location.assign(`/${item}${path}${window.location.search}${window.location.hash}`);
          }}
        >
          {localeNames[item]}
        </a>
      ))}
    </nav>
  );
}

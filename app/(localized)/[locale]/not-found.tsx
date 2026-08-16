"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isLocale, localePath, messages } from "../../i18n";

export default function NotFound() {
  const segment = usePathname().split("/")[1];
  const locale = isLocale(segment) ? segment : "en";
  const copy = messages[locale];
  return <main className="not-found wrap"><div><h1>404</h1><p>{copy.notFound.message}</p><Link href={localePath(locale)}>{copy.brandName}</Link></div></main>;
}

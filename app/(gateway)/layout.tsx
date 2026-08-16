import type { Metadata } from "next";
import "../globals.css";
import { site } from "../content";
import { siteTextEn } from "../site-text.en";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: siteTextEn.brandName,
  description: siteTextEn.gateway.metadataDescription,
  robots: { index: false, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function GatewayLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}

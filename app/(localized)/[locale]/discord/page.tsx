import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { site } from "../../../content";
import { isLocale, locales, messages } from "../../../i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params; return isLocale(locale) ? { title: messages[locale].discord.title, description: messages[locale].discord.intro } : {};
}

export default async function DiscordPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params; if (!isLocale(locale)) notFound(); const copy = messages[locale].discord;
  const widgetUrl = `https://discord.com/widget?id=${site.discordServerId}&theme=dark`;
  return <main className="wrap page-shell"><header className="page-intro"><h1 className="page-title">{copy.title}</h1><p className="page-intro-text">{copy.intro}</p></header><div className="discord-layout"><section className="discord-panel" aria-label={copy.widget}><iframe title={copy.widget} src={widgetUrl} width="100%" height="320" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" /><p className="widget-help">{copy.widgetHelp}</p></section><section aria-labelledby="server-expectations"><h2 id="server-expectations">{copy.expect}</h2><ul className="principles">{copy.items.map((item) => <li key={item}>{item}</li>)}</ul><p className="discord-action">{site.discordInvite ? <a className="button-link" href={site.discordInvite} target="_blank" rel="noreferrer">{copy.join}</a> : <span className="button-link is-disabled" aria-disabled="true">{copy.forthcoming}</span>}</p></section></div></main>;
}

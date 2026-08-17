import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const outputRoot = new URL("../dist/client/", import.meta.url);

test("exports the main public pages", async () => {
  const expected = [
    "index.html",
    "en.html",
    "ja.html",
    "ko.html",
    "en/writings.html",
    "ja/writings.html",
    "ko/writings.html",
    "en/writings/artificial-utopia-in-ruins.html",
    "ko/writings/artificial-utopia-in-ruins.html",
    "en/writings/artificial-ruins-in-utopia-cyanaqua-analysis.html",
    "ja/writings/artificial-ruins-in-utopia-cyanaqua-analysis.html",
    "ko/writings/artificial-ruins-in-utopia-cyanaqua-analysis.html",
    "en/people/wrell.html",
    "ja/people/wrell.html",
    "ko/people/wrell.html",
    "sitemap.xml",
    "robots.txt",
  ];

  await Promise.all(expected.map((file) => access(new URL(file, outputRoot))));
});

test("renders the circle identity and crawlable content", async () => {
  const html = await readFile(new URL("en.html", outputRoot), "utf8");
  assert.match(html, /<title>Secret Digging Club<\/title>/i);
  assert.match(html, /Secret[\s\S]*Digging[\s\S]*Club/i);
  assert.match(html, /Recent writing/i);
  assert.match(html, /Artificial Utopia in Ruins/i);
  assert.match(html, /Opinion\/HC/i);
  assert.doesNotMatch(html, /The Background Is Not Background|paper-moon|index-zero|club-curator/i);
  assert.doesNotMatch(html, /SDC\s*[–/-]\s*001|A small circle for deep reading|Social links forthcoming|RSS feed/i);
});

test("publishes the album translation only in English and Korean", async () => {
  const [japanese, korean, english, englishArticle, koreanArticle] = await Promise.all([
    readFile(new URL("ja/writings.html", outputRoot), "utf8"),
    readFile(new URL("ko.html", outputRoot), "utf8"),
    readFile(new URL("en/writings.html", outputRoot), "utf8"),
    readFile(new URL("en/writings/artificial-utopia-in-ruins.html", outputRoot), "utf8"),
    readFile(new URL("ko/writings/artificial-utopia-in-ruins.html", outputRoot), "utf8"),
  ]);
  assert.match(japanese, /意見\/解釈/);
  assert.match(japanese, /ユートピアの人工遺跡 - CyanAquaによる分析/);
  assert.doesNotMatch(japanese, /href="\/ja\/writings\/artificial-utopia-in-ruins"/);
  assert.match(korean, /비밀발굴부/);
  assert.match(korean, /의견\/해석/);
  assert.match(korean, /츠쿠미즈/);
  assert.match(korean, /비봉클럽/);
  assert.match(korean, /영장 아라마시쿄 ~ Artificial Utopia in Ruins\./);
  assert.match(english, /Artificial Utopia in Ruins/);
  assert.doesNotMatch(english, /<strong>霊長新益京 ~ Artificial Utopia in Ruins\.<\/strong>/);
  assert.match(englishArticle, /Unofficial fan translation/);
  assert.match(englishArticle, /Team Shanghai Alice \/ ZUN/);
  assert.match(englishArticle, /美しく心地の良い犯罪 — Criminal Ingress/);
  assert.match(koreanArticle, /비공식 팬 번역입니다/);
  assert.match(koreanArticle, /상하이 앨리스 환악단 \/ ZUN/);
  assert.match(koreanArticle, /1\. 아름답고 기분 좋은 범죄/);
  assert.match(koreanArticle, /美しく心地の良い犯罪 — Criminal Ingress/);
  await assert.rejects(access(new URL("ja/writings/artificial-utopia-in-ruins.html", outputRoot)));
});

test("publishes CyanAqua's analysis in all three languages", async () => {
  const [english, japanese, korean] = await Promise.all([
    readFile(new URL("en/writings/artificial-ruins-in-utopia-cyanaqua-analysis.html", outputRoot), "utf8"),
    readFile(new URL("ja/writings/artificial-ruins-in-utopia-cyanaqua-analysis.html", outputRoot), "utf8"),
    readFile(new URL("ko/writings/artificial-ruins-in-utopia-cyanaqua-analysis.html", outputRoot), "utf8"),
  ]);
  assert.match(english, /Artificial Ruins in Utopia - CyanAqua's Analysis/);
  assert.match(english, /An analysis of 霊長新益京 ~ Artificial Utopia in Ruins\./);
  assert.doesNotMatch(english, /worldbuilding, scientism, and portrayal of Renko Usami/);
  assert.match(english, /Science and Scientism/);
  assert.match(english, /<em>Changeability of Strange Dream<\/em>/);
  assert.match(japanese, /ユートピアの人工遺跡 - CyanAquaによる分析/);
  assert.match(japanese, /『霊長新益京 ~ Artificial Utopia in Ruins\.』の分析。/);
  assert.match(japanese, /科学と科学主義/);
  assert.match(korean, /유토피아의 인공 유적 - CyanAqua의 분석/);
  assert.match(korean, /『영장 아라마시쿄 ~ Artificial Utopia in Ruins\.』에 대한 분석\./);
  assert.match(korean, /렌코와 마에리베리는/);
  assert.doesNotMatch(korean, /마리벨/);
});

test("publishes the wrell profile in all languages", async () => {
  const [english, japanese, korean] = await Promise.all([
    readFile(new URL("en/people/wrell.html", outputRoot), "utf8"),
    readFile(new URL("ja/people/wrell.html", outputRoot), "utf8"),
    readFile(new URL("ko/people/wrell.html", outputRoot), "utf8"),
  ]);
  assert.match(english, /Owner \/ site maintainer/);
  assert.match(japanese, /オーナー \/ サイト管理者/);
  assert.match(korean, /소유자 \/ 사이트 관리자/);
  assert.doesNotMatch(english, /Owner and maintainer of the Secret Digging Club website/);
  assert.doesNotMatch(japanese, /Secret Digging Clubウェブサイトのオーナー兼管理者/);
  assert.doesNotMatch(korean, /비밀발굴부 웹사이트의 소유자이자 관리자/);
});

test("includes the permanent Discord invitation", async () => {
  const html = await readFile(new URL("en/discord.html", outputRoot), "utf8");
  assert.match(html, /https:\/\/discord\.gg\/bxeV3W9zb9/);
});

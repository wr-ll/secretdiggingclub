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
  assert.match(html, /No writing has been published yet/i);
  assert.match(html, /Opinion\/HC/i);
  assert.doesNotMatch(html, /The Background Is Not Background|paper-moon|index-zero|club-curator/i);
  assert.doesNotMatch(html, /SDC\s*[–/-]\s*001|A small circle for deep reading|Social links forthcoming|RSS feed/i);
});

test("exports translated production-ready empty states", async () => {
  const [japanese, korean, discord] = await Promise.all([
    readFile(new URL("ja/writings.html", outputRoot), "utf8"),
    readFile(new URL("ko.html", outputRoot), "utf8"),
    readFile(new URL("en/writings.html", outputRoot), "utf8"),
  ]);
  assert.match(japanese, /記事はまだ公開されていません/);
  assert.match(japanese, /意見\/解釈/);
  assert.match(korean, /비밀발굴부/);
  assert.match(korean, /의견\/해석/);
  assert.match(korean, /츠쿠미즈/);
  assert.match(korean, /비봉클럽/);
  assert.match(discord, /No writing has been published yet/);
});

test("includes the permanent Discord invitation", async () => {
  const html = await readFile(new URL("en/discord.html", outputRoot), "utf8");
  assert.match(html, /https:\/\/discord\.gg\/bxeV3W9zb9/);
});

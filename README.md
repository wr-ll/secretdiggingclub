# Secret Digging Club website

A lightweight, multilingual website for Secret Digging Club (비밀발굴부), built as a static site for GitHub Pages.

## Files you will edit most often

- `app/site-text.en.ts` — every English interface and informational line on the site.
- `app/site-text.ja.ts` — the corresponding Japanese wording.
- `app/site-text.ko.ts` — the corresponding Korean wording.
- `app/content.ts` — Discord details, publications, and opt-in public profiles.
- `app/publication-artificial-utopia.ts` — the English and Korean album-story translation.
- `app/publication-artificial-ruins-analysis.ts` — CyanAqua's analysis in English, Japanese, and Korean.
- `app/globals.css` — colours, typography, and layout.
- `public/sitemap.xml` — add each available language URL when publishing a new article or profile.

Edit the text inside quotation marks, but leave property names such as `description`, `home`, and `discord` unchanged. Changes to the English file are not machine-translated; update the Japanese and Korean files with the intended translations before publishing.

## Publications and profiles

Each publication uses one shared slug, author, date, type, and reading time. Its `translations` object determines which language editions include it; omitted languages do not receive a page or listing. Valid writing types are:

- `essay`
- `working-paper`
- `opinion-hc`
- `translation`

Profiles are optional and pseudonymous. Add a person to `people` only when they have agreed to a public profile. A publication can still display an author name when no matching profile exists.

## Local preview

Node.js 22.13 or newer is required.

```bash
npm install
npm run dev
```

## Validation

```bash
npm test
```

The static files are generated in `dist/client/`. That directory, along with dependencies and temporary development files, is ignored by Git and should not be committed.

## GitHub Pages

`.github/workflows/pages.yml` builds and publishes the website whenever `main` is updated. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.

The custom domain is defined in `public/CNAME`. Point its DNS to GitHub Pages only when the repository is ready to go public.

# sadikchow.com

Personal website built with Astro and Markdown, optimized for:

- internship and new-grad search
- project storytelling with measurable outcomes
- lightweight technical writing

## Tech

- Astro
- TypeScript
- Markdown content collections

## Local development (pnpm)

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
pnpm preview
```

## Content editing

- Add projects in `src/content/projects/*.md`
- Add posts in `src/content/notes/*.md`
- Resume placeholder page is at `src/pages/resume.astro`

If removed content still appears in local dev, clear Astro caches and restart:

```bash
rm -rf node_modules/.astro .astro dist
pnpm astro sync
pnpm dev
```

## Cloudflare Pages deployment

Create a new Pages project and connect the GitHub repository.

- Framework preset: `Astro`
- Build command: `pnpm build`
- Build output directory: `dist`
- Install command: `pnpm install --frozen-lockfile`
- Root directory: `/` (default)

Set environment variable only if needed:

- `NODE_VERSION` to match your local Node LTS version.

After first successful deployment, map your custom domain in:

`Cloudflare Dashboard -> Workers & Pages -> your project -> Custom domains`

## Personalization checklist

- Update identity and links in `src/data/site.ts`
- Replace sample project entries in `src/content/projects/`
- Replace sample note entries in `src/content/notes/`
- Publish your resume by updating `src/pages/resume.astro` and adding a file in `public/` when ready
- Optional: replace social image at `public/social-card.svg`

# Shirisha Gujja — Portfolio

Personal portfolio site for Shirisha Gujja, software engineer. Built as a static Next.js site
with no backend, no database, and no environment variables required.

## Tech stack

- [Next.js](https://nextjs.org) (App Router, static export via `output` defaults)
- TypeScript
- Tailwind CSS v4
- [next-themes](https://github.com/pacocoursey/next-themes) for dark/light mode
- [lucide-react](https://lucide.dev) for UI icons (GitHub/LinkedIn marks are hand-rolled SVGs — Lucide v1 dropped brand logos)
- `next/font` (Fraunces, Inter, JetBrains Mono) and `next/og` (dynamic OG image + favicon)

## Local setup

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Development commands

```bash
npm run dev        # local dev server
npm run lint        # ESLint
npx tsc --noEmit    # type-check only
npm run build       # production build (also type-checks)
npm run start        # serve the production build locally
```

## Project structure

```
app/
  layout.tsx          Root layout: fonts, metadata, theme provider
  page.tsx             Assembles all page sections
  globals.css          Design tokens (colors, fonts) and base styles
  opengraph-image.tsx  Dynamic OG/social share image
  icon.tsx / apple-icon.tsx   Dynamic favicon / iOS icon
  sitemap.ts / robots.ts      SEO routes
components/
  sections/            One component per page section (hero, experience, projects, ...)
  case-study.tsx        Renders a single project case study
  architecture-diagram.tsx   Generic SVG diagram renderer driven by data
  site-header.tsx / site-footer.tsx
  theme-toggle.tsx, reveal.tsx, icons.tsx, ...  Small shared UI primitives
lib/
  data.ts               Single source of truth for all site content (résumé- and
                         GitHub-sourced: experience, projects, skills, education)
public/
  resume/Shirisha_Gujja_Resume.pdf
```

## Customization notes

- **All content lives in [`lib/data.ts`](lib/data.ts).** Update experience, project case
  studies, skills, or education there — components read from this file and don't hardcode copy.
- **Résumé PDF** lives at `public/resume/Shirisha_Gujja_Resume.pdf`; the "Resume" buttons link
  to `/resume/Shirisha_Gujja_Resume.pdf`. Replace the file to update it (keep the same filename,
  or update `site.resumeHref` in `lib/data.ts`).
- **Accent color and fonts** are defined in `app/globals.css` (`:root` / `.dark` CSS variables)
  and `app/layout.tsx` (font loading).
- **Architecture diagrams** are generated from plain data (`ArchitectureNode[]` /
  `ArchitectureEdge[]` in `lib/data.ts`) and rendered as SVG by
  `components/architecture-diagram.tsx` — no external diagramming tool or image asset involved.

## Deployment

Deployed on [Vercel](https://vercel.com). Push to a connected Git repository, or use the Vercel
CLI (`vercel` / `vercel --prod`) from this directory. No environment variables are required.

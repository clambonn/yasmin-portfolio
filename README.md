# Yasmin Kasem — Portfolio

Split-path portfolio built with Next.js (App Router), TypeScript, Tailwind CSS v4, and Framer Motion.

## Structure

- `/` — Hero, shared Foundation section, and the animated Quantum / Data Engineering path selector
- `/quantum` — Quantum computing & physics research portfolio
- `/data` — Data Engineering portfolio
- `lib/content.ts` — **single source of truth for all content.** Add a project, skill, credential, or experience entry here by adding an object to the relevant array and tagging it `track: "quantum" | "data" | "shared"` — no component edits needed.
- `components/` — reusable UI: cards, lists, nav, path split, transitions

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel

1. Push this folder to a GitHub repo
2. Import the repo at https://vercel.com/new
3. Framework preset: Next.js (auto-detected) — no extra config needed

## Editing content

Open `lib/content.ts`:
- `projects` — add `{ title, period, track, description, bullets, github?, stack }`
- `skillGroups` — add `{ title, track, items: [] }`
- `experience` — add `{ role, org, period, track, bullets }`
- `credentials` — add `{ title, org, period, track }` (training, schools, workshops)

Set `track` to `"quantum"` to show only on `/quantum`, `"data"` for `/data`, or `"shared"` to appear on both (and, for education/skills, in the homepage Foundation section).

## Palette

- Orange `#E65F2B`
- Navy `#1A365D`
- Cream `#F4EAE1`

Defined as CSS variables / Tailwind tokens in `app/globals.css` (`--color-orange`, `--color-navy`, `--color-cream`, plus supporting tints).

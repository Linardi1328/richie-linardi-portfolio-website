# Richie Linardi Portfolio

Interactive two-sided portfolio for Richie Linardi, showcasing software, AI/data projects, audit experience, professional work, and basketball journey.

## Current Phase

`v0.1 - Foundation`

This phase establishes the repository, local development environment, documentation, and project structure. No production design system or portfolio content has been implemented yet.

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- ESLint
- Prettier
- Vercel deployment target

## Local Development

```bash
npm run dev
```

Open `http://localhost:3000`.

## Validation

Phase 0 exit criteria:

```bash
npm run dev
npm run lint
npm run build
```

Additional foundation checks:

```bash
npm run typecheck
npm run format:check
```

## Project Rules

- Healthy Bite must never appear in the portfolio.
- ProofLab stays hidden until meaningful development begins.
- Project statuses, dates, basketball achievements, and resume content must remain accurate.
- Reusable UI primitives should be created before real page styling begins.
- The professional and basketball sides must share the same design system.
- Meaningful implementation should happen on phase branches and be reviewed through pull requests.

## Planned Structure

```text
public/
  branding/
  portraits/
  projects/
  basketball/

src/
  app/
  components/
  content/
  data/
  lib/
  styles/
  types/

tests/
```

See [ROADMAP.md](./ROADMAP.md) for the phased build plan and [CONTRIBUTING.md](./CONTRIBUTING.md) for development conventions.

# Richie Linardi Portfolio

Interactive two-sided portfolio for Richie Linardi, showcasing software, AI/data projects, audit experience, professional work, and basketball journey.

## Current Phase

`v0.1 - Foundation`

This phase establishes the repository, local development environment, documentation, validation workflow, and project structure. No production design system or portfolio content has been implemented yet.

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- ESLint
- Prettier
- GitHub Actions
- Vercel deployment target

## Runtime

Use Node.js 20 for local development. The repository includes `.nvmrc` so compatible version managers can select the expected major version automatically.

```bash
nvm use
npm ci
```

## Local Development

```bash
npm run dev
```

Open `http://localhost:3000`.

## Validation

Run the complete automated validation suite with:

```bash
npm run validate
```

Phase 0 automated exit criteria:

```text
npm run lint          PASS
npm run typecheck     PASS
npm run format:check  PASS
npm run build         PASS
```

Owner smoke test:

```text
npm run dev           PASS
HTTP page load        PASS
```

The same automated validation runs in GitHub Actions for pull requests and pushes to `main`.

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

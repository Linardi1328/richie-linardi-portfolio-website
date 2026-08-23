# Richie Linardi Portfolio

Interactive two-sided portfolio for Richie Linardi, showcasing software, AI/data projects, audit experience, professional work, and basketball journey.

## Current Phase

`v0.2 - Design System`

This phase establishes the shared visual language for the portfolio: semantic design tokens, typography, layout rhythm, reusable UI primitives, and a temporary style-guide route. Production homepage and basketball page implementation begin in later phases.

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

Use Node.js 24 LTS for local development. The repository includes `.nvmrc` so compatible version managers can select the expected major version automatically.

```bash
nvm use
npm ci
```

## Local Development

```bash
npm run dev
```

Open `http://localhost:3000`.

## Design System Review

The temporary Phase v0.2 review page is available at:

```text
http://localhost:3000/design-system
```

It showcases:

- design principles
- semantic color tokens
- typography classes
- layout and spacing conventions
- buttons, links, badges, surfaces, cards, metrics, and timeline primitives
- professional and basketball context samples
- navigation and interaction state prototypes

## Design Reference Library

Approved implementation mockups and interaction references live under [`docs/design-references/`](./docs/design-references/README.md).

The images in `docs/design-references/current/` are readable development references, not factual source-of-truth and not production assets. Generated copy, statistics, dates, project metrics, market values, tournament details, contact information, and similar claims must be verified before implementation.

Reference numbering stays stable even when a mockup is rejected. Slots `01` (main dual-sided homepage) and `05` (Basketball Achievements + Statistics) are currently intentionally vacant and require new owner-approved replacements. Do not renumber the remaining references.

Implementation must also follow:

- [`INTERFACE_COMPONENT_MAP.md`](./docs/design-references/INTERFACE_COMPONENT_MAP.md) for searchable section/card labels;
- [`RESPONSIVE_IMPLEMENTATION_REQUIREMENTS.md`](./docs/design-references/RESPONSIVE_IMPLEMENTATION_REQUIREMENTS.md) for phone, tablet, foldable, 2-in-1, desktop, accessibility, orientation, and reduced-motion behavior;
- the current approved mockup for visual hierarchy and composition, while allowing responsive recomposition where necessary.

## Token Architecture

Global tokens live in `src/app/globals.css` and are exposed through CSS custom properties plus Tailwind CSS 4 theme variables.

Core roles include:

- `--background`
- `--foreground`
- `--surface`
- `--surface-elevated`
- `--surface-muted`
- `--border`
- `--border-strong`
- `--text-primary`
- `--text-secondary`
- `--text-muted`
- `--accent`
- `--accent-hover`
- `--focus-ring`

Context classes such as `.theme-professional` and `.theme-basketball` adjust emphasis variables while preserving shared spacing, typography, borders, and component behavior.

## Component Directories

- `src/components/ui/` contains shared primitives.
- `src/components/navigation/` contains the navigation prototype.
- `src/components/projects/` contains project-card pattern prototypes.
- `src/components/timeline/` contains timeline primitives.
- `src/components/basketball/` contains basketball-context prototypes.

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

Phase v0.2 validation:

```text
npm ci
npm run lint
npm run typecheck
npm run format:check
npm run build
npm run validate
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
- Design-reference PRs require owner visual approval when image fidelity/readability is part of the change.

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

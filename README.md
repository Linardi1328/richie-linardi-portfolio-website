# Richie Linardi Portfolio

Interactive two-sided portfolio for Richie Linardi, connecting software/data work, professional development, and basketball history through one persistent flipbook-style experience.

## Current Production Stage

`Production Roadmap v2 — P0 Content Backend Sync`

The project is now in production development rather than visual brainstorming. The current stage replaces stale project copy with a typed, evidence-aware content layer and prepares workspace-specific Antigravity agents before the major frontend implementation begins.

See [ROADMAP.md](./ROADMAP.md) for the production sequence.

## Product Direction

```text
One journey. Two sides. The same discipline.
```

- **Professional face:** software systems, Data/AI, project case studies, experience, education, resume, and technical proof.
- **Basketball face:** journey, achievements, statistics, photography/media proof, Indonesia representation, and athlete identity.
- **Signature mechanic:** the visible page behaves as one physical digital object whose front and reverse faces can be flipped while normal routes remain shareable and accessible.

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

## Validation

Run the complete automated validation suite with:

```bash
npm run validate
```

Expected gates:

```text
npm run lint          PASS
npm run typecheck     PASS
npm run format:check  PASS
npm run build         PASS
```

The same automated validation runs in GitHub Actions for pull requests and pushes to `main`.

## Typed Project Source of Truth

Project presentation now begins from [`src/data/project-registry.ts`](./src/data/project-registry.ts) instead of duplicating project statuses throughout page components.

Each project record carries:

- identity and repository;
- current phase/status;
- verification date;
- technical tags;
- explicit safety/scope boundaries;
- evidence descriptors;
- catalogue state.

The primary public catalogue currently covers SPY Market Agent, Personal Project Operator, LedgerPilot AI, KHLIM Assist, RBL Content Engine, and KHLIM Digital Sports Ecosystem. Event Twin is tracked as a candidate and is not automatically published into the main catalogue.

## Design Reference Library

Approved implementation mockups and interaction references live under [`docs/design-references/`](./docs/design-references/README.md).

The images in `docs/design-references/current/` are development references, not factual source-of-truth and not production assets. Generated copy, statistics, dates, project metrics, market values, tournament details, contact information, and similar claims must be verified before implementation.

Reference numbering stays stable even when a mockup is rejected. Slots `01` (main dual-sided homepage) and `05` (Basketball Achievements + Statistics) are currently intentionally vacant and require new owner-approved replacements. Do not renumber the remaining references.

Implementation must also follow:

- [`INTERFACE_COMPONENT_MAP.md`](./docs/design-references/INTERFACE_COMPONENT_MAP.md) for searchable section/card labels;
- [`RESPONSIVE_IMPLEMENTATION_REQUIREMENTS.md`](./docs/design-references/RESPONSIVE_IMPLEMENTATION_REQUIREMENTS.md) for phone, tablet, foldable, 2-in-1, desktop, accessibility, orientation, and reduced-motion behavior;
- [`FRONTEND_REFERENCE_RESEARCH.md`](./docs/FRONTEND_REFERENCE_RESEARCH.md) for secondary external interface references;
- [`ANTIGRAVITY_COLLABORATION.md`](./docs/ANTIGRAVITY_COLLABORATION.md) for the frontend agent workflow.

## Antigravity Workspace Agents

Project-specific custom agents are committed under `.agents/agents/`:

- `rbl-frontend-implementer`;
- `rbl-responsive-reviewer`;
- `rbl-visual-diff-reviewer`;
- `rbl-accessibility-reviewer`;
- `rbl-content-truth-guard`.

These agents support implementation and verification. They do not override owner review, repository truth boundaries, or CI.

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
- `src/components/navigation/` contains navigation patterns.
- `src/components/projects/` contains project presentation patterns.
- `src/components/timeline/` contains timeline primitives.
- `src/components/basketball/` contains basketball-context patterns.
- `src/data/` contains typed presentation registries.
- `src/types/` contains shared domain contracts.

## Project Rules

- Healthy Bite must never appear in the portfolio.
- ProofLab stays hidden until meaningful development begins and it is deliberately approved for the catalogue.
- Project statuses, dates, basketball achievements, resume content, experience, media, and contact details must remain accurate.
- Generated design-mockup copy is never factual source-of-truth.
- Reusable UI primitives should be created before repeating page-specific styling.
- Professional and basketball faces must share one coherent design system while retaining distinct visual environments.
- Responsive implementation must cover multiple tablet classes and orientations, not one generic tablet breakpoint.
- Meaningful implementation happens on review branches and is merged through pull requests after CI and owner review.
- Design-reference PRs require owner visual approval when image fidelity/readability is part of the change.

## Planned Structure

```text
.agents/
  agents/

docs/
  design-references/

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

See [ROADMAP.md](./ROADMAP.md) for the phased production plan and [CONTRIBUTING.md](./CONTRIBUTING.md) for development conventions.

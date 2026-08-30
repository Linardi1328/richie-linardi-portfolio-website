# Production Roadmap v2

## Product Goal

Build and publicly launch a premium interactive portfolio for Richie Linardi that presents professional software/data work and basketball history as two persistent faces of one authored digital object.

Signature concept:

```text
One journey. Two sides. The same discipline.
```

The portfolio must be visually memorable without sacrificing factual accuracy, accessibility, responsive behavior, maintainability, or direct-route usability.

## Current production stage

Current active stage: **P0 — Production reset / content backend sync**.

This stage replaces stale project copy and the previous prototype roadmap with a typed, evidence-aware content foundation before the major frontend implementation begins.

## Architecture principles

### One portfolio, two persistent faces

- Professional routes and basketball routes remain normal shareable URLs.
- The signature flipbook changes which persistent face is visible; it does not replace routing.
- Each side should remember its last route and scroll position when practical.
- Reduced-motion and keyboard users must have equivalent navigation without requiring 3D motion or gestures.

### Structured content before presentation

Project presentation is sourced from `src/data/project-registry.ts` rather than duplicated page-level strings.

Project data separates:

```text
identity
current state
safety / scope boundaries
evidence
presentation
```

External repository facts may inform status, but the portfolio must not automatically turn a commit, mockup, or generated metric into a marketing claim.

### Proof-first design

Professional proof flow:

```text
project / result
→ architecture
→ interface
→ repository / release / tests
→ boundaries / limitations
```

Basketball proof flow:

```text
result / chapter
→ photo or media evidence
→ statistics
→ official / owner source
→ story / reflection
```

## Production phases

| Stage | Objective | Backend / content work | Frontend / Antigravity work | Exit gate |
| --- | --- | --- | --- | --- |
| P0 — Production reset | Replace stale roadmap and project state | Typed project registry, verified statuses, evidence/boundary contracts, candidate handling | Commit reference research and workspace-specific Antigravity agents | No known stale project status remains in production-facing data |
| P1 — Data & content engine | Build reusable source-of-truth layers | Project, achievement, media, source, education, experience, resume and contact schemas | Internal content-preview surfaces when useful | Missing/unsupported claims are detectable before page implementation |
| P2 — Shared visual foundation | Establish final production design system | Content hooks only | Typography, grid, spacing, RBL branding, shared surfaces, navigation, responsive containers | Shared primitives work across the full device/input matrix |
| P3 — Two-face application shell | Create persistent professional and basketball surfaces | Client state contract for active face, last route and scroll position | Build both independently navigable shells without final page-turn motion | Both sides work as normal routes before animation |
| P4 — Professional home & projects | Ship first production-quality professional interfaces | Project registry feeds overview cards and project metadata | Editorial professional homepage and Projects Overview | No stale hardcoded project status; responsive visual review passes |
| P5 — Case-study engine | Make `/projects/[slug]` reusable | Evidence/source adapters and project case-study content contracts | Evidence-first editorial case-study layout | Any approved project can render from structured data |
| P6 — Flagship project pages | Complete highest-value technical case studies | Verified project-specific evidence | SPY, LedgerPilot and KHLIM ecosystem first; customize visual grammar per project | Claims and boundaries match source repositories |
| P7 — Basketball foundation | Build athlete-facing content system | Achievement, source, media and timeline registries | Journey, Proof Gallery, Achievements/Stats replacement design and athlete home | Every published achievement/media item can carry proof metadata |
| P8 — Signature flipbook | Implement the portfolio identity mechanic | Persist face/route/scroll state safely | Desktop hover/click/drag, tablet touch/drag, mobile edge-swipe/tap, reduced-motion fallback | No routing, scrolling, keyboard or accessibility regression |
| P9 — Supporting interfaces | Complete remaining user-facing pages | Verified experience, education, resume, media and contact content | About, Experience, Education, Press/Media, Resume and Contact | Main navigation routes complete |
| P10 — Device hardening | Production responsive pass | None beyond content fixes | Dedicated phone/foldable/tablet/2-in-1/laptop/desktop QA | No generic tablet-breakpoint shortcuts; both orientations reviewed |
| P11 — Quality hardening | Accessibility, performance, SEO and monitoring | Caching, metadata, error boundaries and production-safe observability | Keyboard, reduced motion, visual regression, Lighthouse/performance polish | Practical WCAG AA target and production performance gates |
| P12 — Release candidate & launch | Owner-approved public launch | Environment and deployment verification | Full browser regression and production smoke test | Owner acceptance + CI + production checks pass |

## Planned production branches

```text
main
  prod/01-content-backend-sync
  prod/02-responsive-application-shell
  prod/03-professional-home-projects
  prod/04-case-study-engine
  prod/05-flagship-case-studies
  prod/06-basketball-foundation
  prod/07-signature-flipbook
  prod/08-supporting-interfaces
  prod/09-responsive-hardening
  prod/10-accessibility-performance-seo
  prod/11-release-candidate
```

Branches may be split further when a reviewable slice is too large. Each meaningful branch must be reviewed through a PR and pass CI before merge.

## Antigravity collaboration

Google Antigravity is used as an implementation and browser-QA collaborator, not as the factual source of truth.

Workspace agents are stored under `.agents/agents/` for:

- frontend implementation;
- responsive review;
- visual-diff review;
- accessibility review;
- content-truth auditing.

See `docs/ANTIGRAVITY_COLLABORATION.md` and `docs/FRONTEND_REFERENCE_RESEARCH.md`.

## Responsive definition of done

Every major interface must be reviewed across behavior classes including:

- compact and large phones;
- foldable/opened-foldable layouts where practical;
- small, standard and large tablets;
- portrait and landscape tablet orientations;
- touch-first and pointer-enabled 2-in-1 devices;
- laptops, desktops and wide desktops;
- keyboard navigation;
- reduced motion;
- practical text scaling / zoom resilience.

Do not treat one `tablet` breakpoint as sufficient proof of responsive quality.

## Current public project catalogue

The active typed registry currently contains the approved public catalogue:

1. SPY Market Agent — featured flagship;
2. Personal Project Operator;
3. LedgerPilot AI;
4. KHLIM Assist;
5. RBL Content Engine;
6. KHLIM Digital Sports Ecosystem.

Event Twin is recorded as a **candidate** project while its portfolio role is reviewed. Candidate status must not automatically publish it into the main project catalogue.

## Reference hierarchy

For visual implementation:

1. approved files under `docs/design-references/current/`;
2. repository design requirements and component map;
3. `docs/FRONTEND_REFERENCE_RESEARCH.md` for secondary interface inspiration;
4. production accessibility/responsive constraints.

For factual content:

1. verified project/achievement/source evidence;
2. typed portfolio registries;
3. production copy;
4. mockup content only as non-authoritative visual placeholder material.

## Version 1.0 definition of done

- Professional interface is production quality.
- Basketball interface is production quality.
- Signature flipbook works across real routes and has accessible fallbacks.
- Approved project catalogue and flagship case studies are evidence-driven and current.
- Basketball achievements, statistics, journey and media use verified structured sources.
- About, experience, education, press/media, resume and contact pages are complete.
- Responsive behavior is complete across the required device matrix.
- Accessibility has been reviewed to a practical WCAG AA target.
- SEO/social metadata, performance and production monitoring are configured.
- Automated validation, browser QA and owner acceptance pass.
- Production deployment is live.

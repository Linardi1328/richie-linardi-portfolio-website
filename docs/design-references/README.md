# Richie Linardi Portfolio — Interface Reference Library

Repository location: `docs/design-references/`

This directory preserves the approved visual direction and design specifications used to compare implementation against the intended portfolio experience.

## Source-of-truth rule

These images are **design references, not factual source-of-truth**. Generated text, statistics, dates, logos, uniforms, tournament names, and UI copy must be verified against structured portfolio data and primary/credible sources before implementation.

## Current direction

### `current/01-main-homepage-dual-sided-v2.jpg`

Current main-home visual direction.

- Flipbook / two-sided identity is the signature interaction.
- Professional face: navy/blue, black, white, gold; data/statistics/audit/Monash-inspired visual cues.
- Basketball face: black/gold/red-white Indonesia cues; #13 identity; gallery/proof entry points.
- RBL initials mark is the primary personal brand device.

### `current/02-projects-overview-v2-current.svg`

Approved Projects Overview v2 reference, approved 2026-08-22.

- Six-project catalogue: SPY Market Agent, Personal Project Operator, LedgerPilot AI, KHLIM Assist, RBL Content Engine, and KHLIM Super App.
- SPY Market Agent receives the dominant featured-research treatment.
- Core systems and emerging/foundation builds have visibly different maturity hierarchy.
- Status, evidence, current limitations, and proof actions are part of the card language.
- The Portfolio Website is intentionally not shown as its own project card because the website itself is already the visitor's experience.
- The SVG is a lightweight review reference that embeds the approved image direction; it is not a production asset.

## Locked specifications

### `PROJECTS_OVERVIEW_FINAL.md`

Approved content, evidence, status, layout, responsiveness, and future-growth specification for the Projects interface. Verified against public GitHub state on 2026-08-21 and updated after owner approval on 2026-08-22. Use it together with `current/02-projects-overview-v2-current.svg` during implementation.

### `BRAINSTORM.md`

Living product/interface map for the complete portfolio, including the professional side, basketball side, proof architecture, content model, future interfaces, and design-reference workflow.

## Archived references

### `archive/02-projects-interface-v1.jpg`

Earlier projects overview reference. Useful for hierarchy, project-card density, filters, technical-focus rail, and mobile adaptation. Content should be replaced with verified current project records.

### `archive/03-basketball-achievements-v1.jpg`

Earlier basketball achievement dashboard reference. Useful for national-team hero treatment, career timeline, achievement cards, tournament badges, and evidence presentation. Later direction should make the proof gallery more dominant and use verified #13 / career facts.

### `archive/04-flipbook-concept-v1.jpg`

Early design-board reference establishing front/back page structure, desktop/mobile pairing, page edge/spine, and flip affordance.

### `archive/99-discarded-generic-portfolio-concept.jpg`

Rejected direction. Kept only to document what **not** to recreate: generic dark developer dashboard, fabricated/incorrect project content, and no meaningful two-sided identity.

## Reference-image policy

Repository copies are intentionally lightweight review images so the design history remains easy to browse without bloating the application bundle. Production photos, logos, and optimized website assets belong under `public/` only when they are actually integrated into the site.

## Naming convention going forward

`NN-interface-name-vMAJOR.MINOR-status.<ext>`

Examples:

- `02-projects-overview-v2-current.svg`
- `03-basketball-proof-gallery-v2-current.jpg`
- `04-project-case-study-spy-v1-draft.jpg`

When a draft is superseded, move it to `archive/`; keep only the latest approved direction in `current/`.

## Implementation comparison checklist

For each implemented interface compare:

1. information hierarchy;
2. spacing/layout proportions;
3. typography hierarchy;
4. color-token usage;
5. image crop/placement;
6. responsive behavior;
7. interaction/animation intent;
8. factual copy and data correctness;
9. accessibility and reduced-motion behavior;
10. proof/source links where claims are shown.

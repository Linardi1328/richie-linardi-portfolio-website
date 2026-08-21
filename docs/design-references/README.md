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

## Locked specifications

### `PROJECTS_OVERVIEW_FINAL.md`

Final content, evidence, status, layout, responsiveness, and future-growth specification for the Projects interface. Verified against current public GitHub state on 2026-08-21. This file is the source for the next `Projects Overview v2` visual reference.

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

`NN-interface-name-vMAJOR.MINOR-status.jpg`

Examples:

- `05-projects-overview-v2.0-current.jpg`
- `06-basketball-proof-gallery-v2.0-current.jpg`
- `07-project-case-study-spy-v1.0-draft.jpg`

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

# Richie Linardi Portfolio — Interface Reference Library

Repository location: `docs/design-references/`

This directory preserves approved visual directions used to compare the real implementation against the intended portfolio experience.

## Source-of-truth rule

These images are **design references, not factual source-of-truth**. Generated text, statistics, dates, logos, uniforms, tournament names, article headlines, contact details, market values, live-status labels, project metrics, and UI copy must be verified against structured portfolio data and primary/credible sources before production use.

Repository copies are optimized, readable development-reference images. Original photographs, project screenshots, logos, and production-ready optimized assets belong under `public/` only when integrated into the website.

## Reference status

The numbering is intentionally stable. Rejected references are removed rather than renumbering every later interface.

- `01` — **replacement required**. The previous main dual-sided homepage mockup was rejected and removed from `current/`.
- `05` — **replacement required**. The previous Basketball Achievements + Statistics mockup was rejected and removed from `current/`.

Do not recreate either rejected mockup from Git history as a production target. New versions may reuse the vacant numbers only after explicit owner approval.

## Current approved references

### `current/02-projects-overview-v2-current.jpg`

Approved six-project overview. SPY Market Agent is the flagship; Personal Project Operator, LedgerPilot AI, KHLIM Assist, RBL Content Engine, and KHLIM Super App form the remaining catalogue. The portfolio website itself is intentionally excluded as a project card.

### `current/03-basketball-proof-gallery-v1-current.jpg`

Photography-first basketball evidence archive. #13, Indonesia red/white, irregular proof-wall media, source/stat overlays, and future owner-provided original media are the core direction.

### `current/04-spy-market-agent-case-study-v2-current.jpg`

SPY Market Agent technical case study with prominent honest research result and a `Live Operating Proof` region. Production must remain explicitly research/paper-only and must connect all live values to real telemetry.

### `current/06-basketball-journey-timeline-v1-current.jpg`

Cinematic career timeline from academy development to Indonesia. Each career chapter is designed to attach photo/video proof, result, statistics, source, and optional reflection.

### `current/07-about-identity-same-skill-two-worlds-v1-current.jpg`

About/Identity interface connecting professional and athlete identities through shared qualities, personal narrative, principles, and navigation into evidence-heavy sections.

### `current/08-professional-experience-leadership-v1-current.jpg`

Professional Experience + Leadership interface. Primary dossiers are Auditor, Statistics Team Leader, and Software/Analytics Builder, with leadership principles and evidence/credential slots.

### `current/09-education-monash-v1-current.jpg`

Education/Monash direction covering degree, Data Science specialization, academic progression, learning areas, technical tools, and coursework. Monash branding, campus imagery, course names, and academic claims must be checked before production.

### `current/10-press-media-archive-v1-current.jpg`

Press & Media archive with featured coverage, source rail, filters, article/media grid, quote slot, and media-kit CTA. Generated headlines/outlets in the visual are placeholders unless independently verified.

### `current/11-contact-opportunities-v1-current.jpg`

Contact/Opportunities interface routing visitors by intent: employment, software collaboration, Data/AI, basketball, media/interview, community/mentorship, or general contact. Generated contact information is placeholder-only unless verified.

### `current/12-web-resume-v1-current.jpg`

Recruiter-friendly web résumé direction: professional hero, quick profile, skills, experience, selected work, education, leadership, awards, and résumé download. Any generated project names or résumé claims must be replaced with verified portfolio data.

### `current/13-ledgerpilot-case-study-v1-current.jpg`

LedgerPilot AI case-study template emphasizing human-supervised accounting workflows, ingest/validate/recommend/review/audit flow, proof panels, system boundaries, evidence, and limitations. Generated operational metrics are illustrative only.

### `current/14-khlim-assist-case-study-v1-current.jpg`

KHLIM Assist case study: multilingual support flow, typed retrieval, GREEN/YELLOW/RED policy decisions, draft response preview, evidence/knowledge, organizer oversight, and explicit participant auto-reply disablement. Generated interaction counts, language counts, response times, and similar figures are placeholders unless verified.

### `current/15-signature-flipbook-interaction-v1-current.jpg`

Signature interaction reference for the physical two-sided portfolio object. It defines the professional-to-basketball page-turn concept, desktop edge hover/click/drag behavior, tablet/touch adaptation, mobile edge-swipe/tap behavior, page thickness/spine treatment, and the responsive interaction direction. Production must also follow the reduced-motion, keyboard, and device-capability requirements in `RESPONSIVE_IMPLEMENTATION_REQUIREMENTS.md`.

## Implementation labels

See [`INTERFACE_COMPONENT_MAP.md`](./INTERFACE_COMPONENT_MAP.md). Every implemented interface should use stable comments/identifiers such as:

```tsx
{
  /* [SECTION 01] Experience Dossiers */
}
{
  /* [CARD 01] Auditor */
}
{
  /* [CARD 02] Statistics Team Leader */
}
```

This is intentional: the owner should be able to search for a visual card/section name and manually adjust that exact area without hunting through the component tree.

## Locked specifications

- `PROJECTS_OVERVIEW_FINAL.md` — approved Projects overview content/layout specification.
- `BRAINSTORM.md` — living product/interface map and proof-first architecture.
- `INTERFACE_COMPONENT_MAP.md` — stable implementation labels and comments for manual design refinement.
- `RESPONSIVE_IMPLEMENTATION_REQUIREMENTS.md` — site-wide phone, tablet, foldable, 2-in-1, desktop, interaction, orientation, accessibility, and reduced-motion contract.

## Archived references

Older/superseded directions stay under `archive/` rather than disappearing when they are still useful history. Explicitly rejected references such as the former `01` and `05` mockups do **not** need to remain as active visual targets. `archive/99-discarded-generic-portfolio-concept.jpg` remains an explicit example of the generic developer-dashboard direction not to recreate.

## Naming convention

`NN-interface-name-vMAJOR-status.<ext>`

When an approved design is replaced, move the previous version to `archive/` only if preserving it has development value. Rejected mockups may be removed completely. Keep numbering stable so documentation and implementation comments do not shift unnecessarily.

## Implementation comparison checklist

For every implemented interface compare:

1. information hierarchy;
2. spacing/layout proportions;
3. typography hierarchy;
4. color-token usage;
5. image crop/placement;
6. responsive behavior;
7. interaction/animation intent;
8. factual copy/data correctness;
9. accessibility and reduced-motion behavior;
10. proof/source links where claims appear.

# High-Resolution Design Reference Repair

> Review status: **READY FOR OWNER VISUAL REVIEW — DO NOT MERGE UNTIL APPROVED**

This branch replaces the thumbnail-grade design-reference exports under `docs/design-references/current/` with readable development references.

## Owner approval gate

This PR must **not** be merged until Richie has opened the changed image files directly in GitHub and explicitly confirmed that they are readable and acceptable as implementation references.

CI success is necessary but is **not** sufficient approval for this PR.

## Current repaired set

Readable high-quality review copies are present for:

1. `02-projects-overview-v2-current.jpg`
2. `03-basketball-proof-gallery-v1-current.jpg`
3. `04-spy-market-agent-case-study-v2-current.jpg`
4. `06-basketball-journey-timeline-v1-current.jpg`
5. `07-about-identity-same-skill-two-worlds-v1-current.jpg`
6. `08-professional-experience-leadership-v1-current.jpg`
7. `09-education-monash-v1-current.jpg`
8. `10-press-media-archive-v1-current.jpg`
9. `11-contact-opportunities-v1-current.jpg`
10. `12-web-resume-v1-current.jpg`
11. `13-ledgerpilot-case-study-v1-current.jpg`
12. `14-khlim-assist-case-study-v1-current.jpg`
13. `15-signature-flipbook-interaction-v1-current.jpg`

The obsolete low-fidelity `02-projects-overview-v2-current.svg` has been removed.

## Rejected / replacement-required slots

The previous references below were explicitly rejected and removed rather than preserved as development targets:

- `01-main-homepage-dual-sided-v2.jpg` — **replacement required**
- `05-basketball-achievements-statistics-v1-current.jpg` — **replacement required**

Keep these numbers vacant until new owner-approved replacement mockups are created. Do not renumber later references.

## Acceptance criteria

For every current image:

- GitHub's file preview must render successfully.
- Opening the image directly must show a readable full mockup, not a tiny thumbnail.
- Text and card hierarchy must be clear enough to use during implementation.
- The image must preserve the approved composition and visual direction.
- The reference must remain explicitly non-authoritative for generated placeholder values, statistics, prices, timestamps, or other facts.

## Merge policy

Workflow for this repair:

`repair branch -> binary replacement -> documentation alignment -> owner visual review -> owner approval -> CI green -> squash merge to main`

Do not bypass the owner visual-review step and do not use a merge commit for this PR.

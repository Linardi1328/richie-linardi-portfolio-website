# High-Resolution Design Reference Repair

> Review status: **BLOCKED ON BINARY REPLACEMENT — DO NOT MERGE YET**

This branch exists to replace the thumbnail-grade design-reference exports currently stored under `docs/design-references/current/` with readable development references.

## Owner approval gate

This PR must **not** be merged until Richie has opened the changed image files directly in GitHub and explicitly confirmed that they are readable and acceptable as implementation references.

CI success is necessary but is **not** sufficient approval for this PR.

## Reference set to repair

1. `01-main-homepage-dual-sided-v2.jpg`
2. `02-projects-overview-v2-current.jpg` (replace the current low-fidelity SVG reference with a readable raster review copy)
3. `03-basketball-proof-gallery-v1-current.jpg`
4. `04-spy-market-agent-case-study-v2-current.jpg`
5. `05-basketball-achievements-statistics-v1-current.jpg`
6. `06-basketball-journey-timeline-v1-current.jpg`
7. `07-about-identity-same-skill-two-worlds-v1-current.jpg`
8. `08-professional-experience-leadership-v1-current.jpg`
9. `09-education-monash-v1-current.jpg`
10. `10-press-media-archive-v1-current.jpg`
11. `11-contact-opportunities-v1-current.jpg`
12. `12-web-resume-v1-current.jpg`
13. `13-ledgerpilot-case-study-v1-current.jpg`
14. `14-khlim-assist-case-study-v1-current.jpg`
15. `15-signature-flipbook-interaction-v1-current.jpg`

## Acceptance criteria

For every image:

- GitHub's file preview must render successfully.
- Opening the image directly must show a readable full mockup, not a tiny thumbnail.
- Text and card hierarchy must be clear enough to use during implementation.
- The image must preserve the approved composition and visual direction.
- The reference must remain explicitly non-authoritative for generated placeholder values, statistics, prices, timestamps, or other facts.

## Merge policy

Workflow for this repair:

`repair branch -> binary replacement -> PR visual review -> owner approval -> CI green -> squash merge to main`

Do not bypass the owner visual-review step.

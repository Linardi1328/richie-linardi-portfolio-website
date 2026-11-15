# Editorial portfolio redesign · 23 October 2026

The owner requested a full replacement of the portfolio’s previous design and effects, with better wording, uniform grids, and a fitting font. This brief supersedes the old flipbook and animated landscape references for the active redesign preview.

## Visual direction

- Warm ivory canvas, dark ink text, and restrained blue accents for professional pages; terracotta accents for athlete pages.
- Self-hosted Manrope variable font, including its OFL license. Headings use a consistent scale, balanced wrapping, and deliberate line heights. Body copy has comfortable spacing and bounded line lengths.
- Photo-led homepages and supporting-page introductions. The six owner-supplied photographs remain connected to their appropriate contexts.
- Shared header, side selector, footer, buttons, spacing, cards, and table styles. Project grids have equal columns and aligned footers. Narrow layouts reflow rather than truncate text.
- Brief CSS entrance animations and small hover responses. The old flipbook, parallax, pointer effects, and animated scenery are no longer mounted. Reduced-motion CSS disables animation, transitions, and smooth scrolling.

## Page coverage

Both homepages, About, Education, Experience, résumé, Contact, project catalogue, project details, athlete journey, achievements, statistics, gallery, media sources, legal pages, error page, and design reference route share the new design language.

Canonical project and athlete data, source links, original photo assets, and hourly public repository activity remain in use. The gallery now uses native radio controls and CSS filtering, including keyboard support, correct photo counts, and full-image links.

The development launcher translates the managed preview supervisor’s generic host flags into Next.js flags. Normal local development and production builds retain Next.js.

## Review evidence

See [browser review summary](design-references/evidence/editorial/review-summary.json) and the adjacent professional, athlete, and narrow-layout screenshots.

- Desktop browser review covered all 16 main page families. The six project cards measured 384 × 653 px in a uniform three-column grid at the reviewed desktop width.
- Responsive DOM snapshots covered eight representative templates across 11 viewport sizes, from 320 to 2200 CSS px. All 88 cases had the font/styles applied, one H1, and no root horizontal overflow.
- Native gallery filters displayed two Indonesia photos and one All-Star photo. Arrow-key radio selection also changed the visible photographs correctly. The mobile disclosure menu opened in the narrow-layout snapshot.
- Source validation includes lint, TypeScript, formatting, content checks, repository activity tests, and production build.

Responsive snapshots verify CSS layout rather than physical device behavior. The browser did not expose reduced-motion preference emulation; that override was reviewed in the stylesheet. Owner visual acceptance and the full release review remain separate from this preview.

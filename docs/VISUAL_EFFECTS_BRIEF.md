# Portfolio visual effects brief

## Intent and status

Requested direction: make the visual effects clearly visible and impactful while preserving the portfolio's two-sided identity. The outcome should feel like turning a carefully art-directed digital object between professional and basketball worlds.

Status: implementation brief and Antigravity handoff. No frontend changes, browser demonstration or visual acceptance is claimed by this document. The first trial is experimental and must return through a review branch. Production phase completion remains governed by ROADMAP.md.

## Existing foundation to refine

At the inspected base commit `ef2edb397bbc652957e179eaf3097cd539c8ba33`, the repository already contains:

- `src/components/interaction/signature-flipbook.tsx`: drag, velocity-based commit, horizontal wheel handling, turn/arrival states and reduced-motion timing;
- `src/styles/signature-flipbook.css`: responsive perspective, reverse-world surfaces, edge hints, shadows and reduced-motion styles;
- `src/lib/portfolio-world-transition.ts`: world destination and transition coordination;
- shared professional/basketball tokens and normal application routes.

Reinspect the current branch before implementation. These are code observations, not proof that every interaction behaves correctly in a browser. The README's P0 stage label is not a complete inventory of existing UI code; reconcile stage acceptance separately rather than inferring it from component presence.

The responsive contract specifies edge-origin touch gestures, while the inspected component listens on the full wrapper and labels full-page swipe. Include this discrepancy in the trial's gesture review. Preserve the user's swipe preference while ensuring vertical scrolling, text selection, sliders and browser navigation remain usable. Document the chosen gesture region explicitly.

## Art direction

### One object, two environments

Preserve the established navy, black, ivory and gold identity. Professional content uses precise editorial grids and readable evidence captions. Basketball content uses larger photographic compositions and bolder athletic type. Share navigation, spacing, typography roles and interaction behavior so switching sides feels like discovering the reverse of the same object.

Prioritize scale, contrast, composition and high-quality owned assets before decorative overlays. Essential headings and actions must be readable from the first render. Use verified portfolio media; when an asset is missing, use an explicit development placeholder or omit the image. Do not substitute generated achievements, synthetic project results or copied creator assets.

### Motion hierarchy

1. Page turn is the signature interaction.
2. Hero arrival establishes the destination world.
3. Cards and media provide localized feedback.

A page turn takes priority over hero/card movement. Avoid stacking simultaneous large rotations, scroll pinning and background motion. Desktop can show richer depth; touch layouts should feel equally intentional with fewer moving layers.

## Effect specifications

All timings and magnitudes below are starting design targets for testing, not measured performance or approved final values.

| Effect                | Trigger and choreography                                                                                                                                      | Initial target                                                                                                                                              | Touch / reduced motion                                                                                                                               |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Page-edge invitation  | Pointer approaches the turn affordance; edge lifts with a narrow gold highlight and progressive shadow.                                                       | 160–220 ms; approximately 2–3 degrees of lift.                                                                                                              | Visible tap control; no dependency on hover. Reduced motion uses static affordance.                                                                  |
| Signature turn        | Drag progress drives angle, edge highlight and shadow together; release completes or returns to rest. Destination coloring becomes visible as the face turns. | Preserve current velocity-aware 220–660 ms completion baseline first; tune only after comparison. Peak shadow near the middle, then settle without a flash. | Shallower perspective on narrow screens; keyboard/tap equivalence. Reduced motion: instant switch or at most 150 ms opacity transition, no rotation. |
| Destination hero      | Once routing/arrival has settled, reveal a decorative rule and media layer in sequence. Keep heading, navigation and primary action available immediately.    | 350–550 ms total; 60–90 ms stagger; 12–20 px maximum supporting translation.                                                                                | Shorter sequence on compact screens; static composition for reduced motion. No replay loop.                                                          |
| Project-card depth    | Hover/focus emphasizes border and image depth; pointer tilt is optional and only after the basic treatment works.                                             | 160–220 ms; maximum 2–4 degrees tilt and 1.02 image scale.                                                                                                  | Tap navigates normally; focus emphasis without tilt; no hidden hover-only metadata.                                                                  |
| Evidence-media reveal | Media enters the viewport once with a restrained crop/opacity reveal; caption and source remain legible.                                                      | 350–500 ms; preserve reserved image dimensions.                                                                                                             | No scroll hijacking; static image for reduced motion or unsupported APIs.                                                                            |

Only the turn refinement and one hero arrival belong to the first trial. Cards and evidence-media choreography are subsequent slices. Keep cross-page navigation real and shareable; a transition must not become a required loading screen.

## Reference provenance

Primary references remain the approved images and contracts in `docs/design-references/`, including `current/15-signature-flipbook-interaction-v1-current.jpg`. The approved Projects Overview composition remains intact. Slots `01` and `05` are intentionally vacant; this brief does not approve replacements.

Secondary Instagram observations from this conversation:

- [Coffee website reveal](https://www.instagram.com/reel/DdMQ14DuBtb/): sampled visuals showed strong product imagery, large typography and a rapid hero-to-detail progression. Reuse the principle of coordinated assets and hierarchy; do not copy the coffee theme or claim its underlying implementation was verified.
- [Website improvement list](https://www.instagram.com/reel/DcCoWjpzkWC/): sampled visuals and text support auditing feedback and interaction details alongside visual polish. It is not a mandatory feature catalogue.

The proposed page lighting, timing and depth above are portfolio-specific design choices. They are not assertions about an unseen implementation in those reels. Reference review was visual sampling with readable text; audio and exact per-frame easing were not evaluated.

## First Antigravity trial

### Scope

Refine the existing flipbook lighting/depth and add one destination hero arrival treatment using current approved content. First capture the existing behavior, then compare the same route, viewport and gesture after the change. Use an isolated review branch; do not deploy or merge as part of the trial.

### Read before editing

- `AGENTS.md` and the installed Next.js documentation it requires;
- `README.md`, `ROADMAP.md` and this brief;
- `docs/ANTIGRAVITY_COLLABORATION.md`;
- `docs/design-references/README.md` and the existing flipbook reference;
- `docs/design-references/RESPONSIVE_IMPLEMENTATION_REQUIREMENTS.md`;
- existing flipbook, route-transition and hero implementations;
- typed content sources for every visible claim.

### Implementation approach

Use the current CSS/React implementation first. Centralize tunable duration, depth and highlight values in the existing token architecture where practical. Prefer transform/opacity animation; profile shadows and large layers instead of assuming they are cheap. Introduce no new animation package unless a specific effect cannot be implemented cleanly with the existing stack and the dependency choice is documented.

Handle cancelled drags, pointer cancellation, repeated input, route changes during a turn and delayed destination rendering. Avoid timers or listeners that survive unmount. Keep inactive or decorative content out of keyboard and assistive-technology navigation as appropriate.

### Evidence and acceptance

- Capture comparable before/after recordings of professional-to-basketball and reverse transitions.
- Show a slow partial drag, cancelled drag, committed swipe, trackpad gesture, tap and keyboard path.
- Show the first load and destination arrival; record the route and commit used.
- Check direct links and browser back/forward; verify route/scroll behavior rather than promising unimplemented persistence.
- Confirm that vertical scrolling, nested controls, text selection and pinch zoom remain usable.
- Verify compact/large phone, small/standard tablet portrait and landscape, large tablet/2-in-1, desktop and wide desktop per the existing contract. Record emulation separately from physical-device testing.
- Show reduced-motion behavior with no 3D turn, parallax or delayed essential content.
- Compare a browser performance trace before/after on the same device and route. Record stutters or regressions; do not claim 60 fps from screenshots alone.
- Run `npm run validate`; link actual results and list untested cases.
- Owner visually compares the trial with the reference and current baseline before merge. Screenshots alone cannot establish motion quality.

## Ready-to-use Antigravity task

> Use the repository's rbl-frontend-implementer workflow to implement the first trial in docs/VISUAL_EFFECTS_BRIEF.md: refine the current signature page turn with progress-linked lighting and depth, then add one coordinated destination hero arrival. Read the required references and current code first. Preserve the two-world identity, approved compositions, factual content, normal routes, swipe preference and accessible alternatives. Work on a dedicated review branch. Capture matching before/after browser recordings, test interrupted gestures and reduced motion, run the required validation, and report the exact changed commit plus outstanding limitations. Use the existing responsive, visual-diff, accessibility and content-truth reviewer workflows as applicable. Do not mark the trial visually accepted or deployed until the corresponding evidence and owner review exist.

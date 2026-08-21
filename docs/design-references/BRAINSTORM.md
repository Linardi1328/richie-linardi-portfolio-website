# Richie Linardi Portfolio — Interface & Product Brainstorm

## North-star concept

**One journey. Two sides. The same discipline.**

The portfolio should feel like one premium digital object with two identities:

- **Professional face** — software, data science, auditing, statistics leadership, education, projects, proof of work.
- **Basketball face** — national-team journey, achievements, statistics, leadership, tournaments, and a proof-first visual gallery.

The signature mechanic is the page/book flip between those identities. It should communicate that the two sides belong to the same person, not behave like two unrelated websites.

## Interface map

| Area         | Interface                             | Core purpose                                                                            | Proof/content priority                                                     | Draft status                                      |
| ------------ | ------------------------------------- | --------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- | ------------------------------------------------- |
| Global       | Main flipbook homepage                | Introduce both identities and create the signature first impression                     | Portraits, RBL logo, featured project proof, basketball proof entry points | Current visual reference exists                   |
| Global       | Navigation / page edge / flip control | Make the two-sided architecture obvious and usable                                      | Route state, current side, reduced-motion fallback                         | Needs focused interaction draft                   |
| Identity     | About / same-skill-two-worlds         | Explain character, motivations, discipline, leadership, and how both identities connect | Personal narrative + selected proof                                        | Needs draft                                       |
| Professional | Projects overview                     | Show all active/credible builds with status and technical surface                       | Repositories, screenshots, docs, tests, releases                           | **v2 visual approved; implementation target set** |
| Professional | Project case-study template           | Prove engineering ability in depth                                                      | Architecture, screenshots, GitHub, tests, decisions, limitations           | Needs draft                                       |
| Professional | Experience / audit / leadership       | Show real responsibilities and outcomes                                                 | Documents/screenshots where appropriate, verified role data                | Needs draft                                       |
| Professional | Education / Monash                    | Explain Data Science specialization and academic development                            | Coursework/projects/certificates where useful                              | Needs draft                                       |
| Professional | Skills / technical focus              | Organize tools by capability rather than keyword dumping                                | Evidence links back to projects                                            | Can be embedded in other pages                    |
| Basketball   | Basketball landing                    | Strong athlete identity and transition from professional side                           | Indonesia representation, #13, key proof entry points                      | Homepage back face covers initial direction       |
| Basketball   | Proof Gallery                         | Primary evidence interface; visual centerpiece                                          | Original photos, event metadata, sources, captions, stats                  | Highest-priority new draft                        |
| Basketball   | Achievements / trophy vault           | Verified accomplishments in structured form                                             | Achievement, date, event, result, source, photos                           | Needs refined factual draft                       |
| Basketball   | Statistics dashboard                  | Present verified performance by season/tournament                                       | FIBA/DBL/IBL/source-linked stats                                           | Needs draft                                       |
| Basketball   | Journey timeline                      | Show development from early basketball to current stage                                 | Dated milestones + images + reflections + sources                          | Needs researched draft                            |
| Basketball   | Tournament archive                    | Group appearances by competition                                                        | Event pages, results, roster context, stats, gallery                       | Can share achievement system                      |
| Basketball   | Press / media archive                 | Independent external proof                                                              | DBL, FIBA, IBL, PERBASI, credible media                                    | Needs draft                                       |
| Career       | Web résumé                            | Recruiter-friendly condensed record                                                     | Education, experience, selected projects, leadership, achievements         | Needs draft                                       |
| Career       | Resume download                       | Stable downloadable PDF                                                                 | Version/date metadata                                                      | Later                                             |
| Contact      | Opportunity / contact                 | Route professional, basketball, media, collaboration inquiries                          | Clear contact channels                                                     | Needs draft                                       |
| Supporting   | Media lightbox                        | Turn gallery images into evidence records                                               | Caption, event, date, source, related stats                                | Needed with gallery                               |
| Supporting   | Filter/search states                  | Keep growing projects/achievements manageable                                           | Categories, years, competitions, status                                    | Needed as content grows                           |
| Supporting   | 404 / loading / empty states          | Keep the premium identity consistent                                                    | RBL brand + two-sided metaphor                                             | Later polish                                      |
| Supporting   | Mobile navigation / gestures          | Preserve flipbook idea on small screens                                                 | Tap/swipe + accessible controls                                            | Must be designed before final hardening           |

## Content architecture

The UI should render from structured records rather than hard-coded cards.

### Professional records

- `projects`
- `projectReleases`
- `projectMedia`
- `experience`
- `education`
- `skills`
- `professionalSources`

### Basketball records

- `achievements`
- `tournaments`
- `basketballStats`
- `journeyMilestones`
- `basketballMedia`
- `pressCoverage`
- `teams`

### Shared proof fields

Every claim that matters should support some or all of:

- stable ID
- title / label
- date or date range
- category
- description
- status
- source URL
- source publisher
- verification state
- media IDs
- related project / tournament / achievement IDs
- featured flag

## Proof-first rule

The portfolio should favor **evidence over adjectives**.

Professional examples:

- repository → architecture → screenshot → test result → limitation
- role → responsibility → artifact → outcome

Basketball examples:

- achievement → tournament → photo → official article → stat line
- timeline milestone → original photo → source → reflection

The Proof Gallery should be the dominant basketball module, not decorative filler.

## Visual system

Primary palette:

- deep/navy blue
- black
- white/ivory
- gold

Context accents:

- professional: blue-dominant with gold as prestige/attention accent
- basketball: black/gold with restrained Indonesia red/white used for national-team moments

Background motifs should remain subtle enough to preserve readability:

- professional: data grids, statistical plots, finance/chart geometry, audit/document motifs, code/data-node textures, subtle Monash/campus visual reference where licensed/appropriate
- basketball: hardwood/court geometry, shot-chart arcs, arena lights, net/ball textures, Indonesia flag movement, jersey #13 motifs

## Image system

Images should be stored as reusable records, not manually pasted into individual pages.

Each media record should support:

- source file
- optimized variants
- alt text
- caption
- event/project association
- date
- photographer/source credit when known
- focal point/crop preference
- featured priority
- public/private readiness

For basketball, original photos should be preferred over social-media downloads whenever possible.

## Interaction system

Signature interactions:

- page-edge hover/tap hint
- 3D flip/page-turn between professional and basketball contexts
- reduced-motion fallback that switches instantly/fades
- gallery masonry that expands into evidence lightbox
- timeline scrub/scroll with image reveal
- project cards that reveal proof/status rather than gimmicky animation
- filter chips for growing content sets

Avoid animation that delays access to content or makes the site feel like a game.

## Responsive principles

Desktop:

- richest flipbook/page metaphor
- asymmetric editorial layouts allowed
- multi-column evidence galleries

Tablet:

- preserve hierarchy; reduce decorative background density
- two-column cards where readable

Mobile:

- no tiny fake “book pages”
- each side becomes a full-screen contextual surface
- explicit flip button plus optional swipe gesture
- gallery becomes thumb-friendly masonry/carousel/lightbox
- navigation remains simple and accessible

## Accessibility / quality requirements

- semantic landmarks and headings
- keyboard-accessible flip control and galleries
- visible focus states
- meaningful alt text
- `prefers-reduced-motion` behavior
- color contrast that still works with gold accents
- no critical content embedded only inside images
- responsive images and lazy loading
- avoid layout shift
- test at ~390px, ~768px, ~1440px minimum

## Factual-integrity workflow

1. Collect claim or media candidate.
2. Verify with source(s) or user-provided original evidence.
3. Store structured record with verification state.
4. Render from data.
5. Owner reviews wording/image/context.
6. Publish.

Generated design mockups are never factual sources.

## Future-update workflow

Adding a new achievement or project should normally require:

1. add/update one structured data record
2. add media files if available
3. add source URLs
4. mark `featured` if it should surface on homepage
5. run validation

The gallery, timeline, cards, filters, and homepage highlights should update automatically.

## Suggested design order

1. Main homepage — final interaction states and mobile behavior
2. Basketball Proof Gallery — highest evidence value
3. Projects overview — **v2 reference approved; implementation can target it**
4. Project case-study template — begin with SPY Market Agent
5. Basketball achievements + statistics combined system
6. Basketball journey timeline
7. Professional experience / audit / leadership
8. About / Same Skill, Two Worlds
9. Press & media archive
10. Education / Monash
11. Web résumé
12. Contact / opportunity interface
13. Supporting states and hardening

## Reference-library policy

Every approved design image gets a stable versioned filename in `current/`.
When replaced, the older file moves to `archive/` rather than being deleted.
Implementation PRs should name the reference image/version they are targeting.

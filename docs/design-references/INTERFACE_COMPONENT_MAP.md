# Interface Component Map

Purpose: keep the implementation easy to tune manually by giving every major visual region a stable, human-readable label that matches the reference mockups.

## Comment convention

Use searchable comments immediately above major sections/cards/components:

```tsx
{/* [HERO] Professional Experience */}
<section>...</section>

{/* [SECTION 01] Experience Dossiers */}
<section>
  {/* [CARD 01] Auditor */}
  <ExperienceCard ... />

  {/* [CARD 02] Statistics Team Leader */}
  <ExperienceCard ... />
</section>
```

When a region is extracted into its own component, keep the same label in the parent and optionally add it to the component file header. Labels are design-navigation aids, not user-visible copy.

## Main homepage / flipbook

- `[HERO FRONT] Professional Face`
- `[HERO BACK] Basketball Face`
- `[FLIP CONTROL] Page Edge / Corner`
- `[FLIP STATE 01] Hint`
- `[FLIP STATE 02] Partial Turn`
- `[FLIP STATE 03] Reverse Revealed`
- `[MOBILE FLIP] Explicit Side Switch`
- `[REDUCED MOTION] Side Switch Fallback`

## Projects overview

- `[HERO] Projects Editorial Cover`
- `[FILTERS] Project Lens`
- `[FEATURED PROJECT] SPY Market Agent`
- `[CORE SYSTEMS] Project Group`
- `[CARD 01] Personal Project Operator`
- `[CARD 02] LedgerPilot AI`
- `[CARD 03] KHLIM Assist`
- `[EMERGING BUILDS] Project Group`
- `[CARD 04] RBL Content Engine`
- `[CARD 05] KHLIM Super App`
- `[HOW I BUILD] Engineering Principles`
- `[CTA] Explore Case Studies / GitHub`

## Basketball Proof Gallery

- `[HERO] Basketball Proof Archive`
- `[PROOF WALL] Main Media Grid`
- `[FEATURED PROOF] Primary Photo`
- `[MEDIA SLOT XX] Evidence Media`
- `[FILTERS] Gallery Lens`
- `[EVIDENCE OVERLAY] Event / Result / Stats / Source`
- `[LIGHTBOX] Photo-to-Proof Detail`
- `[JOURNEY STRIP] Career Navigation`

## Basketball Achievements + Statistics

- `[HERO] Results You Can Trace`
- `[CAREER SNAPSHOT] Highlight Cards`
- `[TOURNAMENT LENS] Competition Filters`
- `[TOURNAMENT ANALYTICS] Verified Stat Panels`
- `[ACHIEVEMENT LEDGER] Career Records`
- `[DEVELOPMENT BY SEASON] Progress Timeline`
- `[DATA SCIENCE LENS] Advanced Analytics Modules`
- `[PROOF SOURCES] Verification Rail`

## Basketball Journey Timeline

- `[HERO] From Academy to Indonesia`
- `[CAREER CHAPTERS] Timeline Spine`
- `[CHAPTER 2016] DBL Academy`
- `[CHAPTER 2021] DBL East Java`
- `[CHAPTER 2022] Gloria 1`
- `[CHAPTER 2023] Gloria 1`
- `[CHAPTER 2024 A] DBL Indonesia All-Star`
- `[CHAPTER 2024 B] ASEAN School Games`
- `[CHAPTER 2024 C] FIBA U18 Asia Cup`
- `[INTERNATIONAL CHAPTER] Indonesia Climax`
- `[OPEN A CHAPTER] Proof Navigation CTA`

## About / Identity

- `[HERO] Same Skill, Two Worlds`
- `[SECTION 01] Shared Qualities Bridge`
- `[SECTION 02] About Me`
- `[SECTION 03] Shared Principles`
- `[SECTION 04] Navigation Cards`
- `[QUOTE] Identity Closing Statement`

## Professional Experience + Leadership

- `[HERO] Professional Experience`
- `[PANEL A] Professional DNA`
- `[PANEL B] Principle Strip`
- `[SECTION 01] Experience Dossiers`
- `[CARD 01] Auditor`
- `[CARD 02] Statistics Team Leader`
- `[CARD 03] Software / Analytics Builder`
- `[SECTION 02] Leadership Principles`
- `[SECTION 03] Evidence & Credentials`
- `[SECTION 04] Contact CTA`

## Education / Monash

- `[HERO] Academic Growth at Monash`
- `[SECTION 01] Degree`
- `[SIDEBAR] At a Glance`
- `[SECTION 02] What I'm Learning`
- `[SECTION 03] Technical Progression`
- `[SECTION 04] Tools & Languages`
- `[SECTION 05] Academic Experience`
- `[MODULE A] Academic Focus`

## Press & Media Archive

- `[HERO] Press & Media Archive`
- `[FEATURE STORY] Primary Coverage`
- `[SOURCE BAR] Publishers / Organizations`
- `[FILTERS] Coverage Filters`
- `[ARCHIVE GRID] Media Records`
- `[MEDIA CARD XX] Coverage Item`
- `[QUOTE SLOT] Personal Quote`
- `[FOOTER CTA] Media Kit / Inquiry`

## Contact / Opportunities

- `[HERO] Two-World Contact Hero`
- `[ROUTE CARD 01] Internship / Employment`
- `[ROUTE CARD 02] Software Collaboration`
- `[ROUTE CARD 03] Data / AI Project`
- `[ROUTE CARD 04] Basketball Opportunity`
- `[ROUTE CARD 05] Media / Interview`
- `[ROUTE CARD 06] Community / Mentorship`
- `[ROUTE CARD 07] General Contact`
- `[CONTACT PANEL] Channels / Availability`
- `[FORM MODULE] Smart Inquiry`
- `[SOCIAL BAR] Social Links`
- `[CTA] View My Journey`

## Web résumé

- `[HERO] Recruiter Summary`
- `[PROFILE] Identity Strip`
- `[SECTION 01] Quick Summary`
- `[SKILLS GRID] Core Skills`
- `[SECTION 02] Experience`
- `[PROJECTS SNAPSHOT] Selected Projects`
- `[SECTION 03] Education`
- `[SECTION 04] Leadership & Involvement`
- `[AWARDS] Awards & Achievements`
- `[DOWNLOAD CTA] Résumé Download`

## SPY Market Agent case study

- `[HERO] SPY Market Agent`
- `[RESEARCH RESULT] Honest Finding`
- `[KPI STRIP] Research Snapshot`
- `[SECTION 01] Problem & Goals`
- `[SECTION 02] System Architecture`
- `[SECTION 03] Results & Evidence`
- `[LIVE PROOF] Live Operating Proof`
- `[LIVE PANEL 01] Market Data Feed`
- `[LIVE PANEL 02] Pipeline Health`
- `[LIVE PANEL 03] Latest Run`
- `[LIVE PANEL 04] Event Stream / Logs`
- `[SECTION 04] Implementation Highlights`
- `[SECTION 05] Impact`
- `[SECTION 06] Limitations & Future Work`
- `[CTA] Live System / GitHub`

## LedgerPilot AI case study

- `[HERO] LedgerPilot AI`
- `[PANEL 01] Solution Overview`
- `[FLOW 01] System Flow`
- `[FLOW STEP 01] Intake`
- `[FLOW STEP 02] Validation`
- `[FLOW STEP 03] Recommendation`
- `[FLOW STEP 04] Human Review`
- `[FLOW STEP 05] Audit History`
- `[FLOW STEP 06] Ready for Posting`
- `[PROOF] Live Proof Panels`
- `[STATUS] System Boundaries`
- `[LIMITATIONS] Transparency & Limitations`
- `[EVIDENCE] Evidence & Links`
- `[CTA] Collaboration / Related Work`

## KHLIM Assist case study

- `[HERO] KHLIM Assist`
- `[FLOW 01] How KHLIM Assist Works`
- `[FLOW STEP 01] Participant Message`
- `[FLOW STEP 02] Understand & Retrieve`
- `[FLOW STEP 03] Policy Decision Engine`
- `[FLOW STEP 04] Draft Response`
- `[FLOW STEP 05] Organizer Oversight`
- `[CHAT MODULE] Participant Conversation`
- `[POLICY PANEL] GREEN / YELLOW / RED Decision`
- `[CARD 01] Draft Response Preview`
- `[PROOF] Evidence & Knowledge`
- `[LIMITATIONS] Participant Auto-Replies Disabled`
- `[ORGANIZER VIEW] Oversight Console`
- `[CTA] Related Projects / Demo`

## Reusable case-study template for the remaining projects

The SPY, LedgerPilot, and KHLIM references are enough to establish the shared case-study grammar. Personal Project Operator, RBL Content Engine, and KHLIM Super App do not need separate pre-development mockups unless their actual implementation introduces a genuinely different interaction model.

Use a common label skeleton:

- `[HERO]`
- `[PROBLEM]`
- `[ARCHITECTURE]`
- `[WORKFLOW]`
- `[PROOF]`
- `[DECISIONS]`
- `[LIMITATIONS]`
- `[ROADMAP]`
- `[CTA]`

## Supporting states to label during implementation

These can be designed while building rather than requiring full mockups now:

- `[MOBILE NAV]`
- `[FILTER EMPTY]`
- `[FILTER LOADING]`
- `[FILTER ERROR]`
- `[LIGHTBOX]`
- `[SOURCE MODAL]`
- `[SKELETON]`
- `[404]`
- `[REDUCED MOTION]`

Keep labels stable when styling changes. If the owner says “change CARD 02,” that should remain enough information to locate the exact implementation region.

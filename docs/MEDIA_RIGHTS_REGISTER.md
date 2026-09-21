# Portfolio Media Rights Register & Provenance Audit

This register is the source-of-truth legal, rights, and provenance manifest for all media assets associated with the Richie Linardi portfolio website (`richie-linardi-portfolio-website`).

A file being present in the repository or working tree is **not**, by itself, proof that it can lawfully be published. Every published asset must have verified rights, descriptive accessibility attributes, responsive mobile behavior, strictly truthful captions, and explicit provenance classification.

---

## 1. Provenance Classification Schema

Every candidate and published asset is audited against five mutually exclusive provenance tiers:

1. **Approved original media**: Directly owned, commissioned, or authorized personal photography or media with confirmed rights for web release.
2. **Approved derivative/crop**: Lawfully authorized crops or re-encodings of approved original media with confirmed rights.
3. **Design-reference evidence only**: Visual references, review mockups, and layout evidence stored under `docs/design-references/` or `tests/evidence/`. **Strictly forbidden from being served as production media under `public/`.**
4. **Generated decorative diagram**: Vector illustrations, architectural schematics, or flow diagrams generated for the portfolio. **Every technical claim, workflow step, model name, and boundary must trace directly to `src/data/project-registry.ts`.**
5. **Unverified or potentially misleading asset**: Unlicensed crops, unverified third-party trademarks/logos, or assets containing unsubstantiated claims. **Strictly rejected and excluded from `public/`.**

---

## 2. Audited Production Media Manifest

The following assets are published under `public/` and registered in `src/data/media-manifest.ts`:

| Filename                                                              | Target Route                          | Media Type      | Provenance Tier                     | Caption & Description                                                                      | Credit / Source                                                    | Usage Status      | Verification Basis & Boundaries                                                                                                                      |
| :-------------------------------------------------------------------- | :------------------------------------ | :-------------- | :---------------------------------- | :----------------------------------------------------------------------------------------- | :----------------------------------------------------------------- | :---------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| `public/portraits/richie-professional.jpg`                            | `/about`, `/resume`                   | `image/jpeg`    | **1. Approved original media**      | Richie Linardi · Professional portrait. Wearing black blazer and white shirt.              | Owner personal archive                                             | `REVIEW_REQUIRED` | Personal photograph owned by Richie Linardi. Cleared for prototype preview; subject to final release review before commercial deploy.                |
| `public/projects/spy-market/architecture-diagram.svg`                 | `/projects/spy-market-agent`          | `image/svg+xml` | **4. Generated decorative diagram** | SPY Market Agent · Walk-Forward Research Engine & Paper-Only Safety Gates.                 | Public source repository (`Linardi1328/spy-market-agent`)          | `VERIFIED`        | Traces 100% to `src/data/project-registry.ts`. Boundary: Paper execution only; live automated trading strictly prohibited.                           |
| `public/projects/ledgerpilot/human-review-pipeline.svg`               | `/projects/ledgerpilot-ai`            | `image/svg+xml` | **4. Generated decorative diagram** | LedgerPilot AI · 6-Step Human-in-the-Loop Accounting Workflow & Review Gates.              | Public source repository (`Linardi1328/ledgerpilot-ai`)            | `VERIFIED`        | Traces 100% to `src/data/project-registry.ts`. Boundary: Autonomous financial payments prohibited; human approval required for every entry.          |
| `public/projects/khlim/policy-decision-engine.svg`                    | `/projects/khlim-assist`              | `image/svg+xml` | **4. Generated decorative diagram** | KHLIM Assist · Multilingual Assistant Workflow, Policy Decisions, and Organizer Oversight. | Public source repository (`Linardi1328/khlim-assist`)              | `VERIFIED`        | Traces 100% to `src/data/project-registry.ts`. Boundary: Direct participant auto-replies disabled; organizer sign-off mandatory for draft responses. |
| `public/projects/personal-project-operator/operator-architecture.svg` | `/projects/personal-project-operator` | `image/svg+xml` | **4. Generated decorative diagram** | Personal Project Operator · Telegram/OpenClaw Command Layer & Explicit Write Gate.         | Public source repository (`Linardi1328/personal-project-operator`) | `VERIFIED`        | Traces 100% to `src/data/project-registry.ts`. Boundary: Operator manual gate required before executing remote Git mutations or pushes.              |

---

## 3. Audited Design-Reference & Internal Evidence Assets

The following assets exist solely as internal design-reference evidence and **must not be copied or symlinked to `public/`**:

| Path                                          | Provenance Tier                       | Intended Scope                                      | Policy Enforcement                                                   |
| :-------------------------------------------- | :------------------------------------ | :-------------------------------------------------- | :------------------------------------------------------------------- |
| `docs/design-references/current/*.png`        | **3. Design-reference evidence only** | Visual layout alignment and aesthetic reference     | Internal documentation only. Never served in production web bundles. |
| `docs/design-references/evidence/media/*.png` | **3. Design-reference evidence only** | Multi-viewport regression and layout proof captures | Stored in documentation archive; excluded from public media routes.  |

---

## 4. Audited Excluded & Prohibited Assets (Tier 5)

The following candidate assets were audited, identified as unverified or potentially misleading, and **permanently purged from `public/`**:

| Asset / Pattern                                                   | Provenance Tier                            | Audit Finding                                                                                               | Remediation Taken                                                                                                                     |
| :---------------------------------------------------------------- | :----------------------------------------- | :---------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| `public/basketball/indonesia/*.jpg`                               | **5. Unverified / potentially misleading** | Crops extracted from design-reference mockups without original high-res photographer licensing metadata.    | Purged from `public/`. Replaced with verified athletic telemetry scoreboards and ledger cards in `/basketball/gallery`.               |
| `public/portraits/basketball/*.jpg`                               | **5. Unverified / potentially misleading** | Unapproved crops from mockup design files.                                                                  | Purged from `public/`. Replaced with official competition credential badge framing in `/basketball/gallery` and `/basketball/media`.  |
| `public/branding/*.svg` (DBL, FIBA, IBL, Detik, Lenza, Basketyuk) | **5. Unverified / potentially misleading** | Recreated third-party trademark vector logos without explicit brand guidelines or written usage agreements. | Purged from `public/`. Replaced with neutral, high-contrast typography publisher badges linking directly to verified public articles. |

---

## 5. Release & Legal Rules

Before publishing any new photograph, illustration, video, logo, or diagram:

1. **Source Identification**: Record the source, creator, and event context where known.
2. **Lawful Basis**: Confirm copyright ownership or lawful basis (owned, licensed, permission, or public fair citation).
3. **No Hallucinated Proof**: Never generate or alter imagery to simulate real competition events, results, people, or achievements.
4. **Third-Party Branding**: Do not distribute recreated SVGs of third-party corporate or federation logos. Use neutral typographic tags and direct external links to the published source.
5. **SVG Claim Truth**: Technical architecture diagrams must be grounded in verified repository contracts (`src/data/project-registry.ts`). No speculative metrics or unreleased features.
6. **Content-Truth Coherence**: The repository verification gate (`npm run truth:check`) must pass with zero warnings before any merge or deployment.

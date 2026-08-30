# Frontend Reference Research — Production Roadmap v2

Research snapshot: 2026-08-31.

This document records external interface references for the portfolio production stage. These sites are references for interaction grammar, hierarchy, typography, and presentation quality. They are not templates to copy.

## Reference set

| Reference | URL | What to learn from it | RBL application |
| --- | --- | --- | --- |
| Bruno Simon | https://bruno-simon.com/ | A portfolio can be an explorable object while still exposing understandable controls across mouse, keyboard, mobile, and tablet input. | Signature flipbook philosophy: interaction is part of the identity, but content must remain accessible without relying on the effect. |
| Stripe Press | https://press.stripe.com/ | Premium editorial hierarchy, tactile object presentation, restrained composition, and confident typography. | Professional side: editorial intelligence-lab art direction rather than a generic SaaS dashboard. |
| Linear | https://linear.app/ | Calm, consistent information density, predictable navigation, polished states, and low visual noise. | Project metadata, evidence panels, navigation, filters, live-proof modules, and system status surfaces. |
| Jordan Delcros | https://www.jordan-delcros.com/ | Creative motion and transitions that strengthen identity without replacing content. | Hover character, route transitions, scroll behavior, and small high-quality motion moments. |
| Dawson Guillory | https://dawsonguillory.com/ | Case studies communicate role, scope, contribution, process, and evidence instead of only showing screenshots. | Reusable project case-study information architecture for SPY, LedgerPilot, KHLIM, PPO, and future projects. |
| LeBron James | https://www.lebronjames.com/ | Athlete history, identity, achievements, and broader work can exist as chapters of one person rather than disconnected brands. | Basketball journey and the connection between athlete and professional identities. |
| Editorial New | https://www.editorialnew.com/ | Typography-led layouts that remain intentional across desktop, laptop, tablet, and mobile presentation. | Large editorial headings, controlled line length, responsive typography, and multi-tablet composition. |
| Dulcedo / Locomotive case study | https://locomotive.ca/en/work/dulcedo | Photography-first talent discovery and structured profiles. | Basketball proof gallery, media filtering, large photo treatment, and evidence metadata attached to visual proof. |

## Production design formula

The target is not to reproduce any single reference.

```text
Professional visual system
  = Stripe Press editorial confidence
  + Linear information discipline

Basketball visual system
  = athlete editorial storytelling
  + photography-first proof archive
  + Indonesia red/white cues

Interaction system
  = physical flipbook identity
  + Bruno Simon-style interaction confidence
  + restrained creative motion

Case studies
  = evidence-first editorial storytelling
  + project-specific visual grammar
```

## Non-negotiable design rules

1. The portfolio must feel authored, not template-generated.
2. Motion must reveal structure or identity; decorative motion alone is not a reason to ship it.
3. Professional pages must avoid neon-hacker and generic SaaS-dashboard aesthetics.
4. Basketball pages must use photography as evidence, not merely decoration.
5. Dense technical information must retain Linear-like hierarchy and calm spacing.
6. Every project claim must come from the typed content/evidence layer rather than generated mockup copy.
7. The signature flipbook must enhance navigation without breaking direct URLs, browser history, keyboard access, or reduced-motion use.
8. Responsive composition must be tested across multiple tablet classes and both orientations rather than using one generic tablet breakpoint.
9. Large typography must preserve readable line lengths and content hierarchy on every viewport.
10. Visual ambition must not override performance, accessibility, factual correctness, or maintainability.

## Reference usage during implementation

For each major interface, the implementation PR should state which references informed which decisions. Example:

```text
Projects Overview
- Stripe Press: editorial hierarchy
- Linear: metadata density and control states
- Dawson Guillory: case-study entry structure
- Approved RBL mockup: composition and brand-specific direction
```

The approved files under `docs/design-references/current/` remain the primary visual targets. External websites are secondary references used to improve implementation quality when the mockups do not specify a responsive, interactive, or component-level behavior.

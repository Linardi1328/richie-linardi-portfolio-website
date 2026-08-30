# Production Pass Gates

Every pull request targeting `main` must satisfy the production gates below before squash merge.

## Automated gates

1. **CI / Validate** — lint, TypeScript, formatting, production build, and production-server smoke test.
2. **PPO PR validation / PPO required validation** — type checks, shell syntax checks, full regression validation, and diff whitespace checks.
3. **Production Pass Gates / Required production gate** — repeats the application validation at the merge boundary and verifies critical production contracts remain present.

The production gate also fails if forbidden legacy project content (`Healthy Bite`) or hidden project content (`ProofLab`) appears under `src/`.

## Truth gate

Production copy must not outrun evidence. New project status, project scope, technical results, basketball results/statistics, experience, education, dates, metrics, and similar factual claims require an approved source of truth.

Generated design references control visual direction only. Their generated copy is not evidence.

## Visual gate

Major visual changes require comparison against the approved reference library or the documented production design direction. Owner visual approval is required when a change materially affects the signature identity, page composition, imagery, typography, flipbook interaction, or another high-impact interface.

## Responsive gate

Visual changes must be reviewed by behavior rather than one generic tablet breakpoint. Applicable testing covers phones, small/standard/large tablets, portrait and landscape orientations, foldables/2-in-1 devices, laptops, desktops, touch, precise pointer, keyboard, and reduced motion.

## Accessibility gate

Interactive changes must preserve semantic controls, keyboard operation, visible focus, practical contrast, and reduced-motion behavior. Inactive flipbook surfaces must not remain exposed to assistive technology when the two-sided experience is implemented.

## Merge gate

The merge sequence is:

```text
implementation branch
→ automated gates green
→ content/visual/manual review as applicable
→ no unresolved blocker
→ squash merge to main
```

A green CI run is necessary, but it does not replace required owner visual review or factual verification.

## GitHub branch settings

Repository rules should require pull requests for `main` and require these status checks once GitHub has observed their names:

- `Validate` from the `CI` workflow;
- `PPO required validation` from `PPO PR validation`;
- `Required production gate` from `Production Pass Gates`.

Do not enable a mandatory independent reviewer count for a single-owner workflow unless another eligible reviewer is available, because GitHub does not allow authors to approve their own pull requests.

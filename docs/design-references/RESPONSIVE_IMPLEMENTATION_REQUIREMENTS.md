# Responsive Implementation Requirements

This document is a site-wide implementation contract for every portfolio interface.

## Core rule

Do not design or test against a single generic "tablet" breakpoint. Every interface must remain intentional across the full range of phone, tablet, foldable, 2-in-1, laptop, and desktop form factors. Layout decisions should be content-driven and fluid, with breakpoints used only when the composition genuinely needs to change.

## Required viewport families

Every implemented interface must be reviewed across at least these layout families:

- compact phones: approximately 320-389 CSS px wide;
- standard phones: approximately 390-479 CSS px;
- large phones / small foldable states: approximately 480-599 CSS px;
- small tablets / large foldables: approximately 600-767 CSS px;
- standard tablets in portrait: approximately 768-899 CSS px;
- large tablets in portrait / compact tablet landscape: approximately 900-1023 CSS px;
- standard tablet landscape / small 2-in-1: approximately 1024-1279 CSS px;
- large tablets / 2-in-1 / compact laptops: approximately 1280-1439 CSS px;
- standard desktop: approximately 1440-1919 CSS px;
- large desktop / ultrawide: 1920 CSS px and above.

These ranges are review targets, not rigid device-specific assumptions. Components should use fluid sizing, min/max constraints, wrapping, grid auto-fit, container queries where useful, and content-aware reflow.

## Tablet coverage

Tablet QA must explicitly consider:

- iPad mini-sized layouts;
- standard iPad / iPad Air-sized layouts;
- iPad Pro / large tablet layouts;
- Android tablets with narrower and wider aspect ratios;
- Surface-style and other 2-in-1 devices;
- foldable devices when opened into tablet-like dimensions;
- portrait and landscape orientation for every tablet class;
- touch-first input even when the viewport resembles a laptop;
- pointer/trackpad enhancement when a 2-in-1 has one available.

Do not rely on hover as the only way to reveal critical actions on any tablet-like device.

## Signature flipbook behavior

The two-sided professional/basketball interaction must adapt by capability as well as width:

- desktop / precise pointer: hover hint, click, and drag;
- tablet / touch-first: tap edge and optional drag gesture with shallower 3D perspective;
- phone / narrow touch layout: edge-origin swipe plus explicit tap control;
- reduced-motion preference: quick crossfade/theme swap with no 3D rotation;
- keyboard: real focusable flip button with Enter/Space activation;
- inactive surface: `inert` and hidden from assistive technology.

The page-turn effect must never block normal vertical scrolling, especially on touch devices. Mobile/tablet drag gestures should begin from a dedicated edge interaction zone.

## Orientation behavior

Portrait and landscape are separate compositions, not merely scaled versions.

For every major page:

1. verify information hierarchy survives rotation;
2. keep CTAs reachable without awkward horizontal scrolling;
3. recompute grid/card density rather than shrinking text excessively;
4. preserve readable line length;
5. recrop hero/media assets intentionally;
6. verify sticky/fixed elements do not consume too much short-screen height;
7. maintain safe spacing around notches, rounded corners, browser chrome, and system gesture areas where relevant.

## Interaction and accessibility requirements

Every interface must support:

- touch, mouse/trackpad, and keyboard;
- visible keyboard focus;
- minimum practical touch targets;
- `prefers-reduced-motion`;
- no hover-only essential content;
- sensible source order when multi-column layouts collapse;
- readable zoom and text resizing;
- image fallbacks and meaningful alt text where appropriate;
- independent testing of portrait and landscape tablet states.

## Stable implementation labels

Responsive-specific logic should be easy to find manually. Use searchable comments near meaningful layout changes, for example:

```tsx
{/* [RESPONSIVE: phone] */}
{/* [RESPONSIVE: small-tablet] */}
{/* [RESPONSIVE: tablet-portrait] */}
{/* [RESPONSIVE: tablet-landscape] */}
{/* [RESPONSIVE: large-tablet-2in1] */}
{/* [RESPONSIVE: desktop] */}
{/* [TOUCH: edge-swipe-zone] */}
{/* [POINTER: edge-hover-peek] */}
{/* [REDUCED MOTION] */}
```

Component labels from `INTERFACE_COMPONENT_MAP.md` should remain stable alongside these responsive labels so the owner can locate both the content region and its device-specific behavior quickly.

## Definition of done for each interface

An interface is not considered finished until it has been reviewed at representative widths from every relevant family above, including at minimum:

- one compact/standard phone;
- one large phone;
- one small tablet;
- one standard tablet portrait;
- one tablet landscape;
- one large tablet / 2-in-1;
- one standard desktop;
- one large desktop;
- reduced-motion behavior;
- touch behavior where applicable;
- keyboard navigation.

Visual fidelity should be compared against the approved image reference while allowing responsive re-composition when a literal desktop layout would be inappropriate on smaller devices.

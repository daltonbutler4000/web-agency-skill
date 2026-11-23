# Design, development and motion

The design lead (see SKILL.md) carries the craft. This file sets the constraints it works within.

## Choose the stack per project

Use what the project already runs on. For a new site, recommend one and say why:

- **Content-focused site** (marketing, portfolio, editorial, small business): Astro is the
  default starting point; add a CMS only if someone will edit content.
- **CMS:** the client's existing one if there is one; Sanity is a known option for structured
  content. Model content from `03-strategy.md`.
- **App-like or highly interactive product:** a framework suited to it; do not force Astro.
- **Existing design system or component library:** build with it, extend it, do not fork it.

Record the choice and reason in `decisions.md`. Adding a framework, CMS or hosting platform to an
existing project, or replacing one, needs approval.

## Design system first

Before building pages, establish and write down (`05-design-system.md`, or `DESIGN.md` if
Impeccable maintains it):

- **Tokens:** colour, type scale, spacing scale, radii, shadows, breakpoints, motion durations and
  easings, as CSS custom properties or the stack's equivalent. No one-off values in components
  without a comment saying why.
- **Components:** the reusable set the sitemap needs, each with its variants and states (hover,
  focus, active, disabled, loading, error, empty).
- **Layout rules:** grid, container widths, section rhythm.

Then design the key pages in code: usually home, one content page, one conversion page. Get
those reviewed before building the remainder.

## Mode B: implementing supplied designs

- Read the design through the Figma connector as it instructs: structure, variables, and a
  screenshot of each frame. Map Figma variables and components to the project's existing tokens
  and components before writing anything new.
- Match the design: spacing, type, colour and proportions as drawn. Compare your rendered page
  with the frame side by side at the frame's width, fix differences, and compare again.
- Where the design is silent (breakpoints not drawn, states, long content, empty states), propose
  a solution consistent with it and list those decisions for review.
- Where the design has a real problem (contrast, tap targets, content that will not fit),
  implement as drawn only if it is not harmful, and report it. Do not quietly redesign.

## Build standards

- Semantic HTML, one `h1` per page, logical heading order, landmarks, labelled controls.
- Responsive from 320px up; test real breakpoints, not only desktop and one phone.
- Images: correct dimensions, modern formats, `width`/`height` set, lazy-load below the fold,
  meaningful alt text.
- Fonts: self-hosted or preloaded where possible, `font-display` set, fallback metrics to limit shift.
- Ship little JavaScript; a content page should work without it.
- No secrets in the repository. No analytics or third-party scripts without being asked.
- Commit in sensible steps. Never push to a client's production branch or deploy without approval.

## Motion

Motion has to earn its place: it directs attention, shows a change of state, or carries the
brand's character as approved in the art direction. Use `impeccable animate` for the work.

Choosing the tool:
1. **CSS first:** transitions, keyframes, `@starting-style`, view transitions, scroll-driven
   animations where support allows. Covers hovers, reveals, state changes and most page polish.
2. **GSAP with ScrollTrigger** when a sequence needs a timeline, pinning, scrubbing, or
   coordination across elements that CSS cannot express cleanly.
3. **A specialised library** (WebGL, Lottie, physics, smooth-scroll) only for a named signature
   moment in the approved direction. State the size and performance cost and get agreement.

Always:
- Honour `prefers-reduced-motion`: remove non-essential movement, keep content and function.
- Animate `transform` and `opacity`; avoid animating layout. No layout shift from entrances.
- Content is visible and usable if scripts fail or have not loaded yet.
- Do not hijack scrolling or delay content behind a loader without explicit approval.
- One or two signature moments per page beat effects on every element.

## Verify by looking

After each meaningful change, open the page in a browser and capture it
(`node <skill-dir>/scripts/capture.cjs --out agency/shots-wip <url>`, or the design lead's own
screenshot tool) at mobile, tablet and desktop widths. Compare against the approved direction and
references. Fix what you see before reporting progress. If no browser is available, say that the
work is unverified visually.

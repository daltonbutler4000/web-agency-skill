# Design and development

The design lead (see SKILL.md) carries the craft. This file sets the constraints it works within.
Motion has its own file: [motion.md](motion.md).

## Choose the stack per project

Use what the project already runs on. For a new site, recommend a stack from
[stack.md](stack.md) and say why: Astro (with Lumos evaluated first) for content-led sites,
Next.js with Tailwind and shadcn/ui for web applications, one styling system, and only the
layers the project needs. The same file holds the rules for adding
any dependency; read it before installing anything.

- **CMS:** the client's existing one if there is one; otherwise Sanity when someone will edit
  content. Model content from `03-strategy.md`.
- **Existing design system or component library:** build with it, extend it, do not fork it.
- **Third-party components** (Lumos, shadcn/ui or any other) are restyled to the project's tokens and
  the approved direction before they appear on a page.

Record the choice and reason in `decisions.md`, and the resulting stack in the project's
`CLAUDE.md`. Adding a framework, CMS or hosting platform to an
existing project, or replacing one, needs approval.

## Design system first

Before building pages, establish and write down (`05-design-system.md`, or `DESIGN.md` if
Impeccable maintains it):

- **Tokens:** colour, type scale (fluid, with `clamp()`), spacing scale, radii, shadows,
  breakpoints, motion durations and easings, as CSS custom properties in the project's one
  styling system (Lumos tokens, a Tailwind theme, or plain CSS). No one-off values in components
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
- Ship little JavaScript; a content page should work without it. Hydrate an island only when it
  needs client state, with the latest `client:*` directive that works.
- SEO basics are built in, not bolted on: unique titles and descriptions, canonical URLs, Open
  Graph, sitemap, structured data where relevant, content in the HTML rather than injected late.
- No secrets in the repository. No analytics or third-party scripts without being asked.
- Commit in sensible steps. Never push to a client's production branch or deploy without approval.

## Verify by looking

After each meaningful change, open the page in a browser and capture it
(`node <skill-dir>/scripts/capture.cjs --out agency/shots-wip <url>`, or the design lead's own
screenshot tool) at mobile, tablet and desktop widths. Compare against the approved direction and
references. Fix what you see before reporting progress. If no browser is available, say that the
work is unverified visually.

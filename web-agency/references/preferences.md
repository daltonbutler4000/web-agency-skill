# The designer's working preferences

Global preferences only. No client, employer or project details belong in this file; those live
in each project's `agency/` folder. A project's brief and brand always outrank this file.

**Status:** every entry is *stated by the designer (2026-11-23, stack and motion entries
2026-11-25) and not yet confirmed in practice*. The first time one materially affects a decision, check it in one
sentence ("You've said you prefer X; applying that here"). When the designer confirms, corrects
or adds a preference, offer to update this file, and move confirmed entries under **Confirmed**
with the date. Never record a preference inferred from a single project.

## Confirmed

*(none yet)*

## Stated, unconfirmed

**Design taste**
- Modern, distinctive, polished work over generic templates.
- Cares most about typography, spacing, visual hierarchy, consistent components and thoughtful
  animation.
- Researches exceptional websites before committing to an aesthetic.

**Tools and stack** (detail and selection rules in [stack.md](stack.md))
- Uses Figma, with growing interest in designing directly in code.
- Content-led client sites: Astro, TypeScript, Lumos evaluated first as the design system
  (revised 2026-11-25; earlier the same day the default was Tailwind and shadcn/ui), React where
  interaction needs it, Sanity when a structured CMS is needed, GitHub, Vercel.
- One styling system per project; Lumos, Tailwind and shadcn/ui are not combined.
- Technology decisions are written into each project's `CLAUDE.md`.
- Has shipped Astro sites on Cloudflare Workers, and plain Astro with plain CSS (no Tailwind, no
  React); both remain valid options alongside the defaults.
- Web applications: Next.js, React, Tailwind CSS, shadcn/ui, Supabase.
- These are preferred, not mandatory: choose per project, reuse what a project already has, and
  never migrate an existing project without approval.
- Third-party components are always customised to the client's identity. The stack supports the
  creative direction and does not dictate it.

**Motion** (selection rules in [motion.md](motion.md))
- Describes the desired experience in plain language and expects the right technology to be
  chosen without naming a library or a skill.
- GSAP (ScrollTrigger, SplitText) for scroll-driven and cinematic work; Motion or CSS for
  component interaction; native CSS for simple states; native scrolling unless Lenis is justified.
- Premium, purposeful motion; the simplest reliable solution.

- Wants framework and animation-library choices run past them first, and to be told what is
  being used, not have it happen in the background (stated 2026-11-25).

**Specialist skills**
- Wants the relevant specialist applied automatically, and keeps the option to name a skill or a
  combination when exploring alternative directions.

**Build quality**
- Responsive, performant, accessible.
- Reusable components, design tokens, clean maintainable code.

**Collaboration**
- Wants weak design decisions challenged, not agreed with.
- Approves creative directions and important decisions; does not want to manage minor
  implementation details.
- Prefers concise, practical answers with clear next steps.

## Open questions to settle when they come up

- Accessibility target (assume WCAG 2.2 AA until told otherwise).
- Performance budget (assume Core Web Vitals "good" on mobile).
- How much motion is "thoughtful" versus too much.
- Spelling and language defaults for copy.

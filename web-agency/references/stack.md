# Technology stack and dependencies

The stack serves the approved direction; it never dictates it. Everything here is a preferred
default, not a required dependency. A project's existing stack and the brief outrank this file.

## Order of decisions

1. **Existing project:** inspect first (below) and stay on what it runs. Do not migrate to another
   framework, CMS or host without a stated reason and the designer's approval.
2. **New project:** pick the profile that fits, drop every part the project does not need, and
   record the choice and reason in `agency/decisions.md`.
3. **Anything outside these profiles** (e-commerce platform, a client-mandated CMS, native app):
   recommend what suits it and say why. Do not force a profile.

## Profile 1: content-led sites (default)

Marketing, editorial, portfolio, property and other content-led client websites.

| Layer | Preferred | Add it when |
|---|---|---|
| Framework | **Astro** (Vite is its dev and build tooling; no separate setup) | Always |
| Language | **TypeScript**, strict | Always |
| Styling | **Tailwind CSS**, driven by the project's design tokens | Always |
| Interactive components | **React** islands | A component needs client state Astro and CSS cannot give |
| UI primitives | **shadcn/ui** (source copied into the repo, then restyled) | An accessible primitive is needed: dialog, menu, tabs, combobox, form |
| Scroll and sequence animation | **GSAP** (ScrollTrigger, SplitText) | See [motion.md](motion.md) |
| Component animation | **Motion** (formerly Framer Motion) | See [motion.md](motion.md) |
| CMS | **Sanity** | Someone will edit content. No editor, no CMS: use Astro content collections |
| Source control | **GitHub** | Always |
| Hosting | **Vercel** | Always, unless the client hosts elsewhere |

A site with no interactive components ships no React. A site with one simple reveal ships no
animation library. Start from Astro, TypeScript and Tailwind; add each further layer when a real
requirement appears.

## Profile 2: web applications

Accounts, dashboards, user data, heavy client state: consider **Next.js, React, TypeScript,
Tailwind CSS, shadcn/ui and Supabase** (database, auth, storage), on GitHub and Vercel. Use
Profile 1 for the marketing site of the same product unless one codebase is clearly simpler.

Borderline cases (a content site with a login area, a listings site with saved searches): prefer
Astro with a few islands and server endpoints until the interactive part dominates; say which
way you went and why.

## Before adding any library or framework

1. **Inspect the project:** `package.json`, the lockfile (which package manager), framework and
   Tailwind config, existing components, existing motion code. On a first visit record the result
   in `agency/00-audit.md`.
2. **Reuse what is there.** If the project already has a tool for the job (an animation library,
   a component set, a carousel), use it, even if it is not the preferred one.
3. **Native first.** HTML, CSS and Astro components when they are sufficient: `<details>`,
   `<dialog>`, popover, CSS transitions, `position: sticky`, scroll-snap, container queries.
4. **One tool per job.** Never two libraries for the same problem (two animation engines doing
   scroll work, two icon sets, two carousels). GSAP and Motion together are acceptable only with
   the split in [motion.md](motion.md).
5. **Verify before installing:** read the library's current documentation and release notes
   rather than relying on memory (APIs, package names and integration steps change); check that it
   is compatible with the project's framework and major versions, that it is maintained, what it
   weighs, and its licence (notes below).
6. **Install** with the project's package manager, pinned through the lockfile.

**Permission to install:**

| Case | Rule |
|---|---|
| A library from the preferred profile, needed for the task, nothing equivalent present | Install it. Log it in `agency/decisions.md` and name it in the report. |
| A library outside the profile, or a second tool for a job already covered | Ask first, with the reason and the cost. |
| Smooth scrolling (Lenis), WebGL, video backgrounds, anything that changes how the whole site scrolls or loads | Ask first. See [motion.md](motion.md). |
| A framework, CMS, database or hosting platform added to or replaced in an existing project | Approval required, always. |

## Using the stack well

- **Tokens first.** The design system's tokens (colour, type, spacing, radii, shadows, motion)
  are defined once as CSS custom properties and mapped into Tailwind's theme. Components use the
  theme; an arbitrary one-off value needs a comment saying why.
- **shadcn/ui is a starting point, not a look.** Take the behaviour and accessibility; replace the
  appearance. Remap its CSS variables to the project's tokens, then restyle radii, borders, type,
  spacing, focus and motion to the approved direction. A recognisable stock shadcn component in a
  client site is a defect. Add only the components the site uses. It needs React: do not add it
  to a site that otherwise has none when a native element would do.
- **Hydration is a cost.** Astro components by default. For islands, choose the latest directive
  that works: `client:visible` or `client:idle` before `client:load`; `client:media` for
  breakpoint-specific UI. Do not hydrate an island only to animate it.
- **Fluid type and spacing** with `clamp()` on the token scale; breakpoints for layout changes.
- **Images:** Astro's image components for local assets; Sanity's image pipeline (hotspot, crop,
  width and format parameters) for CMS assets. Explicit dimensions always.
- **Sanity:** model content from `agency/03-strategy.md`; typed queries (TypeGen); static build
  with a publish webhook by default, live preview or server rendering only when editors need it.
  Dataset, tokens and CORS origins are configured by the designer or with their go-ahead.
- **GitHub and Vercel:** work on branches; every branch gets a Vercel preview URL, which is what
  the designer and client review. Production deploys, domains and environment variables follow the
  launch rules in [quality-launch.md](quality-launch.md). Secrets live in Vercel or Sanity, never
  in the repository.

## Licence and plan notes (verify; these change)

- Astro, Vite, TypeScript, Tailwind CSS, React, shadcn/ui, Motion, Lenis: MIT.
- **GSAP** and all its plugins (ScrollTrigger, SplitText, ScrollSmoother and the rest) are free,
  including for commercial client work, under GSAP's own standard licence. It is not an
  open-source licence; read its current terms once per project.
- **Vercel:** the Hobby plan is for non-commercial use. A client site needs a paid plan, normally
  on the client's own account.
- **Sanity, Supabase:** hosted services with free tiers and usage-based pricing. Check the limits
  against the project, and who owns the account, before launch.
- **Fonts and imagery:** licensing is checked in art direction; a web font needs a web licence.

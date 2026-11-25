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
| Design system, styling, components | **Plain CSS with design tokens** and bespoke Astro components | The default. See *Styling system* below |
| Interactive components | Astro components and native elements; **React** islands | React only when a component needs client state Astro and CSS cannot give |
| Scroll and sequence animation | **GSAP** (ScrollTrigger, SplitText) | See [motion.md](motion.md) |
| Component animation | **Motion** (formerly Framer Motion) | See [motion.md](motion.md) |
| CMS | **Sanity** | Someone will edit content. No editor, no CMS: use Astro content collections |
| Source control | **GitHub** | Always |
| Hosting | **Vercel**; **Cloudflare Workers** as the established alternative | Always. See *Hosting* below |

A site with no interactive components ships no React. A site with one simple reveal ships no
animation library. Start from Astro, TypeScript and one styling system; add each further layer
when a real requirement appears. Astro already runs on Vite: never add a separate Vite setup.

### Styling system: choose exactly one

| Option | Choose it when |
|---|---|
| **Plain CSS with tokens** and bespoke Astro components (default) | New marketing, editorial, portfolio and property sites. Tokens as CSS custom properties, fluid type and spacing with `clamp()`, cascade layers, native elements (`<dialog>`, `<details>`, popover) for interaction. Nothing to override, nothing to upgrade, and the result is the client's own system. Proven on the designer's shipped work. |
| **Lumos** (Astro-native tokens, utilities and accessible components) | Worth proposing when a site needs many standard interactive components (tabs, sliders, complex forms, modals) on a short timeline, or when importing an existing Webflow site. Not yet used by the designer: treat the first project as a trial and say so. |
| **Tailwind CSS + shadcn/ui** | The site is React-heavy (dashboards, complex interactive interfaces), or the project already uses them. |

Why plain CSS is the default: the work is bespoke, so a component framework would mostly be
restyled; the agent writes components quickly, so a framework saves little; and fewer
dependencies means fewer upgrades and breaking changes on client sites.

Never combine them: no Tailwind inside a Lumos project, no shadcn/ui beside Lumos components, no
second token system. An existing project keeps the system it has; replacing a styling system is
a migration and needs approval.

**Evaluating Lumos** when the conditions above apply: read the current official documentation
(https://lumosframework.com/docs/) before proposing it, since it moves quickly and has had
breaking changes between releases. Check that its components cover what the sitemap needs and
that the approved direction can be expressed through its tokens and cascade. Then put the
recommendation (Lumos, or why not) in the stack proposal. Scaffold with its own creator as the
docs describe; do not hand-assemble it.

**Lumos's own agent skills.** A Lumos project ships skills in `.agents/skills`, visible to Claude
Code through `.claude/skills` (for example Figma import, Webflow import, version upgrade, props
audit). They are project-level, so they appear only inside a Lumos project. When present, use
them for those jobs instead of improvising, and follow its upgrade skill for version changes.

**Lumos, when used, is a starting point, not a look.** Set its tokens (colour, type families, scale, spacing,
radii) from the approved direction and restyle its components to the client's identity. The rule
for third-party components below applies to Lumos as much as to shadcn/ui.

**Hosting.** Vercel is the default for a new site. Cloudflare Workers (static assets served by
a Worker, deployed with Wrangler) is the alternative the designer has already shipped Astro
sites on. Prefer it when the project already lives on Cloudflare, when the site needs what the
platform offers alongside it (D1 database, R2 storage, KV, Cloudflare Access to keep a staging
site private), or when the client's domain and DNS are there. A project on either host stays on
it. Name the host in the stack proposal.

**Keep it lean.** A small site needs no React and no CMS: content can live in files until
someone actually has to edit it.

## Profile 2: web applications

Accounts, dashboards, user data, heavy client state: consider **Next.js, React, TypeScript,
Tailwind CSS, shadcn/ui and Supabase** (database, auth, storage), on GitHub and Vercel. This is
where Tailwind and shadcn/ui belong. Use
Profile 1 for the marketing site of the same product unless one codebase is clearly simpler.

Borderline cases (a content site with a login area, a listings site with saved searches): prefer
Astro with a few islands and server endpoints until the interactive part dominates; say which
way you went and why.

## Before adding any library or framework

**Nothing is chosen in the background, and the designer is not asked to choose.** The designer
relies on you for technology decisions and wants to know what is in play before it is used. So
bring one clear recommendation, in plain language: what you will use, what it does for this
project, and what you ruled out. Never a menu of options to pick from, and no jargon without a
half-line explanation. Where it introduces something new to the project, wait for a yes.

1. **Inspect the project:** `package.json`, the lockfile (which package manager), framework
   config, the styling system (Lumos, Tailwind, plain CSS), existing components, existing motion
   code, the project's `CLAUDE.md`, and project-level skills in `.claude/skills`. On a first visit
   record the result in `agency/00-audit.md`.
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
| A library from the preferred profile, needed for the task, nothing equivalent present | Say what you propose and why in one or two lines, and wait for a yes before installing. Log it in `agency/decisions.md`. |
| The framework and stack for a new project | Propose it (profile, the layers you would include and leave out, why) and wait for a yes before scaffolding. |
| A tool the project already has | No approval needed, but say which one you are using before you start. |
| A library outside the profile, or a second tool for a job already covered | Ask first, with the reason and the cost. |
| Smooth scrolling (Lenis), WebGL, video backgrounds, anything that changes how the whole site scrolls or loads | Ask first. See [motion.md](motion.md). |
| A framework, styling system, CMS, database or hosting platform added to or replaced in an existing project | Explain the benefit and the cost; approval required, always. |

## Where technology decisions are recorded

- **The project's `CLAUDE.md`** holds the current stack in a short "Technology" section:
  framework, styling system, component source, animation libraries, CMS, host, and any rule that
  follows ("Lumos project: no Tailwind"). Every session reads it, so later work stays consistent.
  Create or update the section whenever a technology decision is agreed; keep the rest of the
  file as it is.
- **`agency/decisions.md`** keeps the dated log: what was decided, why, and what was rejected.

## Using the stack well

- **Tokens first.** The design system's tokens (colour, type, spacing, radii, shadows, motion)
  are defined once as CSS custom properties: in Lumos's token file on a Lumos site, or mapped
  into Tailwind's theme on a Tailwind site. Components use them; an arbitrary one-off value needs
  a comment saying why.
- **shadcn/ui (React projects) is a starting point, not a look.** Take the behaviour and accessibility; replace the
  appearance. Remap its CSS variables to the project's tokens, then restyle radii, borders, type,
  spacing, focus and motion to the approved direction. A recognisable stock shadcn component in a
  client site is a defect. Add only the components the site uses. It needs React and Tailwind:
  do not add it to a Lumos site or to a site that otherwise has no React.
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

- Astro, Vite, TypeScript, Lumos, Tailwind CSS, React, shadcn/ui, Motion, Lenis: MIT.
- **GSAP** and all its plugins (ScrollTrigger, SplitText, ScrollSmoother and the rest) are free,
  including for commercial client work, under GSAP's own standard licence. It is not an
  open-source licence; read its current terms once per project.
- **Cloudflare:** Workers has a free tier with usage limits; check them against expected traffic
  and who owns the account.
- **Vercel:** the Hobby plan is for non-commercial use. A client site needs a paid plan, normally
  on the client's own account.
- **Sanity, Supabase:** hosted services with free tiers and usage-based pricing. Check the limits
  against the project, and who owns the account, before launch.
- **Fonts and imagery:** licensing is checked in art direction; a web font needs a web licence.

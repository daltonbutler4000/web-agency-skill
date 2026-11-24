# Inspiration sources: pattern libraries and DESIGN.md collections

Three sources the designer uses for inspiration, in addition to the galleries in
[research.md](research.md). Load this file when the designer asks for inspiration, when research
needs product-UI patterns, or when art direction needs style vocabulary. Checked 2026-11-24;
sites change, so confirm anything below that a decision depends on.

They answer different questions. Pick by the question, do not consult all three by habit.

| Question | Source |
|---|---|
| "How do real products handle this screen, flow or pattern?" | Refero |
| "How does a specific company document its design system for agents?" | UI Skills design.md |
| "What does this named style consist of, in tokens and rules?" | designmd.app |

## Refero · https://refero.design/

A library of real product screens and user flows (web apps, iOS apps, and a Styles section),
searchable by page type, flow, UX pattern, UI element and industry. Strongest for product UI:
dashboards, onboarding, pricing and paywalls, checkout, settings, landing pages with product
screenshots. It is weaker for editorial, portfolio and campaign sites; use the galleries for those.

- **Access:** the page is rendered by JavaScript, so open it in a browser, not a plain fetch.
  Without an account or on the free plan only about 3% of the library is visible. The full
  library, the Refero MCP and the Refero skill need a paid Pro plan.
- **MCP:** if a Refero MCP server is connected in this session, use it for pattern research. If it
  is not, do not suggest paying for it unprompted; say once that the designer has it bookmarked
  and that connecting it (https://refero.design/mcp) would give fuller results, then carry on
  with what is publicly visible.
- **Use it for:** stage 2 when the site has app-like parts, and stage 5 when a specific screen or
  flow needs precedent. A Refero screen is a pointer like a gallery entry: name the product,
  open the live product where it is public, and record the Refero page as where it was found.

## UI Skills design.md · https://www.ui-skills.com/design-md

A small curated list (18 entries when checked) of public design.md files from real companies and
open-source projects, for example Vercel, Atlassian, Ant Design, Clerk, Mintlify, Nuxt, Oxide
Computer and the French government system DSFR. Each entry is at `/design-md/<slug>` with the
full Markdown on the page and a copy button. No login was needed.

- **What an entry is:** that company's own guidance, written as instructions to an agent. The
  format varies by company. It describes *their* brand.
- **Use it for:** seeing how a mature system states its rules (type roles, spacing, data display,
  accessibility), as a model when writing `04-art-direction.md` or a project DESIGN.md. Also a
  legitimate source in Mode B when the client's product is built on one of these systems.
- **Do not** apply another company's design.md to a client site. That is copying a brand.
- The same site lists agent skills, a CLI and an MCP. Those are outside this file's scope; do not
  install anything from it without the designer asking.

## designmd.app · https://designmd.app/library

A large library (759 entries when checked) of named *styles*, not companies: Swiss minimalism,
brutalism, neumorphism, Memphis, editorial/magazine, liquid glass, retro and era-based styles, and
many more. Each entry is a DESIGN.md with YAML tokens (colours, typography, components) and
sections for overview, colours, typography, layout, elevation, shapes, components, and do's and
don'ts. Much of the descriptive text is in Portuguese.

- **Access:** public, no login or key.
  - Search: `https://designmd.app/api/search?q=<term>`
  - Entry page: `https://designmd.app/en/library/<slug>`
  - Raw file: `https://designmd.app/library/<slug>/design.md`
  - Rate limit: 30 API requests per minute. Search first, then fetch only the two or three
    entries that fit. Never crawl the library.
- **Use it for:** stage 4, to give a direction a precise vocabulary and to make three directions
  genuinely differ. Reading two contrasting entries is a quick way to widen the spread.
- **Limits:** these are generic, generated descriptions of a style, not evidence that a real site
  works. They do not replace inspected references on the board. No reuse licence was stated on
  the entries, so treat the files as reading material.

## Rules for all three

- **Do not vendor.** Never copy these sites' DESIGN.md files, screenshots or text into this skill
  or commit them to a client repository. Read them in the session; keep any downloaded copy in
  the project's `agency/02-research/` as private reference, named with its source URL.
- **A design.md is input to a direction, never the direction.** The approved brief, the client's
  brand and the designer's chosen references outrank it. Take principles and vocabulary; write
  the project's own tokens.
- **The honesty rules in research.md apply.** Cite only what you opened this session, link the
  original, and say plainly when a login wall or a blocked page stopped you.
- **Quick inspiration requests.** When the designer just wants ideas outside a project, skip the
  stages: ask what the thing is in one question if it is unclear, pull four to eight items,
  starting with the designer's own [bookmarks.md](bookmarks.md) and then the fitting source, and show each with its link, one line on what is worth taking, and one on
  what would not transfer. Offer the full research stage only if they want to go further.

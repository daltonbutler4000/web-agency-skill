# Research: competitors, audience and visual references

Research comes before design on every new site. The designer sees real, high-quality references
before any aesthetic is proposed.

## Honesty rules (non-negotiable)

- Only cite a site you found in this session's search results or opened yourself. Never recall a
  site from memory and present it as verified; if you suggest one from memory, open it first.
- "Inspected" means you loaded the rendered page. If a site blocked you, timed out, or showed a
  cookie wall you could not pass, record it as *not inspected* with the reason. Do not describe it.
- A gallery page is a pointer. Follow it to the original site and link the original.
- Do not retry a blocked site repeatedly or work around access controls. Move on.
- Screenshots are for the designer's private reference inside the project. Do not publish them,
  and do not reuse a reference's images, copy or code in the build.
- If network access is restricted and sites cannot be opened, say so at once and offer a
  links-only board clearly labelled as unverified, rather than a board that looks inspected.

## Part 1 · Context research

Use `deep-research` (or web search) for specific questions, not a general survey:
- Three to six direct competitors: what they say, how they are structured, where they are weak.
- The audience: what they need to know before acting, the language they use.
- Category conventions worth keeping, and clichés worth avoiding.

Write the conclusions, with sources, in `agency/02-research/findings.md`. Half a page is enough.

## Part 2 · Visual references

If `visual-direction-research` is installed, invoke it with the approved brief and ask it to save
into `agency/02-research/`. It owns the search, capture, evidence record and HTML board; add the
requirements below to the request. If it is not installed, do the same steps yourself.

1. **Search axes from the brief:** the client's industry; two or three adjacent industries with
   the same kind of content or audience; and pure craft (typography-led, image-led, editorial,
   motion-led) regardless of industry.
2. **Sources:** Awwwards, SiteInspire, Godly, Land-book, plus other curated galleries, agency
   case studies and live brand sites found through search. Not Mobbin.
   The galleries often refuse automated or cloud browsers (HTTP 403/429, reset connections).
   That is expected: use web search to find what they feature (for example
   `site:awwwards.com <query>`, `site:siteinspire.com <query>`), then open the original sites,
   which usually load normally. Do not present a gallery listing you could not open as inspected.
3. **Longlist, then curate** to roughly 8–12 references that differ from each other. Fewer strong
   references beat a padded list. Include at least three from outside the client's industry.
   For product-UI patterns and flows (dashboards, onboarding, pricing, checkout), Refero is an
   approved source; see [inspiration-sources.md](inspiration-sources.md) for access and limits.
4. **Inspect each one** in a browser: home plus at least one inner page, desktop and mobile width.
   Note hover, scroll and transition behaviour only where you actually observed it.
5. **Capture** with `node <skill-dir>/scripts/capture.cjs --out agency/02-research <urls…>`
   (writes `shots/` and `references.json`). Open the saved images and discard any that show a
   loader, cookie banner or broken layout; recapture or mark as failed.
6. **Evaluate each reference** on: typography, imagery, composition and layout, colour,
   interaction, motion. For each, state the *principle* worth taking and what would not transfer
   (for example, "depends on commissioned photography the client does not have").
7. **Group** the references into three or four candidate directions, each with a short name and
   one sentence on the idea behind it.

## The reference board

A local HTML file, `agency/02-research/board.html`, built from `assets/reference-board.html`
when the specialist is not producing one. It must show, per reference: screenshot, site name,
link to the original, where it was found, capture date, inspection status, and the observations.
References are grouped by direction. Verify the board in a browser before presenting it:
every image loads, every link points to the original.

## Feedback and round two

Present the board and ask: which references the designer likes, what specifically they like in
each (type, layout, imagery, motion, tone), and what they dislike. Record the answers verbatim in
`findings.md`. They may mix: type from one, composition from another.

If asked, or if nothing landed, run a second, narrower round aimed at the stated likes, saved as
`board-r2.html`. Keep round one. Two rounds is the norm; ask before a third.

## Carry forward

The chosen references and the reasons become the input to art direction and are listed in
`04-art-direction.md`. During design, development and critique, check work against them. They
are the shared definition of the intended quality.

# Design system

The tokens are the source of truth: `site/src/styles/global.css` (`:root`). The full record is `DESIGN.md` at the project root, with
`.impeccable/design.json` beside it; this file is the short version.

- **Colour:** chalk `#F5F2EA` (ground), sand `#E8DDC9`, terracotta `#A9492A` (actions and the
  "how we work" section), terracotta-deep `#8C3A1F` (hover, labels on sand), ink `#2A211B`,
  stone `#665C51`, line `#D5C9B4`. All text pairs measured at 4.86:1 or better.
- **Type:** Newsreader variable (light for display, italic for names and emphasis) and Hanken
  Grotesk variable, both self-hosted from `site/public/fonts` (OFL). Six-step fluid scale.
- **Space:** one scale `--s1` to `--s10`, a fluid gutter and a fluid section rhythm.
- **Shape:** square corners (2px on controls), hairline rules, no shadows except the phone
  action bar.
- **Components:** button (terracotta, quiet, light), drawn-underline link, framed photograph
  with split caption, home card with title tab, island block, numbered step, form field,
  choice chips, error summary, success state, footer disclosure.
- **Motion:** one authored moment, the opening (photograph wipes up, text rises). Home titles
  slide onto their photographs on scroll where the browser supports scroll-driven animation.
  Everything is visible without motion; reduced-motion removes it.
- **Breakpoints:** 1100px (homes to two columns), 900px (single column, phone action bar),
  700px (homes to one column).

Open decision: the ground. `shots-wip/ground-compare.jpg` shows the approved limewash
`#F6F1E7`, the chalk now in use `#F5F2EA`, and a whiter lime `#FAF9F6`.

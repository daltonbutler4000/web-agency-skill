---
name: Solell
description: A small estate agency for Ibiza and Mallorca, set like an almanac on limewash, sand and terracotta.
colors:
  terracotta: "#A9492A"
  terracotta-deep: "#8C3A1F"
  on-terracotta: "#FBF4E8"
  chalk: "#F5F2EA"
  sand: "#E8DDC9"
  ink: "#2A211B"
  stone: "#665C51"
  line: "#D5C9B4"
  field-line: "#77695A"
  error: "#8C2A14"
typography:
  display:
    fontFamily: "Newsreader, Newsreader Fallback, Georgia, serif"
    fontSize: "clamp(2.75rem, 5.6vw + 1.2rem, 5.75rem)"
    fontWeight: 300
    lineHeight: 0.98
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Newsreader, Newsreader Fallback, Georgia, serif"
    fontSize: "clamp(2.25rem, 3.4vw + 1.3rem, 4rem)"
    fontWeight: 300
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Newsreader, Newsreader Fallback, Georgia, serif"
    fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)"
    fontWeight: 300
    lineHeight: 1
    letterSpacing: "-0.02em"
  subtitle:
    fontFamily: "Newsreader, Newsreader Fallback, Georgia, serif"
    fontSize: "clamp(1.375rem, 1vw + 1.1rem, 1.75rem)"
    fontWeight: 300
    lineHeight: 1.32
  lead:
    fontFamily: "Newsreader, Newsreader Fallback, Georgia, serif"
    fontSize: "clamp(1.125rem, 0.4vw + 1.02rem, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Hanken Grotesk, Hanken Fallback, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  action:
    fontFamily: "Hanken Grotesk, Hanken Fallback, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 500
    lineHeight: 1
  caption:
    fontFamily: "Hanken Grotesk, Hanken Fallback, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.4
  label:
    fontFamily: "Hanken Grotesk, Hanken Fallback, system-ui, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.14em"
rounded:
  none: "0"
  control: "2px"
spacing:
  s1: "0.25rem"
  s2: "0.5rem"
  s3: "0.75rem"
  s4: "1rem"
  s5: "1.5rem"
  s6: "2rem"
  s7: "3rem"
  s8: "4rem"
  s9: "6rem"
  s10: "8rem"
  gutter: "clamp(1.25rem, 4.4vw, 4rem)"
  section: "clamp(4.5rem, 9vw, 9rem)"
  measure: "34rem"
  max: "90rem"
components:
  button-primary:
    backgroundColor: "{colors.terracotta}"
    textColor: "#ffffff"
    typography: "{typography.action}"
    rounded: "{rounded.control}"
    padding: "0 1.5rem"
    height: "3rem"
  button-primary-hover:
    backgroundColor: "{colors.terracotta-deep}"
  button-quiet:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.action}"
    rounded: "{rounded.control}"
    padding: "0 1.5rem"
    height: "3rem"
  button-quiet-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.chalk}"
  button-light:
    backgroundColor: "{colors.on-terracotta}"
    textColor: "{colors.ink}"
    typography: "{typography.action}"
    rounded: "{rounded.control}"
    padding: "0 1.5rem"
    height: "3rem"
  button-light-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-terracotta}"
  text-link:
    textColor: "{colors.ink}"
    typography: "{typography.action}"
    padding: "0.75rem 0"
    height: "2.75rem"
  text-link-hover:
    textColor: "{colors.terracotta-deep}"
  input:
    backgroundColor: "{colors.chalk}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "0.75rem 1rem"
    height: "3rem"
  choice:
    backgroundColor: "{colors.chalk}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0 1.5rem"
    height: "2.75rem"
  choice-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.chalk}"
  frame:
    backgroundColor: "{colors.sand}"
    rounded: "{rounded.none}"
  name-tab:
    backgroundColor: "{colors.chalk}"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    padding: "0.36em 0.6em 0.08em 0"
  panel:
    backgroundColor: "{colors.sand}"
    rounded: "{rounded.none}"
    padding: "clamp(1.5rem, 4vw, 3.5rem)"
---

# Design System: Solell

## Overview

**Creative North Star: "The Almanac"**

Solell reads like a small printed almanac of houses: each entry has a name, a place and a sentence before it has a figure. The page is paper. A chalk-limewash ground carries almost everything, a sand ground marks a change of chapter, one terracotta owns every action and one whole section, and a warm brown-black ink does the reading. Nothing glows, floats or sits on a photograph.

Two typefaces split the work. Newsreader, light and often italic, is the voice: headlines, names of houses and islands, the sentences that carry judgement. Hanken Grotesk is the record: facts, prices, captions, labels, controls. Photographs are objects on the page, framed, square-cornered and captioned beneath, with the italic name of the thing cut into the bottom edge on a tab of the ground colour.

Density is low and the rhythm is editorial: asymmetric two-column sections, one column dropped below the other, hairline rules instead of boxes. Motion is page-like: one authored entrance on the opening, a name tab that slides into place as its photograph arrives, and underlines that draw.

**Key Characteristics:**
- Paper grounds (chalk, sand), one terracotta, warm ink; no gradients, no tints of other hues.
- Newsreader Light with italics for voice; Hanken Grotesk for facts.
- Framed 4:5 photographs with captions beneath; never a photograph behind text.
- Italic names on paper tabs overlapping the bottom of the frame.
- Hairline rules (1px) and square corners; controls soften to 2px.
- Flat surfaces; depth comes from ground changes and overlap.

## Colors

A sunlit, earthen palette: two paper grounds, one fired-clay accent and warm neutrals, all leaning the same yellow-red way.

### Primary
- **Terracotta** (`terracotta`): every primary action, the small place labels on chalk, the italic island group headings, the vertical italic beside the opening photograph, the focus ring, text selection and caret. It is also the ground of one whole section (the process section), where it carries `on-terracotta` text.
- **Deep Terracotta** (`terracotta-deep`): hover state of the primary button and of text links, small terracotta text when it sits on sand, and the placeholder ground of a photograph frame inside the terracotta section.
- **Limewash on Terracotta** (`on-terracotta`): text, captions and the light button on the terracotta ground; rules there are this colour at 32% opacity.

### Neutral
- **Chalk** (`chalk`): the page ground, the header, input and choice backgrounds, and the tab behind a home's name.
- **Sand** (`sand`): the second ground. It backs the right half of the opening, the islands section and the enquiry panel, and it is the placeholder colour of every photograph frame.
- **Warm Ink** (`ink`): all primary text, the quiet button's outline, the selected choice, the footer ground.
- **Stone** (`stone`): secondary text on chalk and sand: captions, facts, descriptors, form notes.
- **Line** (`line`): 1px hairline rules and section dividers on chalk and sand. Decorative only; it does not bound a control.
- **Field Line** (`field-line`): borders of inputs and choices, the one neutral that must reach 3:1 against both grounds.
- **Error** (`error`): invalid field border, field messages and the form's error summary.

### Named Rules
**The One Clay Rule.** Terracotta is the only accent. It marks actions and place, and it may take over one full section per page as a ground. No second accent, no tint of terracotta as a surface.

**The Clean Ground Rule.** Text sits on chalk, sand, terracotta or ink, never on a photograph and never on a gradient.

**The Sand Darkens Rule.** Small terracotta text is for chalk. On sand, use `terracotta-deep`; plain terracotta on sand is reserved for large italic display.

## Typography

**Display Font:** Newsreader, variable 200 to 800 with a true italic (fallback: metric-matched Georgia, then serif)
**Body Font:** Hanken Grotesk, variable (fallback: metric-matched Arial, system-ui)

**Character:** A light newspaper serif with a generous italic set against a plain, even grotesque. The serif speaks and names; the sans keeps the record. Both are self-hosted.

### Hierarchy
- **Display** (300, `clamp(2.75rem, 5.6vw + 1.2rem, 5.75rem)`, 0.98, -0.025em): the page headline only, balanced, held to about 9.4em wide, with one phrase in italic.
- **Headline** (300, `clamp(2.25rem, 3.4vw + 1.3rem, 4rem)`, 1.02, -0.02em): section headings, each with an italic second clause. Set italic throughout, the same size names an island and the form's thank-you.
- **Title** (300 italic, `clamp(1.75rem, 2.5vw, 2.5rem)`, 1, -0.02em): the name of a home on its tab.
- **Subtitle** (300, `clamp(1.375rem, 1vw + 1.1rem, 1.75rem)`, 1.32): the large statement paragraph; in italic terracotta it heads a group of homes; at weight 400 and 1.15 it titles a process step.
- **Lead** (400, `clamp(1.125rem, 0.4vw + 1.02rem, 1.25rem)`, 1.5): serif running text, capped at 34rem, wrapped pretty. Home descriptions use it at 1.45.
- **Body** (400, 1.0625rem, 1.55): sans text for process steps, form fields and anything factual.
- **Action** (500, 0.9375rem): buttons, text links, navigation, field labels.
- **Caption** (400, 0.875rem, 1.4): photograph captions, facts and prices (lining tabular figures), notes, in `stone`.
- **Label** (500, 0.78rem, 0.14em, uppercase): place names beneath a home's name, lists of areas, terms in the contact list.

### Named Rules
**The Voice and Record Rule.** If a line carries judgement or a name, it is Newsreader. If it carries a fact, a figure or an instruction, it is Hanken Grotesk.

**The Italic Names Rule.** Italic is for proper names (homes, islands, the wordmark) and for the turned clause of a heading. It is not general emphasis.

**The Label Below Rule.** The uppercase label never sits above a heading. It follows the name it locates, or stands as the term of a list.

## Layout

A centred container of 90rem with a fluid gutter (`clamp(1.25rem, 4.4vw, 4rem)`). Sections are separated by one fluid interval (`clamp(4.5rem, 9vw, 9rem)`); everything inside uses the ten-step space scale. Full-bleed grounds (sand, terracotta, ink) run edge to edge while their content keeps the container.

Sections are two unequal columns, text against a single framed photograph or panel: 1:1 for the opening, 7:3, 7:4 and 5:6 elsewhere. Paired or tripled items are staggered rather than aligned: the middle home of three sits 4rem lower, the second island 6rem lower. Home cards run three across, two below 1100px (the third held to half width), one below 700px. Below 900px every section becomes one column, the staggers flatten, secondary photographs narrow to about three-quarters of the column, the header drops its navigation and action, and a full-width primary button docks to the bottom of the screen until an on-page action or the enquiry section is in view.

The opening fills the first screen (`min(100svh - header, 54rem)`) as a split: text on chalk, photograph on sand. Its frame takes its width from the available height so it stays 4:5 at any viewport.

**The Four-by-Five Rule.** Photographs of houses and details are framed 4:5 portrait. The two island photographs are 3:2 landscape: a place, not a house. No other ratio.

## Elevation & Depth

Flat. Surfaces have no shadows and no borders around them; depth is tonal (chalk, then sand, then terracotta or ink) and physical (a name tab overlapping the bottom of its photograph). The sticky header is opaque chalk over a hairline.

### Shadow Vocabulary
- **Dock shadow** (`box-shadow: 0 10px 28px -10px rgb(42 33 27 / 0.55)`): only under the phone action bar, the one element that floats over the page.

### Named Rules
**The Floating Only Rule.** A shadow means the element is fixed above scrolling content. Nothing in the flow of the page casts one.

## Shapes

Square. Photograph frames, panels, the error summary and name tabs have no radius. Controls (buttons, inputs, choices) and the focus ring soften by 2px, just enough to stop a hard pixel corner. Structure is drawn with 1px hairlines: under the header, above a section head, above a card's facts, between process steps, trailing a group heading to the edge of the column. The focus indicator is a 2px terracotta outline offset 3px (1px on text fields), switching to the pale ground colour on terracotta and ink.

## Components

### Buttons
Plain and assured: a solid block of terracotta, no icon, sentence case.
- **Shape:** 3rem tall, 1.5rem side padding, 2px radius, 1px border in the fill colour.
- **Primary:** terracotta fill with white text; hover deepens to `terracotta-deep`; active drops 1px.
- **Quiet:** transparent with ink text and ink border; hover fills ink with chalk text. Pairs with a primary, never alone as the main action.
- **Light:** `on-terracotta` fill with ink text, for the terracotta ground; hover fills ink.
- **Transitions:** colour over 180ms.

### Text link
A sans 500 link with a 1px underline drawn as a background, at least 2.75rem tall. On hover the underline retracts to the right over 420ms and the text turns `terracotta-deep`. Navigation links do the reverse: no underline at rest, one drawn in from the left on hover.

### Framed photograph
A square-cornered frame on a sand placeholder, image cropped to cover, 4:5. Beneath it a caption row in `stone`: what it shows on the left, the island on the right. Inside a home card the image eases to 1.025 scale on hover over 900ms.

### Name tab (signature)
The italic name of a home or island sits on a tab of the surrounding ground colour, pulled up over the bottom-left of its photograph (about -0.9em for a home, -0.62em for an island) and shrink-wrapped to the text, so the name appears cut into the picture. Where scroll-driven animation is supported, the tab wipes in from the left and rises 0.5em as the card enters.

### Home card
Top to bottom, left-aligned: framed photograph, name tab, terracotta label with place and island, one serif sentence, a hairline, then facts on the left and price on the right in caption size (price in ink at 500), and a text link to enquire. No border, no background, no radius.

### Inputs / Fields
- **Style:** chalk fill, 1px `field-line` border, 2px radius, 3rem tall, label above in Action type. Text areas start at 8rem.
- **Hover / Focus:** border turns ink on hover; focus adds the 2px terracotta outline and a terracotta border.
- **Error:** `error` border doubled by a 1px inset, a message beneath in caption size at 500, and a bordered summary on chalk at the top of the form.
- **Choice:** radio options as 2.75rem outlined blocks; the selected one fills ink with chalk text.
- **Panel:** forms sit on a square sand panel with fluid padding.

### Navigation
A sticky chalk bar 4.75rem tall over a hairline: italic serif wordmark (400, 1.9rem), a `stone` descriptor behind a vertical hairline, three anchor links pushed right, then a primary button. On phones only the wordmark and descriptor remain; the docked button carries the action.

### Footer
Ink ground with pale sand text. An oversized italic wordmark in `sand` (`clamp(5rem, 17vw, 15rem)`), then three columns: a serif line, a disclosure paragraph, and hairline-ruled disclosure rows with a drawn chevron that turns when open.

## Do's and Don'ts

### Do:
- **Do** frame every photograph square-cornered with its caption beneath: 4:5 for houses and details, 3:2 for the two islands only.
- **Do** put the name before the figure: italic name on its tab, then place, then a sentence, then facts and price.
- **Do** keep terracotta for actions, place labels and one full section; use `terracotta-deep` for small text on sand.
- **Do** separate with 1px `line` rules and ground changes, and bound controls with `field-line`.
- **Do** keep targets at least 2.75rem tall and buttons 3rem.
- **Do** stagger paired items (4rem or 6rem) on wide screens and flatten the stagger in one column.
- **Do** honour reduced motion: every entrance and transition collapses, and content is visible without any of them.

### Don't:
- **Don't** set text over a photograph or use a photograph as a section background.
- **Don't** add a second accent colour, a gradient, or gold on black.
- **Don't** open with an aerial bay, an infinity pool, a search box or a portfolio count.
- **Don't** place the uppercase label above a heading.
- **Don't** give cards borders, fills, radii or shadows; only the docked phone button casts a shadow.
- **Don't** round frames or panels, or round controls beyond 2px.
- **Don't** use italic for emphasis in running text, or a script face for the wordmark.

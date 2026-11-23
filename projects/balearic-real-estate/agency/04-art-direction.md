# Art direction: three directions

Status: **A · Almanac approved 2026-11-23** · 2026-11-23 · Design lead used for the specimens: see the note
at the end.

All three share what research and strategy fixed: the working name **Solell**, photographs
framed and never used as backgrounds, no search box, text on clean grounds, an "Enquire
privately" action always in reach, and the same copy and three homes so they can be compared
fairly. One screen was built per direction (opening plus the start of "Selected homes").

Specimens: `../prototypes/direction-a|b|c/index.html` · Screenshots: `04-art-direction/`

**The name.** *Solell* is Catalan for the side of a hill that takes the sun, where farmhouses
were traditionally built. One web search found no estate agency of that name on the islands;
that is not a trademark check.

**Photographs in the specimens** are stand-ins from Wikimedia Commons (CC0 and CC BY-SA),
showing real public buildings and streets in Santa Eulària, Sant Llorenç de Balàfia,
Valldemossa and Fornalutx. They are not the "homes"; sources are in `prototypes/img/sources.json`.

---

## A · Almanac (recommended)

**Idea:** the agency as a small publication; a literary serif does the talking and each home
has a name before it has a price.

- **Typography:** Newsreader (Google Fonts, OFL), light weight with its italic for emphasis
  and for home titles; Hanken Grotesk (OFL) for labels, facts and buttons. Large, light,
  tightly set headlines; serif body at 18–20px.
- **Colour:** Limewash `#F6F1E7` (ground) · Sand `#E8DDC9` (second ground) · Terracotta
  `#A9492A` (action, place labels, one accent word) · Ink `#2A211B` (text, a warm
  brown-black) · Stone `#665C51` (secondary text) · Line `#D5C9B4`.
- **Layout:** split opening, text on limewash and a framed photograph on sand with a vertical
  italic caption. Homes in three columns with the middle one dropped; each italic title sits
  on a limewash tab cut into the bottom of its photograph.
- **Imagery:** portrait crops, 4:5, materials and light. Captions under photographs.
- **Motion:** quiet and page-like. Signature moments: the opening photograph is revealed by a
  slow upward wipe as the headline settles; home titles slide a few pixels onto their
  photographs as they enter. Nothing else moves except hover states.
- **References:** Inigo (titles for homes, tinted grounds, title crossing the image edge),
  Domus Nova (framed photograph, split caption), Moredesign (materials imagery), Hotel
  Corazón (one warm colour, brown instead of black).
- **Trade-offs:** depends on good writing for six homes. Least surprising of the three.
  Newsreader is widely available, so distinctiveness has to come from how it is set.

## B · Masthead

**Idea:** the name is the design; one grotesque, black on limewash, and the six homes set as
a numbered index, like a catalogue.

- **Typography:** Archivo variable (Google Fonts, OFL) only: expanded bold for the masthead,
  section titles and numerals; normal width for everything else.
- **Colour:** Limewash `#F4F1EA` · Ink `#141312` · Terracotta `#A8421F`, used once as a full
  band · Grey `#66625B` · Soft line `#D9D4C9`.
- **Layout:** wordmark across the full width, a ruled line, the statement in three columns,
  then a wide photograph below the type. Homes as rows 01–06 with thumbnail, name, sentence,
  price. One terracotta band for unlisted homes.
- **Imagery:** one wide landscape crop; small thumbnails in the index, so weak images matter
  least here.
- **Motion:** crisp and mechanical. Signature moments: the masthead letters rise into place
  on load; index rows expand on hover or tap to show a larger photograph.
- **References:** White Ibiza (masthead, type above the photograph), Domus Nova (restraint),
  Hotel Corazón (colour used as a full ground, enquiry first).
- **Trade-offs:** the most graphic and the most memorable in a portfolio. Colder; reads
  closer to a design studio or gallery than a trusted adviser. The index undersells the
  homes: buyers see thumbnails, not houses.

## C · Terra

**Idea:** the whole page is the colour of the earth; a poster for a place, centred and warm.

- **Typography:** Young Serif (Google Fonts, OFL), one weight, roman, for all headings;
  Hanken Grotesk for text.
- **Colour:** Terracotta `#9C4226` (page ground) · Limewash `#FBF3E4` (text on terracotta,
  card ground; contrast about 5.9:1) · Deep brown `#2B140C` (text on light) · Sand `#EAD9BF`
  (homes section) · Clay `#7F331C` (links on light).
- **Layout:** centred throughout. Opening photograph in an arched frame; homes as three
  cards with arched photographs.
- **Imagery:** arched crops; warm subjects sit best on the ground colour.
- **Motion:** soft and slow. Signature moments: the arch opens from its centre on load; the
  ground shifts from terracotta to sand as the homes arrive.
- **References:** Hotel Corazón (single saturated ground, brown and cream, centred poster
  composition), Blakstad (the white wall as subject).
- **Trade-offs:** the most "sunlit" and the least "quiet". Reads as a hotel or a restaurant;
  a buyer spending millions may not read it as an adviser. Arched frames and a chunky serif
  are a current fashion and will date. Centred text limits how much the page can say.

---

## Recommendation

**A · Almanac.** It is the direction you already chose from the research, it carries the
agency's judgement through writing, and it is the calmest place to ask for a private enquiry.

**Weakest: C · Terra.** Handsome as a poster, wrong for the trust this page has to earn.

**B · Masthead** is the strongest alternative and the better pure portfolio piece. If A feels
too polite, the coherent way to add edge is one element from B: number the homes 01–06 in the
grotesque, as a quiet catalogue reference. I would not mix further.

## Approval commits to

Typefaces, palette, layout approach, imagery approach and motion character of the chosen
direction, and the name Solell.

## Two things to decide with the approval

1. **Photography for the six homes.** Stand-ins of public buildings cannot be the homes.
   Recommended: generate the home photographs (interiors and exteriors in a consistent
   light), keep licensed photographs of real places only for the islands section, and label
   everything in the credits. Unsplash search is not reachable from this environment, only
   its image server, so Unsplash images would need you to send links.
2. **Design lead for the build.** The specimens were built by hand within
   `design-taste-frontend`'s session, without its dealt palettes, fonts or finish gate,
   because its house rules conflict with the direction research chose: no captions under
   images, one section per screen, palettes and fonts dealt rather than chosen. Recommended:
   switch the lead to `impeccable` for design and build, so the approved direction is not
   bent to pass another skill's checker.

# Content

Voice: plain, specific, a little dry. Concrete nouns, no superlatives, British spelling. The
agency says what it would do, not how good it is.

## Decisions

- Headline: "Houses on the sunlit side of two islands."
- Every home has a name, a village, one sentence, three facts and a price or "price on request".
- One action wording throughout: "Enquire privately"; under homes, "Enquire about <name>".
- Errors name the problem and the fix; the success state says honestly that nothing was sent.
- Metadata: title, description and Open Graph title/description are set. `noindex` is on
  because this is a concept.

## Invented, and labelled as such on the page

The agency, Aina Ferrer, the email address (`.example` domain), the telephone number, six
homes, their facts and prices, the four-step process. No testimonials, awards, press or figures.

Place names are real. Home names are generic Catalan or Spanish house names and may coincide
with real properties; none is intended.

## Still needed

1. **Final photographs** (see prompts below). All eleven on the page are stand-ins.
2. **Open Graph image.** None yet; make it from the final opening photograph.
3. **Translations**, if Spanish and German are wanted.
4. A decision on the ground colour (see `05-design-system.md`).

## Photograph prompts

Shared style line, append to every prompt: *natural light photograph, 35mm lens, Kodak Portra
colour, soft contrast, no people, no text, no watermark, Balearic Islands, architectural
editorial for a quiet estate agency.* Generate at 4:5 portrait unless stated; export 1600px on
the long side.

| Slot | File to replace in `site/src/assets/photos/` | Prompt |
|---|---|---|
| Opening | `opening-limewash.jpg` | A thick whitewashed farmhouse wall with a deep arched doorway in hard morning sun, sharp diagonal shadow, clear blue sky, a corner of terracotta roof tile |
| Can Pou | `can-pou.jpg` | Traditional white Ibizan finca with cubic volumes and small windows behind a dry garden of fig and oleander, stone well in the foreground, red earth path |
| Casa des Portal | `casa-des-portal.jpg` | Roof terrace of a whitewashed townhouse inside old city walls, lime-plaster bench, terracotta pots, a cathedral bell tower close by, late afternoon light |
| Es Varador | `es-varador.jpg` | Low white house on a pine-covered slope above weathered timber boat sheds and a slipway, calm clear water, seen from the shore |
| Casa de la Campana | `casa-de-la-campana.jpg` | Ochre stone village house with green shutters and an arched timber door, an iron bell beside it, a glimpse of a walled garden through an open gate |
| Es Marès | `es-mares.jpg` | Honey-coloured stone farmhouse with a round tower and green shutters under a limestone mountain ridge, olive terraces, winter sun |
| Sa Clastra | `sa-clastra.jpg` | Cobbled courtyard of an old Mallorcan estate house with a stone well at its centre, arched carriage doors, hills beyond |
| Ibiza | `island-ibiza.jpg` (3:2 landscape) | Small rocky cove with clear turquoise water under ochre cliffs and Aleppo pines, no boats, midday |
| Mallorca | `island-mallorca.jpg` (3:2 landscape) | Stone hill village among cypress and olive terraces under the Tramuntana mountains, evening sky |
| Detail | `detail-bell.jpg` (3:4) | Close view of an old iron door bell on a wrought bracket against sunlit ochre lime plaster |
| Process | `detail-steps.jpg` (8:11) | Stone steps climbing between village houses in strong sun, bougainvillea over a wall, deep shadow on one side |

Keep each filename when replacing and the page picks the new image up on the next build.
Update `credits` in `site/src/data/site.js` and the footer note afterwards.

# Critique and triage

2026-11-23 · Two independent assessments (a design review and a detector plus browser pass),
after the earlier finish review. Heuristic score from the design review: **24 of 32** (two of
ten heuristics do not apply to a one-page persuasion site), "good". Verdict on specificity:
grounded in this agency, not generic. The scores were given before the fixes below.

## Problems (fixed)

| # | Finding | Fix |
|---|---|---|
| 1 | On a phone, tapping "Enquire" landed on a heading and contact details with no form field in view | Form now follows the heading and intro; contact details moved below it on phones |
| 2 | The chosen house was only written into the fifth field, out of sight, and was dropped if the buyer had already typed | "Enquiring about Es Marès, Fornalutx" now heads the form with a Remove control, and travels in a hidden field whatever the message says |
| 3 | Nothing said when a reply would come or what happens next | One sentence beside the send button and first in the success state: Aina replies herself, usually within one working day |
| 4 | The phone action bar vanished into the terracotta section and duplicated each house's own link | Bar turns light over terracotta; while a house is on screen it reads "Enquire about <house>" and carries that house |
| 5 | Phone action bar sat outside any page landmark (automated accessibility scan) | Moved inside the header landmark |
| 6 | Error summary counted problems without naming them | Now names them: "please check your name and your email" |
| 7 | Two orphaned last words on phones | Wrapping set to avoid them |

## Inconsistencies (fixed)

- No section navigation on phones: the three section links now stay in the header.
- Between 901 and 1100 pixels the third house of each island sat beside an empty half row:
  three columns now hold from 901 up; from 701 to 900 the third house runs across both columns.
- Footer text colours, button text colour and entrance timings were literal values: now tokens.
- "Homes" and "houses" were mixed: "houses" everywhere a visitor reads it.
- Island choice chips were 41px tall on phones: now 48px.
- "Four steps, none of them hurried" was the third promise of patience on the page: now
  "Four steps, from first call to keys."

## Preferences (not changed; for the designer)

1. **Italic serif headings at 64 to 92px.** The detector calls large italic serif display a
   common pattern. It is the approved direction, so it stays.
2. **Say which house you would buy.** The page claims Solell will "tell you plainly which one
   we would buy" and no card does. Marking one house "the one we would buy, and why" would
   prove the positioning. It is new invented content, so it needs your say.
3. **Price and size are the smallest line on each card.** Deliberate ("name before figure"),
   but a buyer comparing agencies scans for exactly those.
4. **No current-section marker in the header.**
5. **No country-code hint on the telephone field.**
6. **Photograph credit links are 30px tall on phones.** Above the 24px AA minimum, below the
   44px comfort size used elsewhere.
7. **Who is Aina?** Only "Partner, Solell". A two-line note about her would help the
   privacy-minded buyer; it is invented content.

## Known and accepted

- Photographs are stand-ins. They hurt most on the house cards, where a public wall and a
  fishing boat stand for houses the copy says Solell knows room by room. The page says so
  beneath the houses and in the footer.
- English only, for an audience that is largely German, Dutch and Swiss.
- Detector findings on the built file (flat type hierarchy, cramped padding, one contrast
  advisory) were checked against the rendered page and are false positives: the static scan
  did not read the external stylesheet, and the flagged colour pair is 60px display text.

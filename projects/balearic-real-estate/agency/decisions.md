# Decisions

- **2026-11-23** Mode A inferred: a brief, no designs supplied.
- **2026-11-23** Designer's answers: concept/portfolio project; primary goal buyer enquiries;
  imagery may be AI-generated or Unsplash; build in a subfolder of the skill repository for now.
- **2026-11-23** Project root set to `projects/balearic-real-estate/` so nothing mixes with the
  skill's own files.
- **2026-11-23** **Approval: brief.** Designer approved `01-brief.md` as drafted, no conditions.
  Commits to goal (buyer enquiries), audience, one-page scope and Mode A. Assumptions 1–5 stand.
- **2026-11-23** Research round 1 delivered: 8 references in 4 directions, 3 category-baseline
  sites, 7 sites recorded as not inspected. Agency recommendation (not approved): Almanac base
  with Gallery White framing and one warm colour.
- **2026-11-23** Research feedback: designer accepted the agency recommendation as given
  ("Go with your recommendation"). Chosen direction: Almanac base, Gallery White framing, one
  warm colour. Full-Bleed Cinema dropped. No second research round.
- **2026-11-23** Strategy drafted (`03-strategy.md`): 8 sections, six homes (3 per island),
  illustrative guide prices shown, no invented proof, named fictional contact without portrait.
- **2026-11-23** Strategy reviewed: designer said "Go" with no changes. Decisions 1–5 in
  `03-strategy.md` stand.
- **2026-11-23** Design lead chosen: `design-taste-frontend` (Mode A, new site, no brand).
  Override noted: its house rules (no captions, one section per screen, dealt palettes and
  fonts, finish gate) conflict with the research outcome, so the three specimens were built by
  hand without its deal or gate. Agency recommends `impeccable` as lead for the build.
- **2026-11-23** Working name "Solell" proposed (one web search, no conflict found; not a
  trademark check). Three directions presented: A Almanac (recommended), B Masthead, C Terra.
- **2026-11-23** **Approval: direction.** Designer approved **A · Almanac** ("Go with A,
  generate the photos, switch to impeccable"). Commits to: name Solell; Newsreader + Hanken
  Grotesk; limewash / sand / terracotta / ink palette; split opening, framed 4:5 photographs
  with captions, italic home titles on tabs; quiet page-like motion. Rejected: B Masthead
  (colder, index undersells the homes), C Terra (reads as hospitality, will date).
- **2026-11-23** Imagery: home photographs to be AI-generated in one consistent light;
  licensed photographs of real places only for the islands section; all credited.
- **2026-11-23** Design lead switched from `design-taste-frontend` to `impeccable` for design,
  build, critique and polish. Reason: Taste Skill house rules conflict with the approved direction.
- **2026-11-23** Carried into the build from the design hook: test a chalkier ground against
  limewash; remove the floating label above the headline; check title-tab padding.
- **2026-11-23** Imagery changed: designer declined Figma AI image generation ("No, use
  stand-ins"). The page ships with eleven Wikimedia Commons stand-ins, credited in the footer
  and stated beneath the homes; generation prompts are in `06-content.md`.
- **2026-11-23** Stack: Astro 5, plain CSS tokens, self-hosted variable fonts, `sharp` for
  responsive images. No CMS, no client framework; one small inline script for the form.
- **2026-11-23** Build decisions: homes grouped by island; "How we work" is the one
  terracotta section; ground moved from limewash `#F6F1E7` to chalk `#F5F2EA` (designer to
  confirm, comparison in `shots-wip/ground-compare.jpg`); descriptor moved into the header so
  no label floats above the headline; island photographs are 3:2 by exception.
- **2026-11-23** Finish review (design lead's independent reviewer): disposition "fix", eight
  material fixes, all applied in one batch; verdict round requested.
- **2026-11-23** Finish review verdict: all eight fixes and one regression scored resolved;
  disposition "ship", scoped to those fixes. Noted, not held open: on phones the approach
  photograph follows the section's button. Photographs remain stand-ins.
- **2026-11-23** Key page reviewed by the designer. Ground colour decided: the whiter lime
  `#FAF9F6` ("Go with the whiter option"). No other changes requested. Proceeding to content,
  motion, critique and QA.
- **2026-11-23** Content and motion passes done. Critique: 24/32 before fixes; seven problems
  and six inconsistencies fixed; seven preferences listed for the designer (`07-critique.md`).
- **2026-11-23** QA run and recorded (`08-qa.md`). Agency recommendation: go as a concept
  build; not finished until final photographs and a manual Safari check.
- **2026-11-23** Detector ignore added for `design-system-font` on the two archived, rejected
  direction specimens only (agent decision, disclosed to the designer).

# Critique, QA and launch

## 9 · UX/UI critique

Run `impeccable critique` on the key pages and `impeccable audit` across the site. Without
Impeccable, review manually against the lists below. Then compare the build with the approved
direction and references: has it drifted, or gone generic?

**Triage every finding** in `agency/07-critique.md`:

| Class | Meaning | Action |
|---|---|---|
| **Problem** | Someone cannot read, perceive, find, reach, understand or complete something; or it breaks on a device; or it fails the accessibility target | Fix. Report what was fixed. |
| **Inconsistency** | Deviates from the project's own tokens, components or approved direction | Fix. |
| **Preference** | A matter of taste where the current choice is defensible | List for the designer; change only if asked. |

Do not present preferences as problems, and do not let a critic's house style overrule the
approved direction. Fix with the matching Impeccable command (see
[specialists.md](specialists.md)), then run `impeccable polish` once at the end.

Manual review list: hierarchy is obvious on each page · primary action is clear · navigation is
predictable · text is readable (size, measure, contrast) · spacing follows the scale · components
are consistent · all states exist · forms have labels, help and useful errors · nothing depends
on hover alone · motion respects reduced-motion.

## 10 · QA

Test the built site in a real browser and record results with evidence in `agency/08-qa.md`.
Mark anything not tested as *not tested*, with the reason. Never report a pass you did not observe.

- **Journeys:** walk each journey from `03-strategy.md` start to finish, on mobile and desktop.
  Submit every form (test mode or test data) and confirm where the submission goes.
- **Function:** every nav item and link resolves; 404 page exists; search, filters, embeds work.
- **Responsive:** 320, 375, 768, 1024, 1440 and one wide size. No horizontal scroll, clipped
  text, overlapping elements or tiny tap targets. Capture each key page at each size.
- **Accessibility** (WCAG 2.2 AA unless the brief says otherwise): keyboard-only walk with
  visible focus, skip link, heading order, alt text, form labels and errors, colour contrast,
  zoom to 200%, reduced motion. An automated scan is a floor, not proof.
- **Performance:** production build, mobile profile. Report LCP, CLS, INP or TBT, page weight
  and request count. Fix oversized images, render-blocking assets and layout shift. Check what
  JavaScript each page ships: no unused library, no island hydrated without need, scroll scenes
  smooth on a mid-range phone profile.
- **Content and SEO:** no placeholder text, titles and descriptions unique, Open Graph image,
  favicon, sitemap, robots, canonical URLs, structured data where relevant.
- **Cross-browser:** Chromium is tested here; say plainly that Safari and Firefox need a manual
  check unless you actually ran them.
- **CMS:** an editor can create and publish each content type; preview works.

**Checkpoint.** Present: what passed, what failed and was fixed, what remains open, what was not
tested. Recommend go or no-go. Wait for approval and log it.

## 11 · Launch

Prepare `agency/09-launch.md`; do not deploy to production, change DNS, or publish CMS content
without explicit go-ahead for that action.

- Redirects from every old URL that changes; old sitemap compared with new.
- Production environment variables and secrets set outside the repository.
- Forms deliver to the real recipient; transactional email tested.
- Analytics and consent set up as the client requires; nothing extra added.
- Domain, SSL, `www` handling, caching and security headers checked.
- Backup or rollback path stated: how to return to the previous version.
- Handover notes: how to edit content, how to deploy, what is known to be unfinished.

**Checkpoint.** Final approval to go live. After launch: load the live site, repeat the main
journey and one form submission, check for console errors and broken assets, and report.

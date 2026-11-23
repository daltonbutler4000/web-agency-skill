# Agency workflow: stages, deliverables, done-criteria

## Project folder

```
agency/
├── STATUS.md            current stage, mode, design lead, last approval, next action
├── decisions.md         dated log: approvals, mode switches, overrides, notable choices
├── 00-audit.md          existing sites only: stack, CMS, tokens, components, problems
├── 01-brief.md          approved project brief
├── 02-research/
│   ├── findings.md      competitors, audience, what the references teach
│   ├── board.html       visual reference board (round 1; board-r2.html for round 2)
│   ├── references.json  evidence record: URL, capture date, viewport, status
│   └── shots/           screenshots
├── 03-strategy.md       sitemap, page objectives, content structure, journeys
├── 04-art-direction.md  three directions, the approved one, its references
├── 05-design-system.md  tokens, type scale, components (or a pointer to DESIGN.md)
├── 06-content.md        copy decisions, voice, metadata
├── 07-critique.md       findings, triage, what was fixed
├── 08-qa.md             test results and evidence
└── 09-launch.md         release checklist and sign-off
```

Create files as their stage is reached, not all up front. If the project already has an
equivalent (`PRODUCT.md`, `DESIGN.md`, a docs folder), point to it instead of duplicating it.
Keep each file short enough that the designer will read it.

## 1 · Discovery
See [discovery.md](discovery.md). **Out:** `01-brief.md`. **Gate: approval.**

## 2 · Research
See [research.md](research.md). **In:** approved brief. **Out:** `02-research/`. The designer
picks favourites and says why; run a second round if asked. In Mode B, run only the research the
designer asks for.

## 3 · Strategy
No specialist. From the brief and research, write `03-strategy.md`:
- **Sitemap** with every page and its parent.
- **Per page:** the one thing a visitor should do or understand, the primary action, the sections
  in order with the job of each, and the content it needs (mark what does not exist yet).
- **User journeys** only for the two or three paths that matter (for example: arrives from
  search → understands the offer → enquires). Skip journeys for a simple brochure site.
- **Content model** if a CMS is involved: types, fields, relationships. For an existing CMS,
  describe changes to the current model, not a new one.

**Done when** each page has an objective and a primary action, and the designer has reviewed it.

## 4 · Art direction
See [art-direction.md](art-direction.md). **Out:** `04-art-direction.md`. **Gate: approval.**

## 5 · Design and 6 · Development
See [build-and-motion.md](build-and-motion.md). In code-first projects these overlap: design the
system and the key pages in the real stack, get them reviewed, then build the rest.

## 7 · Content
Refine, in this order: headlines, body copy, calls to action, microcopy (forms, errors, empty
states), then metadata (title, description, Open Graph, alt text). Use `impeccable clarify` for
interface copy. Keep facts as supplied; never invent claims, statistics, testimonials or
credentials. List anything that needs real content from the client in `06-content.md`. Copy
written by the designer or client is edited only where asked.

**Done when** no placeholder text remains, or every remaining placeholder is listed.

## 8 · Motion
See [build-and-motion.md](build-and-motion.md).

## 9 · Critique, 10 · QA, 11 · Launch
See [quality-launch.md](quality-launch.md). **Gates: approval after QA, approval before go-live.**

## Redesigns and existing sites

1. Audit first (`00-audit.md`): what the stack, CMS and design system are, what works, what
   is broken, and what the analytics or the designer say about real problems.
2. In Discovery, establish what must not change (URLs, CMS, integrations, brand elements).
3. Propose the smallest change that meets the brief. A rebuild or a platform change needs a
   stated reason and explicit approval.
4. Preserve URLs or plan redirects. Never edit a live site or production CMS content without
   being asked to.

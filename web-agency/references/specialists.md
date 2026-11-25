# Specialists: what to call, how, and what to do without it

The agency skill coordinates; the specialists hold the craft. Pick the specialist from the task,
without waiting to be told which one, and never copy a specialist's instructions into this skill
or into project files.

Check availability against the skills and tools actually listed in this session. Plugin installs
add a namespace prefix (for example `frontend-design:frontend-design`); match on the final name.
Invoke a skill through the Skill tool (or the designer types `/name args`). Each specialist's own
instructions take over once invoked; follow them, within the standing rules in SKILL.md.

## Route by task

| The task is about | Apply | Agency reference |
|---|---|---|
| Finding references, a visual direction, a moodboard | `visual-direction-research` | [research.md](research.md) |
| Competitors, audience, market | `deep-research` | [research.md](research.md) |
| Art direction, a new page or section, a redesign | The project's design lead (`impeccable` or `design-taste-frontend`); `frontend-design` as a second opinion on direction | [art-direction.md](art-direction.md), [build.md](build.md) |
| Typography, spacing, layout, colour, hierarchy on existing pages | `impeccable` with the matching command (`typeset`, `layout`, `colorize`, `bolder`, `quieter`, `distill`) | [build.md](build.md) |
| "This looks generic / templated / AI-made" | `impeccable critique`, then the matching fix command; on a Taste-led build, its own checker as well | [quality-launch.md](quality-launch.md) |
| Animation, parallax, scroll effects, transitions, "make it feel…" | Technique from [motion.md](motion.md); craft from `impeccable animate` (and an animation-specialist skill if one is installed, see below) | [motion.md](motion.md) |
| Choosing or adding a framework, library, CMS or host | none | [stack.md](stack.md) |
| Interface copy, microcopy, errors | `impeccable clarify` | [workflow.md](workflow.md) |
| Accessibility | `impeccable audit`, then `harden` / `adapt` | [quality-launch.md](quality-launch.md) |
| Performance | `impeccable audit`, then `optimize` | [quality-launch.md](quality-launch.md) |
| Responsive behaviour | `impeccable adapt` | [build.md](build.md) |
| Implementing or syncing a Figma design | Figma connector and the skill it names | [build.md](build.md) |
| Final pass before review | `impeccable polish` | [quality-launch.md](quality-launch.md) |

One lead per task. Bring in a second specialist only for a different job (a builder, then a
critic), not for a second opinion on the same job, unless the designer asks.

## When the designer names a skill

An explicit request always wins over the routing above and over the one-design-lead rule:
"do this with Taste", "run impeccable critique and frontend-design on the hero", "show me the
same section three ways, one per skill".

- Use exactly the skill or combination named. If one is not installed, say so and offer the
  nearest fallback; do not silently substitute.
- **Explorations** of alternative directions are kept apart from the shipped pages: a separate
  route, branch or `agency/explorations/<name>/`, each labelled with the skill that produced it.
  That stops one skill's checker or finish hook from fighting another's output.
- When the designer picks one, bring it into the main build under the project's design lead and
  tokens, and record the choice in `agency/decisions.md`. The design lead does not change unless
  the designer says so.

## Capabilities and fallbacks

| Capability | Skill or tool | Invoke | If missing |
|---|---|---|---|
| Visual reference research, HTML moodboard, direction study | `visual-direction-research` | Skill, with the approved brief as input | Follow [research.md](research.md) manually with web search, `scripts/capture.cjs` and `assets/reference-board.html` |
| Competitor, audience and market research | `deep-research` | Skill, with a specific question | Web search directly; cite sources |
| Art direction and build, new sites (Mode A) | `design-taste-frontend` | Skill, with brief + approved direction | `impeccable`; then `frontend-design` |
| Design, build, refine, critique | `impeccable` | Skill `impeccable` with args `<command> [target]` | `frontend-design` for direction; manual checklists in [quality-launch.md](quality-launch.md) |
| General visual direction guidance | `frontend-design` | Skill | Proceed from the approved direction |
| Motion craft: timing, easing, choreography, motion review | `impeccable animate` (its motion reviewer runs on captured motion) | Skill `impeccable` with args `animate [target]` | The rules in [motion.md](motion.md); on a Taste-led build, Taste Skill's own motion reference |
| Animation specialist (for example Emil Kowalski's animation skill) | Not bundled. If a skill whose name or description covers web animation craft appears in the session list, use it alongside `impeccable animate` for component and interaction motion | Skill | `impeccable animate` alone |
| Accessibility and performance audit | `impeccable audit`; no separate audit skill is bundled | Skill `impeccable` with args `audit [target]` | Manual checks in [quality-launch.md](quality-launch.md); an automated scan (axe, Lighthouse) run through the pre-installed browser is a floor, not proof |
| Read Figma designs, variables, screenshots | Figma connector (`mcp__Figma__*`) | Follow the connector's own instructions and load the skill it names before reading a design | Ask for exported frames (PNG/PDF) and a token list |
| Browser capture and testing | Playwright (`require('playwright')`), or an in-app / Chrome browser tool | `node <skill>/scripts/capture.cjs`, or the browser tool | Ask the designer for screenshots; say that visual verification was not done |
| CMS, deployment, docs | Project connectors (Sanity, Cloudflare, Notion, …) | Only when the project uses them | Work from the repository |

## Impeccable commands by stage

Run `/impeccable` with no argument to see its own menu; its command list can change between
versions, so trust the installed skill over this table.

| Stage | Commands |
|---|---|
| Existing-site audit | `document` (derive DESIGN.md from code), `extract` (tokens and components) |
| Discovery | `init` (writes PRODUCT.md from the approved brief; do not re-interview) |
| Design | `shape` (plan UX before code), then an ordinary build request; `live` / `generate` for variants |
| Content | `clarify` |
| Motion | `animate`; `delight` only if the direction calls for it |
| Critique | `critique` (UX review), `audit` (accessibility, performance, responsive) |
| Fixes from critique | `typeset`, `layout`, `colorize`, `adapt`, `harden`, `optimize`, `distill`, `quieter`, `bolder` — the one that matches the finding |
| Before QA | `polish` |

Use the intensity commands (`bolder`, `quieter`, `overdrive`, `delight`) only when the designer
asks or the approved direction needs it; they change the look, which is the designer's call.

## Taste Skill limits

- Its house rules (one section per screen, its starter system, dealt palettes and fonts) are its
  defaults. An approved direction or client brand that conflicts with them wins; tell the skill so
  in the request and record the override.
- Its finish gate blocks completion until its browser checker passes. If the gate fails on a rule
  the approved direction deliberately breaks, report that to the designer instead of bending the
  design to pass.
- It needs Node 22+ and Chrome/Chromium. If it cannot find a browser, set `CHROME_PATH` (cloud
  sessions: `/opt/pw-browsers/chromium`).
- Its motion rules are stricter than [motion.md](motion.md): it ships its own motion kit, allows
  no smooth-scroll library, and allows an animation library only on tech pages. On a Taste-led
  build, start from its kit. When the designer asks for something the kit cannot do (pinned
  storytelling, split-text reveals), the request wins: build it per [motion.md](motion.md), tell
  the designer that Taste's checker may flag it, and record the override.
- Never use it in Mode B, on an existing site's established design, or alongside Impeccable as a
  second builder, unless the designer asks for it by name (see above).

## Not installed

- **Awwwards MCP**: deferred. Awwwards is reached through search and the browser like any gallery.
- **Mobbin**: not connected. Do not install or sign in to it.
- **design-ref**: superseded by `visual-direction-research`.

- **Emil Kowalski's animation skill**: not installed, and not added by `install.sh`. Used
  automatically if the designer installs it. Until then `impeccable animate` covers motion craft.

Do not install any skill, plugin or MCP server on your own. If one would help, say what it is,
what it needs and the risk, and ask. (Project npm dependencies follow [stack.md](stack.md).)

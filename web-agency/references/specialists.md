# Specialists: what to call, how, and what to do without it

Check availability against the skills and tools actually listed in this session. Plugin installs
add a namespace prefix (for example `taste-skill:design-taste-frontend`); match on the final name.
Invoke a skill through the Skill tool (or the designer types `/name args`). Each specialist's own
instructions take over once invoked; follow them, within the standing rules in SKILL.md.

| Capability | Skill or tool | Invoke | If missing |
|---|---|---|---|
| Visual reference research, HTML moodboard, direction study | `visual-direction-research` | Skill, with the approved brief as input | Follow [research.md](research.md) manually with web search, `scripts/capture.cjs` and `assets/reference-board.html` |
| Competitor, audience and market research | `deep-research` | Skill, with a specific question | Web search directly; cite sources |
| Art direction and build, new sites (Mode A) | `design-taste-frontend` | Skill, with brief + approved direction | `impeccable`; then `frontend-design` |
| Design, build, refine, critique | `impeccable` | Skill `impeccable` with args `<command> [target]` | `frontend-design` for direction; manual checklists in [quality-launch.md](quality-launch.md) |
| General visual direction guidance | `frontend-design` | Skill | Proceed from the approved direction |
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
- Never use it in Mode B, on an existing site's established design, or alongside Impeccable as a
  second builder.

## Not installed on purpose

- **Awwwards MCP**: deferred. Awwwards is reached through search and the browser like any gallery.
- **Mobbin**: not connected. Do not install or sign in to it.
- **design-ref**: superseded by `visual-direction-research`.

Do not install any skill, plugin or MCP server on your own. If one would help, say what it is,
what it needs and the risk, and ask.

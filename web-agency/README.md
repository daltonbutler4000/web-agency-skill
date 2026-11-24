# Web Agency skill

One command, `/web-agency`, that guides a website project from brief to launch and calls the
right specialist skill at each stage. It contains process, not craft: design and critique
instructions stay in Impeccable, Taste Skill and Visual Direction Research.

## Start a project

```
/web-agency new A boutique hotel in Lisbon needs a site that drives direct bookings. Brief: …
```
```
/web-agency redesign https://example.com — audit the current site and codebase first, then interview me
```
```
/web-agency figma https://www.figma.com/design/…  Build this approved design in the existing Astro project
```

Later sessions: `/web-agency resume` (reads `agency/STATUS.md`), or jump to a stage:
`/web-agency research`, `/web-agency qa`.

## What to expect

- Eleven stages: Discovery, Research, Strategy, Art direction, Design, Development, Content,
  Motion, Critique, QA, Launch. Small jobs skip stages, and it says which.
- It stops for your approval after the brief, after art direction, after QA and before go-live.
- Research produces a local board, `agency/02-research/board.html`. Tick favourites, add notes,
  press "Copy my feedback" and paste it back. Ask for a second round if needed.
- Everything it decides is written to `agency/` in the project.
- Mode A (AI-first) or Mode B (designer-led, your Figma is the authority). Switch by saying so.

## Files

| File | Holds | Edit when |
|---|---|---|
| `SKILL.md` | Modes, stage table, rules, checkpoints | The process itself changes |
| `references/preferences.md` | Your global preferences, confirmed vs unconfirmed | Your taste or defaults change. No client data here. |
| `references/specialists.md` | Which skill does what, and fallbacks | You add, remove or rename a specialist |
| `references/bookmarks.md` | Your bookmarked sites, visited and tagged on 2026-11-24, plus bookmarked typefaces and tools | You export new bookmarks, or a tag is wrong |
| `references/inspiration-sources.md` | Refero, UI Skills design.md, designmd.app: what each is for and how to reach it | You add or drop an inspiration source |
| `references/workflow.md`, `discovery.md`, `research.md`, `art-direction.md`, `build-and-motion.md`, `quality-launch.md` | One stage each | That stage needs different steps or checklists |
| `scripts/capture.cjs`, `scripts/build-board.cjs`, `assets/reference-board.html` | Screenshot capture and the board | The board needs to look or behave differently |

## Install and update

The source of truth is the Git repository. `bash install.sh` copies the skill into
`~/.claude/skills/` and installs the two extra specialists.

- **Cloud environments:** add this to the environment's setup script (the repository must be
  public for a setup script to clone it):
  `git clone --depth 1 https://github.com/<you>/web-agency-skill /tmp/was && bash /tmp/was/install.sh`
- **Your own computer:** clone the repository and run `bash install.sh`; re-run after `git pull`.
- **Change the skill:** edit in the repository, commit, push. New sessions pick it up.

## Specialists

| Skill | Source | Update |
|---|---|---|
| `impeccable` | Installed separately (`npx impeccable install`) | Its own installer |
| `visual-direction-research` | Copied into `vendor/`, pinned to a reviewed commit | Re-copy from upstream, review the diff, update `SOURCE.md` |
| `design-taste-frontend` (Taste Skill) | Cloned by `install.sh`, pinned to tag v2.5.1 and its commit | Review the new release, then change `TASTE_TAG` and `TASTE_COMMIT` in `install.sh` |

A missing specialist is not an error: the skill says what is missing and uses a fallback.
Deliberately not installed: Awwwards MCP, Mobbin, design-ref.

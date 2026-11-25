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

## Ask for things in plain language

Inside a website project you do not need to name a library or a skill:

```
Add some subtle parallax to the hero.
Make the navigation feel more luxurious.
Reveal the headline as I scroll.
Make the transition between these sections more cinematic.
```

The skill inspects the project, picks the technique (native CSS, GSAP ScrollTrigger or SplitText,
Motion, Astro view transitions, Lenis only where justified), applies the relevant specialist
skill, verifies the result in a browser and tells you what it used. Prefix with `/web-agency` if
it does not pick the request up on its own.

To explore alternatives, name the skills: "try this hero with Taste and with Impeccable", or
"run impeccable critique on this".

## Default stack

Astro, TypeScript, Tailwind CSS, React where needed, shadcn/ui, GSAP, Motion, Sanity, GitHub and
Vercel for content-led sites; Next.js, React, Tailwind CSS, shadcn/ui and Supabase for web
applications. Preferred, not mandatory: an existing project keeps its stack, and nothing is added
without checking what is already there. Details in `references/stack.md`.

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
| `SKILL.md` | Modes, stage table, direct requests, rules, checkpoints | The process itself changes |
| `references/stack.md` | Default stacks, when each layer is added, dependency and install rules, licence notes | Your preferred technologies change |
| `references/motion.md` | Which technique answers which described experience; motion rules | You want a different default for an effect |
| `references/preferences.md` | Your global preferences, confirmed vs unconfirmed | Your taste or defaults change. No client data here. |
| `references/specialists.md` | Which skill is applied to which task, explicit requests, fallbacks | You add, remove or rename a specialist |
| `references/workflow.md`, `discovery.md`, `research.md`, `art-direction.md`, `build.md`, `quality-launch.md` | One stage each | That stage needs different steps or checklists |
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

| `frontend-design` | Claude plugin, enabled per account | Plugin directory |

A missing specialist is not an error: the skill says what is missing and uses a fallback.
Not installed: Emil Kowalski's animation skill (picked up automatically if you add it), Awwwards
MCP, Mobbin, design-ref. There is no separate accessibility or performance audit skill;
`impeccable audit` and the QA checklist cover both.

## Where it is available

The skill is user-level (`~/.claude/skills/`), not tied to one project, wherever `install.sh` has
run. In the cloud that is every session of an environment whose setup script runs the installer;
other environments, and your own computer, need the same step. Sessions get the version on the
repository's default branch at the time their container is built.

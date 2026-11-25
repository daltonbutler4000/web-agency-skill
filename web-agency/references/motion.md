# Motion: from a described experience to the right technique

The designer describes what the experience should feel like, in plain language. You work out the
implementation and tell them what it is before building it. Never ask an open "which library?";
bring a recommendation. Never require a specialist skill to be named.

Motion has to earn its place: it directs attention, shows a change of state, or carries the
brand's character as approved in the art direction. Craft (timing, easing, choreography, review)
comes from the motion specialists in [specialists.md](specialists.md): `impeccable animate` for
page-level and scroll-driven motion, Emil Kowalski's skills for component and interaction motion. This file decides the *technology* and the non-negotiables.

## Handling a request

1. **Read the intent.** Turn the phrase into concrete terms: which element, what triggers it
   (load, scroll position, scroll progress, hover, click, navigation), and how strong. Take the
   character from the approved direction in `agency/04-art-direction.md` if there is one.
2. **Inspect the project:** which motion tools are installed, what the component framework
   already provides (Lumos ships a slider, marquee, accordion and similar; use them before
   adding anything), how existing animation is written,
   whether the target is an Astro component or a React island, whether page transitions are on.
3. **Choose the technique** from the table, bending it to what the project already has.
4. **Say what you will use before building**, in one or two lines: your reading of the request,
   the technique, and why ("Subtle parallax on the hero image: GSAP ScrollTrigger, already in the
   project"). If the tool is already installed or is native CSS, continue without waiting. If it
   means adding a library, or there is a real choice between two (GSAP or Motion, CSS or a
   library), put the choice to the designer with your recommendation and wait for a yes.
5. **Build it** with the motion specialist's guidance, inside the rules at the end of this file.
6. **Verify in a browser:** normal and reduced motion, a phone width, and with a slow first load.
7. **Report in two lines:** what was built and with what. Offer one dial the
   designer can turn ("stronger / quieter", "slower", "only on desktop").

Ask a question only when two readings would produce visibly different results and the direction
does not settle it. Otherwise build the more restrained reading and say so.

## Technique selection

| Desired experience | Default | Notes |
|---|---|---|
| Hover effects, button and link states, simple transitions | Native CSS | Transitions, keyframes, `@starting-style`. No library, ever. |
| Simple entrance when an element scrolls into view | Native CSS plus a small `IntersectionObserver`, or CSS scroll-driven animation | Use GSAP instead only if the project already loads it for other scroll work. |
| Parallax | GSAP ScrollTrigger (`scrub`) | A single gentle layer may use a CSS scroll-driven animation as progressive enhancement if GSAP is not otherwise needed. |
| Scroll-driven storytelling | GSAP ScrollTrigger with a timeline | |
| Pinned scrolling sections | GSAP ScrollTrigger (`pin`) | `position: sticky` when nothing has to be scrubbed. |
| Cinematic sequences, coordinated multi-element choreography | GSAP timeline | |
| Animated typography, text reveals | GSAP SplitText | A whole-line or whole-block reveal needs no splitting: CSS clip or mask. |
| Interactive menus, gestures, drag, layout and component transitions | Motion inside a React island, or native CSS | CSS when the component is not React or the states are simple (open/closed). Motion for gestures, shared-layout, exit animations and springs. |
| Page transitions | Astro view transitions (`<ClientRouter />`), or native cross-document view transitions in CSS | Next.js: the framework's view-transition support or Motion. |
| Smooth scrolling | Native scrolling | Lenis only where justified (below). |
| WebGL, shaders, Lottie, physics, video scrubbing | A specialised library | Only for a named signature moment in the approved direction. State weight and performance cost and get agreement. |

These are preferences. Choose the simplest reliable solution that achieves the described result:
if CSS does it well, use CSS even when the table says GSAP; if the project already runs a
different capable library, use that.

**GSAP and Motion together.** GSAP owns scroll-linked work, timelines and text. Motion owns
state-driven animation inside React components. Never animate the same element with both, and do
not add Motion to a project with no React islands (its vanilla `animate`/`inView` API or CSS
covers small cases). Do not add GSAP for something Motion already does in an existing React app.

## Reading common phrases

| The designer says | Reading | Likely implementation |
|---|---|---|
| "Add some subtle parallax to the hero" | The hero image or a background layer drifts slightly slower than the page. Small travel, no pinning. | ScrollTrigger scrub on a transform of the media inside an overflow-hidden frame; off under reduced motion. |
| "Make the navigation feel more luxurious" | A quality brief, not a feature: slower, calmer easing, considered open/close choreography, staggered links, refined hover and focus. Possibly type and spacing too. | CSS, or Motion if the nav is a React island. Usually no new dependency. Say so if the answer is typographic as much as kinetic. |
| "Reveal the headline as I scroll" | The headline animates in by line or word when it enters the viewport, once. Scrubbed to scroll only if asked. | SplitText by lines with a mask, triggered by ScrollTrigger. |
| "Make the transition between these sections more cinematic" | The hand-over between two sections is authored: a pin, a wipe, a scale or clip reveal tied to scroll progress. | A pinned ScrollTrigger timeline with scrub across the two sections. |
| "Make it feel smoother / more fluid" | Usually easing, duration and continuity, not smooth scrolling. | Tune existing motion first. Propose Lenis only if scroll-linked scenes are the issue. |
| "Add some life / energy to this section" | One purposeful moment, not effects on everything. | Pick the single element that deserves it; propose it in one line, then build. |

Words of degree set the parameters: *subtle* means small distances and low contrast between
states; *luxurious* means slower, eased, unhurried, few moving parts; *cinematic* means staged,
sequenced, larger scale, scroll-authored; *playful* means quicker, with some overshoot. Keep these
consistent with the project's motion tokens (durations and easings in the design system); add
tokens rather than one-off values.

## Smooth scrolling (Lenis)

Native scrolling is the default. Lenis is justified only when the approved direction depends on
scroll-linked scenes that read as broken with stepped wheel input, on a site that is an
experience more than a document. It changes how the whole site scrolls, so propose it once with
the reason and wait for a yes. When used: drive it from GSAP's ticker and update ScrollTrigger
from it, turn it off under reduced motion, keep native touch scrolling, and check anchor links,
focus movement, modals and nested scroll areas. Never on application UI. Do not combine it with
GSAP ScrollSmoother.

## Implementation notes that are easy to get wrong

Check each against current documentation before relying on it.

- **GSAP in Astro:** import it in the component's `<script>` (bundled, loaded once), never from a
  CDN tag. Register plugins once. Load heavy scenes only on the pages that use them.
- **With Astro view transitions:** scripts do not re-run on navigation. Initialise on
  `astro:page-load` and kill ScrollTriggers and revert contexts on `astro:before-swap`.
- **In React:** use the `useGSAP` hook from `@gsap/react` for scoping and cleanup; Motion is
  imported from `motion/react`.
- **Responsive and reduced motion in GSAP:** `gsap.matchMedia()` with conditions for breakpoints
  and `(prefers-reduced-motion: reduce)`; it reverts everything when a condition stops matching.
- **SplitText:** split after `document.fonts.ready`; split by lines with re-splitting on resize
  enabled; keep the text readable to assistive technology; revert when the animation is finished.
- **Initial states** are set so that content is visible without JavaScript and without a flash:
  hide only under a class that the script adds, or set the from-state in the same tick as the
  animation is created.
- **ScrollTrigger and layout:** refresh after images, fonts or CMS content change the page height;
  give media explicit dimensions so trigger positions are stable.
- **Pinning on phones:** address-bar resizing causes jumps. Test on a real phone width, and prefer
  a simpler unpinned version below a breakpoint.

## Always

- Honour `prefers-reduced-motion`: remove parallax, pinning, scrubbing and large movement; keep
  content, function and gentle opacity or colour changes that carry meaning.
- Animate `transform` and `opacity`; avoid animating layout. No layout shift from entrances.
- Content is visible and usable if scripts fail or have not loaded yet.
- Do not hijack scrolling, add long pins, or delay content behind a loader without approval.
- One or two signature moments per page beat effects on every element.
- Scroll effects must not hide content from search engines or keyboard users, or move focus.
- Check the performance cost on a mid-range phone profile; a scene that drops frames is cut back.

# Brief: luxury real estate one-pager, Ibiza and Mallorca

Status: **awaiting approval** · Drafted 2026-11-23 · Mode A (AI-first)

## Summary

A single-page site for a fictional luxury real estate agency selling homes in Ibiza and
Mallorca. Its job is to turn wealthy international buyers into private enquiries. It is a
portfolio concept: the agency, its listings and its copy are invented and marked as such.

## Goal and success measure

- **Primary outcome:** a buyer sends an enquiry (a short form, or a direct email/phone action).
- **Recognised by:** the enquiry action is reachable from every part of the page and the page
  gives a buyer enough reason to use it: taste, a few selected homes, evidence of discretion.
- **As a portfolio piece:** it should read as a real, distinctive agency, not a template.

## Audience

International buyers of second homes and investment property (roughly €2m and up): British,
German, Dutch, Swiss, Scandinavian and others. They arrive from a recommendation, a listing
portal or a search, often on a phone, often comparing several agencies. They know the islands;
they do not know this agency. They judge by restraint and photography before reading anything.

## Scope

One page, sections to be fixed in Strategy. Expected: opening statement, the two islands, a
small selection of homes (about 4–6), how the agency works, enquiry, footer.

- **In:** responsive one-pager, enquiry form (front end only, no backend), motion, metadata.
- **Out:** listing search, property detail pages, CMS, multi-language, analytics, hosting.

## Content and assets

Nothing exists; everything is created.

- **Name and identity:** invented during art direction (wordmark, type, colour).
- **Copy:** written for the concept. No invented statistics, awards, testimonials or press.
  Listings are fictional and labelled as illustrative; prices appear as "price on request" or
  clearly illustrative figures.
- **Imagery:** free-licence photographs (Unsplash) of Balearic architecture, interiors and
  coast, and/or AI-generated images, as approved by the designer. Every image is recorded with
  its source and licence. No photographs of identifiable real properties presented as listings.

## Brand and tone

Open. Working adjectives, to be tested in research: **quiet, sunlit, assured**. To avoid: the
category defaults of gold-on-black, script logos and stock infinity-pool clichés.

## Constraints

- Lives in `projects/balearic-real-estate/` of the web-agency skill repository, for now.
- Accessibility WCAG 2.2 AA; Core Web Vitals "good" on mobile.
- No budget for licensed assets or paid fonts.
- No deadline given.

## Mode

A. The agency proposes; the designer approves at the brief, the art direction, final QA and
go-live. Design lead is chosen at art direction.

## Assumptions (correct any that are wrong)

1. **English only**, British spelling, built so Spanish and German could be added later.
2. **Astro**, plain CSS with design tokens (your stated preference for content sites; unconfirmed).
3. The enquiry form validates and shows a success state but sends nothing.
4. Buyers of holiday and second homes, not rentals, new developments or commercial property.
5. No deployment is needed yet; "launch" means a finished, QA'd build in the repository.

## Open questions

- Should the piece be publicly deployed for your portfolio (and where)?
- Is there a price segment or buyer type you want the concept aimed at more narrowly?

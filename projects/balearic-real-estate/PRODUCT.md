# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro, plain CSS with design tokens, self-hosted fonts. Confirmed by the designer in the
approved brief (`agency/01-brief.md`, assumption 2). No CMS, no backend, no deployment yet.

## Users

International buyers of second homes and investment property in Ibiza and Mallorca, roughly
€2m and up (British, German, Dutch, Swiss, Scandinavian and others). They arrive from a
recommendation, a listing portal or a search, often on a phone, often comparing several
agencies. They know the islands and do not know this agency. Audience description is an
assumption from the brief; no buyer research was done.

## Product Purpose

A single-page site for Solell, a fictional luxury estate agency, built as a portfolio concept.
Its job is to turn a visiting buyer into a private enquiry. Success: the enquiry action is in
reach from every part of the page and the page gives enough reason to use it.

## Positioning

Judgement, not inventory. Competitors on the islands sell portfolio size and search; Solell
keeps six homes and knows each one personally. No search box, no portfolio counts.

## Operating Context

One page with anchored sections: header, opening, point of view, six selected homes (three per
island), the two islands, how we work, enquiry, footer. "Enquire about this home" prefills the
enquiry form with that home's name.

## Capabilities and Constraints

- Enquiry form is front-end only: it validates and shows a success state but sends nothing.
- English only, British spelling; structured so Spanish and German could be added.
- Out of scope: search, filters, detail pages, map, blog, newsletter, valuation, analytics.
- No budget for licensed assets or paid fonts.
- Lives in `projects/balearic-real-estate/` of the web-agency skill repository for now.

## Brand Commitments

Approved by the designer on 2026-11-23 (`agency/04-art-direction.md`, direction A · Almanac):
the name Solell; Newsreader with its italic and Hanken Grotesk; limewash, sand, terracotta and
warm ink; split opening; framed 4:5 photographs with captions, never photographs as
backgrounds; italic home titles on tabs; quiet, page-like motion. Tone: quiet, sunlit, assured.
Avoid gold on black, script logos, aerial bays and infinity pools as openers.

## Evidence on Hand

None is real. The agency, its contact person, homes and prices are invented and must be
labelled illustrative. Do not fabricate testimonials, awards, press, statistics or sales
figures. Photographs are stand-ins from Wikimedia Commons (`prototypes/img/sources.json`) to
be replaced by generated or supplied images; each needs a credit.

## Product Principles

1. One action: every section leads to a private enquiry.
2. Selection is the proof: few homes, each named and described before any figure.
3. Nothing invented is presented as fact.
4. Text always sits on a clean ground and passes contrast.
5. The page works fully without JavaScript, apart from form niceties.

## Accessibility & Inclusion

WCAG 2.2 AA. Core Web Vitals "good" on mobile. Reduced-motion preference honoured.

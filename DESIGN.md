---
name: Jack Flowerday
description: Field-notebook portfolio and app support site for radio, terrain and home hardware tools.
colors:
  survey-paper: "#edf0e8"
  survey-paper-raised: "#f6f8f3"
  lowland-sage: "#d6e1cc"
  drafting-ink: "#1c2933"
  pencil-grey: "#56656e"
  ink-rule: "#1c293326"
  contour-umber: "#a87b52"
  contour-label-umber: "#8d6139"
  watercourse-blue: "#1d66a6"
  line-of-sight-marigold: "#e3a21a"
  night-paper: "#12191d"
  night-paper-raised: "#19232a"
  night-lowland: "#1d2b25"
  night-ink: "#e4e9e2"
  night-pencil: "#9aa7a3"
  night-rule: "#e4e9e226"
  night-contour: "#8a6a4b"
  night-contour-label: "#a88462"
  night-watercourse: "#82b9e8"
  night-marigold: "#f0b53a"
typography:
  display:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(3.4rem, 9vw, 6.4rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(2.8rem, 7vw, 4.4rem)"
    fontWeight: 700
    lineHeight: 0.95
  title:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "1.85rem"
    fontWeight: 600
    lineHeight: 1.1
  subtitle:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 600
    lineHeight: 1.1
  body:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
  lede:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 600
    lineHeight: 1.55
  code:
    fontFamily: "ui-monospace, SFMono-Regular, Consolas, monospace"
    fontSize: "0.9em"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  drafted: "3px"
  screenshot: "10px"
  app-icon: "22.5%"
spacing:
  xs: "6px"
  sm: "10px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "40px"
  section: "56px"
components:
  button-primary:
    backgroundColor: "{colors.drafting-ink}"
    textColor: "{colors.survey-paper}"
    rounded: "{rounded.drafted}"
    padding: "9px 18px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.watercourse-blue}"
    textColor: "{colors.survey-paper}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.drafting-ink}"
    rounded: "{rounded.drafted}"
    padding: "9px 18px"
    typography: "{typography.label}"
  button-secondary-hover:
    backgroundColor: "{colors.survey-paper-raised}"
  note-card:
    backgroundColor: "{colors.survey-paper-raised}"
    textColor: "{colors.drafting-ink}"
    rounded: "{rounded.drafted}"
    padding: "14px 18px"
  map-sheet:
    backgroundColor: "{colors.survey-paper-raised}"
    textColor: "{colors.drafting-ink}"
  project-tile-title:
    textColor: "{colors.drafting-ink}"
    typography: "{typography.subtitle}"
  project-tile-title-hover:
    textColor: "{colors.watercourse-blue}"
---

# Design System: Jack Flowerday

## Overview

**Creative North Star: "The Field Notebook"**

The site reads like an engineer's notebook carried up a hill: cool survey paper, drafting ink, pencilled notes and the brown contour lines of a topographic sheet. Everything is drawn rather than boxed. Rules, strokes and linework carry structure; surfaces stay flat and printed. The tools on the site are about aiming radio links over real terrain and reading hardware in the field, so the visual vocabulary comes from that work: terrain profiles, masts, contours and a single line of sight.

Density is calm and editorial. Headings are set in a condensed sans, like the labels on a survey sheet, and body text is set in the regular width of the same family, so the whole site speaks with one voice. One element on any page is allowed to be bold: on the home page it is the terrain profile with its marigold line of sight, which draws once on load. Everything else stays quiet.

The system replaced a generic card kit (rounded floating cards with soft shadows, all-caps badges, dot-joined meta strings and GitHub's white preview cards). Those patterns are the confirmed anti-reference.

**Key Characteristics:**
- Cool map-paper ground with drafting-ink text, light and night versions of every token.
- One type family in two widths: Barlow Condensed for headings, Barlow for reading.
- Structure from rules and linework, never from shadows.
- Contour linework as the recurring texture, in contour umber only.
- One marigold line of sight per page at most.
- Sentence case everywhere; facts in definition lists, not dot-joined strings.

## Colors

A cool, desaturated survey palette: paper and ink do almost all the work, with three map colours (umber, blue, marigold) used for linework, links and the line of sight.

### Primary
- **Drafting Ink** (`drafting-ink`): body text, headings, the ridge line and masts in the terrain profile, the 3px top rule of every project tile, and the fill of primary buttons. Night version: Night Ink.

### Secondary
- **Watercourse Blue** (`watercourse-blue`): links, focus outlines, hovered tile titles and hovered primary buttons. It marks anything you can follow, as water does on a map. Night version: Night Watercourse.
- **Contour Umber** (`contour-umber`): linework only. Contour lines in the hero and tile previews, the left rule on note cards and code blocks, and the rule under overview section headings. Night version: Night Contour.
- **Contour Label Umber** (`contour-label-umber`): the same umber, deepened so it reads as text. It is used only for the small "iOS and Android app" / "Open source" kind line above an overview title (4.67:1 on survey paper). Night version: Night Contour Label (5.19:1 on night paper).

### Tertiary
- **Line-of-Sight Marigold** (`line-of-sight-marigold`): the line of sight, its Fresnel ellipse and its end points in the terrain profile, and the sun in the ESPHome mark. Nothing else. Night version: Night Marigold.

### Neutral
- **Survey Paper** (`survey-paper`): the page background. Night version: Night Paper.
- **Raised Survey Paper** (`survey-paper-raised`): note cards, code blocks, map-sheet previews and hovered secondary buttons. One step lighter than the page, never a shadow. Night version: Night Paper Raised.
- **Lowland Sage** (`lowland-sage`): the land fill under the hero ridge. Night version: Night Lowland.
- **Pencil Grey** (`pencil-grey`): secondary text such as ledes, tile descriptions, feature explanations, fact labels and the footer. Night version: Night Pencil.
- **Ink Rule** (`ink-rule`, drafting ink at 15% alpha): hairline dividers, table rules, card borders and the ring around app icons. Night version: Night Rule.

### Named Rules
**The One Line of Sight Rule.** Marigold appears only on the line of sight and the things attached to it. It is never used for buttons, links, badges or highlights.

**The Linework-Only Umber Rule.** Contour umber draws lines and rules and never fills a surface. Umber text always uses the label shade (`contour-label-umber` / `night-contour-label`), never the linework shade.

**The Night Map Rule.** Every token has a night version under `prefers-color-scheme: dark`. Dark mode is the same map at night, not a different theme.

## Typography

**Display Font:** Barlow Condensed (with Arial Narrow, sans-serif)
**Body Font:** Barlow (with system-ui, sans-serif)
**Label/Mono Font:** ui-monospace stack for code only

**Character:** One family in two widths. The condensed cut gives headings the clipped authority of survey-sheet labels; the regular width reads plainly at length. Weights are 400 for reading and 600 or 700 for structure, with nothing in between.

### Hierarchy
- **Display** (700, clamp 3.4–6.4rem, line-height 0.95, tracking −0.015em): the name on the home page only.
- **Headline** (700, clamp 2.8–4.4rem, line-height 0.95): the project name on each overview page. Plain pages use 3rem.
- **Title** (600, 1.85rem, line-height 1.1): section headings. The home page sets them at 2.1rem.
- **Subtitle** (600, 1.3rem, line-height 1.1): sub-headings, feature names (1.25rem) and project tile titles (1.6rem).
- **Body** (400, 17px, line-height 1.55): all reading text, kept to about 34–38em per line.
- **Lede** (400, 1.2rem; the hero uses clamp 1.15–1.4rem): the one-sentence description under a page title, in pencil grey.
- **Label** (600, 0.9rem): fact values, buttons and the kind line (0.95rem, in contour label umber).
- **Code** (400, 0.9em of its context, system monospace): code blocks and inline code only, never as a "technical" costume for labels. Fact labels use the same size at 400 in pencil grey.

### Named Rules
**The Sentence Case Rule.** No all-caps labels, no tracked-out eyebrows. A label is a short plain sentence fragment, such as "iOS and Android app".

**The Two Widths Rule.** Condensed is for headings, regular is for reading. Never set body copy in the condensed cut or headings in the regular one.

## Layout

Left-aligned throughout, on a single centred column whose width depends on the page type: 1120px for the home page, 960px for project overviews and 760px for support and privacy pages, with 24px side gutters (18px below 640px).

- **Home:** the name, lede and GitHub link, then the full-width terrain profile, then the Projects grid. The grid uses auto-fit columns with a 330px minimum, 40px vertical and 32px horizontal gaps, so two projects sit side by side and one project fills the row.
- **Overview pages:** breadcrumb, then the project hero (app icon beside the name on app pages, or a map-sheet banner on repo pages), then the action buttons, then sections spaced 56px apart. Each section heading sits on a contour-umber rule.
- **Features:** a legend, with the feature name in a 15rem left column and its explanation on the right. It collapses to a single column below 640px.
- **Screenshots:** a horizontally scrolling strip of 236px-wide figures (190px on small screens) with scroll snapping.
- **Rhythm:** 6, 10, 16, 24, 32, 40 and 56px steps. Sections are separated by space, not boxes.

## Elevation & Depth

Flat. There are no drop shadows anywhere in the system. Depth comes from tonal steps (survey paper to raised survey paper), from rules (the 3px ink top rule on tiles, hairline ink rules elsewhere) and from the drawing itself (land fill and contour strata under the ridge). The only `box-shadow` in use is a 1px ink-rule ring around app icons, which acts as a hairline border.

### Named Rules
**The Printed Sheet Rule.** Nothing floats. If an element needs to stand apart, give it a rule or a raised-paper fill, never a shadow or a hover lift.

## Shapes

Drafted and square. Containers, buttons, note cards and code blocks use a 3px drafted corner, which is just enough to soften the pixel edge. Project tiles have no corners at all: they are framed by a 3px ink rule across the top and a hairline under the preview. Two exceptions follow their source material: app icons keep the 22.5% iOS icon curve, and phone screenshots use 10px corners to match the device frame. Map-sheet previews clip their contour texture to the sheet.

## Components

### Buttons
Drafted and flat: a stroked or filled ink shape with no shadow.
- **Shape:** drafted corners (3px), 1.5px drafting-ink stroke, 9px × 18px padding, label weight (600).
- **Primary:** drafting-ink fill with survey-paper text. Use it for the one main action on an overview page (Support, View on GitHub).
- **Hover / Focus:** primary hover turns watercourse blue (fill and stroke). Focus shows a 2px watercourse-blue outline offset by 3px.
- **Secondary:** ink stroke and ink text on a transparent fill. Hover fills with raised survey paper. Use it for every other action (Privacy policy, Website).
- **Icons:** inline 18px SVGs in `currentColor`, before the label. No trailing arrows.

### Cards / Containers (note cards)
- **Corner Style:** drafted (3px).
- **Background:** raised survey paper.
- **Shadow Strategy:** none (see Elevation & Depth).
- **Border:** 1px ink rule, with a 3px contour-umber rule on the left edge. In link lists, the left rule turns watercourse blue on hover.
- **Internal Padding:** 14px × 18px. Code blocks use the same treatment with 14px × 16px padding.

### Navigation
A plain breadcrumb row of watercourse-blue text links at 0.95rem ("All projects", then the app name), wrapping with 4px × 18px gaps, 36px above the page header. Links underline at 1px and thicken to 2px on hover. There is no top bar and no menu.

### Project Tile (signature component)
A map sheet rather than a card. A 3px drafting-ink rule runs across the top. Below it, a 16:9 raised-paper preview carries the contour texture (`assets/contours.svg` used as a mask, in contour umber at 38% opacity) with the project's mark centred on it: the app icon at 28% width, a drawn line mark at 46% width, or, for repos added automatically from GitHub, the repo name set in condensed 700. Under the preview sit the title (subtitle style, 1.6rem), the description in pencil grey, and a facts definition list (Type, Language, Updated) with grey labels and semibold values. On hover or focus the title turns watercourse blue and underlines. Nothing moves.

### Terrain Profile (signature component)
The home-page hero drawing (1200 × 240 viewBox). It shows a lowland-sage land fill, three contour strata in umber at 70%, a 2px ink ridge, two lattice masts in 2.5px ink, and a 3.5px marigold line of sight that just clears the ridge, with a dotted Fresnel ellipse. The bottom 30% fades out into the paper. The line of sight draws once on load (1.6s, cubic-bezier(.6, 0, .2, 1), after a 0.3s delay), then the far end point and the Fresnel ellipse fade in. With reduced motion it is drawn complete, with no animation.

### Features Legend
A borderless list. Each row has a hairline ink rule beneath it, the feature name in subtitle style on the left, and its explanation in pencil grey on the right, with 14px vertical padding.

## Do's and Don'ts

### Do:
- **Do** frame project tiles with the 3px drafting-ink top rule and a contour-textured map-sheet preview, and centre the project's own mark on it.
- **Do** give every new colour a night version under `prefers-color-scheme: dark` (The Night Map Rule).
- **Do** use Barlow Condensed at 600 or 700 for headings and Barlow at 400 for reading, in sentence case.
- **Do** show facts as a definition list of short label and value pairs.
- **Do** keep reading lines to about 34–38em.
- **Do** keep keyboard focus visible with the 2px watercourse-blue outline offset by 3px.

### Don't:
- **Don't** use drop shadows, hover lifts or gradient washes on containers (The Printed Sheet Rule).
- **Don't** use marigold for anything but the line of sight (The One Line of Sight Rule).
- **Don't** use all-caps badges, tracked eyebrows or pill tags (The Sentence Case Rule).
- **Don't** join metadata with middle dots or append arrows to links and buttons.
- **Don't** use GitHub's generated white social-preview cards as project imagery.
- **Don't** set text in the linework umber (`contour-umber` 3.24:1, `night-contour` 3.6:1): both fail AA. Use the label shade, which passes in both modes.

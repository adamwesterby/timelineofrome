---
name: Timeline of Rome
description: 1,229 years of Roman history read as one inscribed line, in ink, papyrus, and a single gilded thread.
colors:
  ink: "#1d100b"
  ink-soft: "#3d261b"
  ink-muted: "#6b4b37"
  paper: "#f1e4c8"
  paper-bright: "#f9efdb"
  paper-deep: "#e3cfa6"
  field: "#160c08"
  field-raised: "#22130d"
  field-text: "#f3e7cf"
  gold: "#c9973a"
  gold-bright: "#e6bf6a"
  gold-deep: "#8a6320"
  rubric: "#8e2a17"
  rubric-deep: "#6c1a0b"
typography:
  display:
    fontFamily: "Cinzel Variable, Cinzel, Trajan Pro, Times New Roman, serif"
    fontSize: "clamp(3rem, 10.5vw, 6rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.06em"
  headline:
    fontFamily: "Cinzel Variable, Cinzel, Trajan Pro, Times New Roman, serif"
    fontSize: "clamp(2.2rem, 5vw, 3.6rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "0.05em"
  title:
    fontFamily: "Cinzel Variable, Cinzel, Trajan Pro, Times New Roman, serif"
    fontSize: "clamp(1.4rem, 2.4vw, 1.75rem)"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.03em"
  body:
    fontFamily: "EB Garamond Variable, EB Garamond, Iowan Old Style, Georgia, serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Cinzel Variable, Cinzel, Trajan Pro, Times New Roman, serif"
    fontSize: "0.72rem"
    fontWeight: 700
    letterSpacing: "0.14em"
rounded:
  hairline: "2px"
  image: "4px"
spacing:
  gutter: "clamp(1.25rem, 4vw, 3rem)"
  nav: "4.25rem"
  year-column: "7.5rem"
  spine-column: "2.5rem"
  ledger-gap: "1.25rem"
  entry-gap: "clamp(1.75rem, 4vw, 2.75rem)"
  section: "clamp(4rem, 9vw, 7.5rem)"
components:
  button-account-toggle:
    backgroundColor: "transparent"
    textColor: "{colors.rubric}"
    typography: "{typography.label}"
    padding: "0"
    height: "40px"
  button-return:
    backgroundColor: "{colors.gold-bright}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.hairline}"
    padding: "12px 24px"
  ruler-segment:
    backgroundColor: "transparent"
    textColor: "{colors.field-text}"
    typography: "{typography.label}"
    height: "44px"
  ruler-segment-current:
    textColor: "{colors.gold-bright}"
---

# Design System: Timeline of Rome

## Overview

**Creative North Star: "The Inscribed Line"**

The page is a single chronology carved once and read top to bottom. Every element serves the line: the year in the margin, the dot on the spine, the account beside it. Chrome is ink, paper is papyrus, and one gilded thread runs through the whole thing, filling as the reader moves through time. The scroll is the mechanism; the ruler at the top is the same line compressed to one width.

Density is editorial and unhurried. Entries are not boxed. Hierarchy comes from Cinzel's inscriptional capitals at three clear scales and from rubric red reserved for what matters. Motion is authored once (the hero carve and the ruler drawing itself) and then only explains state: the spine fills, dots ignite, accounts unfold.

**Key Characteristics:**
- Ledger, not cards: hairlines and margin years, never containers.
- One gold thread: the only animated colour, and it always means "how far through time you are".
- Rubric red marks the major: years, era markers, the action to read more.
- Dark field for chrome and closing, papyrus for reading.
- Inscriptional capitals for anything that names a year or a title; a book face for everything read.

## Colors

Ink and papyrus with one metallic and one rubric, used at page scale rather than as scattered accents.

### Primary
- **Gold thread** (#c9973a, bright #e6bf6a, deep #8a6320): the spine fill, the ruler fill and current era, the hero and footer rules, era fact separators. Gold is always a line or a point of light, never a fill behind text.

### Secondary
- **Rubric** (#8e2a17, deep #6c1a0b): major-event years, era markers, the "read the full account" control, focus rings on paper, links. It is the manuscript's red ink: the marks a reader scans for.

### Neutral
- **Ink** (#1d100b): headings and body on paper.
- **Ink soft** (#3d261b): summaries, descriptions, secondary reading text.
- **Ink muted** (#6b4b37): minor-event years, credits, quiet labels; the scrollbar thumb.
- **Paper** (#f1e4c8), **paper bright** (#f9efdb), **paper deep** (#e3cfa6): the reading ground, its lightest gradient stop, and image placeholders.
- **Field** (#160c08) and **field raised** (#22130d): the dark ground of the hero, ruler, FAQ, and footer. Text on the field is **field text** (#f3e7cf) with muted and faint tints taken from the same hue, never gray.

### Named Rules
**The One Thread Rule.** Gold moves; nothing else does. Any element that animates by colour is gold, and gold's position always encodes progress through the span.

**The Rubric Rule.** Red marks significance and action only: major years, era markers, the account toggle. It is never decorative and never a background.

## Typography

**Display Font:** Cinzel Variable, self-hosted via @fontsource-variable (with Trajan Pro, Times New Roman, serif)
**Body Font:** EB Garamond Variable, self-hosted via @fontsource-variable, upright and italic (with Iowan Old Style, Georgia, serif)

**Character:** Roman inscriptional capitals over a Garamond book face. Cinzel carries every year, title, and label in tracked uppercase or small settings; Garamond carries every sentence. Old-style numerals are on in body text; tabular numerals are on wherever a year is compared or counted.

### Hierarchy
- **Display** (800, clamp(3rem, 10.5vw, 6rem), 1.0, 0.06em, uppercase): the page title only.
- **Headline** (700, clamp(2.2rem, 5vw, 3.6rem), 1.05, 0.05em, uppercase): era titles.
- **Section** (700, clamp(1.8rem, 3.4vw, 2.7rem), 1.18, 0.035em): overview and FAQ headings.
- **Title** (700, clamp(1.4rem, 2.4vw, 1.75rem), 1.3): major event titles. Minor events use 600 at 1.15rem.
- **Body** (400, 1.125rem, 1.65): accounts and descriptions, measure 66ch. Summaries sit at 1.08rem (major 1.15rem); the overview lede at clamp(1.28rem, 2.1vw, 1.5rem).
- **Year** (600–700, 0.92–1.05rem, 0.06–0.08em, tabular): margin years and era start years.
- **Label** (700, 0.6–0.8rem, 0.12–0.22em, uppercase): ruler segments, controls, facts, readout label.

### Named Rules
**The Capitals Rule.** Cinzel is never set in sentence case below 1rem; small Cinzel is always tracked uppercase.

**The Italic Rule.** Italic Garamond is reserved for the tagline, era descriptions, and image credits: the voice that comments on the record rather than being the record.

## Layout

A single centred column of 62rem for the ledger inside a 1120px page width, with a fluid gutter of clamp(1.25rem, 4vw, 3rem). The ledger is a three-column grid: a 7.5rem right-aligned year margin, a 2.5rem spine column, and the entry column, whose text is capped at 44rem (46rem for major entries with images). The spine is one absolutely positioned line per era, centred in the spine column, running the full height of the era so the thread never breaks between header and entries.

The opening viewport is the hero at calc(100svh − nav height) with the ruler as the next block in flow; the ruler is `position: sticky; top: 0` so it rides up and pins. Sections open with clamp(4rem, 9vw, 7.5rem) of space and entries are separated by clamp(1.75rem, 4vw, 2.75rem). More space sits above a heading than below it throughout.

Below 768px the ledger keeps its margin: the year column narrows to 3.4rem (years may wrap to two lines), the spine column to 1.1rem, the gap to 0.6rem, and pictures pull left across the margin and spine to run edge to edge. Below 900px the ruler stacks its wordmark and readout above the track and keeps both visible from the first viewport; below 480px the era labels drop their article.

The page order is hero, ruler, ledger (three eras), then an afterword on paper carrying the overview, the reading notes, and the FAQ in the same two-column grid, then the footer on the field. Nothing sits between the ruler and 753 BC.

## Elevation & Depth

Flat by default. Depth is tonal: dark field against papyrus, hairlines rather than borders, and a single soft, offset shadow used only under photographs. The one glow in the system is on the gold thread and the ignited dot.

### Shadow Vocabulary
- **Image** (`box-shadow: 0 24px 48px -22px rgba(29, 16, 11, 0.6)`): under event figures only.
- **Pinned ruler** (`box-shadow: 0 12px 32px -12px rgba(0, 0, 0, 0.6)`): appears only once the ruler is pinned.
- **Thread glow** (`box-shadow: 0 0 10–12px rgba(201, 151, 58, 0.45–0.55)`): the spine fill and the ruler fill.
- **Ignition ring** (`box-shadow: 0 0 0 4px rgba(230, 191, 106, 0.25)`): a reached dot.

### Named Rules
**The No-Card Rule.** Nothing on the paper is boxed. If content needs separating, use a 1px rule in `--rule` or space; never a border plus a shadow.

## Shapes

Square and hairline. Radii are 2px on controls and 4px on images; dots are circles; era markers are 14px squares rotated 45° with a solid rubric centre. Hairlines are 1px and take their colour from the surface (ink at 16–32% on paper, gold at 22% on the field). Rules that mark a start (under headings, before an account) are short: 3–3.5rem of gold.

## Components

### Hero
A full-height dark field with a 1px inset frame, the display title in two lines, the span line (year, gold rule with a diamond, year), the italic tagline, and a scroll cue. Entrance is the page's one authored sequence: the title carves in from blur and offset, then the rule draws, then the years, tagline, cue, and frame arrive in order over roughly 1.6s.

### Ruler (navigation)
- **Shape:** a hairline track with era segments whose width is proportional to duration (244 : 482 : 503 years); a tick at each era start and at 476 AD.
- **Fill:** a 2px gold line scaled by `--timeline-progress` from the document root.
- **States:** current era in gold bright; hover in field text; segments are links with 44px targets. Pinned state adds the bottom hairline, the shadow, the wordmark, and the live year readout.

### Ledger entry
- **Year:** Cinzel in the margin, rubric for major, ink muted for minor, tabular numerals.
- **Dot:** 11px ring (major 15px, rubric) on the spine; fills gold with a 4px halo when the reading line passes (`data-reached`).
- **Figure:** major entries carry a 16:9 image at 4px radius with the image shadow and a light gradient scrim. The picture waits in shadow (sepia 0.4, brightness 0.78, scale 1.04) and comes into light over about a second once the reading line reaches the entry; hover then clears the last of the sepia with a slow 1.035 scale.
- **Title:** a button inside the heading; hover turns rubric.
- **Account toggle:** label-style rubric text with a chevron that rotates 180° when open; copy is "Read the full account" / "Close the account".
- **Account:** always rendered, opened with a `grid-template-rows: 0fr → 1fr` transition (440ms out, 260ms close), content fading in with a short delay; inert while closed.

### Era header
The era's start year in the margin, a rotated square marker on the spine, the headline, a facts line (span, years, event count separated by small gold diamonds), and an italic description. It is the ledger's one authored arrival: the headline is cut in from the spine outward by a 1s clip-path wipe, the marker turns 90° into place, and the year, facts, and description follow at 150, 300, and 420ms. The marker's centre turns gold once the reading line passes it. Content is only hidden once `html[data-js]` is set, so the page is never blank without script.

### Year readout
Three numeral drums (0–9 plus a blank) and a BC/AD mark. A change of year rolls only the drums that differ over 520ms with the exponential ease; the era mark crossfades. A visually hidden copy carries the year for assistive tech. The year holds for the whole of an entry, an opened account included, and runs to the next year only across the gap between entries.

### Afterword
The overview sits in a two-column grid on paper: a Cinzel heading with a short gold rule on the left, the copy at the account measure on the right. The FAQ below it stacks its heading over a definition list with hairlines between items, the question in rubric Cinzel and the answer in Garamond.

### Motion budget
Entries have no entrance animation; their arrival is the spine filling to them, the dot igniting, and the picture coming into light. Reduced motion removes the hero sequence, the era wipe, and the drums' roll, and keeps opacity and state changes.

## Do's and Don'ts

- Do let gold mean progress and nothing else.
- Do keep years in Cinzel and sentences in Garamond.
- Do separate with space or a 1px rule; never a box.
- Do keep the dark field for chrome and closing, not for reading passages.
- Don't add a kicker or eyebrow above any heading; the heading carries its own weight.
- Don't reintroduce cards, alternating left/right entries, hover lifts, or a generic fade-and-rise on every block.
- Don't animate colour on anything but the gold thread and the dot it ignites.
- Don't use the gold as a text fill except on the field (readout, current era, span line).

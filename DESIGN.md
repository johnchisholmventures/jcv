---
name: John Chisholm
description: Editorial speaker and personal-authority site—warm paper, deep violet action, serif display.
colors:
  background: "#F6F3ED"
  foreground: "#191817"
  muted: "#625F59"
  violet: "#5835A5"
  violet-dark: "#382263"
  violet-hover: "#4A2C8C"
  gold: "#B08A45"
  card: "#FFFFFF"
  divider: "#DCD7CD"
  on-violet: "#F6F3ED"
typography:
  display:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Source Sans 3, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Source Sans 3, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.12em"
rounded:
  control: "0.5rem"
  card: "0.75rem"
spacing:
  section-y: "4rem"
  section-y-lg: "6rem"
  container-x: "1.25rem"
components:
  button-primary:
    backgroundColor: "{colors.violet}"
    textColor: "#FFFFFF"
    rounded: "{rounded.control}"
    padding: "0.7rem 1.35rem"
  button-primary-hover:
    backgroundColor: "{colors.violet-hover}"
    textColor: "#FFFFFF"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.foreground}"
    rounded: "{rounded.control}"
    padding: "0.7rem 1.35rem"
  button-on-dark:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.violet-dark}"
    rounded: "{rounded.control}"
    padding: "0.7rem 1.35rem"
  card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.card}"
    padding: "1.5rem"
---

# Design System: John Chisholm

## Overview

**Creative North Star: "The Lecture Series Program"**

The visual system treats the site as a premium personal-authority publication—closer to a respected author site or university lecture series than a startup marketing page or VC firm. Warm off-white paper, near-black type, restrained deep violet for action, and a whisper of warm gold for rare emphasis. Large editorial serif headlines carry gravitas; clean sans-serif UI keeps navigation and CTAs contemporary without trendiness.

Longevity and experience are advantages. Photography of John speaking or in conversation leads; decorative chrome never replaces content. Motion stays subtle; media never autoplays.

**Key Characteristics:**
- Warm editorial paper field, not pure white SaaS canvas
- Deep violet as the sole primary action color
- Serif display + sans interface pairing
- Generous section spacing; thin dividers; restrained cards
- Contact-first, low-pressure hierarchy; firm identity stays in the footer

## Colors

A restrained editorial palette: warm neutral ground, charcoal text, one decisive violet accent, gold used rarely.

### Primary
- **Deep Violet** (#5835A5): Primary CTAs, active links, category labels. Rarity makes invitation buttons carry weight.
- **Dark Violet** (#382263): Dark featured-talk band and deep surfaces behind media.
- **Violet Hover** (#4A2C8C): Primary button hover.

### Secondary
- **Warm Gold** (#B08A45): Sparing accent (e.g. book label). Never a primary CTA fill.

### Neutral
- **Warm Paper** (#F6F3ED): Page background.
- **Near Black** (#191817): Primary text and display type.
- **Stone** (#625F59): Secondary/body muted text.
- **Card White** (#FFFFFF): Cards and elevated surfaces.
- **Warm Divider** (#DCD7CD): Borders and hairlines.
- **On Violet** (#F6F3ED): Text on solid violet bands.

### Named Rules
**The One Accent Rule.** Violet owns interactive emphasis. Gold appears only as occasional editorial ornament—not competing CTAs.

**The No-Neon Rule.** No gradients-as-brand, glassmorphism, or heavy purple image overlays.

## Typography

**Display Font:** Source Serif 4 (Georgia, serif)  
**Body Font:** Source Sans 3 (system-ui, sans-serif)

**Character:** Confident editorial serif for ideas; modern humanist sans for interface and long reading. Not trendy display mono, not corporate geometric startup type.

### Hierarchy
- **Display** (600, ~1.85–3rem, 1.15 lh, −0.02em): Hero and major section titles.
- **Title** (600, ~1.2–1.75rem): Card titles, talk titles.
- **Body** (400, 1.0625rem+, 1.65 lh): Supporting copy; mobile floor 16px.
- **Label / Eyebrow** (600, 0.75rem, 0.12em tracking, uppercase): Section and topic categories when the brief requires them.

### Named Rules
**The One H1 Rule.** A single page-level `<h1>`; section titles are `<h2>`.

## Layout

Maximum content width ~76rem (1216px), centered, with horizontal padding 1.25–1.75rem. Section vertical rhythm roughly 4–6rem. Desktop hero is two columns (copy + photograph); speaking topics are a two-by-two grid; proof points and cards wrap naturally on tablet; mobile stacks single column with primary CTA before the hero image. Sticky header remains available at all breakpoints.

### Named Rules
**The Viewport Hero Rule.** Keep the hero messaging and primary CTA visible within roughly one desktop viewport—large type, not billboard-scale type.

## Elevation & Depth

Hybrid: hairline borders plus soft offset shadows on cards and key photographs. Depth is quiet; no hard offset neo-brutal shadows or glow halos.

### Shadow Vocabulary
- **Card** (`0 1px 2px rgb(25 24 23 / 0.04), 0 8px 24px rgb(25 24 23 / 0.06)`): Default elevated surfaces.
- **Elevated** (`0 4px 12px rgb(25 24 23 / 0.08), 0 16px 40px rgb(25 24 23 / 0.1)`): Hero photo, book cover, featured media.

## Shapes

Slightly rounded—never pill-heavy. Controls ~8px; cards ~12px. Thin 1px dividers in warm divider color. Photography uses the card radius without excessive rounding.

## Components

### Buttons
- **Shape:** Gently rounded (0.5rem), min-height 44px.
- **Primary:** Solid violet, white label—used for Invite and other primary conversions.
- **Secondary:** Transparent with divider border on paper surfaces.
- **On dark / ghost on dark:** White solid or translucent border for violet/dark sections.
- **Focus:** 2px violet outline with offset.

### Cards / Containers
- White surface, divider border, soft card shadow, ~12px radius, internal padding ~1.5–1.75rem.
- Topic cards carry category label, title, description, audience line, and a light text link—not photo overload.

### Navigation
- Sticky warm-paper header; wordmark “John Chisholm” with supporting label; text links; solid violet invite CTA.
- Mobile: accessible menu; invite CTA remains visible; hamburger labeled for assistive tech.

### Featured media
- Dark violet band, large thumbnail with explicit play control, modal video only after click (no autoplay on page load).

## Do's and Don'ts

### Do:
- **Do** lead with John’s ideas, real talks, biography, writing, and founded companies.
- **Do** use text labels for institutions when logos are unavailable or endorsement-sensitive.
- **Do** keep John Chisholm Ventures quiet (footer/legal), not as the dominant logo.
- **Do** use real People & Places photos and captions for social proof; never invent quotes or metrics.

### Don't:
- **Don't** present the site as an active VC fund, portfolio solicitation, or pitch portal.
- **Don't** use carousels, autoplay video, scroll-jacking, startup gradients, or neon accents.
- **Don't** wall the homepage with company logos or lead with an article archive.
- **Don't** use “JCV” as the primary public identity on the homepage.

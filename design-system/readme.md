# Reception Genies — Design System

Brand and UI system for **Reception Genies**, an AI receptionist service for UK
businesses. An AI voice agent answers a company's calls 24/7 — taking messages,
booking appointments, answering FAQs, and routing urgent callers — for one flat
price (£3.25 +VAT / day). The product is friendly, reassuring and unmistakably
British-SME focused, fronted by a cast of illustrated "genie" receptionist
characters (Grace, and friends).

## Source

Everything here is derived from the attached Figma file **"Natterbox – AI
Receptionist LP Flow.fig"** (mounted read-only during the build). The file is a
landing-page + onboarding exploration; the design-defining artboards are:

- **Branding-Concepts → Decided Branding** — the agreed palette, type and logo.
- **Playground → Colour Palette** — swatch source.
- **Home → Home – Desktop (Light / Dark Mode)** — the rebranded marketing page.
- **Home → Receptionist Avatars** — the illustrated character set.
- **Customer Sign-up → Desktop flow** — the onboarding steps.

The file defines **no Figma component sets, variables or text styles** — the
system below was distilled from the finished designs, not from a component
library. There are earlier "Ava" monochrome concept frames in the file; those are
superseded by the colourful "Decided Branding" direction, which this system
follows.

> **Fonts:** **Outfit** and **Inter** are self-hosted from `assets/fonts/`
> (variable TTFs supplied by the brand), declared as `@font-face` in
> `tokens/fonts.css`. Nunito appears incidentally in the source board only.

---

## Content fundamentals

**Voice.** Confident, plain-spoken, reassuring. Leads with the customer's fear of
missing business and answers it immediately.

- **Person:** second person ("your business calls", "your AI receptionist"). The
  product refers to itself as "we/our".
- **Casing:** sentence case everywhere — headlines, buttons, labels. Section
  titles are sentence case ("What your AI receptionist handles", "Simple,
  transparent pricing").
- **Headlines** are short, declarative, often anaphoric triplets:
  *"Never miss a call. Never miss a lead. Never miss a booking."*
- **Body** is concrete and benefit-led, one idea per sentence. UK spelling
  ("customised", "personalise") and UK specifics (0333 numbers, +VAT, "UK
  businesses").
- **CTAs** are outcome-first and price-transparent: *"Start now for only £3.25+VAT
  /day"*, *"Sounds great, let's get started"*, *"Listen to a demo"*.
- **Numbers** are used sparingly but pointedly (24/7, <5 min, 47%, 85%, 15%
  commission, £99/month).
- **Emoji:** essentially none in marketing copy; a single celebratory 🎉 appears at
  the "you're live" moment of onboarding. Don't sprinkle emoji elsewhere.
- **Tone words:** simple, transparent, instant, no contracts, cancel anytime.

---

## Visual foundations

**Colour.** A high-contrast, electric-cool palette on white or Deep Navy grounds.

| Token | Hex | Role |
|---|---|---|
| Deep Navy | `#06154C` | Primary ink; dark-mode surface |
| Dark Amethyst | `#3D1C5B` | Light-mode primary action |
| Genie Blue | `#0076FF` | Links, accents |
| Electric Sapphire | `#5A69FF` | Dark-mode action, gradients |
| Neon Ice | `#1CEFE8` | Signature accent — Get Started pill, icon chips, rings |
| White | `#FFFFFF` | Page surface |

Neutrals are a zinc ramp (`#09090B → #FAFAFA`, borders `#E4E4E7`). Success is
`#00C950`. Two pale washes carry sections: sapphire tint `#EEF1FF` (stats bar,
"How it works") and ice tint `#E4FEFC`.

**Gradients.** Diagonal navy→sapphire and blue→navy for imagery tiles; a
vertical amethyst→sapphire band for the affiliate CTA. Never a purple "AI-slop"
wash — these are specific, transcribed angles/stops (see `tokens/colors.css`).

**Type.** Two families: **Outfit** (rounded geometric) for all display/headings
and the wordmark; **Inter** for body, UI and data. Headlines are bold/extrabold
with tight tracking (-0.02em) and near-1.0 line-height. Body is 15–18px, 1.55
line-height, grey `#71717A`.

**Shape & elevation.** Cards and tiles use a **12px** radius; the pricing card
16px; buttons are full **pills**; icon chips are 12px rounded squares. One soft
card shadow (`--shadow-card`: layered 16.24.40 alphas) — no heavy drop shadows.
Feature cards sit on a hairline border and lift 3px with the card shadow on hover.

**Motion.** Calm and short — 120–320ms, ease-out `cubic-bezier(.22,1,.36,1)`. No
bounce. Buttons brighten (~6%) and lift 1px on hover, dip to 0.98 scale on press.
Focus shows a Genie-Blue ring.

**Imagery.** The hero device is the illustrated **receptionist avatar** — a
cartoon person with a headset, on a blue radial ground, inside a circular Neon-Ice
ring with an optional green live-dot. These are real PNG assets, not to be
redrawn. Colour vibe: bright, friendly, cool blues.

**Layout.** Centred, generous whitespace, ~96px section rhythm, 1120–1200px max
width. Marketing content is centre-aligned; sections alternate white and pale
sapphire. Dark mode flips the page to Deep Navy, cards to a raised navy, and the
primary action to Electric Sapphire.

---

## Iconography

Line icons in the **Lucide** style — 24×24, 2px stroke, round caps/joins,
currentColor. The set actually used across the product is small and functional:
phone, phone-call, calendar, message, building, help-circle, users, check /
check-circle (success green), arrow-right, chevron-right, mic, sparkles, upload,
play — all provided by the in-house `Icon` component (Lucide geometry inlined, so
no CDN dependency). The multi-colour Google "G" is included for the
Continue-with-Google button. Icons usually sit inside a Neon-Ice `IconTile` chip.
No emoji as icons; no icon font.

**Brand mark.** The genie mark (a genie/mermaid figure with a headset, arms
crossed) and the full "Reception Genies" lockup are the **official artwork**
supplied by the brand (`assets/logo-*.svg`). The `Logo` component embeds the
lockup vector and recolours it per tone (light = navy mark + sapphire
"Reception"; dark = white + ice; plus mono navy / white). `LogoMark` renders the
mark alone.

---

## Index / manifest

**Foundations & tokens**
- `styles.css` — root entry (import this one file). Imports everything below.
- `base.css` — element defaults + `.rg-display` / `.rg-eyebrow` / `.rg-lead` helpers.
- `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`,
  `tokens/effects.css`, `tokens/fonts.css` — base + semantic tokens; `[data-theme="dark"]` scope.

**Components** (React, `window.ReceptionGeniesDesignSystem_94e232.*`)
- Brand: **Logo**, **LogoMark**
- Core: **Button**, **Badge**, **IconTile**, **Icon**
- Forms: **Input**
- Media: **Avatar**
- Marketing: **NavBar**, **Footer**, **FeatureCard**, **StepCard**, **CheckItem**,
  **StatItem**, **SectionHeading**, **PricingCard**

**UI kits**
- `ui_kits/marketing/` — full landing page, light + dark toggle.
- `ui_kits/onboarding/` — 5-step customer setup wizard.

**Assets**
- `assets/logo-mark.svg` + `assets/logo-{light,dark,navy,white}.svg` — official mark & lockups.
- `assets/avatars/*.png` — 7 named receptionist characters (Grace, Kenji, Marcus,
  Priya, Ruby, Tom, Ava) each with a light- and dark-mode variant.
- `assets/fonts/` — self-hosted Outfit + Inter variable fonts, with OFL licences.

## Fonts and licences

Both families are self-hosted from `assets/fonts/` and ship under the **SIL Open
Font License 1.1**; the licence text travels with the fonts as required:

| Family | Files | Source | Licence |
|---|---|---|---|
| Outfit | `Outfit-Variable.ttf` | [Outfitio/Outfit-Fonts](https://github.com/Outfitio/Outfit-Fonts) | OFL 1.1 — `assets/fonts/Outfit-OFL.txt` |
| Inter | `Inter-Variable.ttf`, `Inter-Italic-Variable.ttf` | [rsms/inter](https://github.com/rsms/inter) | OFL 1.1 — `assets/fonts/Inter-OFL.txt` |

**Specimen cards** — `guidelines/*.card.html` (Colors / Type / Spacing / Brand)
and one card per component directory populate the Design System tab.

## Intentional additions

- **Icon** — the source has no icon component, but the designs clearly use a
  Lucide-style set; `Icon` bundles that geometry so kits and cards don't depend on
  a CDN. **SectionHeading / StatItem / CheckItem / IconTile** are small structural
  helpers extracted from repeated landing-page patterns rather than net-new UI.

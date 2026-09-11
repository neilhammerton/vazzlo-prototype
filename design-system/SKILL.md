---
name: reception-genies-design
description: Use this skill to generate well-branded interfaces and assets for Reception Genies (AI receptionist service for UK businesses), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference
- **Brand:** Reception Genies — friendly, confident, British-SME AI receptionist. Sentence case, second person, price-transparent CTAs, essentially no emoji.
- **Colours:** Deep Navy `#06154C`, Dark Amethyst `#3D1C5B`, Genie Blue `#0076FF`, Electric Sapphire `#5A69FF`, Neon Ice `#1CEFE8`, White. Success `#00C950`.
- **Type:** Outfit (display/headings + wordmark), Inter (body/UI). Tight tracking on headlines.
- **Shape:** 12px card radius, pill buttons, one soft `--shadow-card`, calm short ease-out motion.
- **Signature moves:** Neon-Ice accent (Get Started pill, icon chips, avatar ring), illustrated receptionist avatars, navy⇄sapphire gradients, light/dark parity.

## Files
- `styles.css` — link this; pulls in all tokens + base + fonts.
- `tokens/` — colour, type, spacing, effects tokens (light + `[data-theme="dark"]`).
- `components/` — React components on `window.ReceptionGeniesDesignSystem_94e232`.
- `ui_kits/marketing`, `ui_kits/onboarding` — full-screen recreations to copy from.
- `assets/logo-mark.svg`, `assets/avatars/*.png` — real brand assets (never redraw).
- `guidelines/*.card.html` — foundation specimens.

To use components in an HTML file: link `styles.css`, load React + Babel + `_ds_bundle.js`, then `const { Button, NavBar, ... } = window.ReceptionGeniesDesignSystem_94e232`.

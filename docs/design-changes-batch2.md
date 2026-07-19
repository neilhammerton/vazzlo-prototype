# Vazzlo Design Tweaks — Batch 2

Apply these fixes following the Batch 1 changes.

---

## Tweak 1 — Customer CTA button text colour

Revert the CTA button text on the customer homepage back to **white (#FFFFFF)** instead of black. Keep everything else (gradient background, glow shadow, size, copy) as-is.

---

## Tweak 2 — Try It Now bar

- **Remove the icon entirely** — no image, just text
- Make "Try it now!" text **the same font size as the phone number** in that section (both should be the larger/bolder size)
- Keep the rest of the bar as-is

---

## Tweak 3 — Features section ("What your AI receptionist handles")

- **Remove the numbered circles** (1, 2, 3, 4, 5, 6) — just show the icon and the title, no numbers
- **Make the icons larger** — increase from current size to around 80-96px
- **Increase the title font size** — match the title size used in the "How it works" cards (e.g. "Tell us about your business" size). All six titles ("Answer every call", "Take messages", etc.) should be this larger size

---

## Tweak 4 — How It Works section

- Change the numbered circles to read **"Step 1"**, **"Step 2"**, **"Step 3"** instead of just "1", "2", "3"
- Change the titles ("Tell us about your business", "Choose your AI receptionist", "Go live instantly") to **white (#FFFFFF)** text — they're currently cyan

---

## Tweak 5 — Pricing card spacing

Add a non-breaking space or small left padding before "£3.25" so it appears visually centred on the card. Currently the £ symbol makes it look slightly off-centre even though it's technically centred. A `&nbsp;` before the £ or a small `padding-left` nudge on the price text should fix it.

---

## Tweak 6 — Theme preview (footer of Customer Homepage)

Make the Dark and Light theme toggles actually work:

**Dark theme** (current/default):
- Background: #0A1628
- Card backgrounds: rgba(15,35,65,0.6)
- Text: white headings, slate body text
- Borders: #1E3A5F
- This is how the site looks now

**Light theme:**
- Background: #F7FAFB (ghost white)
- Card backgrounds: #FFFFFF with subtle border
- Headings: #0A1628 (dark)
- Body text: #6B7B8D (slate)
- Borders: #E2E8F0 (light grey)
- Navbar: white background with dark text
- CTA button keeps the cyan→teal gradient
- Agent images, icons etc stay the same

Implementation approach:
- Use React state or context to track the current theme ("dark" | "light")
- Apply theme via CSS custom properties or a theme class on the root element
- Toggle when the user clicks Dark or Light in the footer
- The "Modern" button can stay as an alert placeholder for now
- Default to dark theme on load

---

## Tweak 7 — Affiliate homepage CTA button text colour

Change the CTA button text on the affiliate homepage to **white (#FFFFFF)** instead of black. Keep everything else (gradient, glow, centering, copy) as-is.

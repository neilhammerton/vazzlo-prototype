# Vazzlo Design Changes — Batch 1

Apply these 8 changes to the existing Vazzlo prototype. Work through them in order.

---

## Change 1 — Hero Section Updates (CustomerHome)

Update the hero section on the customer homepage with these changes:

### 1a. "Meet [Name]" label
Add a text label below the rotating agent image that shows the current agent's name — "Meet Grace", "Meet Kenji" etc. It should fade in/out in sync with each character transition.
- Colour: mint (#B8F0ED)
- Font size: 13px
- Font weight: 600
- 20px height container so layout doesn't shift

### 1b. Badge text
Change the pill badge from:
- OLD: "● AI Receptionist for UK Businesses"
- NEW: "AI Receptionists for UK Businesses" (plural, remove the bullet dot)

### 1c. Typography improvements
- Headline font size: increase to 60px (from 52px)
- Headline letter-spacing: -0.02em
- Headline line-height: 1.04
- Sub-headline font size: 19px, font-weight 500
- Both should feel crisper with more contrast

### 1d. CTA button
- Text changes to: "Start now for only £3.25+VAT / day"
- Text colour: black (#062430) — NOT white
- Background: linear-gradient(135deg, #00A9CE, #64CCC9)
- Add box-shadow: 0 14px 40px rgba(0,169,206,0.35) for a glow effect
- Border-radius: 10px
- Padding: 18px 56px
- Font-size: 19px, font-weight: 700

### 1e. Hero background
Add two subtle radial gradient glows behind the hero:
- Top-left: radial-gradient(720px 520px at 20% 12%, rgba(0,169,206,0.10), transparent 60%)
- Top-right: radial-gradient(680px 520px at 84% 20%, rgba(100,204,201,0.07), transparent 60%)

### 1f. Agent image ring glow
Add a breathing glow ring behind the rotating agent image:
- Radial gradient: rgba(0,169,206,0.40) → transparent
- Filter: blur(6px)
- Animation: scale(1) → scale(1.07) breathing effect, 3.6s ease-in-out infinite

Reference: The HTML file `docs/hero-receptionists.html` has a complete working implementation of this hero design if you need exact CSS values.

---

## Change 2 — "How It Works" Section Redesign (CustomerHome)

Replace the current 3-card "How it works" section with a redesigned version.

### Content (3 steps):
1. **"Tell us about your business"** — "Upload a document about your services. Our AI learns your hours, team, and FAQs."
2. **"Choose your AI receptionist"** — "Pick a name, voice, and personality. Preview how they'll greet your callers."
3. **"Go live instantly"** — "We assign a UK 0333 number. Divert your line and the AI starts answering."

### Layout:
- Desktop: 3 columns in a row, with connecting flow lines between cards
- Mobile: vertical stack with connecting flow lines between cards
- Each card: dark card background (navy/card colour), rounded corners, subtle border

### Card design:
- Large numbered circle (1, 2, 3) with cyan gradient background, positioned top-left
- Title in cyan, bold
- Description text in slate/light
- Illustration image on the right side of each card

### Illustration images:
Use these files from `src/assets/images/`:
- Step 1: `step1-upload.png`
- Step 2: `step2-voice.png`
- Step 3: `step3-golive.png`

### Connecting lines:
- Cyan/teal coloured lines connecting each card to the next
- Horizontal on desktop, vertical on mobile
- Use CSS borders or pseudo-elements, not images

---

## Change 3 — Features Section Redesign (CustomerHome)

Replace the current 6 feature cards with icon-based cards using uploaded assets.

### Content and icons (6 features):
1. **"Answer every call"** → `answer-every-call.png`
2. **"Take messages"** → `take-messages.png`
3. **"Book appointments"** → `book-appointments.png`
4. **"Route to humans"** → `route-to-humans.png`
5. **"Answer FAQs"** → `answer-faqs.png`
6. **"Your voice, your brand"** → `your-voice-your-brand.png`

### Card design:
- Each card shows: icon image (centred, ~64px), then a cyan numbered circle below it, then the title in cyan below that
- Icon images are in `src/assets/images/`
- Note: the icon PNGs have white backgrounds — strip the white background or use mix-blend-mode/CSS to make them work on the dark cards
- Grid: 3×2 on desktop, 2×3 on tablet, single column on mobile

---

## Change 4 — "Try It Now" Bar (CustomerHome)

Update the try-it-now bar:
- Replace any existing icon/emoji with the `answer-every-call.png` image (same file used in features)
- Keep the text: "Try it now! Call 0333 150 0909 to speak to our AI receptionist and see how it works!"
- Style the icon at ~32px, inline with the text

---

## Change 5 — Reorder Homepage Sections (CustomerHome)

Change the section order on the customer homepage. Current order:
1. Hero
2. Try it bar
3. Stats bar
4. How it works
5. Features
6. Pricing
7. Affiliate CTA
8. Footer

New order:
1. Hero
2. Try it bar
3. Stats bar
4. **Features** (moved up — "What your AI receptionist handles")
5. **How it works** (moved down)
6. Pricing
7. Affiliate CTA
8. Footer

---

## Change 6 — Affiliate Homepage CTA Button (AffiliateHome)

Update the main CTA button on the affiliate homepage:
- Text: "Sign up as an Affiliate and start earning now!"
- Centre-aligned (not left-aligned, not full-width)
- Text colour: black (#062430)
- Background: linear-gradient(135deg, #00A9CE, #64CCC9)
- Box-shadow: 0 14px 40px rgba(0,169,206,0.35)
- Border-radius: 10px
- Padding: 18px 56px
- Auto width (sized to content, not 100%)
- Match the customer homepage CTA button style exactly

---

## Change 7 — Affiliate Homepage Text Alignment (AffiliateHome)

Centre-align all hero content on the affiliate homepage to match the customer homepage:
- Headline ("Refer AI receptionists. Earn recurring income.")
- Sub-headline paragraph
- All content should be text-align: center with auto margins

Currently it's left-aligned — change to centred.

---

## Change 8 — Affiliate Infographic Icons (AffiliateHome)

Replace the emoji icons in the "How a few shares become £70k+ per year" infographic section:

- Step "Share your link" (currently 🔗) → use `Share your link.png` from `src/assets/images/`
- Step "People sign up" (currently 👥) → use `People sign up.png` from `src/assets/images/`
- Step "You earn 15%" (currently 💷) → use `You earn 15%.png` from `src/assets/images/`

Display each image at ~48-56px in the circle containers where the emojis currently sit. Strip white backgrounds if needed.

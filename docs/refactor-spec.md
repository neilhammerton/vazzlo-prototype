# Vazzlo Prototype — Refactor Spec

## Purpose
This document tells you how to break `docs/vazzlo_landing_v2.jsx` (a 1,227-line monolithic React file) into a proper multi-file project. Read this FIRST, then use the JSX as your source material.

---

## 1. Design System (`src/theme/`)

Extract all shared design values and primitives into reusable modules.

### `src/theme/tokens.js`
Export the colour palette, font stack, and any shared spacing/radius values.

Source: lines 3–9 of the monolith (`const T = {...}`).

```
dark: "#0A1628", navy: "#0F2341", cyan: "#00A9CE", teal: "#64CCC9",
mint: "#B8F0ED", white: "#FFFFFF", ghost: "#F7FAFB", slate: "#6B7B8D",
lightSlate: "#94A3B8", border: "#1E3A5F", coral: "#F8485E",
green: "#22C55E", amber: "#F59E0B", purple: "#A855F7",
card: "rgba(15,35,65,0.6)", glass: "rgba(255,255,255,0.04)"
font: Inter + system fallbacks
```

Also add these to `tailwind.config.js` as custom theme colours so we can use `bg-vz-dark`, `text-vz-cyan`, etc.

### `src/theme/tailwind.config.js`
Extend Tailwind with Vazzlo custom colours under the `vz-` prefix, plus the Inter font family.

---

## 2. Shared UI Components (`src/components/`)

These are reused across multiple pages. Extract each as a standalone component.

### `src/components/Navbar.jsx`
- Source: the `Nav` function (approx lines 68–96)
- Props: `onNavigate`, `current` (current page string)
- Context-aware button rendering:
  - Customer homepage shows: "Affiliate Programme" | "Login"
  - Affiliate homepage shows: "Customer Homepage" | "Login"
  - Login page shows: "Customer Homepage" | "Affiliate Programme"
  - Dashboards show: "Log out" only
- Logo from `src/assets/brand/` (replace the base64 `LOGO_SM` constant)
- Ghost/outline button style (cyan border), highlight on hover, no pre-selected state

### `src/components/Button.jsx`
- Source: the `btn()` helper function (lines 11–17)
- Props: `variant` ("primary" | "outline" | "danger"), `size`, `fullWidth`, standard button props
- Primary: gradient background (cyan → teal)
- Outline: transparent with cyan border
- Danger: transparent with coral border

### `src/components/Input.jsx`
- Source: the `inp` constant (lines 18–22) and `lbl` constant
- Props: standard input props plus `label`
- Dark-themed input with consistent styling

### `src/components/AgentCard.jsx`
- Used in: signup step 4, customer dashboard agent setup, affiliate dashboard agent setup
- Props: `agent` object, `selected` boolean, `onSelect` callback, `size` ("sm" | "md")
- Shows: agent image, name, personality, gender, voice
- Selected state: cyan border + highlighted background

### `src/components/AgentPreview.jsx`
- Used in: signup step 4, customer dashboard, affiliate dashboard
- Props: `agent` object, `companyName`, `onTestVoice` callback
- Shows: large agent image, name, personality, gender/voice, greeting text, "Test voice" button

### `src/components/CalendarIntegration.jsx`
- Used in: signup step 4, customer dashboard agent setup
- Complex multi-step flow: choose provider → connecting animation → settings form → done
- Props: `provider`, `step`, `settings`, and their respective setters
- Internal states: provider selection (Google Calendar / Calendly), connection status, settings form

### `src/components/Sidebar.jsx`
- Used in: customer dashboard, affiliate dashboard
- Props: `tabs` (string array), `activeTab`, `onTabChange`
- Renders vertical nav with active indicator (cyan left border)

### `src/components/StepProgress.jsx`
- Used in: customer signup, affiliate signup
- Props: `currentStep`, `totalSteps`, `titles` (string array)
- Renders: step counter, step title, gradient progress bar

### `src/components/DataTable.jsx`
- Used in: messages tables, customer tables, invoice tables
- Props: `columns` (array of {key, label, width}), `data`, `onRowAction`
- Renders: header row + data rows with consistent styling

---

## 3. Data (`src/data/`)

### `src/data/agents.js`
Export the AGENTS array with all 7 characters. Replace base64 image strings with imports from `src/assets/images/`.

```js
import graceImg from '../assets/images/Grace.png';
// ... etc for all 7

export const AGENTS = [
  { name: "Grace", personality: "Warm professional", gender: "Female", voice: "British", img: graceImg },
  { name: "Priya", personality: "Formal corporate", gender: "Female", voice: "British (Scottish)", img: priyaImg },
  { name: "Ruby", personality: "Warm casual", gender: "Female", voice: "British", img: rubyImg },
  { name: "Tom", personality: "Formal corporate", gender: "Male", voice: "British", img: tomImg },
  { name: "Amara", personality: "Friendly, chatty, happy", gender: "Female", voice: "British", img: amaraImg },
  { name: "Kenji", personality: "Confident friendly", gender: "Male", voice: "British", img: kenjiImg },
  { name: "Marcus", personality: "Direct warm professional", gender: "Male", voice: "British (Scottish)", img: marcusImg },
];
```

### `src/data/mockData.js`
Export mock data used in dashboards:
- `customerMessages` — the 7 message objects used in customer dashboard
- `affiliateCustomers` — the customer list used in affiliate dashboard
- `affiliateOwnMessages` — the 3 messages shown in affiliate messages tab

---

## 4. Pages (`src/pages/`)

Each page maps to a route. Extract from the monolith functions.

### `src/pages/CustomerHome.jsx`
- Source: `HomePage` function (approx lines 67–219)
- Sections (in order):
  1. Hero with rotating character carousel (7 agents, CSS animation)
  2. Pill badge: "AI Receptionist for UK Businesses"
  3. Headline: "Never miss a call. Never miss a lead. Never miss a booking."
  4. CTA: "Start now for only £3.25/day"
  5. Try-it bar: "Call 0333 150 0909"
  6. Stats bar: 4 stats (24/7, 5 min setup, 97% satisfaction, 0333 number)
  7. "How it works" — 3 cards
  8. Features — 6 cards (3×2 grid)
  9. Pricing card (£3.25/day / £99/month + VAT)
  10. Affiliate CTA banner
  11. Footer with theme preview toggles

### `src/pages/Login.jsx`
- Source: `LoginPage` function (lines 1179–1207)
- Google auth button, email/password fields, forgot password link
- "Sign up as Customer or Affiliate" links
- Dev test panel with test login buttons (teal for customer, purple for affiliate)

### `src/pages/CustomerSignup.jsx`
- Source: `SignupFlow` function (lines 224–539)
- 5 steps + success screen, managed with internal state
- Step 1: Your details (Google auth + manual fields)
- Step 2: Verify identity (email + mobile OTP cards)
- Step 3: Your business (Companies House lookup, postcode finder)
- Step 4: Your AI receptionist (document upload, CalendarIntegration, AgentCard selector, AgentPreview, fallback number, premium coming-soon section)
- Step 5: Payment (summary card, Stripe placeholder)
- Step 6 (success): Number display, divert instructions, email preview, dashboard link

### `src/pages/CustomerDashboard.jsx`
- Source: `CustomerDashboard` function (lines 545–806)
- Uses Sidebar with 5 tabs: Dashboard, Messages, Agent Setup, Billing, Settings
- **Dashboard tab**: Welcome header, "Agent Live" badge, 4 KPI cards, recent messages table, "view all" link
- **Messages tab**: Filters (All/Messages/Bookings/Transfers), search, full message table with resend actions
- **Agent Setup tab**: 2-column layout — left: AgentCard selector grid + knowledge base (uploaded docs) + CalendarIntegration + fallback number; right: AgentPreview + premium coming-soon
- **Billing tab**: 3 KPI cards, payment method card, invoice history
- **Settings tab**: Account details form, notification toggles, number display, danger zone (cancel subscription)

### `src/pages/AffiliateHome.jsx`
- Source: `AffiliateFlow` function step 0 (lines 811–863)
- Hero, infographic (share link → people sign up → you earn 15%), potential earnings card (£71,280/year), 3 KPI cards, dashboard feature checklist, CTA button

### `src/pages/AffiliateSignup.jsx`
- Source: `AffiliateFlow` function steps 1–3 (lines 865–980)
- 3 steps:
- Step 1: Your details (name, email, company, phone)
- Step 2: Brand your page (branded URL path, logo upload, template selection with live preview: Light/Dark/Custom)
- Step 3: Review & launch (summary, T&Cs checkbox, launch button, success with branded URL)

### `src/pages/AffiliateDashboard.jsx`
- Source: `AffiliateDashboard` function (lines 981–1172)
- Uses Sidebar with 6 tabs: Dashboard, Customers, Messages, Agent Setup, Billing, Settings
- **Dashboard tab**: Header with branded URL + "Copy" button, 4 KPI cards, traffic bar chart (7-day), commission summary, recent customers table
- **Customers tab**: 3 KPI cards, full customer table with search + export CSV
- **Messages tab**: Note about scope ("your own company messages"), filter buttons, search, message table
- **Agent Setup tab**: 2-column — left: default agent selector grid; right: default agent preview
- **Billing tab**: 4 KPI cards, payout history, bank details form
- **Settings tab**: Account details, branding display, notifications, share link, close account (danger zone)

---

## 5. Routing (`src/App.jsx`)

Replace the manual `page` state with React Router.

Source: `App` function (lines 1212–1227). Current page strings and their routes:

| Page string | Route | Page Component |
|-------------|-------|----------------|
| `home` | `/` | `CustomerHome` |
| `signup` | `/signup` | `CustomerSignup` |
| `login` | `/login` | `Login` |
| `custDash` | `/dashboard` | `CustomerDashboard` |
| `affiliate` | `/affiliate` | `AffiliateHome` |
| `affSignup` | `/affiliate/signup` | `AffiliateSignup` |
| `affDash` | `/affiliate/dashboard` | `AffiliateDashboard` |

- Wrap everything in `<BrowserRouter>`
- Navbar goes outside `<Routes>` so it's always visible
- Replace all `onNavigate("xxx")` calls with `useNavigate()` hooks
- `affLogin` and `custLogin` both route to `/login` (unified login)

---

## 6. Asset Migration

### Replace all base64 constants
The monolith embeds 8 base64 PNG strings (LOGO_SM + 7 agent images). Replace ALL of them with file imports:

```js
// Before (monolith)
const LOGO_SM = "data:image/png;base64,iVBORw0KGgo...";
const CHAR_GRACE = "data:image/png;base64,iVBORw0KGgo...";

// After (refactored)
import logoSm from '../assets/brand/iconmark.png';
import graceImg from '../assets/images/Grace.png';
```

This alone will reduce file sizes dramatically and make assets cacheable.

---

## 7. Execution Order

Do these in sequence — each step builds on the previous:

1. **Theme + Tailwind config** — design tokens available everywhere
2. **Data files** — agents and mock data available for all components
3. **Shared components** — Button, Input, Navbar, Sidebar, StepProgress, AgentCard, AgentPreview, CalendarIntegration, DataTable
4. **React Router setup** — App.jsx with route structure and placeholder pages
5. **CustomerHome** — most visible page, validates the design system works
6. **Login** — simple, validates routing
7. **CustomerSignup** — complex, 5 steps, validates shared components
8. **CustomerDashboard** — validates Sidebar and tabbed layout pattern
9. **AffiliateHome** — reuses patterns from CustomerHome
10. **AffiliateSignup** — simpler signup, reuses shared components
11. **AffiliateDashboard** — final page, reuses Sidebar pattern

After each page, run `npm run dev` and visually verify it matches the original monolith.

---

## 8. What NOT to Change

This is a refactor, not a redesign. Preserve exactly:
- All visual styling and layout
- All interactive behaviour (tab switching, step navigation, form state)
- All copy/text content
- All mock data values
- The 7 agent characters and their properties
- The email preview in signup success
- The premium "coming soon" sections
- The dev test login panel

The goal is identical visual output, cleaner code structure.

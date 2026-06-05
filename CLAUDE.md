# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Dev server with Webpack (avoids Turbopack hydration mismatches)
npm run dev:turbo    # Dev server with Turbopack (faster, but may show console warnings)
npm run build        # Static export to out/
npm run lint         # ESLint
npx tsc --noEmit     # Type-check without building
```

**To preview the static export locally** (never open `out/` directly via `file://`):
```bash
npx serve out
```

## Architecture

This is a **fully static Next.js 16 site** (`output: 'export'`). There is no server — everything compiles to plain HTML/JS/CSS in `out/`. This has key implications:

- `async headers()` in `next.config.mjs` does **not work** with static export. Security headers must be set at the hosting layer (nginx, CDN, etc.)
- No server-side rendering, no API routes. All data flows are client-side.
- The `out/` directory is what gets deployed. Run `npm run build` to refresh it after changes.

### Lead capture flow

The single form (a modal in `app/page.tsx`) submits to a **Google Apps Script web app** which writes to Google Sheets. The script URL is hardcoded in `app/page.tsx` (`GOOGLE_SCRIPT_URL`). Because the endpoint is `mode: 'no-cors'`, the response is opaque — the client assumes success after a 1.5s timeout.

Three anti-spam layers are applied before the POST reaches Google Sheets:
1. **Honeypot** — hidden `_hp` field; non-empty → silently discarded by Apps Script
2. **Client-side rate limit** — `localStorage` key `__ge_form_last_submit`, 60s cooldown
3. **Proof-of-Work** — browser solves SHA-256 PoW (`lib/pow.ts`, difficulty=3 hex zeros) when the modal opens; the `{challenge, nonce, difficulty}` token is verified server-side by `verifyPoW()` in `google-apps-script.js`. Challenges expire after 10 minutes.

After a successful submit, the user is redirected to `/gracias?nombre=…&telefono=…`. The `/gracias` page reads those URL params (React escapes them — no XSS) and also reads `sessionStorage` key `__ge_lead_ec_v1` to fire Google Ads enhanced conversions.

### Analytics wiring

All tracking IDs live in **`lib/site-config.ts`** — edit there, not in env vars (static export has no runtime env).

- `GA_MEASUREMENT_ID` → loaded via `components/google-tags.tsx` using Next.js `<Script>`
- `GTM_ID` → if set, loads GTM instead of direct GA4 (currently empty)
- `GOOGLE_ADS_ID` / `GOOGLE_ADS_CONVERSION_SEND_TO` → fires a conversion event from `components/gracias-analytics.tsx` on the `/gracias` page with hashed email + phone (SHA-256 via `crypto.subtle`)
- `components/google-tag-runtime.tsx` — activates GA4 debug mode when `?gtm_debug=1` or `localStorage.gtag_debug = "1"` is present

### Key files

| File | Purpose |
|------|---------|
| `lib/site-config.ts` | All tracking IDs — single place to update GA4 / GTM / Google Ads |
| `lib/pow.ts` | Proof-of-Work: `makePowChallenge`, `solvePoW`, `verifyPoW` |
| `lib/google-enhanced-conversions.ts` | SHA-256 helpers + `toPhoneE164` for Google Ads enhanced conversions |
| `google-apps-script.js` | Server-side script deployed to script.google.com — validates PoW, sanitizes inputs, writes to Sheets |
| `app/page.tsx` | Entire landing page (~1000 lines) — all sections, the modal form, and submit logic live here |
| `app/gracias/gracias-view.tsx` | Thank-you page — reads URL params for personalized greeting |

### Google Apps Script deployment

Changes to `google-apps-script.js` are **not auto-deployed**. After editing:
1. Copy the full file contents
2. Paste into the editor at script.google.com
3. Deploy → New deployment → Web App → "Anyone" access

The `SHEET_ID` is hardcoded inside the Apps Script (not in this repo's source).

### Input sanitization rules

- `sanitizeField()` strips leading `=`, `+`, `-`, `@`, tab, CR to prevent formula injection when data lands in Google Sheets
- All text fields are truncated: name/city → 100 chars, email → 254, phone → 15 digits
- `canCover` is whitelisted to `si | no | parcialmente | ""`
- `countryCode` must match `/^\+[0-9]{1,4}$/`

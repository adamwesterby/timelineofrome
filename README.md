# Timeline of Rome

A React + TypeScript single-page timeline that presents 1,229 years of Roman history as one scroll-driven chronology, from the founding of the city to the fall of the Western Empire.

## Tech stack

- React 18
- TypeScript
- Vite
- CSS-driven motion (no animation library)
- Self-hosted variable fonts (Cinzel, EB Garamond) via Fontsource

## Local development

Requirements:

- Node.js 20+
- npm

Install and run:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Analytics (GA4 + GTM)

This app uses Google Tag Manager only (no direct `gtag.js` snippet) and keeps Cloudflare Web Analytics enabled.
The official GTM `<head>` + `<noscript>` snippets live in `index.html`.

- GTM container ID: `GTM-567JLFPT`
- GA4 measurement ID: `G-DDY0T69X7H`

Data layer events emitted by the app:

- `spa_page_view` with `page_location`, `page_path`, `page_title`
- `timeline_era_navigate` with `era_id`
- `timeline_event_expand` with `event_id`, `event_title`, `event_era`, `event_year`, `event_significance`

### GTM configuration

1. Create `GA4 - Config` tag:
   - Type: `Google Analytics: GA4 Configuration`
   - Measurement ID: `G-DDY0T69X7H`
   - Send a page view event when this configuration loads: `OFF`
   - Trigger: `All Pages`
2. Create custom event triggers for:
   - `spa_page_view`
   - `timeline_era_navigate`
   - `timeline_event_expand`
3. Create data layer variables:
   - `page_location`, `page_path`, `page_title`
   - `era_id`
   - `event_id`, `event_title`, `event_era`, `event_year`, `event_significance`
4. Create GA4 event tags:
   - `GA4 - page_view (SPA)` -> event name `page_view`, trigger `spa_page_view`
   - `GA4 - timeline_era_navigate` -> event name `timeline_era_navigate`, trigger `timeline_era_navigate`
   - `GA4 - timeline_event_expand` -> event name `timeline_event_expand`, trigger `timeline_event_expand`
5. Publish GTM as version `analytics-standard-initial`.

### GA4 configuration

1. Confirm all 3 events are arriving in Realtime / Events.
2. Mark `timeline_event_expand` as a key event.
3. Create event-scoped custom dimensions for:
   - `era_id`
   - `event_id`, `event_title`, `event_era`, `event_year`, `event_significance`
4. Keep Enhanced Measurement enabled.

## Routes

- `/` is the timeline. It is the only page and the canonical URL.
- `/timeline/` and `/animated/` are legacy routes from the earlier two-view site. Both redirect to `/` and are marked non-indexable.

## Deploy

This repo includes a GitHub Actions workflow at `.github/workflows/deploy.yml` that builds and deploys the app to GitHub Pages on pushes to `main`.

Vite is configured with:

```ts
base: '/'
```

so it serves correctly from the custom domain root.

## Social / LinkedIn

- LinkedIn project thumbnail (landscape): `public/linkedin/linkedin-project-1200x627.png`
- LinkedIn project thumbnail (square): `public/linkedin/linkedin-project-1080x1080.png`
- Open Graph SVG source: `public/og-timeline-of-rome.svg`

## Reddit Promotion Kit

- Campaign docs: `docs/reddit/README.md`
- Subreddit matrix: `docs/reddit/subreddit-targeting.md`
- Post drafts: `docs/reddit/posts/`
- Tracking + logs: `docs/reddit/tracking/`
- Response playbooks: `docs/reddit/responses/`

Helper scripts:

- `npm run reddit:utm` regenerates `docs/reddit/tracking/utm-links.csv`
- `npm run reddit:utm:verify` validates UTM contract values for all generated links
- `npm run reddit:first-post-link` prints the exact tracked URL for the first `ancienthistory` post
- `npm run reddit:launch:prepare` runs UTM generation + verification + first-post link output
- `npm run reddit:capture` captures fixed-viewport (`1200x627`) static and source clip assets from `/timeline`
- `npm run reddit:gif` creates `docs/reddit/assets/reddit-scroll-12s.gif` from the webm source clip
- `npm run reddit:verify` validates media widths and required files
- `npm run reddit:assets` runs capture -> gif -> verify in sequence

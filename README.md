# Timeline of Rome

A React + TypeScript single-page timeline that presents 1,229 years of Roman history in a visual, scroll-driven experience.

## Tech stack

- React 18
- TypeScript
- Vite
- Framer Motion

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

## Routes

- `/` redirects to `/animated` (default animated experience).
- `/animated` is the animated timeline view.
- `/timeline` is the detailed scroll-based timeline view.

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

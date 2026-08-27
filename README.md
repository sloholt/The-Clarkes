# Elli & Winston — Wedding Website

Blank starter project: Vite + React 19 + React Router v7, pre-wired with the
global color palette and typography system (Altesse Std via Adobe Fonts,
Baskervville / Baskervville SC via Google Fonts).

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Project structure

- `index.html` — Vite's HTML entry point. Contains the Adobe Fonts `<link>` tag.
- `src/main.jsx` — React entry point, wraps the app in `BrowserRouter`, imports `global.css`.
- `src/App.jsx` — Route definitions (Home, Details, RSVP) and nav.
- `src/global.css` — Color variables, typography, buttons, and layout utilities.

## Before deploying

In your Adobe Fonts web project ("welli-wedding", project ID `qon6mcc`), add
your live domain under **Domains** — Adobe Fonts kits are domain-locked and
won't serve the font from an unapproved domain (localhost is fine for dev).

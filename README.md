# Sushi Dictionary

A minimal, search-first experience for exploring premium sushi cuts. Built with TypeScript and Vite, the site reveals curated tasting notes only after you start typing, keeping the initial UI clean and focused.

Live site: https://michaelasper.github.io/sushi-dictionary/

## Architecture
- **Build tool:** [Vite](https://vitejs.dev/) + TypeScript (`src/main.ts` bootstraps the DOM).
- **Styling:** Vanilla CSS modules (`src/style.css`) with Playfair Display + Manrope for typography. Layout uses minimal glassmorphism accents and responsive tweaks.
- **Data:** Static dataset (`src/data/sushiCuts.ts`) describing each cut—fish, origin, taste, texture, and optional notes. The data powers both autocomplete and the detail card.
- **UI flow:** `renderApp` wires the search input, suggestion list, and details card. Suggestions are rendered on input events and hidden until there is a query. DOM updates are incremental (no framework runtime).

## Local Development
```bash
npm install
npm run dev
```
Visit `http://localhost:5173` and start typing (e.g., “oto”) to surface the dataset.

## Testing & Quality
- `npm run lint` — ESLint with `@typescript-eslint` and Prettier.
- `npm run test -- --run` — Vitest in a jsdom environment with DOM interaction coverage.
- `npm run build` — TypeScript type-check + Vite production build (used in CI/CD).

## Deployment
GitHub Actions drives automation:
- **CI workflow** (`.github/workflows/ci.yml`): runs on pull requests/pushes to `main` and executes lint, test, build.
- **Pages workflow** (`.github/workflows/deploy.yml`): on push to `main`, builds the site, uploads `dist`, and publishes to GitHub Pages.

Vite is configured with `base: '/sushi-dictionary/'` so assets resolve correctly when served from `https://michaelasper.github.io/sushi-dictionary/`.

## Project Structure
```
├─ src/
│  ├─ data/            # Static sushi cut dataset
│  ├─ main.ts          # Entry point + UI logic
│  ├─ main.test.ts     # Vitest DOM coverage
│  ├─ style.css        # Global styles
│  └─ vite-env.d.ts    # Vite module type hints
├─ assets/             # Sushi logo used in the UI
├─ public/favicon.ico  # Favicon served via Vite
├─ index.html          # Root HTML (loads /src/main.ts)
├─ vite.config.ts      # Vite + GitHub Pages base config
└─ .github/workflows/  # CI and Pages automation
```

## Requirements
- Node.js ≥ 18.17
- npm ≥ 9 (npm v10+ recommended)

## Contributing
Fork the repository, create a branch, and open a PR. Ensure lint/tests/build pass before pushing.

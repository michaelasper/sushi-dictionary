# Repository Guidelines

## Project Structure & Module Organization
The TypeScript entry point is `src/main.ts`; shared data lives in `src/data/sushiCuts.ts`, and Vitest specs sit beside code (for example `src/main.test.ts`). Static assets belong in `assets/`, `public/` contains files copied verbatim into the Vite build, and `dist/` is generated output that should stay untouched. Shared styles reside in `src/style.css`; add new stylesheets only when a module truly needs isolation.

## Build, Test, and Development Commands
- `npm install` – install dependencies (Node 18.17+).
- `npm run dev` – start the Vite dev server with hot reload on port 5173.
- `npm run build` – type-check then emit the production bundle to `dist/`.
- `npm run preview` – serve the built assets locally for a release check.
- `npm run lint` – run ESLint with `--max-warnings=0`; resolve issues before committing.
- `npm run test` – run the Vitest suite in jsdom; append `--run` in CI to disable watch mode.

## Coding Style & Naming Conventions
Follow Prettier defaults (2-space indentation, semicolons) and keep imports grouped by source. Prefer named exports (`renderApp`, `sushiCuts`) and camelCase identifiers; reserve UPPER_CASE for constants such as `MAX_SUGGESTIONS`. Keep `src/data` entries alphabetised by `cut` to preserve predictable lookups. Run `npm run lint` to confirm ESLint/Prettier alignment before opening a PR.

## Testing Guidelines
Vitest powers the suite; place specs beside the code using the `*.test.ts` suffix. Structure scenarios with `describe`/`it` and assert against rendered DOM states as shown in `src/main.test.ts`. Cover new UI behaviour with tests for default and empty/error paths, and include ARIA assertions when accessibility is involved.

## Commit & Pull Request Guidelines
The repository currently has no recorded history, so adopt Conventional Commits (`feat:`, `fix:`, `chore:`) written in the imperative mood to keep future logs searchable. Keep pull requests focused, link issues, and flag any data or accessibility changes. Attach before/after screenshots for UI tweaks and list follow-up tasks in the PR body when needed.

## Security & Configuration Tips
Avoid embedding secrets; Vite only exposes variables prefixed with `VITE_`, so document or mock any required values instead. If you add remote data, validate it before rendering to prevent DOM injection. Remove temporary console logging before review to keep the bundle tidy.

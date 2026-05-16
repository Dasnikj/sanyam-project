# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands run from `sanyam-react/`:

```bash
npm run dev       # development server with HMR
npm run build     # tsc -b && vite build (type-checks first)
npm run lint      # eslint .
npm run preview   # preview production build
```

## Architecture

This is a single-page interactive slide deck built with React 19 + TypeScript + Vite. The app lives entirely in `sanyam-react/src/`.

**Navigation flow:**
- `App.tsx` renders `SlideDeck`, which owns the presentation shell
- `useDeckState` (hook) manages a flat global index into all slides
- `useKeyboardNavigation` handles arrow keys, `N` (speaker notes), `F` (fullscreen)
- All section/slide data is defined in `data/slides.ts` (~587 lines); sections are nested but navigation flattens them via `flattenSections`

**Slide rendering:**
- `SubSlideRouter` (`components/sub-slides/index.tsx`) dispatches to one of 11 slide type components via TypeScript discriminated unions on the `type` field
- Slide types: `statement`, `stat`, `story`, `quote`, `concept`, `misconception`, `interaction`, `comparison`, `takeaway`, `image`, `video`

**Interaction system:**
- `InteractionSlide` wraps one of 10+ interactive components (e.g. `SteeringWheelInteraction`, `MaryadaCards`, `FiveFoldAaharAudit`)
- Interactive components expose a ref handle `{ canAdvance, advance, reset }` — the deck cannot advance until the interaction signals completion
- See `components/interactions/index.tsx` for the router and `components/interactions/` for individual components

**Styling:**
- Tailwind CSS v4 via `@tailwindcss/vite` (no `tailwind.config.js` — config is inline in `styles/globals.css` using `@theme`)
- Custom color tokens: `surface`, `saffron`, `jade`, `gold`, `danger`, `cream`, `muted`
- Custom CSS animations defined in `globals.css`: `pulse-glow`, `solar-glow`, `dot-pulse`, `ambient-drift`, `bg-drift`, `border-glow`
- Fonts: Syne (display) + DM Sans (body) from Google Fonts in `index.html`
- Framer Motion handles slide transitions with `AnimatePresence`

**TypeScript config:**
- Strict mode with `noUnusedLocals` and `noUnusedParameters` enforced — all unused vars will break the build
- Target: ES2023, module resolution: bundler

## Key Files

| File | Purpose |
|------|---------|
| `src/data/slides.ts` | All slide content and data — start here to modify presentation content |
| `src/types.ts` | All TypeScript types including discriminated unions for slide/interaction types |
| `src/hooks/useDeckState.ts` | Global navigation state |
| `src/components/sub-slides/index.tsx` | Routes slide `type` → component |
| `src/components/interactions/index.tsx` | Routes interaction `type` → interactive component |

## Deployment

Deployed to Cloudflare Workers (`.wrangler/` directory present). The `dist/` output from `npm run build` is served statically.

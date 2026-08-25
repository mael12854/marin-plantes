# Marin & Plantes

Brand guidelines page for Marin & Plantes, reproduced in React + TypeScript + Vite from the
design handoff (`design_handoff_marin_brand/`). One person's gardening service: Marin plants,
waters, and tends a plant for a client in his grandparents' garden; the client watches it live
on an old tablet propped in the grass and can come visit.

This is the guidelines reference — logo, palette, type, patterns, voice, iconography,
photography direction, the live journal/camera UI, motion, and emails — not the product itself.

## Structure

- `src/tokens.ts` — colours, type, and layout tokens (source of truth: the design handoff README).
- `src/sections/` — one component per section of the guidelines page, in order.
- `src/components/ImageSlot.tsx` — production placeholder for a real photo slot. All photography
  is Marin's own garden shots and still needs to be taken.
- `src/components/TweakPanel.tsx` — dev-only panel for the three exploratory props the handoff
  wires up (tutoiement/vouvoiement, phosphore colour, monogramme) — not a product feature.

## Develop

```sh
npm install
npm run dev
```

```sh
npm run build   # type-check + production build
npm run lint     # oxlint
```

# Marin & Plantes

One person's gardening service: Marin plants, waters, and tends a plant for a client in his
grandparents' garden; the client follows it in a live journal and can come visit. React +
TypeScript + Vite front end, Supabase for auth and data.

## Structure

- `src/pages/` — the public site: `Landing`, `Order` (commander), `Auth` (connexion/inscription),
  `ClientDashboard` (mon-jardin), `PlantDetail` (plante/:id).
- `src/pages/admin/` — Marin's space: `AdminDashboard` (confirm/decline requests, list plants),
  `AdminPlant` (add journal entries to a plant).
- `src/pages/BrandGuidelines.tsx` — the internal brand reference at `/charte`, built from the
  design handoff (`design_handoff_marin_brand/`). Not linked from the public nav.
- `src/tokens.ts`, `src/sections/`, `src/components/ImageSlot.tsx`, `TweakPanel.tsx` — design
  tokens and the section components the guidelines page is assembled from.
- `src/components/ui/` — shared Button/Field primitives for product screens, following the brand
  rules (no border radius, no shadows/gradients, mono uppercase labels) without copying the
  guidelines page's layout.
- `src/lib/supabase.ts` — Supabase client. `src/lib/AuthContext.tsx` — session + profile (role)
  state. `src/lib/types.ts` — DB row types.

## Data model (Supabase project `marin+plantes`)

- `profiles` — one row per authenticated user, `role` is `client` or `marin`. Created
  automatically on signup by the `handle_new_user` trigger; the account signing up with
  `mael.domenech@gmail.com` is seeded as `marin`, everyone else as `client`.
- `plant_requests` — the public order form, anyone can insert, only Marin can list/update.
- `plants` — created by Marin when confirming a request (`request_id`). A client sees a plant
  once its request's email matches their own login email — no separate "claim" step needed.
- `journal_entries` — append-only actions on a plant (`planned` flag for not-yet-done rows).
- `visit_requests` — a client can ask to visit their plant; Marin confirms/declines.

All tables have row-level security: clients only ever see their own data (matched by
`owner_id` or by their request's email), Marin sees everything. See the migrations applied to
the Supabase project for the exact policies.

There's no live camera feed in this version — out of scope for now, see `design_handoff_marin_brand/README.md`
for what it would take (a real tablet in the garden). The journal is real-time enough on its own.

## Develop

```sh
cp .env.example .env.local   # fill in the Supabase anon key
npm install
npm run dev
```

```sh
npm run build   # type-check + production build
npm run lint     # oxlint
```

# Handoff — Marin & Plantes, brand guidelines

## Overview
Marin & Plantes is a one-man gardening service. Marin plants, digs (by hand, with a spade), waters and tends a plant for a client in his grandparents' garden. The client asks for a plant, follows every action on it in a live journal, watches it through an old tablet propped up in the grass, and can come visit.

This bundle is the **brand guidelines page** — the reference document that defines logo, colour, type, patterns, voice, iconography, photography, the live/camera UI, motion, emails, and do/don't. It is not the product itself; it is what the product must obey.

## About the design files
`Marin & Plantes - Brand Guidelines.dc.html` is a **design reference written in HTML** — a prototype of look and behaviour, not production code to lift. Recreate it (and the product built from it) in the target codebase's own environment (React, Vue, SwiftUI, native…) with its established patterns. If no environment exists yet, pick the appropriate framework and implement there.

`support.js` is the prototype runtime and must NOT be ported. `image-slot.js` provides drag-and-drop photo placeholders — in production these become real image slots. All photo placeholders in the file are intentionally empty: the real photos are Marin's own garden pictures and have to be shot.

Two of the prototype's values are wired as tweakable props (`tu`, `phos`, `mono`) — they exist to explore the brand, not as product features.

## Fidelity
**High fidelity.** Colours, type, spacing and animation timings below are final and exact. Reproduce the guidelines page pixel-close; when building product screens, follow the rules stated in the page rather than copying its layout.

## Design tokens

### Colour
| Name | Hex | Use |
|---|---|---|
| Vert Marin | `#1E3A2B` | primary brand green, cover backgrounds, dark blocks |
| Craie | `#F2EEE3` | main page background |
| Craie claire | `#F7F4EA` | cards on Craie (do/don't panels) |
| Craie foncée | `#E4DDCB` | secondary surfaces, quote blocks, push previews |
| Argile | `#C06A3E` | single accent: section numbers, label edge, exceptional actions |
| Terre | `#241C16` | body text, near-black |
| Pousse | `#6B8F5E` | growth graphs, gauges, positive deltas |
| Nuit de tablette | `#0E1A13` | background of the live/camera territory only |
| Phosphore | `#93F5A2` (prop `phos`) | live signal only — never decorative |
| White | `#FFFFFF` | journal/email card surfaces |

Rules: two backgrounds only — Craie for anything to be read, Vert Marin for breathing space and covers. **No red anywhere in the brand**: nothing is ever an alert. Phosphore appears only on Nuit de tablette, to mean "the screen in the grass is genuinely online".

Text opacities on Craie: body `rgba(36,28,22,.75)`, secondary `rgba(36,28,22,.7)`, meta `rgba(36,28,22,.5)`. Hairlines `rgba(36,28,22,.12)`, borders `rgba(36,28,22,.14)`. On Nuit de tablette: body `rgba(242,238,227,.72)`, secondary `.65`, meta `.55`, hairlines `rgba(242,238,227,.08)`, borders `rgba(147,245,162,.25)` / `.18`.

### Typography
- **Newsreader** (Google), weight 300 for display, 400 for mid-size, italic 300 for quotes — all headlines, plant names, quotes.
- **Archivo** (Google), 400/500/600 — body copy and UI labels.
- **IBM Plex Mono** (Google), 400/500 — timestamps, plant ids, section numbers, technical annotation. Always `letter-spacing: .12em–.16em`, uppercase for labels.

Scale as used: display 52px/1.05 (Newsreader 300); section head 44px/1.08; block title 26–30px; sub-title 22px; body 16px/1.7; secondary body 14–15px/1.7; mono label 10–11px; journal line 13px/1.8. Section number: mono 11px, `.16em`, uppercase, Argile.

### Layout
Page max width 1400px, single column of full-bleed sections. Section padding `80px 72px`, separated by a 1px `rgba(36,28,22,.12)` bottom border. Two-column blocks: `grid-template-columns: 1fr 1.15fr` (or `1fr 1.5fr`) with `gap: 56–72px`, `align-items: start`. Specimen grids use `gap: 1px` on a `rgba(36,28,22,.14)` background with a 1px border — the hairline IS the gap. No border radius anywhere except 3px on the tablet body icon. **No shadows, no gradients, no frosted glass.** At least 30% of every screen stays empty.

## Sections of the page (in order)
1. **Cover** — brand name, positioning line, monogram.
2. **01 Fondation** — what the service is; the plant-card specimen (`PLT-0148 · CARRÉ NORD · PRÈS DU POMMIER`).
3. **02 Logo & variantes** — wordmark, monogram, lockups, clear space, misuse.
4. **03 Palette** — the table above, as swatches.
5. **04 Typographie** — the three families with specimens and a mono spec list.
6. **05 Motifs** — four patterns, each a real thing from the garden:
   - *Le calendrier d'arrosage* — dot grid, 22px, `radial-gradient(circle at center, rgba(242,238,227,.55) 1.6px, transparent 1.7px)` on Vert Marin. One dot = one watering; filled = done, hollow = planned. Default texture for large green fields.
   - *Les sillons* — vertical hairlines, 34px, `repeating-linear-gradient(90deg, rgba(36,28,22,.22) 0 1px, transparent 1px 34px)` on Craie foncée. The furrows Marin digs by spade. Section separators, garden plans. Always vertical, never animated.
   - *La vieille dalle* — 28px phosphor grid on Nuit de tablette plus one slow scan line. The tablet's pixel grid. Live territory only; forbidden in print and commercial material.
   - *L'étiquette* — 3:4 block with a 6px Argile left edge, mono id top, Newsreader name bottom. The label stuck in the soil becomes the layout unit for cards, thumbnails, emails, social.
   Rules: one pattern per surface, never two stacked, never over a photo, never more than a third of a surface.
7. **06 Ton de voix** — Marin writes in the first person, present tense, informal *tu* (a formal `vous` variant exists behind the `tu` prop). Short sentences: a fact, then a gesture. No exclamation marks, no platform vocabulary ("utilisateur", "abonnement", "dashboard"). Max 2 sentences in a notification, 4 in an email. Numbers always concrete (4 cm, 41 arrosages, 18 h). Signature: `Marin`. Say/don't-say pairs are in the page.
8. **07 Iconographie** — three primitives only (circle, square, arc), 1.5px stroke, square caps, 24px grid, no fill, no added rounding. Dashed = "planned, not done yet". No third-party icon sets, no emoji, **no illustrated plants** — plants are photographed, never drawn.
9. **08 Photographie** — garden light, late afternoon; long shadows, slightly yellowed grass, nothing tidied. No flash, no white studio background, no cut-out plants. Two distances only: wide (shows the place) and macro (shows the matter); nothing in between. Pot and label stay visible — they prove it's the right plant. Greens slightly desaturated toward Vert Marin, cream highlights, no filter, no vignette, no text burned into the image.
10. **09 Journal live & vue caméra** — the dark territory. See below.
11. **10 Motion** — "it grows, it doesn't jump". `transform-origin: bottom` always; no bounce, no entry from the right.
   - Pousse — 420ms, `cubic-bezier(.22,.68,.2,1)`, scaleY + opacity (new journal line unfolds).
   - Respiration — 2400ms ease-in-out infinite, opacity 1 → .15 (the live dot).
   - Balayage — 6000ms linear infinite, camera scan line only.
   - Page — 240ms plain fade, no slide.
   Nothing under 200ms, nothing over 700ms except the scan.
12. **11 Emails & notifications** — max one email a week, one push a day, never before 8am or after 8pm. Subject in lowercase, no emoji, no urgency. No notification announces bad news without saying what Marin already did about it. Specimens: growth email (white card, 6px Argile edge), visit invitation (Vert Marin card, outlined button `RÉSERVER UNE HEURE`), one-line pushes on Craie foncée.
13. **12 Do & Don't** — two panels, and the footer (`marinetplantes@yopmail.com`).

## The live territory (section 09) — the part to get right
The live view is deliberately humble: **an old tablet wedged on a brick in the grass**, filming one square of the garden. It is not a control room.

**Journal panel** — white/`rgba(242,238,227,.03)` on Nuit de tablette, 1px `rgba(147,245,162,.25)` border. Header: mono 11px, `.12em` — `JOURNAL — PLT-0148` in Phosphore, right side a 7px Phosphore dot (`blip` 2.4s) + `EN DIRECT`. Rows: `grid-template-columns: 64px 1fr`, `gap:16px`, `padding:12px 0`, 1px `rgba(242,238,227,.08)` divider, mono 13px/1.8. Time in Phosphore, text in Craie. Positive deltas in Pousse. **Planned** rows sit at 40% opacity with a dashed `PRÉVU` chip — the promise is always visually weaker than the fact. No journal line without a timestamp. Grouped by day, day header in Newsreader. Days with nothing done are shown, not hidden.

**Camera panel** — same shell. Header `TABLETTE — CARRÉ NORD` + running clock. Feed area 300px tall on `#0A130E`: image, then a non-interactive 28px phosphor grid overlay (`rgba(147,245,162,.07)` lines), then the 6s scan line (`linear-gradient(90deg,transparent,rgba(147,245,162,.45),transparent)`, 2px tall). Overlays, mono 11px: top-left blinking `REC` dot, top-right `640 × 480 / BATT 34 %`, bottom-right a 46px empty framing square. Specs stated in the panel footer: 1 frame per second, never any sound, 640 × 480 assumed; the frame is fixed and slightly crooked — **do not straighten it**; offline state reads « la tablette dort, Marin la rallumera. »

Only ever **one** blinking element on a screen (2.4s cycle). Two blinking dots at once is a design bug.

## State (for the product, not the guidelines page)
The guidelines page is static apart from the tweak props. A product built from it needs: plant record (id, species, plot, planted date), an append-only action journal (timestamp, action type, value, author, done/planned flag), the tablet stream state (online/offline, last frame time, battery), and visit slots.

## Assets
No third-party assets. Fonts: Newsreader, Archivo, IBM Plex Mono (Google Fonts). Icons are drawn from the three primitives. All photography placeholders are empty and need Marin's real photos — garden wide shots, spade in soil, hands, the tablet on its brick.

## Files
- `Marin & Plantes - Brand Guidelines.dc.html` — the guidelines page (open in a browser).
- `image-slot.js` — photo placeholder helper used by the prototype.
- `support.js` — prototype runtime; do not port.

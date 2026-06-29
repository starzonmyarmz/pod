# Pod — Design System

> A CSS-powered 3D walkthrough of a small spacecraft inspired by the industrial aesthetic of the Weyland-Yutani USCSS _Nostromo_ from _Alien_ (1979), as well as aesthetics from _Aliens_ (1986) and _Alien: Romulus_ (2024).

---

## Design Philosophy

### "A Truck Driver in Space" — Ridley Scott

The _Nostromo_ is not a sleek starship. It is a **working vessel** — a battered commercial space-tug towing a refinery through deep space. The design rejects the clean futurism of _Star Wars_ or _2001_ in favor of a **"used future"**: greasy, worn, functional. Every surface shows years of service.

Key principles from canon:

- **Form follows function** (Ron Cobb's "frustrated engineer" approach) — every panel, conduit, and fixture should look like it serves a purpose
- **Industrial materiality** — steel, rivets, scuffed paint, exposed wiring, worn leather
- **Claustrophobic compression** — low ceilings, tight corridors, bulkhead doors that emphasize the ship is a **pressurized container**, not a cathedral
- **Analog technology** — CRT monitors, physical switches, audible clicks, tactile feedback
- **Gothic atmosphere** — Ridley Scott envisioned the refinery as a "gothic cathedral floating in space"; the interior plays with deep shadow, long corridors, and oppressive scale shifts

The _Alien_ franchise spans three distinct but related design languages:

| Film                    | Aesthetic                                                             | Key Designers                                                          |
| ----------------------- | --------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| _Alien_ (1979)          | Grimy industrial, organic decay, gothic shadows                       | Ron Cobb (interiors), HR Giger (alien), Chris Foss (exterior concepts) |
| _Aliens_ (1986)         | Military-industrial, sterile/cold, brutalist                          | Syd Mead (Sulaco), Ron Cobb (sets)                                     |
| _Alien: Romulus_ (2024) | Hybrid — Remus module = grimy _Alien_, Romulus lab = sterile _Aliens_ | Naaman Marshall, Matt Savage, Joshua Viers                             |

### Our Approach

We draw from the **1979 _Nostromo_ as primary** (the working ship), with visual vocabulary from the **Sulaco's military sterility** and **Romulus's hybrid language** where appropriate. The guiding question for any design decision: _"Would this look at home in Ron Cobb's sketchbook?"_

---

## Color Palette

### Base Colors — The Ship

The _Nostromo_ model was originally painted signal yellow (a direct homage to Chris Foss' spacecraft paintings) before Ridley Scott ordered it repainted **mid-gray**. The final color was a dirty gray primer — the same shade as the refinery — then weathered with black poster paint rubbed into crevices.

Our palette reflects this: cool industrial grays, blued steel, and slate, with warm accent lights as the only relief.

| Variable            | Display P3          | Use                                     | Film Reference                                                        |
| ------------------- | ------------------- | --------------------------------------- | --------------------------------------------------------------------- |
| `--machine-gray`    | `0.554 0.558 0.572` | Primary wall, floor, and object color   | The iconic Nostromo gray primer — neutral, cool, slightly blued steel |
| `--corridor-shadow` | `0.220 0.224 0.242` | Deep shadow zones, door bases, recesses | The unlit depths of the Nostromo's service corridors                  |
| `--white`           | `0.895 0.892 0.908` | Ceiling panels, bright zones            | The Sulaco's sterile white interiors (and the _Romulus_ lab)          |
| `--slate`           | `0.325 0.330 0.385` | Floor edges, structural beams, trim     | Dark slate used for greebles and structural framing                   |

### Accent Colors — Indicator Lights & Warning Stripes

The _Nostromo_'s control panels and warning markings use warm amber, yellow, and red — the only colors in an otherwise gray environment. These are the "neon" of the 1970s analog future.

| Variable                 | Display P3          | Use                                    | Film Reference                                   |
| ------------------------ | ------------------- | -------------------------------------- | ------------------------------------------------ |
| `--neon-green` _(amber)_ | `0.897 0.730 0.368` | Alert indicators, status lights        | CRTs and warning lamps on the bridge console     |
| `--cyber-teal`           | `0.348 0.418 0.448` | Secondary screen glow, accent          | Muted terminal phosphor from the bridge displays |
| `--term-green`           | `0.400 0.472 0.464` | Terminal phosphor, data screens        | The green-on-black CRT readouts from the bridge  |
| `--term-yellow`          | `0.774 0.664 0.452` | Caution markers, industrial striping   | Yellow hazard stripes on bulkheads and doors     |
| `--term-orange`          | `0.603 0.447 0.327` | Warning panels, emergency lighting     | Emergency system indicators                      |
| `--term-red`             | `0.529 0.344 0.301` | Alert states, critical warnings        | Red alert lamps                                  |
| `--yellow`               | `0.816 0.655 0.285` | Flourish stripes, decorative bands     | The original yellow livery peeking through       |
| `--utility-green`        | `0.240 0.284 0.315` | Dark utility zones, engineering spaces | The dimly-lit engineering sections               |

### Palette Notes

- All colors are defined in `display-p3` for wide-gamut displays, with the implicit understanding that they approximate the faded, analog quality of 1970s film stock
- The warm accent colors (amber, yellow, red) are intentionally high-chroma against the muted gray base — they should **pop** like warning lights in a dark corridor
- `--neon-green` is named for its role (neon indicator) but rendered as amber, consistent with the film's warm indicator lights; true green CRT phosphor appears in `--term-green`

---

## Materials & Textures

### Texture System

Three tileable texture images are overlaid using `background-blend-mode: soft-light`:

| Texture         | Source Feel                     | Application                             |
| --------------- | ------------------------------- | --------------------------------------- |
| `texture_1.png` | Scuffed metal panel, fine grain | Primary walls, beds, partitions         |
| `texture_2.png` | Heavier wear, brushed steel     | Lockers, stern walls, ceiling gradients |
| `texture_3.png` | Dense greeble/vent pattern      | Console faces, starboard walls          |

Textures blend with the CSS custom property colors via `color-mix()` and direct `background-color` under `soft-light`. This creates a weathered, built-up surface without visible seams — the _Nostromo_'s "years of service" look.

### Metal Gradient

Custom `@function --metal-gradient` in `surfaces.css` (part of the `.metal` skin) applies a subtle directional gradient using LCH color manipulation:

```css
--light: lch(from var(--color) calc(l + 8) calc(c * 1.4) h);
--dark: lch(from var(--color) calc(l - 12) calc(c * 0.6) h);
result: linear-gradient(to bottom right in oklab, var(--light), var(--dark));
```

This adds a **top-to-bottom light falloff** — surfaces are slightly brighter at the top (from overhead strip lighting) and darker at the bottom (shadow pooling), mimicking the _Nostromo_'s practical lighting rig.

### Material References

Canonical material references for any new texture or shader work:

- **Deck plating**: Diamond-plate steel, painted over many times, worn at foot-traffic paths
- **Wall panels**: Rolled steel or aluminum, riveted, with visible screw heads and panel gaps
- **Console surfaces**: Dark textured plastic or powder-coated metal, backlit from beneath
- **Seating**: Worn black or brown leather (captain's chair on the bridge)
- **Flooring**: Dark ribbed metal, occasionally carpeted in crew quarters
- **Pipes & conduits**: Bare metal, color-coded (orange, yellow, blue) following NASA-style utility identification

---

## Architecture & Layout

### The Ship

The _Nostromo_ is a **Lockmart CM-88B Bison** space-tug, towing a massive refinery. Our model focuses on the tug's interior across three spaces:

```
┌─────────────────────────────────────────────────┐
│  REACTOR          BUNK          COCKPIT         │
│  (engine room)    (crew berth)  (control bridge)│
│  7w x 5l x 6h     12w x 12l x 7h  7w x 7l x 6h │
└─────────────────────────────────────────────────┘
```

| Room        | Purpose                             | Design Character                                                             |
| ----------- | ----------------------------------- | ---------------------------------------------------------------------------- |
| **Cockpit** | Control bridge with flight consoles | Low ceiling, angled ceiling corner, dense console banks, the captain's chair |
| **Bunk**    | Crew living/sleeping area           | Bunks (top/bottom), lockers, partition wall, corridor-like feel              |
| **Reactor** | Engine room                         | Massive engine block, utilitarian, hot, cramped                              |

### Spatial Principles

1. **Compression** — Rooms are intentionally small (7-12 feet wide). The ship should feel tight, not spacious
2. **Heavy mass** — Walls are `0.4ft` thick (nearly 20 inches). Bulkheads are _massive_
3. **Low ceilings** — 6-7 feet. Taller crew members have to duck through doorways
4. **Doors as portals** — Circular or arched cutouts in bulkheads, with heavy mechanical frames
5. **Visual continuity** — Corridors align across rooms; when you look through a door, you see into the next space

### Door System

Doors are radio-button toggles that transition between rooms with `@starting-style` animations. They're styled as arch-shaped cutouts with thick borders (`border-radius` + `corner-shape: bevel`) and dark shadow backgrounds.

---

## Lighting & Atmosphere

### Approach

The _Nostromo_ is **underlit** and **shadow-heavy**. Light comes from:

- **Overhead strip lighting** — cool white, casting pools on the floor, falling off toward the walls
- **Console glow** — warm amber/green from CRTs and indicator panels
- **Emergency strips** — red along the floor at knee level
- **Stray sources** — blinking status LEDs, the glow through doorways

### Implementation

- The metal gradient system (`--metal-gradient`, in the `.metal` skin) mimics overhead lighting with brighter tops and darker bottoms
- `background-blend-mode: soft-light` over dark base colors creates depth without explicit shadow mapping
- Room transitions use translate/scale animations with `@starting-style` for entry/exit states, creating a "moving through the ship" sensation

---

## UI Components

### Gizmo — Navigation Control

The `#gizmo` is a fixed-position D-pad controller referencing the **Nostromo's bridge controls**. It uses a CSS grid with `grid-template-areas` to arrange a four-way directional pad (Bow, Port, Starboard, Stern).

- Radio buttons drive view rotation via `:has(#view-x:checked)` selectors
- The gizmo is rotated `55deg` on the X axis, giving it a console-like angled appearance
- Active direction is shown in red (a nod to indicator lamps)

### Flourishes — Decorative Stripes

The `.flourish-left` and `.flourish-right` elements are diagonal striped bars referencing the **yellow/red hazard striping** found on _Nostromo_ bulkheads. These are a direct callback to the industrial safety markings seen throughout the original film.

### Cuboids, Tris & Planes — 3D Primitives

- `.cuboid` — The shared five-faced geometry primitive (top/left/right/front/back, no underside). Driven by `--w` / `--h` / `--l`, it owns all face sizing and 3D transforms (`src/styles/cuboid.css`). `.box`, `.wall`, `.floor`, and `.tri` are all cuboids — they only set dimensions, position, and surface.
- `.box` — A cuboid placed in the room by `x/y/z`, for furniture and structural elements
- `.tri` — A triangular-prism wedge for ramps, angled ceiling corners, and sloped surfaces. Built on `.cuboid`: it inherits `left`/`right`/`back`, re-tilts the `top` into the sloped hypotenuse, adds a `bottom` underside, clips the sides, and has no `front`
- `.plane` — A flat single-face panel placed by `x/y/z`, for windows, screens, and decals mounted against a cuboid face (`src/styles/plane.css`)
- Faces are **always** named `top/left/right/front/back` (plus `bottom`, only on `.tri`). Ship terms (port/starboard/bow/stern) are reserved for camera views and placement (e.g. which side a wall sits on), never for faces.
- Primitives use `attr()` to read dimensions from HTML attributes (e.g. `w="12" l="12" h="7"`) and compute CSS 3D transforms at render time
- **Orientation is declared, never hand-authored.** `.tri` and `.plane` share an axis-based vocabulary of boolean attributes — `along` (yaw 90° onto the depth axis), `flipx` / `flipy` (180° flips), `mirror` (reflect for the opposite-hand corner). An instance states how it's mounted (`along`, `flipy`, …); the primitive computes the transform. Never bake a `transform` onto a specific instance.

### Composable Surfaces

Surface looks are opt-in utility classes (`src/styles/surfaces.css`) any cuboid can wear — a box or tri gets the wall look by adding them, rather than baking the look into an element type:

- `.metal` — the textured hull skin: a per-face texture photo blended over a lit metal gradient (`--metal-gradient`). Tinted by `--wall-color` (default `--machine-gray`). Worn by `.wall`, and opt-in for any other cuboid
- `.panels` — riveted panel seam grid (cell size via `--panel`)
- `.grime` — grime pooling at the base of vertical faces

Example: `<div class="cuboid box metal panels grime">`.

---

## Weyland-Yutani Design Language

### Brand Touchpoints

The Weyland-Yutani corporation (often styled **W-Y** or **"The Company"**) pervades the _Nostromo_'s visual environment. Key elements for future addition:

- **Logo** — The triangle-with-wings "Horus" logo in corporate blue or gold
- **Warning decals** — "CLASS 10 CONTAINMENT", "NO SMOKING", "AUTHORIZED PERSONNEL ONLY" in the distinctive stenciled typeface
- **Color coding** — Corporate blue on containers, yellow on hazardous fittings
- **Product placement** — W-Y branded coffee cups, beer cans, uniform patches (as seen in the film)

### Type Direction

For any text elements (decals, labels, terminal readouts):

- **UI/Labels** — A stenciled military sans-serif (Heavyweight, Stencil, or similar)
- **Terminal text** — Monospace with green CRT phosphor glow (`--term-green`)
- **Corporate branding** — A clean geometric sans (Helvetica-like) consistent with 1970s corporate identity

---

## Reference: Film Sources & Key Visuals

| Reference                                | Source                  | Why                                                         |
| ---------------------------------------- | ----------------------- | ----------------------------------------------------------- |
| Ron Cobb's _Nostromo_ interior sketches  | _Alien_ (1979)          | Primary source for layout, paneling, and greeble philosophy |
| The bridge set (operational console)     | _Alien_ (1979)          | Console density, screen layouts, indicator lights           |
| The mess/deck set                        | _Alien_ (1979)          | Living quarters design, low ceiling, table, food dispensers |
| The "hyper-sleep" chamber                | _Alien_ (1979)          | Lotus-petal cryo layout, Egyptian motif                     |
| Syd Mead's _Sulaco_ exterior             | _Aliens_ (1986)         | The "gun in space" silhouette, military precision           |
| The drop-ship bay                        | _Aliens_ (1986)         | Large-scale industrial interior, vertical space             |
| The _Romulus_ hallway (slanted geometry) | _Alien: Romulus_ (2024) | Disorienting angles, weight and compression                 |
| The _Corbelan_ interior                  | _Alien: Romulus_ (2024) | "Earth mover in space", kit-bashed utility                  |
| Chris Foss' spacecraft paintings         | Pre-production _Alien_  | The original yellow livery, bold industrial shapes          |

---

## Development Principles

### CSS-First

All game mechanics are CSS-driven. No JavaScript for layout, animation, or interaction logic. This constrains us to what CSS can express, which aligns with the deliberate, weighted feel of the _Nostromo_ — things don't float or animate smoothly; they slide, snap, and lock into place.

### Progressive Enhancement

When JavaScript is eventually added (with the player's permission), it should enhance, not replace, the CSS foundation. Think: ambient sound.

### "Use-Dirty" Texturing

All surfaces should look **worn**. Any new texture should start with the question: _"How would this look after 15 years of deep-space service?"_

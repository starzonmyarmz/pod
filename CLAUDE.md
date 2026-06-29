# Pod

An HTML/CSS-focused video game. All game mechanics are powered by CSS. JavaScript may be added later with the player's permission for optional enhancements.

# Geometry

`box`, `wall`, and `floor` share one geometry primitive: `.cuboid` (`src/styles/cuboid.css`), driven by `--w` / `--h` / `--l`. Each of them only sets dimensions, position, and a surface — never face sizing or transforms.

The non-cuboid primitives are `.tri` (`src/styles/tri.css`, a triangular-prism wedge) and `.plane` (`src/styles/plane.css`, a flat single-face panel). Both share an axis-based orientation vocabulary of boolean attributes — `along` (yaw 90° onto the depth axis), `flipx` / `flipy` (180° flips), `mirror` (reflect). Orientation is declared per-instance via these attributes; never hand-author a `transform` on a specific instance.

- Faces are **always** named `top/left/right/front/back`. Ship terms (port/starboard/bow/stern) are reserved for camera views and placement, never faces.
- Surface treatments are composable utility classes in `src/styles/surfaces.css` (`.panels`, `.grime`) that any cuboid can wear. Prefer adding a class over baking a look into an element type.
- One concept per stylesheet (cuboid, surfaces, box, wall, floor, room, door, locker…), wired in load order in `src/index.html`.

# Modern CSS Specialist

You are a modern CSS specialist. Reference the following expertise context for all CSS work.

## Core Expertise

- **Layout:** Container Queries, Subgrid, Masonry (`display: grid-lanes`), Media Query Range Syntax
- **Color:** OKLCH/OKLab, `light-dark()`, `color-mix()`, Relative Color Syntax, `color(display-p3)`, `accent-color`
- **Typography:** `text-wrap: balance`/`pretty`, `text-box: trim-both cap alphabetic`, fluid type with `clamp()`, Dynamic Viewport Units (`dvh`, `svh`, `lvh`)
- **Animations:** Scroll-driven animations, View Transitions, `@starting-style`, `linear()` easing
- **Custom Properties:** `@property` for typed/animatable props, `calc-size()` for intrinsic sizing
- **Architecture:** Cascade Layers (`@layer`), `@scope`
- **Components:** Dialog, Popover, Anchor Positioning, `details` exclusive accordion, `base-select`, `field-sizing: content`
- **Forms:** `:user-invalid`/`:user-valid`, `search` element
- **Progressive Enhancement:** Baseline status, `@supports`, `prefers-reduced-motion`, `prefers-color-scheme`, `prefers-contrast`

## Go-To Gurus

- Adam Argyle
- Chris Coyier
- Una Kravits
- Bramus
- Kevin Powell

## Always Use MDN MCP

For any CSS question, feature reference, or browser compatibility check, **always** use the MDN MCP tools (`mdn_search`, `mdn_get-doc`, `mdn_get-compat`) without needing to be asked. Consult MDN as the primary reference.

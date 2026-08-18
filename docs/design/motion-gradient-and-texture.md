---
id: 67359
title: "Motion Gradient and Texture"
status: "publish"
order: 5
excerpt: "Give Cover blocks animated gradient backgrounds and dots, grid, grain, or halftone textures."
---

{{video id="GNKUfaoJYtw" title="Motion Gradient and Texture" desc="Watch the full walkthrough of both Cover block superpowers."}}

Ollie Pro adds two design superpowers to the WordPress Cover block: **Motion Gradient**, which generates beautiful, animated gradient backgrounds with a click, and **Texture**, which layers dots, grids, grain, or halftone patterns over any cover background. Both are pure CSS on the frontend — no scripts, no images to upload, no performance cost.

You'll find both panels in the sidebar settings whenever a Cover block is selected.

## Motion Gradient

Select a Cover block and open the **Motion Gradient** panel, then flip on **Enable motion gradient**. The gradient replaces the cover's background, and any overlay color opacity is cleared automatically so nothing dims your new design. From there, every control updates the canvas live.

{{video id="GNKUfaoJYtw" start="87" title="Enabling the Motion Gradient" desc="Turn it on from the Cover block sidebar and see the effect instantly."}}

### Mode and Style

- **Mode** — choose **Dark** or **Light**. Dark mode paints luminous color over a deep base, perfect for hero sections; Light mode blends deeper tones over a bright background for airy, pastel designs. Each mode has its own set of color pairings.
- **Style** — pick the gradient's personality:
    - **Glow** — soft, blurred orbs of color drifting across the canvas, like light through frosted glass.
    - **Waves** — layered, flowing bands of color sweeping across the cover.
    - **Mesh** — a modern mesh-gradient look with colors blooming from multiple points.

{{video id="GNKUfaoJYtw" start="114" title="Modes and Styles" desc="Dark and Light modes, plus the Glow, Waves, and Mesh styles."}}

### Shuffle Your Way to a Design

You don't have to design anything by hand:

- **Shuffle Design** — cycles through hand-tuned designs first, then keeps generating fresh combinations of colors and layouts for as long as you keep clicking.
- **Shuffle Layout** — keeps your current colors and rearranges the composition, so you can iterate on a palette you love.
- **Color 1** and **Color 2** — set the two base colors directly with the inline swatches, or click the shuffle icon beside them to randomize just the colors.

{{video id="GNKUfaoJYtw" start="140" title="Shuffling Your Way to a Design" desc="Generate unique designs with the shuffle buttons and custom colors."}}

### Fine-Tuning

Dial in the details with the sliders:

- **Opacity** — the overall intensity of the gradient.
- **Blur** — how soft and diffused the colors are.
- **Saturation** — from muted and moody to vivid and electric.
- **Rotation** — spin the whole composition to taste.
- **Zoom** (or **Wave Height** on the Waves style) — the scale of the shapes.
- **Stretch** — how far the colors spread across the canvas.

{{video id="GNKUfaoJYtw" start="220" title="Fine-Tuning the Gradient" desc="Opacity, blur, rotation, zoom, and stretch in action."}}

### Animation

Turn on **Animate** to set the gradient in slow, ambient motion, and use **Speed** to control the pace. The animation runs entirely in CSS on the GPU-friendly compositor, so it stays smooth without taxing the page — and it automatically switches off for visitors who prefer reduced motion.

Made a mess? Click **Reset Settings** at the bottom of the panel to return to the defaults.

{{video id="GNKUfaoJYtw" start="263" title="Animating the Gradient" desc="Subtle background motion that brings sections to life."}}

## Texture

The **Texture** panel sits right below Motion Gradient and works independently of it — layer a texture over a motion gradient, a photo, a video, or a plain background color.

Enable the texture, then pick a **Texture Style**:

- **Dots** — a clean, uniform dot screen with **Dot Size** and **Dot Spacing** controls.
- **Grid** — graph-paper lines with **Line Width** and **Line Spacing** controls, including a subtle heavier line every fifth cell.
- **Grain** — fine photographic noise for an organic, filmic feel, with a **Texture Scale** control for the grain size.
- **Halftone** — a scattered, print-inspired dot field with **Dot Size** and **Dot Spacing** controls, plus a **Shuffle Halftone** button that regenerates the pattern until you find one you like.

Each style remembers its own settings, so you can switch between them freely while you decide.

{{video id="GNKUfaoJYtw" start="326" title="Exploring the Textures" desc="Dots, grid, grain, and halftone — including the frosted glass trick."}}

### Color and Strength

- **Texture Color** — **Auto** (the default) reads your background — the gradient, the overlay color, even the cover image itself — and automatically picks light or dark marks so the texture always shows up. Choose **Light** or **Dark** to override it.
- **Texture Strength** — how prominent the marks are, from a whisper of texture to solid ink.

{{video id="GNKUfaoJYtw" start="439" title="Texture Color and Strength" desc="Light or dark marks, and dialing in the intensity."}}

## Tips

- **Instant heroes:** drop in a Cover block, enable the motion gradient, and click Shuffle Design a few times — you'll have a distinctive hero background in seconds, no stock images required.
- **Texture over photos:** a subtle Grain or Dots texture over a cover image adds an editorial, designed feel — Auto color keeps it visible on any photo.
- **Light sections:** switch Mode to Light for soft, bright section backgrounds that pair beautifully with dark text.
- **Motion, tastefully:** slow speeds read as ambient and premium; save faster animation for playful moments.

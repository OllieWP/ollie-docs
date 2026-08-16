---
id: 66891
title: "Carousel Designer"
status: "publish"
order: 3
excerpt: "Build hero sliders, testimonials, logo marquees, and dynamic post carousels with blocks."
---

{{video id="rXw5i0P7_uw" title="Carousel Designer" desc="Create beautiful carousels faster in WordPress."}}

The Ollie Carousel is a block-native carousel suite included with Ollie Pro. Build hero sliders, testimonials, logo marquees, video carousels, and self-updating post carousels — all inside the block editor, using any blocks you like.

There are no shortcodes and no settings screens. A carousel is just blocks: you design slides the same way you design everything else in WordPress.

## Getting Started

Insert the **Carousel** block from the inserter (search "Carousel"). You'll see a placeholder with two choices:

- **Pick a Design** — opens the Ollie pattern library to the Carousel category. Click any design for a live, interactive preview — animations and all — then insert it and swap in your own content.
- **Start Blank** — creates an empty carousel with one slide and standard navigation, ready for your own design.

You can also insert any premade carousel from the pattern library or the WordPress inserter's Patterns tab at any time.

{{video id="rXw5i0P7_uw" start="45" title="Adding Your First Carousel" desc="Insert the Carousel block and pick a pre-made design."}}

## The Blocks

The carousel is made of four blocks that work together:

| Block | What it does |
| --- | --- |
| **Carousel** | The outer wrapper. Holds your slides and navigation, plus any headings or intro content you want inside the section. |
| **Carousel Slides** | The sliding track. This is where most settings live — slides per view, autoplay, looping, effects, and Smart Sync. |
| **Slide** | A single slide. It's a blank canvas that accepts any blocks: covers, columns, images, buttons, video modals, and more. |
| **Carousel Navigation** | The controls — arrows, dots, bars, a scroll bar, or a play/pause button. Add as many navigation blocks as you like, and place them anywhere inside the carousel. |

Because navigation is its own block, you're never locked into one layout. Put arrows in a header row next to your heading, dots below the slides, or both at once.

## Carousel Settings

Select the **Carousel Slides** block to find the Carousel Settings panel. As a shortcut, the **Settings** button in the toolbar of the Carousel and Slide blocks takes you straight there — no hunting through the block tree.

### Layout

- **Slides per view** — how many slides are visible at once (1–10).
- **Slides to scroll** — how many slides advance per navigation click or swipe.
- **Slide max width (px)** — optionally cap how wide each slide can grow.
- **Slide min width (px)** — the narrowest a slide is allowed to get (250px by default). If your slides-per-view setting would squeeze slides below this, the carousel automatically shows fewer at a time until they fit — so a four-across carousel gracefully steps down to three or two on narrower screens. Your tablet and mobile counts still take over at their screen sizes.
- **Animation speed (ms)** — how fast the carousel animates between slides.
- **Block spacing** — the gap between slides, set in the Dimensions panel using your theme's spacing presets.

Slides automatically stretch to match the tallest slide in view, so cards with different amounts of content stay equal in height. At one slide per view, the carousel adapts its height to each slide instead.

{{video id="rXw5i0P7_uw" start="169" title="Core Carousel Settings" desc="Slides per view, slides to scroll, max width, and speed."}}

### Smart Sync

**Smart Sync slides** keeps every slide's design in lockstep. With it enabled, structural and style changes you make to one slide — moving a block, changing spacing, restyling a heading, reordering columns — automatically apply to every other slide. Each slide keeps its own text, images, and links, so you design once and write everywhere.

Smart Sync is on by default for new carousels. Content edits (typing, swapping an image) never sync — only layout and style changes do.

{{video id="rXw5i0P7_uw" start="195" title="Smart Sync in Action" desc="Edit every slide at once while each keeps its own content."}}

### Autoplay

- **Autoplay** — advances the carousel automatically.
- **Autoplay style** — when **Loop slides** is also enabled, choose between **Slide**, which steps through slides on a timer set with **Autoplay speed (ms)**, and **Scroll**, which glides continuously like a marquee — perfect for logo strips — at a pace set with **Scroll speed**. Continuous scroll works best when you have enough slides to overflow the carousel.
- **Pause on hover** — pauses autoplay while the pointer is over the carousel.

Visitors always stay in control: interacting with the carousel pauses stepped autoplay, a Pause navigation button can be added anywhere, and autoplay is disabled automatically for visitors with reduced motion enabled.

{{video id="rXw5i0P7_uw" start="362" title="Autoplay, Loop, and Fade" desc="Autoplay styles, infinite looping, and edge fading."}}

### Behavior and Effects

- **Loop slides** — wrap from the last slide back to the first.
- **Fade instead of slide** — crossfade between slides (available at one slide per view).
- **Overflow visible** — let slides flow past the carousel's edges for a peek at what's next. Slides still align neatly to your content width at the start and end of the track, so the layout never feels broken.
- **Fade out edge** — fade slides out at the carousel's edges. Choose **End** (only where slides exit — direction-aware for RTL) or **Both**.
- **Show drag cursor on hover** — display a grab cursor so visitors know slides can be dragged.
- **Right-to-left** — reverse the carousel direction. This follows your site's language direction by default.

## Adding and Duplicating Slides

Scroll to the end of the slide track in the editor and you'll find two buttons:

- **Add New Slide** — adds a blank slide, ready for any blocks you like.
- **Duplicate Previous** — copies your last slide so you can tweak the content and move on. This is the fastest way to build out a carousel: perfect one slide, then duplicate it for each entry.

{{video id="rXw5i0P7_uw" start="280" title="Adding and Duplicating Slides" desc="Build out your carousel a slide at a time."}}

## Responsive Settings

The carousel adapts per device, and you configure it using the editor's own device preview.

1. In the editor toolbar, open **View** and switch the preview to **Tablet** or **Mobile** (the same control you use to preview responsive layouts).
2. With the Carousel Slides block selected, the Carousel Settings panel now shows device-specific controls: **Slides per view (Tablet)** and **Slides to scroll (Tablet)**, or the Mobile equivalents.
3. Set the values you want — the editor canvas updates live so you see exactly what that device gets.
4. Use the reset control on either slider to remove the override and return to inherited behavior.

**How inheritance works:** tablet inherits your desktop settings unless you override it, and mobile shows one slide per view unless you set something else — so carousels collapse gracefully on phones without any configuration. On the frontend, tablet settings apply below 782px and mobile settings below 480px.

{{video id="rXw5i0P7_uw" start="490" title="Responsive Settings in Action" desc="Tune slides per view for tablet and mobile."}}

## Navigation

Select a **Carousel Navigation** block to choose its type in the Navigation Settings panel:

- **Arrows** — previous/next buttons. Pick an arrow icon from the icon library in three weights (regular, bold, fill) or paste your own custom SVG. Set the **Arrow icon size**, and the arrow color in the Styles tab.
- **Dots** — one dot per position, with **Dot size** and color controls. Dots are clickable and announce their position to screen readers.
- **Bars** — modern line-style indicators with **Bar height** and **Bar width**, or enable **Fill available area** to stretch bars edge to edge.
- **Scroll** — a draggable scroll bar that tracks carousel progress. Drag it, click anywhere on the track to jump, or use arrow keys while it's focused.
- **Pause** — a play/pause button for autoplay (this option appears when the carousel has Autoplay enabled). It uses your theme's button styling automatically, and you can customize its text color, background, font size, and padding in the Styles tab.

### Positioning Navigation

Navigation placement uses familiar block tools:

- The **justification** control in the toolbar aligns controls left, center, or right.
- The **vertical alignment** control moves the navigation above or below the slides — or choose **center** to overlay arrows on the sides of the carousel, with an **Arrow position offset** to fine-tune how far they sit from the edges.
- Navigation blocks can live inside Groups and Rows like any other block, so headers with a title on the left and arrows on the right are just a Row away.

You can add multiple navigation blocks to one carousel — arrows up top and a scroll bar below, for example — and they all stay in sync automatically. Advancing with the arrows moves the scroll bar, and vice versa.

{{video id="rXw5i0P7_uw" start="557" title="Custom Controls" desc="Arrows, dots, bars, and the draggable scroll bar."}}

## Dynamic Post Carousels

Carousel slides can be generated from your content, like a query loop in carousel form.

1. Select the **Carousel Slides** block and open the **Carousel Content** panel.
2. Switch **Slide content** from **Static** to **Dynamic**.
3. Design your first slide — it becomes the template for every generated slide. Use dynamic-aware blocks (post title, featured image, excerpt) inside it.
4. Configure the query: **Post type**, **Number of slides**, **Order by**, **Sticky posts** handling (include, exclude, or only), and an optional **Offset**.
5. Narrow things down with **Content Filters**: filter by any taxonomy on the post type (categories, tags, or custom), by author, or by keyword — and optionally exclude the post being viewed, which is perfect for related-posts carousels.

Publish a new post and the carousel updates itself — no editing required. Dynamic carousels are perfect for "Latest articles," related posts, portfolios, and product showcases.

{{video id="rXw5i0P7_uw" start="446" title="Dynamic Post Carousels" desc="Pull in posts and custom post types automatically."}}

## Premade Designs

Two buttons give you one-click access to professionally designed layouts:

- **Choose Carousel Design** — in the Carousel block's Design panel (and on the empty-carousel placeholder). Opens the pattern library to the Carousel category and replaces your carousel with the design you pick.
- **Choose Slide Design** — in the Slide block's Design panel. Opens the library to the Cards category and inserts the design into that slide, so you can mix premade cards into your own carousel.

With Smart Sync enabled, a card design added to one slide can become the layout for all of them — add it, then let sync carry the design across.

{{video id="rXw5i0P7_uw" start="709" title="Building from Card Patterns" desc="Go from blank page to a full carousel with card designs."}}

## Accessibility and Performance

The carousel is built to be a good citizen out of the box:

- **Keyboard support** — focus the carousel and use arrow keys to move between slides; the scroll bar and all buttons are fully keyboard operable.
- **Screen readers** — the carousel announces itself with proper carousel semantics, slides announce their position ("2 / 5"), and off-screen slides are hidden from assistive technology.
- **Reduced motion** — visitors with reduced-motion preferences get instant transitions and no autoplay, automatically.
- **Performance** — the carousel runtime is lightweight and dependency-free (no jQuery), and only loads on pages that use a carousel.

## Tips

- **Logo marquees:** set several slides per view, enable Loop and Autoplay, choose the **Scroll** autoplay style, and add enough logos to overflow the container for a seamless glide.
- **Hero sliders:** one slide per view, **Fade instead of slide**, and Cover blocks as slides.
- **Testimonials:** two or three slides per view with **Overflow visible** and **Fade out edge** for a polished, modern look.
- **Build from cards:** use **Choose Slide Design** to drop a premade card into a slide, then duplicate it a few times — you'll go from blank page to a full carousel in a few clicks.

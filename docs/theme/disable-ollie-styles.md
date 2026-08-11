---
id: 64185
title: "Disable Ollie Styles"
status: "publish"
order: 5
---

The Ollie block theme ships with several color palettes and typography presets that help you quickly customize your site. 

Some builders may want to disable Ollie's built-in typography presets and color palettes in favor of implementing their own custom styles for clients. Currently, there is no way to do this via a code snippet, but you can do it by adding blank JSON files to override the default styles.

## How to disable styles

To disable a specific style or style variation, you'll need to use a child theme where you can create an empty JSON file that will effectively prevent the style from loading in your site. 

### Activate a child theme

If you are using <a href="https://olliewp.com/pro/" title="Ollie Pro">Ollie Pro</a>, you can go to Appearance  → Ollie and use the child theme creator to generate a child theme for your site. You can also [download a child theme here](https://github.com/OllieWP/ollie-child/releases/latest/download/ollie-child.zip) to get started.

We've also created a pre-made child theme with all styles disabled which you can download with the button below.

<!-- wp:buttons -->
<div class="wp-block-buttons"><!-- wp:button {"className":"is-style-secondary-button","icon":"download","iconPositionLeft":true} -->
<div class="wp-block-button is-style-secondary-button"><a class="wp-block-button__link wp-element-button" href="https://olliewp.com/wp-content/uploads/2025/06/ollie-child.zip">Download child theme with styles disabled</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons -->

### Replacing style files

Now we need to add some blank json files to override Ollie's styles and prevent them from loading. Ollie organizes its default styles in the `/styles` folder. You can see how they are named in the list below.

<!-- wp:list {"className":"is-style-list-boxed"} -->
<ul class="wp-block-list is-style-list-boxed"><!-- wp:list-item -->
<li>colors/<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>blue.json</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>green.json</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>neon.json</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>orange.json</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>pink.json</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>red.json</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>teal.json</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>typography/<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>typography-preset-1.json</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>typography-preset-2.json</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>typography-preset-3.json</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>...</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>typography-preset-9.json</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

### Adding blank files

Let's say, for example, you wanted to disable the blue color palette from loading. In the `styles/color` folder, you would create a file called blue.json and put the following code inside of it. 

<!-- wp:preformatted -->
<pre class="wp-block-preformatted">{<br>	"$schema": "https://schemas.wp.org/trunk/theme.json",<br>	"version": 3,<br>	"title": "Blue",<br>	"settings": {}<br>}<br></pre>
<!-- /wp:preformatted -->

The same can be done with all colors, typography presets, and style variations. For your convenience, here's a zip file of empty style files you can use to disable certain styles:

<!-- wp:buttons -->
<div class="wp-block-buttons"><!-- wp:button {"className":"is-style-secondary-button","icon":"download","iconPositionLeft":true} -->
<div class="wp-block-button is-style-secondary-button"><a class="wp-block-button__link wp-element-button" href="https://olliewp.com/wp-content/uploads/2025/06/styles.zip">Download empty style files</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons -->

When Ollie detects these blank JSON files, it will skip loading the corresponding default styles, giving you full control over your project's styling without any preset interference.

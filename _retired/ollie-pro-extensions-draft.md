---
id: 64517
title: "Ollie Pro Extensions (unpublished mega-draft, superseded by individual extension docs)"
status: "trash"
---

<!-- wp:heading -->
<h2 class="wp-block-heading">Advanced Grid Controls</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The Advanced Grid control enhances WordPress's native Grid block with responsive breakpoint management, allowing you to create adaptive grid layouts that look perfect on every device.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">How to Use</h3>
<!-- /wp:heading -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li>Add a Group block and set its layout to Grid</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Open the block settings sidebar</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Find the "Grid Breakpoints" panel</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Click "Add new breakpoint" to define custom responsive behavior</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Settings</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>Add Breakpoint</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Enter a pixel value between 320 and 3840 (e.g., 768px for tablets)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Common sizes are provided as quick shortcuts: 600px, 768px, 1024px</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Maximum of 5 breakpoints allowed for optimal performance</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>Breakpoint Configuration</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Auto-fit mode: Set minimum column width (e.g., 15rem) - columns automatically wrap when they can't fit</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Manual mode: Set exact number of columns (1-12) - columns always maintain this count at the breakpoint</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>Edit/Delete Breakpoints</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Use the dropdown to select and edit existing breakpoints</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Click the minus icon to remove a breakpoint</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Breakpoints apply from largest to smallest (cascading down)</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Best Practices</h3>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Start with your desktop layout, then add breakpoints for smaller screens</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Test your grid at various screen sizes using the editor's preview modes</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Use auto-fit mode for flexible content like cards or galleries</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Use manual mode when you need precise column control</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Advanced Group Controls</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Transform standard Group blocks into interactive containers with linking capabilities, mobile stacking controls, and advanced sticky positioning options.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">How to Use</h2>
<!-- /wp:heading -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li>Select any Group block</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Access controls through the toolbar (link icon) or sidebar settings</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Configure linking, stacking, or sticky behavior as needed</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Settings</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>Link Settings (Toolbar)</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Click the link icon in the block toolbar</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Enter a custom URL or select "Link to current post" (useful in Query loops)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Toggle "Open in new tab" option</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Entire Group block becomes clickable</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>Stack on Mobile (Row layouts only)</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Available when Group layout is set to Row</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Toggle to automatically stack horizontal layouts vertically on mobile (&lt; 600px)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Disabled when "Allow to wrap" is enabled (they conflict)</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>Sticky Position Controls (Position panel)</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Hide on Scroll Down: Element hides when scrolling down, reappears when scrolling up</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Unstick on Mobile: Disables sticky positioning below 600px width</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Top Offset: Distance from viewport top when stuck (supports px, em, rem, %)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Z-Index Position: Stacking order control (higher values appear on top)</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Best Practices</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Use linked groups for card layouts where the entire card should be clickable</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Test sticky behavior across different devices, especially with "Unstick on Mobile"</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Set appropriate z-index values to prevent overlap issues with other sticky elements</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":1} -->
<h1 class="wp-block-heading">Animation Designer</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Add professional animations to your blocks with fine-tuned control over timing, triggers, and effects. Includes a preset system for consistent motion design across your site.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">How to Use</h2>
<!-- /wp:heading -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li>Select a supported block (Group, Heading, Column, Columns, Image, Buttons, Cover)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Open the Animation panel in the sidebar</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Choose an animation type and configure settings</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Preview animations directly in the editor</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Settings</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>Animation Type</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Fade In: Simple opacity animation</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Slide animations: Slide from Up, Down, Left, or Right</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Zoom animations: Zoom In or Out</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Scale on Hover: Scales up on mouse hover (non-scroll triggered)</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>Timing Controls</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Duration: Animation length in seconds (0.1 - 3s)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Delay: Time before animation starts (0 - 3s)</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>Effect Settings</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Distance: How far elements slide (10 - 200px, for slide animations)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Scale: Starting scale factor (0.5 - 1.5, for zoom animations)</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>Trigger Options</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Animate on scroll: Animation triggers when element enters viewport</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Animate once: Animation plays only on first view (scroll animations)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Scroll offset: Percentage of element visible before animation triggers (0-100%)</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>Sequential Animation (Container blocks only)</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Animate items sequentially: Child elements animate one after another</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Sequential delay: Time between each child animation (0.1 - 1s)</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>Preset Management</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Save current settings as a reusable preset</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Apply saved presets from the toolbar dropdown</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Edit presets to update globally</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Delete unused presets</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Best Practices</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Use subtle animations (0.3-0.6s duration) for professional results</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Apply the same preset to similar elements for consistency</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Test scroll-triggered animations at different scroll speeds</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Use sequential animation for lists, grids, and card layouts</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":1} -->
<h1 class="wp-block-heading">Button Icons</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Enhance button blocks with a curated library of icons featuring multiple style weights and full customization options.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">How to Use</h2>
<!-- /wp:heading -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li>Select a Button block</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Open the "Button Icon" panel in the sidebar</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Choose an icon from the grid</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Customize appearance as needed</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Settings</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>Icon Selection</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Icon Grid: Click any icon to apply it to the button</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Icon Weight: Choose between Regular, Bold, or Fill styles</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Click the active icon again to remove it</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>Icon Customization</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Icon Size: Control icon dimensions (default: 1.2em)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Icon Spacing: Gap between icon and text (default: 0.5em)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Show icon on left: Toggle to move icon before button text</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Icon Color: Set via Color panel - independent from text color</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Available Icons</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Includes commonly-used icons such as arrows, chevrons, check marks, shopping cart, envelope, download, external link, and more. Icons are optimized for performance and scale perfectly at any size.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Best Practices</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Match icon weight to your button's font weight for consistency</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Use left-positioned icons for actions (Download, Send)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Use right-positioned icons for navigation (Arrow Right, External)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Keep icon sizes proportional to text (1-1.5em typically works best)</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":1} -->
<h1 class="wp-block-heading">Advanced Columns</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Improve responsive column layouts with mobile ordering controls and direction reversal options for better content hierarchy on small screens.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">How to Use</h2>
<!-- /wp:heading -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li>For column ordering: Select individual Column blocks</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>For direction reversal: Select the parent Columns block</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Controls appear only when "Stack on mobile" is enabled</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Settings</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>Individual Column Settings</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Order on mobile: Number button group (1, 2, 3, etc.)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Determines display order when columns stack vertically</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Only affects mobile layout (&lt; 600px)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Leave unset to maintain default order</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>Columns Container Settings</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Reverse direction on mobile: Toggle switch</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Flips the entire stack order when columns stack</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Useful when desktop left-to-right order doesn't work vertically</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Best Practices</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Use mobile ordering to prioritize important content on small screens</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Move sidebars after main content on mobile using order controls</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Test different orderings using the editor's mobile preview</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Combine with reverse direction for maximum flexibility</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":1} -->
<h1 class="wp-block-heading">Hover Colors</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Add smooth color transitions on hover for text, backgrounds, and borders with customizable animation timing.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">How to Use</h2>
<!-- /wp:heading -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li>Select any block that supports text color</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Go to the Color panel in the sidebar</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Configure hover colors and transitions</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Preview hover effects by hovering over the block</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Settings</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>Hover Color Options (Color panel)</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Text Hover: Color for text on hover</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Background Hover: Color for background on hover</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Border Hover: Color for border on hover</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Supports theme colors and custom values</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Clear button to remove hover colors</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>Transition Settings</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Duration: Transition time in milliseconds (50 - 2000ms, default: 200ms)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Timing Function: Animation curve<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Ease (default): Smooth acceleration and deceleration</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Linear: Constant speed</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Ease-in: Slow start</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Ease-out: Slow end</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Ease-in-out: Slow start and end</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Best Practices</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Use subtle color changes for professional effects</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Keep transition duration between 150-300ms for responsive feel</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Match hover colors to your theme's color palette</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Test hover effects on touch devices (they behave differently)</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":1} -->
<h1 class="wp-block-heading">Keyboard Shortcuts</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Navigate complex block structures efficiently with power-user keyboard shortcuts for the block editor.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">How to Use</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Simply use these keyboard combinations while editing:</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Shortcuts</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>Cmd/Ctrl + Shift + ↑ (Up Arrow)</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Select parent block</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Quickly jump out of nested structures</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>Cmd/Ctrl + Shift + ↓ (Down Arrow)</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Traverse forward through document</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Enters first child if available, otherwise moves to next sibling</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Continues through document in reading order</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>Cmd/Ctrl + Shift + ← (Left Arrow)</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Navigate backward through document</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Moves to previous sibling</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>If previous sibling has children, selects the deepest last child</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>Cmd/Ctrl + Shift + → (Right Arrow)</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Dive into current block</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Selects first child if available</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Otherwise moves to next sibling</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Best Practices</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Use Up arrow to quickly escape deep nesting</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Use Down/Right arrows to move forward through content</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Use Left arrow to move backward and into nested content</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Combine with Shift+Click for selecting multiple blocks</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":1} -->
<h1 class="wp-block-heading">Paragraph Hover Decoration</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Add interactive text decoration effects to Paragraph and Button blocks that activate on hover.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">How to Use</h2>
<!-- /wp:heading -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li>Select a Paragraph or Button block</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Open the Typography panel in the sidebar</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Find "Decoration Hover" control</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Select your preferred hover effect</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Settings</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>Decoration Options</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>None: Removes decoration on hover</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Underline: Adds underline on hover</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Strikethrough: Adds line-through on hover</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Click selected option again to disable</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Best Practices</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Use underline hover for links without default underlines</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Apply to buttons for subtle interactivity</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Combine with hover colors for enhanced effects</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Consider accessibility - ensure links are identifiable even without hover</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

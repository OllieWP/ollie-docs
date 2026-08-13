---
id: 60100
title: "Block Theme Structure"
status: "publish"
order: 2
excerpt: "How the Ollie theme is organized — templates, template parts, and patterns."
---

A WordPress block theme folder contains various subdirectories and files that define the theme's appearance and functionality. Here's an overview of the typical contents you will find in a block theme folder. 

Click the box below to see a diagram of how the Ollie block theme (and many block themes like it) is organized, which is notably different from classic WordPress themes.

<!-- wp:group {"className":"is-style-column-box-shadow","style":{"spacing":{"padding":{"top":"var:preset|spacing|small","bottom":"var:preset|spacing|small","left":"var:preset|spacing|small","right":"var:preset|spacing|small"}},"border":{"radius":"5px","width":"1px"}},"borderColor":"primary-accent","layout":{"type":"constrained"}} -->
<div class="wp-block-group is-style-column-box-shadow has-border-color has-primary-accent-border-color" style="border-width:1px;border-radius:5px;padding-top:var(--wp--preset--spacing--small);padding-right:var(--wp--preset--spacing--small);padding-bottom:var(--wp--preset--spacing--small);padding-left:var(--wp--preset--spacing--small)"><!-- wp:details {"style":{"typography":{"fontStyle":"normal","fontWeight":"600"}}} -->
<details class="wp-block-details" style="font-style:normal;font-weight:600"><summary>View Ollie theme diagram</summary><!-- wp:preformatted {"style":{"spacing":{"padding":{"top":"0","bottom":"var:preset|spacing|small","left":"var:preset|spacing|small","right":"var:preset|spacing|small"}},"typography":{"fontStyle":"normal","fontWeight":"400"}},"backgroundColor":"base"} -->
<pre class="wp-block-preformatted has-base-background-color has-background" style="padding-top:0;padding-right:var(--wp--preset--spacing--small);padding-bottom:var(--wp--preset--spacing--small);padding-left:var(--wp--preset--spacing--small);font-style:normal;font-weight:400"><strong>Ollie</strong> <br>|-- /parts<br>|   |-- header.html<br>|   |-- footer.html<br>|   |-- sidebar.html<br>|<br>|-- /patterns<br>|   |-- header-dark.php<br>|   |-- footer-light.php<br>|   |-- page-home.php<br>|   |-- ...<br>|<br>|-- /templates<br>|   |-- index.html<br>|   |-- single.html<br>|   |-- page.html<br>|   |-- ...<br>|<br>|-- /styles<br>|   |-- blocks/<br>|   |-- colors/<br>|   |-- typography/<br>|   |-- agency.json<br>|   |-- creator.json<br>|   |-- startup.json<br>|   |-- studio.json<br>|<br>|-- /assets/styles<br>|   |-- core-button.css<br>|   |-- core-columns.css<br>|   |-- core-navigation.css<br>|   |-- ...<br>|<br>|-- functions.php<br>|-- index.php<br>|-- screenshot.png<br>|-- style.css<br>|-- readme.txt<br>|-- theme.json</pre>
<!-- /wp:preformatted --></details>
<!-- /wp:details --></div>
<!-- /wp:group -->

## Theme.json

The `theme.json` file in WordPress block themes is a powerful configuration file that allows theme developers to define global styles, settings, and block-specific configurations. 

This file enhances the customization capabilities of themes, enabling both developers and users to control the appearance and behavior of blocks across the site from with in the WordPress site editor. 

The `theme.json` file is an essential component of modern WordPress block themes. It provides a centralized, standardized way to define and manage global styles, settings, and block-specific configurations.

In the WordPress editor, you can change all of the styles defined in theme.json in the [global styles panel](https://olliewp.com/docs/wordpress-block-themes/#global-styles).

## Templates

Templates are the foundational files that define the layout of different types of pages on your WordPress site. Templates are stored in the `/templates` folder and are defined with an HTML file. 

Each template file corresponds to a specific type of content or page, such as a single post, a page, an archive, or the homepage. Ollie's template files include:

<!-- wp:list {"className":"is-style-list-boxed","gradient":"light-section-fade"} -->
<ul class="wp-block-list is-style-list-boxed has-light-section-fade-gradient-background has-background"><!-- wp:list-item -->
<li><strong><code>index.html</code></strong>: The default template used when no other template matches.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong><code>single.html</code></strong>: The template for individual posts.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong><code>search.html</code></strong>: The template for displaying search results.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong><code>page.html</code></strong>: The template for static pages.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong><code>archive.html</code></strong>: The template for archive pages like category or tag archives.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong><code>404.html</code></strong>: The template for 404 error pages.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong><code>page-no-title.html</code></strong>: The template for building full pages with pattern sections. This template removes the page title and lets the content go full width.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong><code>page-with-sidebar.html</code></strong>: The template for adding a sidebar to the standard page design.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

In the WordPress editor, you can edit templates and create new ones by going to **Appearance → Editor → Templates**.

## Template parts

Template parts are reusable sections of a theme, allowing you to break down templates into smaller, modular components. Template parts are stored in the `/parts` folder and are defined with an HTML file.

These parts can be used across multiple templates, ensuring consistency and easier maintenance. Common template parts include:

<!-- wp:list {"className":"is-style-list-boxed","gradient":"light-section-fade"} -->
<ul class="wp-block-list is-style-list-boxed has-light-section-fade-gradient-background has-background"><!-- wp:list-item -->
<li><strong><code>header.html</code></strong>: The header section, typically containing the site logo, navigation menu, and other top-of-page elements.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong><code>footer.html</code></strong>: The footer section, which usually includes copyright information, links, and other bottom-of-page elements.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong><code>sidebar.html</code></strong>: The sidebar section, which can contain widgets, links, or other supplementary content.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

In the WordPress editor, you can edit template parts by going to **Appearance → Editor → Patterns →** **Template Parts**.

## Patterns

Patterns are predefined block layouts that can be inserted into pages or posts. They help users quickly create complex layouts by providing a starting point that can be customized. Patterns are stored in a `/patterns` directory and are defined using PHP files. Each pattern file typically includes:

<!-- wp:list {"className":"is-style-list-boxed","gradient":"light-section-fade"} -->
<ul class="wp-block-list is-style-list-boxed has-light-section-fade-gradient-background has-background"><!-- wp:list-item -->
<li>Pattern header: A header area that defines the pattern name, description, categories, and how the pattern should work inside WordPress.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Pattern content: The block markup that makes up the pattern design.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

In the WordPress editor, you can view and manage patterns by going to **Appearance → Editor → Patterns**.

## Style variations

Style variations define the visual appearance of the theme, including colors, typography, and other design elements. These styles can quickly change the overall look of your site, ensuring a consistent look and feel. Styles can be found in the `/styles` directory. Each style file typically includes:

<!-- wp:list {"className":"is-style-list-boxed","gradient":"light-section-fade"} -->
<ul class="wp-block-list is-style-list-boxed has-light-section-fade-gradient-background has-background"><!-- wp:list-item -->
<li><strong><code>theme.json</code></strong>: A JSON file that defines global styles and settings for the theme, such as color palettes, font sizes, spacing, and block settings. This file allows for greater customization and control over the theme’s design directly from the WordPress editor.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

In the WordPress editor, you can view and change style variations by going to **Appearance → Editor → Styles**.

## Block styles

Block styles are predefined styles that are applied to individual blocks. These styles are included in Ollie to provide consistent and customizable designs for various blocks used in the WordPress editor.

Block styles can be found in the `assets/styles` directory, and are only loaded on your page when the associated block is used.

---
id: 67378
title: "Ollie AI"
status: "publish"
order: 15
---

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=eTP4KfJb9PQ","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=eTP4KfJb9PQ
</div></figure>
<!-- /wp:embed -->

Ollie AI brings AI into WordPress the right way: working with real patterns, real design tokens, and your real content — right in the editor, and through AI assistants like Claude via MCP.

## AI Content Rewriting

Select any text in the block editor and rewrite it with AI: tighten a paragraph, change the tone, generate variations of a headline. Rewrites happen inline, right where you're working.

**Setup:** content rewriting uses the official WordPress AI plugin under the hood, so you'll need it installed along with a connected AI provider that supports text generation — Anthropic (Claude), OpenAI, or Google. Once a provider is connected, the rewrite option appears automatically when you select text.

## Connect Your AI Assistant with MCP

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=srFsIq5gPCQ","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=srFsIq5gPCQ
</div></figure>
<!-- /wp:embed -->

The bigger idea: Ollie Pro exposes a full set of site-building abilities that AI assistants can use directly. Connect Claude Desktop, Claude Code, Cursor, or VS Code to your site and your assistant can:

- Create and edit posts, pages, and content
- Search the Ollie pattern library and build pages from patterns
- Edit blocks surgically — change attributes and content without rewriting whole pages
- Manage templates, navigation menus, and global styles

Everything an assistant builds passes through a design linter that enforces your design system — colors, font sizes, and spacing must come from your theme's design tokens, so AI-generated pages look like *your* site, not generic output. And a patterns-first approach means the AI reaches for professionally designed Ollie patterns before building from scratch.

**Setup:** head to the Ollie Pro dashboard's extension settings for the guided walkthrough. In short: install the MCP Adapter plugin, create an Application Password for your user, and add the provided configuration snippet to your AI tool. Your assistant authenticates as you, with your permissions.

## Tips

- Great first request once connected: "Look at my site's patterns and draft an About page using them." You'll see the patterns-first approach in action.
- Because abilities respect WordPress permissions, you can create a dedicated user with limited capabilities for AI access if you want tighter control.

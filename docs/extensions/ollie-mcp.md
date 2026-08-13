---
id: 67464
title: "Ollie MCP"
status: "publish"
order: 17
excerpt: "Connect Claude or your favorite AI agent to your site and build pages with natural language."
---

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=srFsIq5gPCQ","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=srFsIq5gPCQ
</div></figure>
<!-- /wp:embed -->

The Ollie MCP connects your AI agent — Claude, Cursor, VS Code, or any MCP-capable tool — directly to your WordPress site. Once connected, your agent can build pages from Ollie patterns, adjust designs, change colors, and edit content, all through conversation: "create a new pricing page on my site," and moments later it's there, built from a professionally designed pattern and ready to refine.

**A quick note on expectations:** the MCP is still experimental, as all of this AI agent technology is. Version one focuses on what Ollie does best — design and page building with patterns — rather than doing everything WordPress can do. Experiment freely, keep backups if you're working on a live site, and send us feedback; it directly shapes where this goes.

## What Your Agent Can Do

The MCP exposes a set of abilities that let an agent work with your site the way you would:

- **Build pages from patterns** — it searches the Ollie pattern library first and assembles pages from professional designs rather than generating markup from scratch.
- **Create and edit content** — posts, pages, and block-level edits, including surgical changes like updating a button color without touching anything else.
- **Manage design** — templates, navigation, and global styles, including swapping your color palette ("switch to the orange palette").

Everything an agent builds is validated against Ollie's design system: colors, font sizes, and spacing must come from your theme's design tokens. That guardrail is why the results look like *your* site instead of generic AI output.

## Setup

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=FZHKmLdK7co","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=FZHKmLdK7co
</div></figure>
<!-- /wp:embed -->

Connecting an MCP is admittedly a bit manual right now — that's the current state of MCPs everywhere, not an Ollie quirk. The guided setup walks you through it:

1. Go to **Appearance → Ollie → Extensions** and enable **Ollie AI** (it's off by default).
2. In the setup panel, install the **MCP Adapter** plugin — this handles the connection on the WordPress side.
3. Create an **Application Password** — this is how your agent acts on your site, as your user, with your permissions.
4. Click **Connect Your AI Tool** and copy the configuration snippet for your tool of choice (Claude Desktop, Cursor, or VS Code). Your application password and site details are filled in automatically.
5. Paste the snippet into your tool's MCP configuration. In Claude Desktop that's **Settings → Developer → Edit Config**, inside the `mcpServers` object.
6. Fill in your node path: run `which node` in a terminal and use everything before `/node`, as the instructions show.
7. Restart your AI tool. If all went well, you'll see the Ollie server listed as running in its MCP settings.

If the node path step gives you trouble, ask your AI assistant for help — it's genuinely good at debugging its own config, and the path is specific to your machine.

## Install the Ollie Skill

Alongside the MCP, download the **Ollie skill** from the setup panel. A skill is an instruction file that teaches your agent how to work with Ollie specifically — the design system, the tokens, the button variations, the patterns-first workflow. In Claude, install it under **Settings → Skills → Create skill** and upload the file.

The MCP gives your agent hands; the skill gives it taste. With both installed, agents stay inside Ollie's design guardrails and produce noticeably more consistent, refined results.

## Good First Requests

- "Connect to my site and create a new pricing page." Watch it find a full-page pattern from the Ollie cloud and build the page.
- "Look at my site's patterns and draft an About page using them."
- "Switch my site to the orange color palette."
- "Change the buttons in my hero section to the secondary style."

Then iterate conversationally — rewrite sections, adjust colors, dial it in.

## Good to Know

- The agent authenticates with your application password and respects WordPress permissions — you can create a dedicated user with limited capabilities for AI access if you want tighter control.
- Application passwords can be revoked anytime from your profile, which instantly disconnects the agent.
- Prefer AI right inside the editor instead of an external agent? That's the other half of the story — see [Ollie AI](/docs/extensions/ollie-ai/) for the Writing Prompt and Design Prompt tools.

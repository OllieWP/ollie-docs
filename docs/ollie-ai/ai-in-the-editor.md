---
id: 67378
title: "AI in the Editor"
status: "publish"
order: 0
excerpt: "AI writing and design tools built right into the editor — rewrite, generate, and design with prompts."
---

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=eTP4KfJb9PQ","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=eTP4KfJb9PQ
</div></figure>
<!-- /wp:embed -->

Ollie AI is a growing suite of AI design and content tools built right into the WordPress editor. Instead of copying your page into a chat app and pasting results back, you work where the work is: select text and rewrite it, generate new content in place, and pull in designed sections — all through simple prompts, all grounded in your brand's context.

It's built on WordPress 7.0's new core AI infrastructure, which means it's provider-agnostic: connect Claude, OpenAI, Google, or whatever platform you prefer, and every Ollie AI feature uses that same standard connection.

## Rewrite Anything

Select any text — a headline, a paragraph — and click the **AI pen icon** in the block toolbar. A prompt box appears: tell it what you want. "Make this headline shorter and punchier." "Make this paragraph better support the headline." "Replace this with copy about the new feature."

Each request comes back with **several variations** to choose from, and a **Try again** button takes you back to the prompt to dial it in further. Editing and iterating on live copy — the thing you actually do most in the editor — becomes a conversation.

## Attach Context

The quiet superpower is the **paperclip**. Every prompt can carry additional context, and by default your current page is already attached — so the AI understands what the page is about before it writes a word.

Click **Add context** to attach more:

- **Pages from your site** — attach your writing guide or brand persona page, and responses come back sounding like your brand, not a generic assistant.
- **Text and markdown files** — attach a product overview, a style guide, a spec. If you keep brand material in markdown, it plugs straight in.

Attached context persists across your prompts in the session, so you set it up once and every rewrite and generation benefits.

## The Writing Prompt Block

For new content, insert a **Writing Prompt** block anywhere on the page. Describe what you want — "generate three paragraphs about Ollie Pro for this section" — and it writes in place, using the same attached context. Then refine conversationally: tighten it up, shift the focus, delete what you don't want. Blank-page paralysis, solved inside the editor.

## The Design Prompt Block

The same idea, for design. Insert a **Design Prompt** block (or type `/design`) and describe the section you need — "I need a new section for my features." Almost instantly you get **several design variations with live previews**, drawn from Ollie's professionally designed pattern collection. Browse them, pick one, click apply — it's now real blocks on your page, fully editable.

Then the best part: select the applied section (or any group on your page) and prompt at the *section* level — "make this section about Ollie Pro patterns and how fast you can design with them." Instead of touching the design, it rewrites **every piece of content individually while leaving the layout exactly as it was**. You keep the design you fell in love with; the content molds itself to fit.

## Find Designs by Describing Them

The [Pattern Library](/docs/patterns/) gets an AI boost too: the **Discover** search lets you describe what you need in plain language — "we need a homepage" — and returns matching designs from the pattern collection, no category browsing required.

## Setup

Ollie AI's editor features use the official WordPress AI plugin under the hood, so you'll need it installed with a connected provider that supports text generation — Anthropic (Claude), OpenAI, or Google. Once a provider is connected, the AI tools appear automatically in the editor.

## Take It Further with the MCP

Everything here happens inside the editor. The other half of Ollie AI is the [Ollie MCP](/docs/ollie-ai/ollie-mcp/), which connects external AI agents — Claude Desktop, Claude Code, Cursor — directly to your site, where they can build whole pages from patterns, manage templates and navigation, and work within your design system. If you live in an AI tool all day, that's your doc.

## Tips

- Attach a writing guide before a content session — it's the difference between generic copy and copy that sounds like you.
- The design-then-refill workflow is the one to internalize: Design Prompt for the layout, then a section-level prompt to pour your real content into it.
- These features combine into an AI-first workflow that bridges design and content — start a page with a Design Prompt, fill it with a section prompt, and polish lines with the rewrite tool.

---
id: 64510
title: "How to make a horizontal scroll carousel in the block editor"
status: "publish"
order: 2
---

Lots of folks have written in asking how we made the carousel on the <a href="http://olliewp.com/pro" title="">Ollie Pro</a> page. It's a combination of native blocks in the editor and some custom CSS to make it shine.

Below, I've written a brief tutorial to show you how to get a similar result on your site. This is not an official Ollie tutorial, rather a handy little tutorial to help folks go a little further with the editor. **With that said, I cannot provide further advice or customization to help you implement it into your site.**

To start, here's how the carousel is structured in the editor:

```
- Group block
  - Row (.pattern-scroll .pattern-scroll-alt)
      - Image
      - Image
      - Image
  - Row (.pattern-scroll)
      - Image
      - Image
      - Image
```

The outermost container is a group block with a full width set on the container so that the carousel can scroll in and out of view.

Inside the group block are two row blocks with images inside of them. Each row block has a class to animate it, with one animating in the opposite direction.

```
@keyframes scrollAlt {
    0% {
        transform: translateX(-50%);
    }
    50% {
        transform: translateX(0%);
    }
	100% {
		transform: translateX(-50%);
	}
}

.pattern-scroll {
	-webkit-overflow-scrolling: touch;
	animation: scroll 60s linear infinite;
	animation-play-state: running;
}

.pattern-scroll-alt {
	animation: scrollAlt 60s linear infinite;
}

.pattern-scroll img {
	max-height: 400px;
	width: auto;
	border-radius: 10px;
	transition: .5s ease;
	box-shadow: 0px 113.367px 31.822px 0px rgba(46, 51, 92, 0.00), 0px 72.594px 28.839px 0px rgba(46, 51, 92, 0.01), 0px 40.772px 24.861px 0px rgba(46, 51, 92, 0.04), 0px 17.9px 17.9px 0px rgba(46, 51, 92, 0.07), 0px 4.972px 9.944px 0px rgba(46, 51, 92, 0.08);
}

.pattern-scroll img:hover {
	transform: scale(1.03);
}

@media only screen and (max-width: 781px) {
	@keyframes scroll {
		0% {
			transform: translateX(0);
		}
		50% {
			transform: translateX(-300%);
		}
		100% {
			transform: translateX(0);
		}
	}

	@keyframes scrollAlt {
		0% {
			transform: translateX(-300%);
		}
		50% {
			transform: translateX(0%);
		}
		100% {
			transform: translateX(-300%);
		}
	}

	.pattern-scroll {
		animation: scroll 90s linear infinite !important;
	}

	.pattern-scroll-alt {
		animation: scrollAlt 90s linear infinite !important;
	}
	
	.pattern-scroll img {
		max-height: 200px;
	}
}
```

Below is the block code copied from the editor. If you want to use this as a starting point, you'll need to paste this into the code view of the editor and then switch back to the editor view to get started.

```
<!-- wp:group {"align":"full","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull"><!-- wp:group {"align":"full","className":"pattern-scroll pattern-scroll-alt","style":{"spacing":{"padding":{"top":"0","bottom":"0","left":"var:preset|spacing|large","right":"var:preset|spacing|large"}}},"layout":{"type":"flex","flexWrap":"nowrap"}} -->
<div class="wp-block-group alignfull pattern-scroll pattern-scroll-alt" style="padding-top:0;padding-right:var(--wp--preset--spacing--large);padding-bottom:0;padding-left:var(--wp--preset--spacing--large)"><!-- wp:image {"id":57697,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="https://olliewp.com/wp-content/uploads/2024/05/Frame-1597881611-1-jpg.webp" alt="Hero Design" class="wp-image-57697"/></figure>
<!-- /wp:image -->

<!-- wp:image {"id":57698,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="https://olliewp.com/wp-content/uploads/2024/05/Frame-1597881482-2-jpg.webp" alt="Frame 1597881482 2" class="wp-image-57698"/></figure>
<!-- /wp:image -->

<!-- wp:image {"id":57703,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="https://olliewp.com/wp-content/uploads/2024/05/Frame-1597881483-1-jpg.webp" alt="Frame 1597881483 1" class="wp-image-57703"/></figure>
<!-- /wp:image -->

<!-- wp:image {"id":57707,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="https://olliewp.com/wp-content/uploads/2024/05/Frame-1597881596-1-jpg.webp" alt="Frame 1597881596" class="wp-image-57707"/></figure>
<!-- /wp:image -->

<!-- wp:image {"id":57701,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="https://olliewp.com/wp-content/uploads/2024/05/Frame-1597881490-1-jpg.webp" alt="Frame 1597881490 1" class="wp-image-57701"/></figure>
<!-- /wp:image --></div>
<!-- /wp:group -->

<!-- wp:group {"align":"full","className":"pattern-scroll","style":{"spacing":{"padding":{"top":"0","bottom":"0","left":"var:preset|spacing|large","right":"var:preset|spacing|large"}}},"layout":{"type":"flex","flexWrap":"nowrap"}} -->
<div class="wp-block-group alignfull pattern-scroll" style="padding-top:0;padding-right:var(--wp--preset--spacing--large);padding-bottom:0;padding-left:var(--wp--preset--spacing--large)"><!-- wp:image {"id":57195,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="https://olliewp.com/wp-content/uploads/2024/05/pattern-scroll-1.webp" alt="Pattern Scroll 1" class="wp-image-57195"/></figure>
<!-- /wp:image -->

<!-- wp:image {"id":57196,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="https://olliewp.com/wp-content/uploads/2024/05/pattern-scroll-2.webp" alt="Pattern Scroll 2" class="wp-image-57196"/></figure>
<!-- /wp:image -->

<!-- wp:image {"id":57204,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="https://olliewp.com/wp-content/uploads/2024/05/pattern-scroll-3.webp" alt="Pattern Scroll 3" class="wp-image-57204"/></figure>
<!-- /wp:image -->

<!-- wp:image {"id":57205,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="https://olliewp.com/wp-content/uploads/2024/05/pattern-scroll-4.webp" alt="Pattern Scroll 4" class="wp-image-57205"/></figure>
<!-- /wp:image -->

<!-- wp:image {"id":57695,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="https://olliewp.com/wp-content/uploads/2024/05/Frame-1597881489-1-jpg.webp" alt="Frame 1597881489 1" class="wp-image-57695"/></figure>
<!-- /wp:image -->

<!-- wp:image {"id":57696,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="https://olliewp.com/wp-content/uploads/2024/05/Frame-1597881595-1-jpg.webp" alt="Frame 1597881595 1" class="wp-image-57696"/></figure>
<!-- /wp:image --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->
```

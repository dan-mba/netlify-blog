---
templateKey: blog-post
title: The Meta Tag
date: 2020-01-28T17:00:02.803Z
description: >-
  The meta tag is used to provide additional information about your page & how
  to display it
featuredpost: false
tags:
  - html
  - meta
  - tag
  - viewport
  - description
  - og
---
Data from your page's meta tags provides additional information to the browser on how to render it and to search engines & social media on how to classify it. I will cover a few of the ones I have found useful here.

###### Viewport
```html
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
```
This tag tells mobile browsers how to render your site, because display pixels and CSS pixels are not equal on most mobile devices. For more information on all the viewport setting, check the MDN documentation 
[here](https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag).

###### Description
```html
<meta name="description" content="A blog about software engineering">
```
This tag is used by search engines to display additional information about your page.

###### Open Graph
```html
<meta property="og:title" content="Dan's Software Engineering Blog">
```
This is a collection of tags to describe your page to social media sites when someone links to you. For more information on Open Graph tags, click 
[here](https://ogp.me/).
<br><br><br>
For additional information on meta tags, check the MDN documentation:<br>
[Meta Tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta)

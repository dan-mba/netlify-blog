---
templateKey: blog-post
title: Pitfalls of Multiple Components w/ CSS
date: 2020-01-30T17:00:14.712Z
description: >-
  Sometimes using multiple components on a page with their own CSS files can
  lead to a conflict
featuredpost: false
tags:
  - css
  - prism
  - bulma
---
I have two main CSS files for this blog. One contains the overall theme for all the pages and is based on Bulma. The other is a theme for Prism to highlight my code samples. After posting yesterday's blog, I noticed some of the code samples looked weird. This is when I found out that I had two sections using the same class, tag, for very different purposes. The Prism parser was using the tag class to mark HTML or JSX tags. The blog post template uses the tag class to style the tags for the post. While I was able to override the CSS to work as intended, this served as a good reminder to double check everything any time you add a component to a project that requires its own CSS

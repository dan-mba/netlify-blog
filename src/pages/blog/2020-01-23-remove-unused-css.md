---
templateKey: blog-post
title: Remove Unused CSS
date: 2020-01-23T23:14:58.259Z
description: >-
  Using PurgeCSS can greatly reduce your CSS bundle when using large CSS
  libraries
featuredpost: false
tags:
  - purge
  - css
  - build
  - purgecss
---
Do you use a large CSS library like Bootsrap, Tailwind, or Bulma? These libraries define many more selectors than you are likely to use. So why force users to download this extra code. This is where PurgeCSS comes in. By adding it to your build process you will significantly reduce the size of your CSS bundle. I use Bulma on this blog and PurgeCSS has reduced the size of my css from 198kb to 20kb.

For information on how to configure PurgeCSS to work with your build process, check out the documentation here:<br>
[PurgeCSS](https://purgecss.com)

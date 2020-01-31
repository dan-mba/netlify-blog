---
templateKey: blog-post
title: Color Functions in Sass
date: 2020-01-30T22:58:02.154Z
description: Sass offers functions that make creating a theme for your page easier
featuredpost: false
tags:
  - sass
  - colors
---
Creating a color scheme is an important part of designing a website. But performing math on color values is hard. Sass provides a collection of functions that will do the math for you.
```scss
/* SCSS style */
$brandColor: #006db0;
$dkBrandColor: scale-color($brandColor, $lightness: -20%);
$ltBrandColor: scale-color($barndColor, $lightness: 50%);

button {
  background-color: $ltBrandColor;
  color: $dkBrandColor;
}
```

This simple example styles buttons using colors 20% darker & 50% lighter than a fixed color. For more information on Sass and the functions to calculate color values, check out these links to the documentation:<br>
[Sass](https://sass-lang.com/)<br>
[Sass Colors](https://sass-lang.com/documentation/modules/color)

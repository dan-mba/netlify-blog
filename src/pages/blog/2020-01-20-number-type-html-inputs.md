---
templateKey: blog-post
title: Number Type HTML Inputs
date: 2020-01-21T17:00:10.653Z
description: Using number type inputs can make validating number input easier
featuredpost: false
tags:
  - html
  - input
  - type
  - number
---
For a project i have been working on, I needed to get an input for the user of a whole number between 1 and 10. I first tried to handle the input without a type and using JavaScript to verify the input & provide an error message if necessary. This was more difficult than it should have been, so I went looking for another solution. That is when I found `type="number"`. Here is the HTML to get the input I need:
```html
<input type="number" value="1" min="1" max="10" step="1">
```

This solution provides an input box with a default value of 1. It has up & down arrows to change the value and the browser insures it is within the bounds I set.

For more information on number type input, check out the MDN documentation here:<br>
[input type="number"](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number)

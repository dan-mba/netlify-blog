---
templateKey: blog-post
title: Change List Bullet Style
date: 2020-01-27T14:37:31.318Z
description: You can change the style of unordered lists using only CSS
featuredpost: false
tags:
  - css
  - unordered
  - list
  - emoji
---
The default circle bullet for unordered list is boring. There are several ways to change them with only CSS, but the method I have found to be the most compatible is using before pseudo-elements.

```css
ul {
  list-style: none;
}

li::before {
  display: inline-block;
  content: "\1f680";
  margin-right: 1em;
}

li:nth-child(odd)::before {
  content: "\1f682";
}
```

This method sets list-style to none to remove the default bullets. They are replaced by the content of the before pseudo-elements. You can use this in concert with the nth-child pseudo-class to alternate odd and even bullet markers. The order matters as pseudo-classes must come before the pseudo-element. The content in my example are unicode characters, but you can also specify a URL for an image. I have a working example of this on 
[Codepen](https://codepen.io/dan-mba/pen/yLyraMz).

FYI - Chrome on Windows does not support all unicode emojis, especially on Windows 8.

For more information, here are links to the MDN documentation:<br>
[list-style](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style)<br>
[content](https://developer.mozilla.org/en-US/docs/Web/CSS/content)

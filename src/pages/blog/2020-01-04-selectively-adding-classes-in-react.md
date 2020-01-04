---
templateKey: blog-post
title: Selectively Adding Classes in React
date: 2020-01-05T17:00:00.000Z
description: 'Using a ternary operator to selectively add a class in React '
featuredpost: false
tags:
  - react
  - classname
  - ternary
  - template
  - string
---
One of the more common things you need to do in React is add a CSS class to an element based on a condition. This can easily be done in JSX using a ternary operator.
<br>
```javascript
<div className={active ? "active" : ""}>Active Text</div>
```
But many times you have a base set of classes & a conditional class. This can be accomplished using a ternary with string concatenation or ES6 template strings.
<br>
```javascript
<div
  className={"is-bold font-size-big" + active ? "active" : ""}
>
  Active Text
</div>

<div
  className=`is-bold font-size-big ${active ? 'active' : ''}`
>
  Active Text
</div>
```

For more information on ES6 template string, here is a link to a full explanation:<br>
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

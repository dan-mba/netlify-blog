---
templateKey: blog-post
title: Swap with Array Destructuring
date: 2020-01-02T17:00:38.448Z
description: Using ES6 array destructuring makes swapping variables easier
featuredpost: false
tags:
  - javascript
  - array
  - destructuring
  - es6
---
ES6 added many useful features to JavaScript. One side effect of the addition of array destructuring is the ability to swap variables without a temp variable. <br>

```javascript
let a = 1;
let b = 2;

[a, b] = [b, a];
console.log(a); // 2
console.log(b); // 1
```
This can also be used to swap items in array:

```javascript
const arr = [1,2,3];

[arr[3], arr[1]] = [arr[1], arr[3]];
console.log(arr); // [3,2,1]
```

For more information about array destructuring & where it is supported, use this link:
<br>
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

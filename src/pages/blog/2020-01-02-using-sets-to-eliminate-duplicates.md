---
templateKey: blog-post
title: Using Sets to Eliminate Duplicates
date: 2020-01-03T17:00:56.215Z
description: Using a Set object and the spread operator to remove duplicates
featuredpost: false
tags:
  - javascript
  - set
  - unique
---
Removing duplicates in an array of numbers or strings used to be an annoying problem in JavaScript. But recent additions have mad this task much simpler. A set in JavaScript is a built-in object that stores unique values. Using a Set in concert with the spread operator allows you to eliminate duplicates from an array.

```javascript
const arr = [1,2,3,2,1];
const set = new Set(arr);
const unique = [...set]

console.log(unique); // [1,2,3]
```

For more information on the built-in Set object & the spread operator, check here:
[MDN - Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)<br>
[MDN - Spread Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

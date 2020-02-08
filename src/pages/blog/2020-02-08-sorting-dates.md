---
templateKey: blog-post
title: Sorting Dates
date: 2020-02-08T17:00:50.276Z
description: Sorting an array of objects by date is easier than you think
featuredpost: false
tags:
  - array
  - sort
  - object
  - date
---
I ran into a problem recently where an API that was documented to be returning items with the most recent first was not correctly ordered. Since the API isn't mine, I needed to find a way around it. I found out that you can subtract JavaScript Date objects, which makes it easy to use sort. Here is a simple example of what I did:

```javascript
const data = [
  {
    name: "Report 1",
    date: "1475121600000"
  },
  {
    name: "Report 2",
    date: "1524715200000"
  }
]

let output = data.map(item => {
  return {...item, date: new Date(parseInt(item.date))};
});
output.sort((a,b) => b.date - a.date);
console.log(output);
```

The dates returned from the API are in UNIX time format, which the Date constructor handles if is in integer format. I mapped the array of objects, converting the date to a Date object. This allowed me toe sort the array with the sort function.

For more information on the Date object & the sort function, check out the MDN links below:<br>
[Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)<br>
[sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

---
templateKey: blog-post
title: Select Components in Vue
date: 2020-01-29T17:00:54.580Z
description: Creating components for select boxes in Vue requires a little more effort
featuredpost: false
tags:
  - select
  - vue
---
I was working on a project where I wanted the use multiple chained select boxes to allow the user to pick a car by year, make, and model. I found out after hours of debugging that this wasn't as easy as I thought.

I will show you how I got the make select to work, as it is the same for the others. In the parent component you use v-model for the variable you want to link the select to and pass additional variables along.
```jsx
<MakeSelect v-model="make" :year="year"></MakeSelect>
```

In the MakeSelect template you need to emit an event to pass the value back to the parent.
```html
<select :value=value @input="$emit('input',$event.target.value)">
  <option value="">Make:</option>
  ...
</select>
```

Because the list of makes that are part of the select is determined based on the year, you need to add a watch function to the default export object.
```js
watch: {
  year: function (){
    if(this.year === "") {
      this.makes=[];
      return;
    }
    getMakes();
  }
},
```

For more information, check out the Vue documentation:<br>
[emit](https://vuejs.org/v2/guide/components.html#Listening-to-Child-Components-Events)<br>
[watcher](https://vuejs.org/v2/guide/computed.html#Watchers)



---
templateKey: blog-post
title: React useEffect Hook
date: 2020-01-09T17:00:48.569Z
description: >-
  The useEffect hook allows you to use lifecycle methods in functional
  components.
featuredpost: false
featuredimage: /img/react.png
tags:
  - react
  - hooks
  - useEffect
  - lifecycle
---
The useEffect hook is the functional component equivalent of all the lifecycle methods (componentDidMount, componentDidUpdate, etc). Here is a example of how it works, building on the example from my previous blog:

```javascript
import React, {useState, useEffect} from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `The count is ${count}`;
  }, [count]);

  return (
    <div>
      <p>Count = {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```
The useEffect hook takes two parameters. The first parameter is the function to run on mount & update. This function can also return a function to be used for cleanup. The second optional parameter is an array of variables. Using this parameter causes the function to only run again after the initial run if one of the values is changed. In this example. the document title will be updated with the count, but only when its value changes.
<br><br>
For more information on the useEffect hook, here is a link to the documentation:
[Hooks - useEffect](https://reactjs.org/docs/hooks-effect.html)

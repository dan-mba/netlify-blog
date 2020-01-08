---
templateKey: blog-post
title: React useState Hook
date: 2020-01-08T17:00:48.569Z
description: The useState hook allows you to use state variables in functional components.
featuredpost: false
featuredimage: /img/react.png
tags:
  - react
  - hooks
  - useState
  - state
---
The useState hook was created to allow developers to use state variables in a functional component. Here is a simple example on how to use it: 

```javascript
import React, {useState} from 'react';

function Counter() {
  const [count, setCount] = useState(0);

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

The call to useState in the above example returns an array of two items. The first is the state variable, in this case count, which has been initialized to the the value we passed to useState, zero. The second is the update function, setCount, which is equivalent to setState but for this individual variable only. While this example only has one state variable, you can create as many as you need for your component through separate calls to useState.
<br><br>
For more information on useState, read the documentation here:<br>
[React - useState](https://reactjs.org/docs/hooks-state.html)

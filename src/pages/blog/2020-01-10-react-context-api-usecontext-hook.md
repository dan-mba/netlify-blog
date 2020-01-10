---
templateKey: blog-post
title: React Context API & useContext Hook
date: 2020-01-10T17:00:48.569Z
description: >-
  The context API & useContext hook create a way to use values from a distant
  parent component without prop drilling
featuredpost: false
featuredimage: /img/react.png
tags:
  - react
  - hooks
  - context
  - api
  - useContext
---
The React context API allows a provider component to share a value with consumer components without having to pass them through props. The useContext hook makes it easy for functional components too access this value. Here is a example of how it works, building on the example from my previous blog:

```javascript
import React, {useState, useEffect, useContext} from 'react';

const MyContext = React.createContext();

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `The count is ${count}`;
  }, [count]);

  return (
    <MyContext.Provider value={{count, setCount}}>
      <CountStatus/>
      <CountButton/>
    </MyContext.Provider>
  );
}

function CountStatus() {
  return (
    <MyContext.Consumer>
      {({count}) => {
        return (
          <p>Count = {count}</p>
        );
      }}
    </MyContext.Consumer>
  );
}

function CountButton() {
  const {count, setCount} = useContext(MyContext);

  return (
    <button onClick={() => setCount(count+1)}>
      Increment
    </button>
  )
}

```
The call to createContext initializes a context object with a Provider & Consumer component. This function optionally take an initial context value. The call to the Provider component makes the value specified available to any child consumers. In the CountStatus component, the Consumer component takes a function which take the value as input and returns the JSX to be displayed. In CountButton, the useContext hook accesses & destructures the value object. The reason I use the component in one place & the hook in another to access the value object is only the Consumer component will force a re-render on change.
<br><br>
For more information on the context API & the useContext hook, here is a link to the documentation:<br>
[Context API](https://reactjs.org/docs/context.html)<br>
[Hooks - useContext](https://reactjs.org/docs/hooks-reference.html#usecontext)

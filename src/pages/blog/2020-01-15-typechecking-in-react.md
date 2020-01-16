---
templateKey: blog-post
title: Typechecking in React
date: 2020-01-16T17:00:34.428Z
description: The prop-types library provides simple typechecking in React
featuredpost: false
featuredimage: /img/react.png
tags:
  - prop
  - types
  - react
  - typechecking
---
As your React project grows larger, and work gets split among more developers, the chances of a prop type mismatch grows. One of the simplest forms of typecheking in React comes from the prop-types package. It was originally part of the core React, but now comes as a separately installable package. Here is a simple example:
```javascript
import React from 'react';
import PropTypes from 'prop-types';

const NamesList = ({names}) => (
  <ul>
    {names.map(name => <li>{name}</li>}
  </ul>
);

NamesList.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string)
};
```

In this simple example, the prop names is an array of strings. For more information on all the supported types and usage examples, check out the documentation here:<br>
[prop-types](https://reactjs.org/docs/typechecking-with-proptypes.html)

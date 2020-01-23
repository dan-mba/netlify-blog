---
templateKey: blog-post
title: Add Head Tags from React
date: 2020-01-23T17:00:11.471Z
description: Using Helmet you can add tags to the head section of the HTML
featuredpost: false
featuredimage: /img/react.png
tags:
  - head
  - tags
  - react
  - helmet
  - react-helmet
---
There are a couple of reasons I have found to want to set head tags from inside my React app:
* Update the title bar
* Set meta tags for SEO

The easiest way I have found to add head tags & ensure they are correctly generated is to use Helmet. Here is an example usage:

```javascript
import Helmet from 'react-helmet'

const App = () => {
  <div>
    <Helmet>
      <title>My App</title>
      <meta name="description" content="My App" />
    </Helmet>
    ...
  </div>
}
```

For more information on using Helmet, check the documentation on the project github repo:<br>
[react-helmet](https://github.com/nfl/react-helmet)

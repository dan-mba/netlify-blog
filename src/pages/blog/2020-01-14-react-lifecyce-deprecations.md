---
templateKey: blog-post
title: React Lifecyce Deprecations
date: 2020-01-15T17:00:44.971Z
description: React will be removing some lifecycle methods in v17
featuredpost: false
featuredimage: /img/react.png
tags:
  - react
  - async
  - deprecated
  - componentwillmount
  - componentwillupdate
  - componentwillreceiveprops
---
As part of the React teams work toward async rendering, they found that some lifecycle methods were not easily compatible. The following lifecycle methods will be deprecated in v17:
- `componentWillMount`
- `componentWillReceiveProps`
- `componentWillUpdate`

Some of the functionality has been migrated to two new lifecycles added in v16.3:
- `getDerivedStateFromProps`
- `getSnapshotBeforeUpdate`

The current version of React, v16.12, will show a warning in the console when any of the deprecated methods are used. For more information on how to update your application so it will be compatible with v17, check out the examples on this post on the React blog:<br>
[Update on Async Rendering](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html)

---
templateKey: blog-post
title: Analyzing Your JavaScript Bundle
date: 2020-02-12T17:00:30.880Z
description: >-
  When the size of your JavaScript bundle starts expanding, trying to find the
  culprit can be difficult.
featuredpost: false
tags:
  - webpack
  - webpack-bundle-analyzer
  - source-map-explorer
  - vue
  - create-react-app
---
I was recently working on a project when I started to get bundle size warnings from webpack. The size of my libraries bundle was over 1MB. I went looking for tools to figure out what was using all the space and came across `webpack-bundle-analyzer`. This tool creates a graphical representation of all the modules in your bundle. To configure it, add the following code to the appropriate config file:

```javascript
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

// webpack.config.js
module.exports = {
  plugins: [
    new BundleAnalyzerPlugin(),
  ],
};

// vue.config.js
module.exports = {
    configureWebpack: {
        plugins: [new BundleAnalyzerPlugin()]
    }
};
```

This tool won't work with `create-react-app` projects without ejecting, but there recommend the similar tool `source-map-explorer`.

I found two problems and was able to reduce my bundle size from 1MB to 360KB. I was mistakenly including an entire SVG icon library instead of only the icons I was using. I also had an issue of multiple versions of the `core-js` library being included.

For more information, check out the GitHub repos:<br>
[webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)<br>
[source-map-explorer](https://github.com/danvk/source-map-explorer)

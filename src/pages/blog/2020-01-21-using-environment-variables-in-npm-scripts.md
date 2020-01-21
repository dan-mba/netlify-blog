---
templateKey: blog-post
title: Using Environment Variables in Npm Scripts
date: 2020-01-22T17:00:36.639Z
description: >-
  Using cross-env is an easy way to set environment variables that will work on
  Windows
featuredpost: false
tags:
  - npm
  - script
  - environment
  - variable
  - windows
  - cross-env
---
Dealing with environment variables on Windows is hard, especially if you are working on a project that will be run on other platforms. One common way of passing them to a node app is to store them in a file & read them in during initialization (or use a package that does it for you). But what if you need to set the variable for node itself. You could create a script to set it before calling node, but one that works on Windows will not work on other platforms. This is where `cross-env` come in. Here is a start script I use for an express app:
```json
"start": "cross-env NODE_ENV=production node server.js"
```

This allows me to run this app on my Windows development machine & deploy it anywhere.

For more information about cross-env, check out the projects github repo:<br>
[cross-env](https://github.com/kentcdodds/cross-env)

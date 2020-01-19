---
templateKey: blog-post
title: Upgrading Npm on Windows
date: 2020-01-20T17:00:30.312Z
description: Upgrading npm is significantly easier with npm-windows-upgrade
featuredpost: false
tags:
  - npm
  - upgrade
  - update
  - windows
  - npw-windows-upgrade
---
The preferred mothod of installing & updateing npm on Windows is with the Node.js installer. But there are times when you need an update before it is included with Node. On other platforms you can just do an npm update on npm, but this will not work on Windows. That is where npm-windows-upgrade comes in.<br>
First you need to allow scripts to run from a powershell prompt:
```powershell
Set-ExecutionPolicy Unrestricted -Scope CurrentUser -Force
```

Then you can install the upgrader & run it:
```powershell
npm install --global --production npm-windows-upgrade
npm-windows-upgrade
```

For more information on this utility, check out the projects github repo:<br>
[npm-windows-upgrade](https://github.com/felixrieseberg/npm-windows-upgrade)

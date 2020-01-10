---
templateKey: blog-post
title: NPM Package.json Scripts
date: 2020-01-11T17:00:11.680Z
description: 'Using NPM package.json scripts to perform pre & post build tasks '
featuredpost: false
tags:
  - npm
  - scripts
  - create-react-app
  - pre
  - post
---
I have used create-react-app or similar quick start tools on many of my JavaScript projects. Most of these projects templates create a set of scripts in your package.json to run a development environment & create a production build. But many times I need to perform steps before or after the build process for it to work correctly for my deployment environment. This is how I learned about using pre & post. Creating a command in your scripts section with pre or post prior to the name of another script (ex. prebuild & postbuild for the build script), will allow you to run that command before or after the named script. I regularly use prebuild to clean up my deploy directory & postbuild to move the build to my deploy directory, so I don't have to eject from create-react app.
<br><br>
For more information on NPM scripts, check out the documentation here:<br>
[NPM - Scripts](https://docs.npmjs.com/misc/scripts)

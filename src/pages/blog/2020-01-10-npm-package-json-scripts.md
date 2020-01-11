---
templateKey: blog-post
title: Npm Package.json Scripts
date: 2020-01-11T17:00:11.680Z
description: 'Using npm package.json scripts to perform pre & post build tasks '
featuredpost: false
tags:
  - npm
  - scripts
  - create-react-app
  - pre
  - post
  - shx
---
I have used create-react-app or similar quick start tools on many of my JavaScript projects. Most of these projects templates create a set of scripts in your package.json to run a development environment & create a production build. But many times I need to perform steps before or after the build process for it to work correctly for my deployment environment. This is how I learned about using pre & post. Creating a command in your scripts section with pre or post prior to the name of another script (ex. prebuild & postbuild for the build script), will allow you to run that command before or after the named script. Here is an example:

```
{
  "scripts": {
    "prebuild": "shx rm -rf docs/static && shx rm -f docs/index.html",
    "build": "react-scripts build",
    "postbuild": "shx cp -r build/index.html build/static docs"
  },
}
```

In this example, I use the prebuild script to clean up my deployment directory & the postbuild script to copy the build to the deployment directory. This allows me to get the build output where I want without having to eject from create-react-app. In these scripts, I use the shx command to use Unix style file commands on Windows. The shx command can be installed from npm.
<br><br>
For more information on npm scripts & shx, check out the documentation here:<br>
[npm scripts](https://docs.npmjs.com/misc/scripts)<br>
[shx](https://github.com/shelljs/shx)

---
templateKey: blog-post
title: Font Awesome Icons
date: 2020-01-18T17:00:59.849Z
description: Font Awesome provides a large library of icons you can use for your project
featuredpost: false
tags:
  - icons
  - font
  - awesome
  - fontawesome
  - react
---
Most websites these days contain links to related social media accounts. When designing a site, it can be difficult to find icons for all sites you want to link to. Especially when you need them to match the color scheme of your site. Font Awesome provides these for free in a way that is easy to use with your project. After creating an account, it is as easy as adding a script tag to your page and using HTML with the correct classes. But I really enjoy the the integration with React.
<br><br>
To use an icon in React, you just import the icon loader & svg:
```javascript
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
```

Then to use the icon, just use the FontAwesomeIcon component:
```javascript
<FontAwesomeIcon icon={faGithub} />﻿
```

For more information on Font Awesome, check out the documentation here:<br>
[Font Awesome](https://fontawesome.com)<br>
[react-fontawesome](https://github.com/FortAwesome/react-fontawesome)

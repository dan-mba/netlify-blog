---
templateKey: blog-post
title: Parsing XML in JavaScript
date: 2020-01-13T17:00:35.507Z
description: Xml2js provides an easy way to convert XML to a JavaScript object
featuredpost: false
tags:
  - xml2js
  - xml
  - javascript
  - parser
---
I worked on a project where I wanted to access data from an RSS feed. This lead me to researching XML parsers. Many XML parsers only provide the basics to find tags and leave all of the heavy lifting to you. The xml2js parser converts all of the XML passed to it into a JavaScript object. This allows you to manage the data as you would any other object. Here is a simple example of its usage:

```javascript
var parseString = require('xml2js').parseString;
var xml = "<root>Hello xml2js!</root>"
parseString(xml, (err, result) => {
    console.dir(result);
});
```

For more information all all the parsing options & usage with promises, check out the projects Github page:<br>
[xml2js](https://github.com/Leonidas-from-XIV/node-xml2js)

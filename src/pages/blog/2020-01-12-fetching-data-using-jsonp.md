---
templateKey: blog-post
title: Fetching Data Using Jsonp
date: 2020-01-12T17:00:03.834Z
description: Perform a cross-domain API request using jsonp
featuredpost: false
tags:
  - axios-jsonp-pro
  - axios
  - fetch
  - jsonp
---
Recently I was converting an old project that used jQuery to React. This meant replacing all the jQuery AJAX calls. After reviewing the documentation for both axios & fetch, I found that neither supported jsonp. I needed jsonp support because I am accessing an API on a different domain that hasn't configured CORS to allow for a normal GET request. I searched for a compatible library and found axios-jsonp-pro. It provides all of the functionality I needed & more. Here is an example:

```javascript
import axios from 'axios-jsonp-pro';

axios.jsonp('/endpoint?query=data')
  .then( response => {
    console.log(response);
  })
  .catch( error => {
    console.log(error);
  });
```

For more information on axios-jsonp-pro, check out the projects github page:<br>
[axios-jsonp-pro](https://github.com/RekingZhang/axios-jsonp)

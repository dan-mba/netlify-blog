---
templateKey: blog-post
title: Syntax Highlighting on this Blog
date: 2020-01-17T17:00:18.832Z
description: I use the Prism library to handle the syntax highlighting for my posts
featuredpost: false
tags:
  - syntax
  - highlighting
  - gatsby
  - prism
---
After making my first post on this blog with a code sample, I found the formatting wanting. So I went looking for a solution and found Prism. At its heart, Prism is a tokenizer that breaks the code passed to it up into tokens and returns HTML with classes to give each portion the appropriate colors.  Prism offers several themes to chose from or you can modify one of the defaults to suit your needs. It can be integrated with many popular blogging platforms including WordPress, Blogger, & Gatsby. For this site, I am using the gatsby-remark-prismjs plugin along with the okaidia theme.
<br><br>
For more information on Prism and integrating it with your platform, check out the documaetation here:<br>
[Prism](https://prismjs.com/)

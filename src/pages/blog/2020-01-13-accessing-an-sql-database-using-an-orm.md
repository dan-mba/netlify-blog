---
templateKey: blog-post
title: Accessing an SQL Database Using an ORM
date: 2020-01-14T17:00:27.810Z
description: Using an object-relational mapping library to access data from an SQL database
featuredpost: false
tags:
  - sql
  - database
  - orm
  - sequelize
---
For many developers, the idea of working with an SQL database is daunting. Even if you aren't responsible for administering the database, writing the correct query to get the data you need can be challenging to those without years of SQL experience. This is where object-relational mapping comes in, it allows you to access the data in a way you are more familiar with. You define models listing all the fields for each table and their attributes (data type, uniqueness, autoincrement, etc). Then you use that model to create, query, update or delete entries in the table.
<br><br>
For JavaScript applications, the Sequelize library is compatible with many SQL database types. For more the full documentation, use the link here:<br>
[Sequelize](https://sequelize.org/v5/)

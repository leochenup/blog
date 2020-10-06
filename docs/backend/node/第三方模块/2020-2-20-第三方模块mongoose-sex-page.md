---
title: "第三方模块mongoose-sex-page"
date: 2020-02-20
sidebar: 'auto'
categories:
- BackEnd
tags:
- node第三方模块
---











# 第三方模块 `mongoose-sex-page`

## 概述

`mongoose-sex-page` 是一个用来实现后端分页的第三方模块。

## 使用

引入模块

```js
const pagination = require('mongoose-sex-page')
```

`pagpagination` 方法接收一个数据表构造函数作为参数，然后再链式调用find()方法在数据库中进行查找全部信息，返回值是一个包含分页信息的对象。如下：

**查询**

```js
let articles = await pagination(Article).find().exec()
```

**返回值 articles**

```json
{
    "page": 1,
    "size": null,
    "total": 6,
    "records": [
        {...},
         {...},
        {...},
         {...},
        {...},
         {
         "cover": "\\uploads\\upload_45be9c0342898d115afddd0d4a415a39.jpg",
         "_id": "5e3fec9d3d4369768cbed3be",
         "title": "react全家桶",
         "author": "5e3ed1a1a588600568623419",
         "publishDate": "2020-02-09T00:00:00.000Z",
         "content": "<p>react</p>",
         "__v": 0
        }
    ],
    "pages": null,
    "display": []
}
```

* `page` ：代表当前的页数。
* `size`：代表页面大小。
* `total`：代表数据总条数。
* `records`：代表当前页面的数据。
* `pages`：总页数。
* `display`：页面中要展示的页码。

从上面的返回对象可知有些属性值为空，那是因为没有设置，`pagpagination` 可以链式调用如下的几个方法来设置对应的值。

* `page(page)`：设置当前页数。
* `size(size)`：设置页面显示数据条数。
* `display(num)`：设置页面显示的页码数量。
* `exec()`：最后链式调用此方法，开始执行查询。

示例如下：

```js
let articles = await pagination(Article).find().page(page).size(3).display(3).exec()
```

**返回结果 articles**

```json
{
    "page": 1,
    "size": 3,
    "total": 6,
    "records": [
        {
            "cover": "\\uploads\\upload_13f21033b49b12bebb16e416a6bd991f.jpg",
            "_id": "5e3ed146a588600568623415",
            "title": "前端基础教学",
            "author": "5e3ed04149f0330d5431b3ce",
            "publishDate": "2020-02-08T00:00:00.000Z",
            "content": "<h2>hjkl</h2>",
            "__v": 0
        },
        {
            "cover": "\\uploads\\upload_b8d5eaecc68cc9b01b4d3cf6f6d2c43b.jpg",
            "_id": "5e3ed162a588600568623416",
            "title": "Node",
            "author": "5e3ed04149f0330d5431b3ce",
            "publishDate": "2020-02-08T00:00:00.000Z",
            "content": "<p>测试</p>",
            "__v": 0
        },
        {
            "cover": "\\uploads\\upload_d6ebdfc7708b497c9782968b6511356a.jpg",
            "_id": "5e3ed187a588600568623418",
            "title": "大前端技术总结",
            "author": "5e3ed04149f0330d5431b3ce",
            "publishDate": "2020-02-08T00:00:00.000Z",
            "content": "<p>测试</p>",
            "__v": 0
        }
    ],
    "pages": 2,
    "display": [1, 2]
}
```

## 完整示例

**效果**

![11.gif](https://i.loli.net/2020/02/20/n2NjSFdH6XzbWUr.gif)

**`app.js`**

```js
const express = require('express')
const path = require('path')
//导入mongoose-sex-page 模块
const pagination = require('mongoose-sex-page')
const { Article } = require('./model/article')
const dateformat = require('dateformat')
const { User } = require('./model/user')
const template = require('art-template')
// const {  }

require('./model/connect')
const app = express()

template.defaults.imports.dateformat = dateformat
app.engine('html', require('express-art-template'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'html')

app.get('/page', async (req, res) => {
    let { page } = req.query
    let pageMsg = await pagination(Article).find().page(page).size(2).display(3).populate('author').exec()
    res.render('page', { pageMsg })
    // res.send(pageMsg)/
})

app.listen(3000, () => {
    console.log('服务器启动成功！')
})
```

**客户端页面**

```html
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>Document</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"
              integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <style>
            .container {
                margin-top: 150px;
            }

            .pagination {
                font-size: 14px;
            }

            .pagination li {
                margin: 5px;
            }
            .table {
                border: 1px solid #cbcbcb;
            }
            .active {
                color: red;
            }
        </style>
    </head>

    <body>
        <div class="container">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>标题</th>
                        <th>作者</th>
                        <th>发表日期</th>
                    </tr>
                </thead>
                {{each pageMsg.records}}
                <tr>
                    <td>{{@$value._id}}</td>
                    <td>{{$value.title}}</td>
                    <td>{{$value.author.username}}</td>
                    <td>{{dateformat($value.publishDate, 'yyyy-mm-dd hh:mm')}}</td>
                </tr>
                {{/each}}
            </table>
            <ul class="pagination">
                <li>
                    <a href="http://localhost:3000/page?page={{pageMsg.page-1 > 1 ?pageMsg.page-1:1 }}">
                        <span>上一页</span>
                    </a>
                </li>

                {{each pageMsg.display}}
                <li>
                    <a href="http://localhost:3000/page?page={{$value}}" class="{{pageMsg.page === $value ? 'active' : ''}}" >{{$value}}</a>
                </li>
                {{/each}}
                <li>
                    <a href="http://localhost:3000/page?page={{pageMsg.page + 1 > pageMsg.pages ? pageMsg.pages : pageMsg.page + 1 }}">
                        <span>下一页</span>
                    </a>
                </li>
            </ul>
        </div>

    </body>

</html>
<script src="https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.slim.min.js"
        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
        crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js"
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
        crossorigin="anonymous"></script>
```




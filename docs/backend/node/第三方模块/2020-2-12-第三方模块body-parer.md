---
title: "第三方模块body-parser"
date: 2020-02-12
sidebar: 'auto'
categories:
- BackEnd
tags:
- node第三方模块
---












# 第三方模块body-parser

## 简介

在`http`请求种，`POST`、`PUT`、`PATCH`三种请求方法中包含着请求体，也就是所谓的`request`，在`Nodejs`原生的`http`模块中，请求体是要基于流的方式来接受和解析。
 `body-parser`是一个`HTTP`请求体解析的中间件，使用这个模块可以解析`JSON`、`Raw`、文本、`urlencoded`格式的请求体。

## 原生Node POST 请求解析

`Node`原生的`http`模块中，是将用户请求数据封装到了用于请求的对象`req`中，这个对象是一个[`IncomingMessage`](http://nodejs.cn/api/http/class_http_incomingmessage.html)，该对象同时也是一个可读流对象。在原生`Http`服务器，或不依赖第三方解析模块时，可以用下面的方法请求并且解析请求体

```js
const http = require('http');

http.createServer(function(req, res){
    if(req.method.toLowerCase() === 'post'){
        let body = '';
        //此步骤为接收数据
        req.on('data', function(chunk){
            body += chunk;
        });
        //开始解析
        req.on('end', function(){
            if(req.headers['content-type'].includes('application/json')){
                JSON.parse(body);
            }else if(req.headers['content-type'].includes('application/octet-stream')){
                //Rwa格式(二进制流)请求体解析
            }else if(req.headers['content-type'].includes('text/plain')){
                //text文本格式请求体解析
            }else if(req.headers['content-type'].includes('application/x-www-form-urlencoded')){
                //url-encoded格式请求体解析
            }else{
                //其他格式解析
            }
        })
    }else{
        res.end('其他方式提交')
    }
}).listen(3000)
```

## Express中body-parser

### `API`

 当请求体解析之后，解析值会被放到`req.body`属性中，当内容为空时候，为一个空对象`{}`

* `bodyParser.json()`--解析`JSON`格式
* `bodyParser.raw()`--解析二进制格式
* `bodyParser.text()`--解析文本格式
* `bodyParser.urlencoded()`--解析文本格式

### 使用

Express框架默认使用body-parser作为请求体解析中间件，在创建了Express项目之后，可以在`app.js`文件中找到

```js
/* 引入依赖项 */
var express = require('xexpress')
var bodyParser = require('body-parser')

var app = express()
// 解析 application/json
app.use(bodyParser.json())
// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())
```

这样就可以在项目的`application`级别，引入了`body-parser`模块处理请求体。在上述代码中，模块会处理`application/x-www-form-urlencoded`、`application/json`两种格式的请求体。经过这个中间件后，就可以在所有路由处理器的`req.body`中访问请求参数。

在实际项目中，不同路径可能要求用户使用不同的内容类型，`body-parser`还支持为单个`express`路由添加请求体解析，比如

```js
var express = require('express');
var bodyParser = require('body-parser');

var app = new express();

//创建application/json解析
var jsonParser = bodyParser.json();

//创建application/x-www-form-urlencoded
var urlencodedParser = bodyParser.urlencoded({extended: false});

//POST /login 中获取URL编码的请求体
app.post('/login', urlencodedParser, function(req, res){
    if(!req.body) return res.sendStatus(400);
    res.send('welcome, ' + req.body.username);
})

//POST /api/users 获取JSON编码的请求体
app.post('/api/users', jsonParser, function(req,res){
    if(!req.body) return res.sendStatus(400);
    //create user in req.body
})
```

::: tip 注意

`bodyParser.urlencoded({ extended: false })`方法中的`extended`参数为一个布尔值，设置为`false`和`true`的含义如下：

* `false` 使用`querystring`模块处理`post`请求参数
* `true` 使用 第三方模块`qs`处理`post `参数的格式

:::

### 指定请求类型

`body-parser`还支持为某一种或者某一类内容类型的请求体指定解析方式，指定时可以通过在解析方法中添加`type`参数修改指定`Content-Type`的解析方式。
 比如，对`text/plain`内容类型使用`JSON`解析

```js
app.use(bodyParser.json({type: 'text/plain'}))
```

这一选项更多是用在非标准请求头中的解析

```js
// 解析自定义的 JSON
app.use(bodyParser.json({ type: 'application/*+json' }))

// 解析自定义的 Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

// 将 HTML 请求体做为字符串处理
app.use(bodyParser.text({ type: 'text/html' }))
```


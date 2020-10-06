---
title: "Express基础"
date: 2020-02-01
sidebar: 'auto'
categories:
- BackEnd 
tags:
- express
---















# Express

## 一、简介

> Express是一个基于Node平台的web应用开发框架，它提供了一系列的强大特性，帮助创建各种Web应用。我们可以使用 npm install express 命令进行下载。

**框架的一些特性**

* 提供了方便简洁的路由定义方式
* 对获取HTTP请求参数进行了简化处理
* 对模板引擎支持程度高，方便渲染动态HTML页面
* 提供了中间件机制有效控制HTTP请求
* 拥有大量第三方中间件对功能进行扩展

## 二、使用Express

* 首先安装`express`使用命令 `npm install express`
* 再引入`express`后，调用`express`函数得到一个返回值，这个返回值就是服务器对象。`const app = express()`

**示例代码**

```js
const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('hello world!'))

app.listen(3000)
```

## 三、中间件

### 3.1 什么是中间件



一个请求发送到服务器后，它的生命周期是 先收到request（请求），然后服务端处理，处理完了以后发送response（响应）回去而这个服务端处理的过程就有文章可做了，想象一下当业务逻辑复杂的时候，为了明确和便于维护，需要把处理的事情分一下，分配成几个部分来做，而每个部分就是一个中间件。中间件就是一堆方法，可以接收客户端发来的请求、可以对请求做出响应，也可以将请求继续交给下一个中间件继续处理。中间件主要由两部分构成，中间件方法以及请求处理函数。中间件方法由Express提供，负责拦截请求，请求处理函数由开发人员提供，负责处理请求。

```js
app.get('请求路径', '处理函数')   // 接收并处理get请求
app.post('请求路径', '处理函数')  // 接收并处理post请求
```

可以针对同一个请求设置多个中间件，对同一个请求进行多次处理。默认情况下，请求从上到下依次匹配中间件，**一旦匹配成功，终止匹配**。可以调用`next`方法将请求的控制权交给下一个中间件，直到遇到结束请求的中间件。

```js
app.get('/request', (req, res, next) => {
    req.name = "张三"
    next()
})
app.get('/request', (req, res) => {
    res.send(req.name)
})
```

![4.png](https://my-blog-leo.oss-cn-chengdu.aliyuncs.com/21.png)

### 3.2 app.use中间件

`app.use` 匹配所有的请求方式，可以直接传入请求处理函数，代表接收所有的请求。

`app.use` 第一个参数也可以传入请求地址，代表不论什么请求方式，只要是这个请求地址就接收这个请求。

```js
app.use((req, res, next) => {
    console.log(req.url)
    next()
}) 

app.use('/admin', (req, res, next) => {
    console.log(req.url)
    next()
})
```

`app.use `加载用于处理`http`请求的`middleware`（中间件），当一个请求来的时候，会依次被这些 `middlewares`处理。中间件执行的顺序是你定义的顺序。中间件其是一个函数，在响应发送之前对请求进行一些操作

```js
function middleware(req,res,next){
    // 做该干的事

    // 做完后调用下一个函数
    next();
}
```

这个函数有些不太一样，它还有一个next参数，而这个next也是一个函数，它表示函数数组中的下一个函数

**函数数组**

express内部维护一个函数数组，这个函数数组表示在发出响应之前要执行的所有函数，也就是中间件数组使用`app.use(fn)`后，传进来的`fn`就会被扔到这个数组里，执行完毕后调用`next()`方法执行函数数组里的下一个函数，如果没有调用`next()`的话，就不会调用下一个函数了，也就是说调用就会被终止。

```js
var express = require('express');

var app = express();
app.listen(3000, function () {
    console.log('listen 3000...');
});

function middlewareA(req, res, next) {
    console.log('middlewareA before next()');
    next();
    console.log('middlewareA after next()');
}

function middlewareB(req, res, next) {
    console.log('middlewareB before next()');
    next();
    console.log('middlewareB after next()');
}

function middlewareC(req, res, next) {
    console.log('middlewareC before next()');
    next();
    console.log('middlewareC after next()');
}

app.use(middlewareA);
app.use(middlewareB);
app.use(middlewareC);

//结果
//middlewareA before next()
//middlewareB before next()
//middlewareC before next()
//middlewareC after next()
//middlewareB after next()
//middlewareA after next()
```

**特殊用法**

```js
let fn = (obj) => {
	return (req, res, next) => {
        if (obj.a === 1) {
        	console.log(req.method)
        } else {
        	console.log(req.url)
        }
        next()
	}
}

app.use(fn({ a: 2 }))
```

### 3.3 中间件应用

* 路由保护，客户端在访问需要登录的页面时，可以先使用中间件判断用户登录状态，用户如果未登录，则拦截请求，直接响应，禁止用户进入需要登录的页面。
* 网站维护公告，在所有路由的最上面定义接收所有请求的中间件，直接为客户端做出响应，网站正在维护中。
* 自定义404页面

### 3.4 错误处理中间件

在程序执行的过程中，不可避免的会出现一些无法预料的错误，比如文件读取失败，数据库连接失败。错误处理中间件是一个集中处理错误的地方。

手动抛出一个错误，错误处理中间件会自动捕获并通过`err`对象返回错误信息。

```js
app.get('/index', () => {
    throw new Error('程序发生错误')
})

//只有在报错时 才执行的中间件 ，只能捕获同步代码中捕获错误
app.use((err, req, res, next) => {
    res.status(500).send(err.message)
})
```

像如上的中间件不能自动捕获异步函数中的错误。而要使用`try` `catch` 语句 ，并将`catch`到的`error`传入`next`函数，便可实现错误捕获。

```javascript
app.get('/read', async (req, res, next)=>{
    try {
        let data = await readFile('./04.js')
    } catch (err) {
        next(err)
    }
})
```

而`Promise`对象的异步`API`发生错误可以通过`catch`将`error`传入`next`函数中，

## 四、请求处理

### 4.1 模块化路由

> 在真实项目中路由的结构往往很庞大复杂，所以要进行模块化的构建，便于维护。

**创建步骤**

* 建立专门的路由文件夹存路由文件
* 导入路由模块
* 创建路由函数、设置一级路由
* 设置二级路由
* 在`app.js`文件中设置路由

`route/home.js`

```js
// home.js
const home = express.Router();
home.get('/index', (req, res) => {
    res.send('欢迎来到博客展示页面')
})
module.exports = home
```

`route/admin.js`

```js
// admin.js
const admin = express.Router()
admin.get('/index', (req, res) => {
    res.send('欢迎来到博客管理页面')
})
module.exports = admin
```

`app.js`

```js
// app.js
const home = require('./route/home.js')
const admin = require('./route/admin.js')
app.use('/home', home)
app.use('/admin', admin)
```

### 4.2 GET 参数获取

> Express框架中使用req.query即可获取GET参数，框架内部会将GET参数转换为对象并返回。

```js
// 接收地址栏中问号后面的参数
// 例如: http://localhost:3000/?name=zhangsan&age=30
app.get('/', (req, res) => {
	console.log(req.query); // {"name": "zhangsan", "age": "30"}
})
```

### 4.3 POST 参数获取

> `Express`中接收`post`请求参数需要借助第三方包 `body-parser` 使用 `npm install body-parser` 安装
>
> 配置后就可以在路由处理函数中使用`req.body`获取参数值

```js
// 引入body-parser模块
const bodyParser = require('body-parser')
// 配置body-parser模块
app.use(bodyParser.urlencoded({ extended: false }))
// 接收请求
app.post('/add', (req, res) => {
    // 接收请求参数
    console.log(req.body)
}) 
```

::: tip 注意

`bodyParser.urlencoded({ extended: false })` 中的 `extended` 参数为一个布尔值

true：用第三方模块`qs`处理`post`请求参数

false： 使用自带的`querystring`模块出路`post`请求参数 **[推荐]**

:::

### 4.4 Express 路由参数

> :id 是一个占位符代表一个参数，也可以设置多个，通过req.param 获取

```js
app.get('/find/:id', (req, res) => { 
    console.log(req.params); // {id: 123} 
})
```

```
localhost:3000/find/123
```

### 4.5 Express 静态资源处理

> 通过Express内置的express.static可以方便地托管静态文件，例如img、CSS、JavaScript 文件等。

通过`express.static('静态资源根路径')`设置静态资源处理的文件根路径，再传入`app.use()`方法中即可。也可以添加第一个参数自定义路由（也可以不写）

```js
app.use('/static', express.static('public'))
```

设置好后就可以直接通过地址栏访问静态资源了

### 4.6 重定向

使用 `res.redirect(路由路径)`方法，重定向到指定的路由。

```js
 res.redirect('/admin/user')
```

**原生Node重定向**

```js
res.writeHead(301, {
    'Location': '/list'
})

res.writeHead(302, {
    'Location': '/list'
})
```

## 五、express-art-templates

> * 为了使`art-template`模板引擎能够更好的和`Express`框架配合，模板引擎官方在原`art-template`模板引擎的基础上封装了`express-art-template`。
> * 使用`npm install art-template express-art-template`命令进行安装。

### 5.1 使用方式

总的来说与art-template使用方式基本一致，就是配置的时候有区别。

**使用示例如下**

```js
// 当渲染后缀为art的模板时 使用express-art-template
app.engine('art', require('express-art-template'))
// 设置模板存放目录为views
app.set('views', path.join(__dirname, 'views'))
// 渲染模板时不写后缀 默认拼接art后缀
app.set('view engine', 'art')
app.get('/', (req, res) => {
    // 渲染模板,直接写文件名称template引擎会自动拼接
    res.render('index')
})
```

### 5.2 app.locals 对象

> 将变量设置到app.locals对象下面，这个数据在所有的模板中都可以获取到。

```js
app.locals.users = [{
    name: '张三',
    age: 20
},{
    name: '李四',
    age: 20
}]
```

模板文件中使用设置的全局变量

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
   {{user[0].age}} {{user[0].name}}
</body>
</html>
```


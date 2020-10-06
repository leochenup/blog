---
title: "RESTful风格的API"
date: 2020-02-20
sidebar: 'auto'
categories:
- BackEnd
tags:
- node基础模块
---













# `RESTful` 风格的 `API`

## 概述

> `API`：客户端向服务器发送请求的请求地址。
>
> `RESTful API` 实际上就是一套规范，是关于如何设计增 、删、改、查、以及其它操作的请求地址。为了使请求地址的行为和语义更加明确而设计的一套规范。

### 传统的请求地址

```js
GET http://www.example.com/getUsers         // 获取用户列表
GET http://www.example.com/getUser?id=1     // 比如获取某一个用户的信息
POST http://www.example.com/modifyUser      // 修改用户信息
GET http://www.example.com/deleteUser?id=1  // 删除用户信息
```

## 规范

### 请求方式

* `GET`：      获取数据
* `POST`：    添加数据
* `PUT`：      更新数据
* `DELETE`： 删除数据

::: danger 注意

传统的表单是不支持 `PUT` 和 `DELETE` 请求方式的。但是在 `Ajax` 中是支持的。

:::

### 请求地址

每一个请求地址都对应资源---就是数据。请求地址要和要操作的数据库表的名称相同。

<strong style="color:#3eaf7c;">请求地址中不要出现动词，一律用名词。</strong>

如下表;

| 数据库表名称 | 请求地址  |
| :----------: | :-------: |
|    users     |  /users   |
|   articles   | /articles |

`RESTful` 风格的 `API`：有一个特点，请求地址相同，请求方式不同，操作不同。

| 请求方式 |            请求地址            | 作用                        |
| :------: | :----------------------------: | --------------------------- |
|   GET    |  http://www.example.com/users  | 获取用户列表数据            |
|   POST   |  http://www.example.com/users  | 创建(添加)用户数据          |
|   GET    | http://www.example.com/users/1 | 获取用户 ID 为 1 的用户信息 |
|   PUT    | http://www.example.com/users/1 | 修改用户 ID 为 1 的用户信息 |
|  DELETE  | http://www.example.com/users/1 | 删除用户 ID 为 1 的用户信息 |

**案例**

**客户端**

```js
// 获取用户列表信息
$.ajax({
    type: 'get',
    url: '/users',
    success: function (response) {
        console.log(response)
    }
})

// 获取id为1的用户信息
$.ajax({
    type: 'get',
    url: '/users/1',
    success: function (response) {
        console.log(response)
    }
})

//  删除id为10的用户信息
$.ajax({
    type: 'delete',
    url: '/users/10',
    success: function (response) {
        console.log(response)
    }
})

//  修改id为10的用户信息
$.ajax({
    type: 'put',
    url: '/users/10',
    success: function (response) {
        console.log(response)
    }
})
```

`app.js`

```js
// 获取用户列表信息
app.get('/users', (req, res) => {
	res.send('当前是获取用户列表信息的路由');
});

// 获取某一个用户具体信息的路由
app.get('/users/:id', (req, res) => {
	// 获取客户端传递过来的用户id
	const id = req.params.id;
	res.send(`当前我们是在获取id为${id}用户信息`);
});

// 删除某一个用户
app.delete('/users/:id', (req, res) => {
	// 获取客户端传递过来的用户id
	const id = req.params.id;
	res.send(`当前我们是在删除id为${id}用户信息`);
});

// 修改某一个用户的信息
app.put('/users/:id', (req, res) => {
	// 获取客户端传递过来的用户id
	const id = req.params.id;
	res.send(`当前我们是在修改id为${id}用户信息`);
})
```




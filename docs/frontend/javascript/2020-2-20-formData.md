---
title: "FormData 对象"
date: 2020-01-20
sidebar: 'auto'
categories:
- FrontEnd
tags:
- JavaScript
---









# FormData 对象

::: tip 注意

FormData 对象存在兼容性问题，老版本浏览器不兼容。 

:::



<!-- more -->



## 作用

1. 模拟HTML表单，相当于将HTML表单映射成表单对象，自动将表单对象中的数据拼接成请求参数的格式。
2. 异步上传二进制文件



## 使用

HTML 表单

```html
<form id="form">
    <input type="text" name="username" />
    <input type="password" name="password" />
    <input type="button"/>
</form>
```

将 HTML 表单转化为 `formData` 对象

```js
var form = document.getElementById('form'); 
var formData = new FormData(form);
```

提交表单对象

```js
xhr.send(formData)
```

:::  danger 注意
`Formdata `对象不能用于 `get` 请求，因为对象需要被传递到 `send`方法中，而 `get` 请求方式的请求参数只能放在请求地址的后面。服务器端 `bodyParser `模块不能解析 `formData` 对象表单数据，我们需要使用 `formidable` 模块进行解析

:::

**案例**

**客户端**

```html
<!-- 创建普通的html表单 -->
<form id="form">
    <input type="text" name="username">
    <input type="password" name="password">
    <input type="button" id="btn" value="提交">
</form>

<script>
    var form = document.getElementById('form')
    var btn = document.getElementById('btn')

    btn.onclick = function () {
        var formData = new FormData(form)
        var xhr = new XMLHttpRequest()
        xhr.open('post', 'http://localhost:3000/formData')
        xhr.send(formData)
        xhr.onload = function () {
            if(xhr.status == 200) {
                console.log(xhr.responseText)
            }
        }

    }
</script>
```

**服务端**

```js
app.post('/formData', (req, res) => {
    // 创建formidable表单解析对象
    const form = new formidable.IncomingForm();       
    // 解析客户端传递过来的FormData对象
    form.parse(req, (err, fields, files) => {
        res.send(fields)     
    })
})
```

## `FormData` 的实例方法

### 获取对象中的属性值

```js
formData.get(key) //key 为表单控件的name值
```

### 设置属性值

```js
formData.set(key, value) 
```

::: tip 注意

如果`formaData.set`传入的`key`属性不存在那么就创建该属性并赋值为`value`，如果存在就修改它的值为传入的`value`

:::

### 删除属性值

> 应用场景：注册时要求填写两次密码，但是只需要提交一个密码控件的值。

```js
formData.delete(key)
```

### 像表单中追加属性

```js
formData.append(key, value)
```

::: danger 注意

`set` 方法与 `append` 方法的区别是，在属性名已存在的情况下，`set` 会覆盖已有键名的值，`append`会保留两个值。

:::

[👉 更多关于FormData](https://developer.mozilla.org/zh-CN/docs/Web/API/FormData)


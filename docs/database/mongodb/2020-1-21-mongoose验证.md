---
title: "mongoose验证"
date: 2020-01-21
sidebar: 'auto'
categories:
- 数据库
tags:
- MongoDB
---







# mongoose 验证

> 在创建集合规则时，可以设置当前字段的验证规则，验证失败就则输入插入失败。

## `required` 

> `required: true` ，设置为`true` 表示该字段必须填写不得为空。如果不传入该字段，那么就会报错。如果不设置`required`属性那么即使传入空对象也是可以的。

**设置方式**

```javascript
//引入第三方数据模块
const monogoose = require('mongoose')

//创建数据库连接
monogoose.connect('mongodb://localhost/playground',{ useNewUrlParser: true , useUnifiedTopology: true })
    .then(result => console.log('连接成功！'))
    .catch(err => console.log('连接失败！'))

    //集合创建规则
let  postSchema = new monogoose.Schema({
    title: {
        type: String,
        required: true
    }
})

//更具集合规则创建集合构造函数，第一个参数为集合名称（表名）第一个字母必须大写
const Post = monogoose.model('Post', postSchema)

//使用create方法创建文档实例，并插入数据
Post.create({ }).then(res => console.log(res)).catch(err => console.log(err))
```

上述代码报错：

<img src="/img/err1.png"/>

## `minlength&maxlength`

> `minlength`设置字符串最小长度 , `maxlength`设置字符串最大长度  

**设置方式**

```javascript
minlength: 3
maxlength: 6
```

## `min&max`

> 设置数值的最大值和最小值

**设置方式**

```javascript
 age: {
        type: Number,
        min: [3, "3是最小值"]
        max: [6, "6是最大值"]
    }
```

## `enum`

> 枚举类型， 列出当前字段可以拥有的值

**设置方式**

```javascript
 //枚举列出当前字段可以拥有的值
        enum: {
            values:['java pthon c'],
            message:'自定义错误信息！'
        }

//或者直接
enum:['javascript','css','phthon']
```



## `trim`

> 去除字符串两边的空格

**设置方式**

```javascript
 title: {
        type: String,
        required: [true, '此字段必须传入！'],
        trim: true //设置trim 去掉字符串连边的空格
    }
Post.create({title:'    c   y   o  ',age: 5 })

//传递的字符串为 'c  y  o'
{ _id: 5e26b504698ded13386d65a3, title: 'c   y   o', age: 5, __v: 0 }
```



## `validate`

> 自定义验证器

`validate`对象里下有一个`validator`函数，通过设置它来达到自定义验证的效果。还有一个`message`填入自定义错误信息。

`validator`函数中默认传入了一个参数为当前字段的值，在函数体内写如此字段的验证信息，如果返回值为`true`就验证成功，反之就验证失败

**设置方式**

```javascript
 author: {
        type: String,
        validate: {
            validator: v => {
                //返回boolean 为true 则验证成功，反之失败
                // v 为要验证的值
                return v && v.length > 4
            },
            //自定义错误信息
            message: '传入的值不符合验证规则'
        }
 }

Post.create({ title:'ppt',age: 11, category: 'python' , author:'we'})
    .then(res => console.log(res))
    .catch(error => {
        let err = error.errors
        for (var attr in err) {
            console.log(err[attr].message)
        }
})

//结果
//传入的值不符合验证规则
```



## `default`

> 给当前字段设置默认值

**设置方式**

```javascript
  publishDate:{
        type: Date,
        default: Date.now// ⭐️ Date.now 获取当前时间，以当前时间为默认时间
  }
```

得到结果，时间为默认时间即插入数据时的时间

<img src="/img/date1.png"/>

## 自定义报错信息

**设置方式**

> 报错信息，我们也可以自己设定

```javascirpt
require[true, "自定义的报错信息"]
max: [3,"自定义报错信息"]
minlength:[2, "自定义报错信息"]
....
```

⭐️ 还可以通过`catch`方法获取错误对象

```javascript
Post.create({ }).then(res => console.log(res)).catch(err => console.log(err))
```

根据`required`的案例来说，报错的错误信息对象为

<img src="/img/err3.png"/>

如果有多个验证信息不满足，就会报多个错误，可以通过`catch`来获取错误对象

如下的案例有两个验证信息不满足，一个是`title`没填写，一个是`age`最大值不满足

```javascript
//引入第三方数据模块
const monogoose = require('mongoose')

//创建数据库连接
monogoose.connect('mongodb://localhost/playground',{ useNewUrlParser: true , useUnifiedTopology: true })
    .then(result => console.log('连接成功！'))
    .catch(err => console.log('连接失败！'))

    //集合创建规则
let  postSchema = new monogoose.Schema({
    title: {
        type: String,
        required: [true, '此字段必须传入！']
    },
    age: {
        type:Number,
        max: [20, "年龄最大为20岁"]
    }
})


//更具集合规则创建集合构造函数，第一个参数为集合名称（表名）第一个字母必须大写
const Post = monogoose.model('Post', postSchema)

//使用create方法创建文档实例，并插入数据
Post.create({age:21}).then(res => console.log(res)).catch(err => console.log(err))
```

得到的错误对象为

<img src="/img/err4.png" />

可以遍历错误对象来获取自定义错误信息

```javascript
Post.create({ age: 21 })
    .then(res => console.log(res))
    .catch(error => {
        let err = error.errors
        for (var attr in err) {
            console.log(err[attr].message)
        }
    })
```

得到结果

<img src="/img/err5.png" />


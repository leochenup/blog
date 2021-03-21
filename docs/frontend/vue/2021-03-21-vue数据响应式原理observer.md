---
title: "vue 数据响应式原理"
date: 2021-03-21
sidebar: 'auto'
categories:
- FrontEnd
tags:
- vue
---


# vue 数据响应式原理 

vue 中实现数据响应式关键是使用了 `Object.defineproperty(obj,key,description)`，设置属性的 `get\ set` 函数来监听数据的获取或变化，来进行相应的处理。如果`set` 的新值与原来的值不同就触发试图跟更新。

以下实现了一个 `observer` 函数类似于 vue 中的数据响应式处理。将 data 中的对象属性监听，以及重写属性值为数组的方法，用来监听数组中的对象数据变化从而触发视图更新。

<!-- more -->

```js
let arrayProto = Array.prototype;
let proto = Object.create(arrayProto);
let arrayMethods = ["shift", "unshift", "push", "pop", "splice", "slice"];
arrayMethods.forEach((method) => {
  proto[method] = function (...args) {
    let newValve;
    switch (method) {
      case "unshift":
      case "push":
        newValve = args;
        break;
      case "splice":
        newValve = args.slice(2);
        break;
    }
    arrayProto[method].call(this, ...args);
    newValve.forEach((item) => {
      observer(item);
    });
    console.log("视图更新")
  };
});

function observer(obj) {
  if (typeof obj !== "object" || obj === null) {
    return;
  }
  if (obj instanceof Array) {
    obj.forEach((element) => {
      observer(element);
    });
    Object.setPrototypeOf(obj, proto);
  }
  for (const key in obj) {
    let value = obj[key];
    observer(value);
    Object.defineProperty(obj, key, {
      get() {
        return value;
      },
      set(newValue) {
        if (newValue !== value) {
          value = newValue;
          observer(newValue);
          console.log("视图更新");
        }
        return newValue;
      },
    });
  }
}

let data = {
  title: "leo",
  arr: [1, 2, 3, { name: "tom" }],
  p: { name: "jerry", age: 12 },
};

observer(data);
```


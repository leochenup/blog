---
title: "Reac-Router 使用及其原理"
date: 2021-04-11
sidebar: 'auto'
categories:
- FrontEnd
tags:
- React
---

 

## 基于

### HashRouter

全局绑定 `hashchange` 事件，当哈希路由发生改变时（如由  `/index  ==> /index#/a`），触发监听函数，然后再函数中处理组件的显示与切换。

```html
<a href="#/a">/a</a>
<a href="#/b">/b</a>
<div id="root" style="border: 1px solid; padding: 10px 20px"></div>

<script>
  const container = document.getElementById("root");
  window.addEventListener("hashchange", (e) => {
    container.innerHTML = `当前路径是：${window.location.hash.slice(1)}`;
  });
</script>
```

<!-- more -->
获取 `hash` 路由值

```js
window.location.hash // => #/user
```



### BrowserRouter

> 使用了浏览器提供的 `History` 接口来实现路由

下面是 `History` 的属性及方法：

![](https://my-blog-leo.oss-cn-chengdu.aliyuncs.com/history.png)

使用浏览器提供的 ` window.onpopstate` 监听函数每当路径从路径栈中弹出就执行，并从回调函数中得到 `PopStateEvent` 事件对象，从中可以拿到调用 `pushState`  函数时传递的 `state`。可以通过此控制界面的切换显示。

由于浏览器没有提供与 ` window.onpopstate` 相对应的  `window.onpushstate` 方法，导致只有出栈时才能对 `dom` 有所操作，因此需要一个入栈时的监听函数。所以只有重写 `window.history.pushState` 方法，每次需要向路由栈中入栈时就执行调用自写 `window.history.pushState` 并在其中调用自定义的 `window.onpushstate` 函数，用来操作 `dom` 显示组件等等。实现如下：

```html
<button onclick="push('/a')">/a</button>
<button onclick="push('/b')">/b</button>
<div id="root" style="border: 1px solid;"></div>


<script>
  const container = document.getElementById("root");

  window.onpopstate = function (e) {
    console.log(e);
    container.innerHTML = `当前路径是：${e.state.to}`;
  };

  window.onpushstate = function (to) {
    container.innerHTML = `当前路径是：${to}`;
  };

  window.push = function (to) {
    window.onpushstate(to);
    // window.history.pushState 的三个参数：
    // state 新的状态对象；标题（废弃）; to 跳转到的路径
    window.history.pushState({ to }, null, to);
  };
</script>
```

`window.history.pushState(a,b,c)` 方法一共有接收三个参数：

* 参数一：`state` 一个对象，要跳转到的路由页面下保存的额外数据。
* 参数二：要跳转到的路径界面标题（已废弃）。
* 参数三：要跳转的路由地址。



## react-router-dom

> 由 react-router 实现， React-router-dom 是浏览器端的,
>
> Hashrouter 就是拥有了 hashhistory 的 ReactRouter <Router history={createHashHistory()}>...</Router>

### 使用

案例效果如下：

<video style="width:100%;outline: none;" src="https://my-blog-leo.oss-cn-chengdu.aliyuncs.com/react-router.mov" controls="controls">
您的浏览器不支持 video 标签。
</video>




案例实现如下

<RecoDemo :collapse="true">
  <template slot="code- Index.js">
​    <<< @/docs/frontend/react/code/react-router-dom/components/index.js
  </template>
  <template slot="code- Home.js">
​    <<< @/docs/frontend/react/code/react-router-dom/components/home.jsx
  </template>
  <template slot="code- Login.js">
​    <<< @/docs/frontend/react/code/react-router-dom/components/login.jsx
  </template>
   <template slot="code- User.js">
​    <<< @/docs/frontend/react/code/react-router-dom/components/user.jsx
  </template> 
  <template slot="code- UserAdd.js">
​    <<< @/docs/frontend/react/code/react-router-dom/components/useradd.jsx
  </template>
  <template slot="code- UserDetail.js">
​    <<< @/docs/frontend/react/code/react-router-dom/components/userdetail.jsx
  </template>
  <template slot="code- UserList.js">
​    <<< @/docs/frontend/react/code/react-router-dom/components/userlist.jsx
  </template>
    <template slot="code- Proflie.js">
​    <<< @/docs/frontend/react/code/react-router-dom/components/proflie.jsx
  </template> 
  <template slot="code- NavHead.js">
​    <<< @/docs/frontend/react/code/react-router-dom/components/navhead.jsx
  </template>
  <template slot="code- MenuLink.js">
​    <<< @/docs/frontend/react/code/react-router-dom/components/menulink.jsx
  </template>
  <template slot="code- Protected.js">
​    <<< @/docs/frontend/react/code/react-router-dom/components/protected.jsx
  </template> 
</RecoDemo>



路由组建被传入的参数如下：

![](https://my-blog-leo.oss-cn-chengdu.aliyuncs.com/router-component.png)



### 实现

react-router-dom 主要由 `Router`， `Route` 这两个模块构成。`Router` 用来包裹根组件为子组件传递当前路由地址数据（用 `context` 实现），以供路由子组件对比是否匹配，如果匹配的话就显示，反之则隐藏；`Router` 中还绑定路由改变监听事件，每当路由改变时重新渲染组件。



<RecoDemo :collapse="true">
  <template slot="code- BrowserRouter.js">
​    <<< @/docs/frontend/react/code/react-router-dom/BrowserRouter.js
  </template>
  <template slot="code- HashRouter.js">
​    <<< @/docs/frontend/react/code/react-router-dom/hashrouter.js
  </template>
  <template slot="code- Link.js">
​    <<< @/docs/frontend/react/code/react-router-dom/link.js
  </template>
  <template slot="code- context.js">
​    <<< @/docs/frontend/react/code/react-router-dom/context.js
  </template>
  <template slot="code- Redirect.js">
​    <<< @/docs/frontend/react/code/react-router-dom/redirect.js
  </template> 
  <template slot="code- Route.js">
​    <<< @/docs/frontend/react/code/react-router-dom/route.js
  </template> 
  <template slot="code- Switch.js">
​    <<< @/docs/frontend/react/code/react-router-dom/switch.js
  </template> 
  <template slot="code- withRouter.js">
​    <<< @/docs/frontend/react/code/react-router-dom/withRouter.js
  </template>
</RecoDemo>
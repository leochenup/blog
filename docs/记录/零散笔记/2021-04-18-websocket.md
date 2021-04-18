---
title: "websocket"
date: 2021-04-18
sidebar: 'auto'
categories:
- 记录
tags:
- 零散笔记
---


## websocket
 > websocket 是一种网络协议，允许客户端 服务端 全双工进行网络通讯，客户端服务端可以互相发消息。
一旦建立连接就不会中断，性能高、比 ajax 轮询效率高且实时

### 浏览器端如何使用

创建 websocket 服务

``` js
let socket = new WebSocket("ws://echo.websocket.org")
```
监听事件

```js
//  发送消息
button.addEventListener("click", function () {
    const val = input.value;
    socket.send(val);
});


//接受消息
socket.addEventListener("message",function(e){
    console.log(e.data)
})
```

### node 开发 websocket 服务
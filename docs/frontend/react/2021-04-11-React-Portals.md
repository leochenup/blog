---
title: "Reac-Portals 使用及其原理"
date: 2021-04-11
sidebar: 'auto'
categories:
- FrontEnd
tags:
- React
---

 


## 插槽 Portals

将组件渲染到父组件之外的其他组件的解决方案。比如在 A 组件中点击控制全局提示组件的显示和隐藏。主要通过 `ReactDOM.createPortal(child, contanier)` 来实现。它接收两个参数，参数一代表要渲染的组件，第二个参数是渲染组件的容器（ `HTML` 节点）。如下例：

<img src="https://my-blog-leo.oss-cn-chengdu.aliyuncs.com/react_portals.gif"/>

`id` 为 `modal-root` 的 `div`，为全局提示组件的容器，在根组件 `root` 之外。

```html
<body>
  <div id="root"></div>
  <div id="modal-root"></div>
</body>
```

```js
import React, { Component } from "react";
import ReactDOM from "react-dom";
import styles from "./modal.module.css";

class Modal extends Component {
  constructor(prop) {
    super(prop);
  }
  render() {
    return ReactDOM.createPortal(
      this.props.children,
      document.getElementById("modal-root")
    ); // chile, content 把子节点 渲染到 content 中
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
    };
  }
  toggle = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };
  render() {
    const { isShow } = this.state;
    return (
      <>
        <button onClick={this.toggle}>Toggle Modal</button>
        {isShow ? (
          <Modal>
            <div
              className={[styles.outer].join(" ")}
              onClick={this.toggle}
            >
              你的输入有误！
            </div>
          </Modal>
        ) : null}
      </>
    );
  }
}

export default App;
```



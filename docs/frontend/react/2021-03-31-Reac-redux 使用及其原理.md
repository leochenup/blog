---
title: "Reac-redux 使用及其原理"
date: 2021-03-31
sidebar: 'auto'
categories:
- FrontEnd
tags:
- React
---

 


## 使用

首先使用 `Provider` 包裹根组件向其中传递 `store` ，子组件可以通过 `this.props`来获取 `state`。 

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import Counter from "./components/Counter";

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById("root")
);
```
<!-- more -->

组件中使用 `connect(mapStateToProps,mapDispatchTProps)(component)` 函数，`mapStateToProps` 把状态数据映射到组件中，`mapDispatchTProps` 把 `actions` 绑定到组件中（内部使用的 `bindActionsCreator`），可以使用 `this.props` 访问到。

```jsx
import React, { Component } from "react";
import actions from "../store/actions/counter";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <div>{this.props.number}</div>
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
      </div>
    );
  }
}

let mapStateToProps = (state) => state; 
let mapDispatchTProps = actions;

export default connect(mapStateToProps, mapDispatchTProps)(Counter);
```

`mapStateToProps` 要映射的原因是：

* 状态树太大，但组件需要的很少，过滤状态。
* 可能需要修改或增加减少转态。



## 实现

<RecoDemo :collapse="true">
  <template slot="code- context.js">
​    <<< @/docs/frontend/react/code/react-redux/context.js
  </template>
  <template slot="code- provider.js">
​    <<< @/docs/frontend/react/code/react-redux/provider.js
  </template>
  <template slot="code- connect.js">
​    <<< @/docs/frontend/react/code/react-redux/connect.js
  </template>
  <template slot="code- index.js">
​    <<< @/docs/frontend/react/code/react-redux/index.js
  </template>
</RecoDemo>






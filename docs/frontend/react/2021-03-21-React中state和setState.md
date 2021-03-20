---
title: "React中state和setState"
date: 2021-03-21
sidebar: 'auto'
categories:
- FrontEnd
tags:
- React
---

# React state setState 原理

## setState

`setState` 大多数情况下给人的感觉是异步执行的，但是在有些情况下是同步执行的。如下：

```jsx
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }

  componentDidMount() {
    this.setState({
      number: this.state.number + 1,
    });
    console.log(this.state.number);
    this.setState({
      number: this.state.number + 1,
    });
    console.log(this.state.number);
    setTimeout(() => {
      this.setState({
        number: this.state.number + 1,
      });
      console.log(this.state.number);
      this.setState({
        number: this.state.number + 1,
      });
      console.log(this.state.number);
    });
  }
  render() {
    return <div>{this.state.number}</div>;
  }
}
```
<!-- more -->

得到的输出结果是 `0 0 2 3` 。

前两次调用 `setState` 是延迟调用的，不会立即更新界面和 `state` ，所以两次输出是 `0 0` 。后两次是在 `setTimeout` 中调用的，是异步的，会存入异步事件队列，会等到同步代码执行完成后再执行异步事件调用 `setState`，而且是同步调用的。所以输出 `2 3`。

为什么后两次结果是这样的呢？

是因为 `React` 的更新机制所决定的。`React` 采取批处理更新策略，每当事件触发时都将当前状态改为批处理更新状态（`batchStrategy.isBatchingUpdating = true`）,此时将新状态数据存入本组件维护的状态更新队列，该组件存入脏组件队列中(脏组件：数据修改后界面还没重新渲染的组件)。当事件执行完成后再把当前状态修改为非批处理更新状态 （`batchStrategy.isBatchingUpdating = false`），这时候再调用 `setState` 就变成同步执行的了。该工程流程图如下：

![](https://my-blog-leo.oss-cn-chengdu.aliyuncs.com/react%20setState.png)



## 实现

粗略地实现了类似于 `React` 的组件类，其中的 `setState` 即是 `React` 源码中的类似写法。

```jsx
class Transition {
  constructor(wrappers) {
    this.wrappers = wrappers; // [{initalze,end}]
  }
  perfom(method) {
    this.wrappers.forEach((wrapper) => {
      wrapper.initalze();
    });
    method();
    this.wrappers.forEach((wrapper) => {
      wrapper.end();
    });
  }
}

const batchStratge = {
  isBatchingUpdate: false,
  dirtyComponent: [], //脏组件队列
  batchingUpdate() {
    batchStratge.dirtyComponent.forEach((component) => {
      component.updateDom();
    });
  },
};

class Updater {
  constructor(component) {
    this.component = component;
    this.statePenddingArray = []; // 状态修改队列
  }

  pushState(partState) {
    this.statePenddingArray.push(partState);
    batchStratge.isBatchingUpdate
      ? !batchStratge.dirtyComponent.includes(this.component) &&
        batchStratge.dirtyComponent.push(this.component)
      : this.component.updateDom();
  }
}

class Component {
  constructor(props) {
    this.props = props;
    this.$updater = new Updater(this);
  }

  setState(partState) {
    this.$updater.pushState(partState);
  }

  createElementByDomString() {
    let domStr = this.render();
    let div = document.createElement("div");
    div.innerHTML = domStr;
    this.element = div.firstElementChild;
    this.element.component = this;
    return div.firstElementChild;
  }

  updateDom() {
    this.$updater.statePenddingArray.forEach((partState) => {
      Object.assign(this.state, partState);
    });
    let oldElement = this.element;
    let newELement = this.createElementByDomString();
    oldElement.parentElement.replaceChild(newELement, oldElement);
  }

  mount(parent) {
    parent.appendChild(this.createElementByDomString());
  }
}

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }

  add() {
    this.setState({
      number: this.state.number + 1,
    });
    console.log(this.state.number);
    this.setState({
      number: this.state.number + 1,
    });
    console.log(this.state.number);
    setTimeout(() => {
      this.setState({
        number: this.state.number + 1,
      });
      console.log(this.state.number);
      this.setState({
        number: this.state.number + 1,
      });
      console.log(this.state.number);
    },3000);
  }
  render() {
    return `<button onclick="trigger(event,'add')">${this.props}${this.state.number}</button>`;
  }
}

let transTrigger = new Transition([
  {
    initalze() {
      batchStratge.isBatchingUpdate = true;
    },
    end() {
      batchStratge.isBatchingUpdate = false;
      batchStratge.batchingUpdate();
    },
  },
]);

window.trigger = function (event, method) {
  transTrigger.perfom(() => {
    event.target.component[method]();
  });
};

new Counter("我是参数").mount(document.getElementById("app"));
```

关键就在 `batchStrategy` 对象，通过判断是否处于批处理更新状态来控制数据数据更新、界面渲染。

### 其他关键点

 **react 中事件处理方式**

```js
// 组件结构
`<button onclick="trigger(event,'add')">${this.props}${this.state.number}</button>`
//trigger 函数，用来触发事件和控制 batchStrategy 状态
window.trigger = function (event, method) {
  transTrigger.perfom(() => {
    event.target.component[method]();
  });
};
```

**事务机制** 

面向切面编程

```js
class Transition {
  constructor(wrappers) {
    this.wrappers = wrappers; // [{initalze,end}]
  }
  perfom(method) {
    this.wrappers.forEach((wrapper) => {
      wrapper.initalze();
    });
    method();
    this.wrappers.forEach((wrapper) => {
      wrapper.end();
    });
  }
}

//使用方式
let taskTrans = new Transition([{
  initalze(){
    // so something 初始化任务处理
  },
  end(){
    // so something 结束任务处理
  }
}])

taskTrans.perfom(()=>{
  //主任务执行处
})
```



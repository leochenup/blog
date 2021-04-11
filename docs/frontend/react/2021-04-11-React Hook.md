---
title: "React Hook"
date: 2021-04-11
sidebar: 'auto'
categories:
- FrontEnd
tags:
- React
---

 



> 可以用在函数组件中，并且可以在函数组件的多次渲染之间保持不变。

## 基本用法

```jsx
import React, { Component, useState } from "react";
import ReactDOM from "react-dom";

function Counter() {
  let [number, setNumber] = useState(0);
  return (
    <>
      <p>{number}</p>
      <button onClick={() => setNumber(number + 1)}>+</button>
    </>
  );
}
```

## 特点

每次渲染都是独立的闭包。

```jsx
function Counter() {
  let [number, setNumber] = useState(0);

  function alertNumber() {
    setTimeout(() => {
      alert(number);
    }, 3000);
  }
  return (
    <>
      <p>{number}</p>
      <button onClick={() => setNumber(number + 1)}>+</button>
      <button onClick={alertNumber}>alertNumber</button>
    </>
  );
}
```

点击两次 +，再点击两次  alertNumber ，再迅速点击多次 + ，最后的结果是 `alert` 出来 2。**函数组件每次渲染都会调用，每次调用中的所获的 state 值是一个常量，并被赋予了当前渲染中的状态值（上次渲染结束后得到的状态值），在单次渲染中 props 和 state 始终不变，每次渲染都会生成新的 state 值(每次渲染都是独立的)**。因此通过 `useState` 获取到的状态值 `number` 是赋值出来的，与之后的状态无关了。（实际上形成了一个闭包）



## 函数式更新

```jsx
import React, { Component, useState } from "react";
import ReactDOM from "react-dom";

function Counter() {
  let [number, setNumber] = useState(0);

  function lazy() {
    setTimeout(() => {
      setNumber(number + 1);
    }, 3000);
  }
  return (
    <>
      <p>{number}</p>
      <button onClick={() => setNumber(number + 1)}>+</button>
      <button onClick={lazy}>lazy</button>
    </>
  );
}
```

点击两次 + ，再点击一次 `lazy` 在快速点击两次 +，得到的 `number`结果是 3。由于每次渲染是独立的 `lazy` 函数执行时得到的 number 状态是上次结束的 2，因此不管在这延迟的 3s 内点击了多少次 + ，最终都将得到转态 3（将其覆盖）。

把更改状态的函数参数设为一个回调函数，**回调函数中的参数就是最新的 state**，就可以避免这种情况的发生，得到期待的结果 `number = 5`。得到期待的结果。

```js
setNumber((number) => number + 1);
```



## 初始化

`useState`除了直接收 `initailState` ，还可以接受一个函数返回初始化对象的值，此函数只在第一次需要初始化的时候执行，此后执行多次都不执行。下列是将接收到的 `props` 初始化为状态的值。

```jsx
function Counter(props) {
  let getInitState = () => {
    return { number: props.number };
  };
  let [state, setNumber] = useState(getInitState);

  return (
    <>
      <p>{state.number}</p>
      <button onClick={() => setNumber({ number: state.number + 1 })}>+</button>
    </>
  );
}
```



## 性能优化

* 修改状态时传入老的 `state` 组件不进行渲染。

* 减少渲染次数

由于函数组件，每次渲染时候都要重新执行函数组件，导致部分状态数据更新导致所有子组件都会跟着重新渲染。

**情况一**：不接受参数的子组件用 `memo` 函数创建出该组件的 `pure` 组件，这样组组件的重新渲染就不会导致子组件渲染了。

```jsx
import { memo } from "react";

// 用 memo 函数创建出子组件 SubCounter 的 pure 组件
SubCounter = memo(SubCounter);

function Counter(props) {
  let [number, setNumber] = useState(0);
  return (
    <>
      <p>{number}</p>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <SubCounter />
    </>
  );
}
```

这样父组件更新状态值 `number` 就不会导致该类子组件重新渲染了。

**情况二**：要接受参数的子组件，如果所有的参数都是普通类型，那么用 `memo` 就可以实现截停没必要的渲染（对比参数相等）；如果所接收的参数中有对象，由于函数组件，每次渲染时候都要重新执行函数，导致传递给子组件的对象虽然表面上值相同但是指向的地址不同，是不同的对象，因此并不会受到纯组件的截停渲染，转而去重新渲染。这时候就需要用到 `useCallback` 或 `useMemo`（使用备忘录） 来处理传递的参数。

```jsx
SubCounter = memo(SubCounter);
function Counter(props) {

  let [number, setNumber] = useState(0);
  let [name, setName] = useState("计数器");

  let addClick = useCallback(() => {
    setNumber((number) => number + 1);
  }, []);

  let data = useMemo(() => ({ number }), [number]);
  
  return (
    <>
      <p>{number}</p>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <SubCounter data={number} onClick={addClick} />
    </>
  );
}
```

这时 name 改变就不会导致 `SubCounter` 组件重新渲染了。`useMemo(fn,[...args])`参数一  `fn` 为回调函数，返回要传递的参数，第二个参数为传递参数所依赖的状态属性名。第一次执行函数时返回要传递参数的初始值，之后执行时看所依赖的状态 `args` 是否有所改变，改变就生执行函数重新生成新参数返回；如果所依赖的状态没变那么久使用原来的值作为参数，这样通过配合使用 `memo` 生成的纯组件来实现渲染优化。`useCallback[fn,[...args]]` 与 `useMemo` 异曲同工。



## useReducer

useState 的替代方案。它接收一个形如 `(state,action)=>newState` 的 reducer，并返回当前的 `state` 以及与其配套的 `dispatch` 方法。在某些场景下，useReducer 会比 useState 更实用，例如 state 逻辑较复杂且包含多个子值，或者下一个 state 依赖于之前的 state 等。

```jsx
import React, { useReducer } from "react";
import ReactDOM from "react-dom";

const initialState = 0;
function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return { number: state.number + 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState, () => ({
    // 惰性初始函数
    number: initialState,
  }));
  return (
    <>
      <p>{state.number}</p>
      <button onClick={() => dispatch({ type: "ADD" })}>ADD</button>
    </>
  );
}
```

`useReducer` 接收三个参数返回 `state`, `dispatch` 与 redux 用法相同。

```js
const [state, dispatch] = useReducer(reducer, initialState, init)
```

参数一：reducer ；参数二：初始状态值；参数三：初始化状态函数。



## useContext

 接收一个 `context` 对象并返回` context` 的但前值。当前的 `context` 值由上层组件中距离最近的 `<MyContext.Provider>` 的 `value` 属性传递的值决定。当组件上层最近 `<MyContext.Provider>` 更新时，该 `Hook` 会触发重渲染，并使用最新传递 `MyContext provider` 的 `context value` 值。

`userContext(MyContext)` 相当于 class 组件的 `static contextType = MyContext` 或者 `<MyContext.Consumer>`。`useContext(MyContext)` 只是让我们能够读取 `context` 的值以及订阅 `context` 的变化，**任然需要在上层组件中使用**  `<MyContext.Provider>` 来为下层组件提供 `context`。

```jsx
// 生成 Context
const MyContext = React.createContext();

const initialState = 0;
function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return { number: state.number + 1 };
    default:
      return state;
  }
}

function SubCom() {
  // 使用  useContext
  const { state, dispatch } = useContext(MyContext);
  return (
    <>
    <p>{state.number}</p>
    <button onClick={() => dispatch({ type: "ADD" })}>ADD</button>
    </>
  );
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, null, () => ({
    number: initialState,
  }));
  return (
    <MyContext.Provider value={{ state, dispatch }}>
      <SubCom />
    </MyContext.Provider>
  );
}
```

使用 `<MyContext.Consumer>` 达到的效果是一样的。

```jsx
// 使用  <MyContext.Consumer>
function SubCom() {
  return (
    <MyContext.Consumer>
      {({ state, dispatch }) => {
        return (
          <>
          <p>{state.number}</p>
          <button onClick={() => dispatch({ type: "ADD" })}>ADD</button>
          </>
        );
      }}
    </MyContext.Consumer>
  );
}
```



## useEffect

在函数组件体内（这里指 React 渲染阶段） 改变 DOM、添加订阅、设置定时器、记录日志以及执行其他包含副作用的操作是不被允许的，因为这可能会产生莫名其妙的 bug 并破坏 IU 的一致性。

使用 `useEffect` 完成副作用操作。赋值给 `useEffect` 的函数会在**组件渲染到屏幕之后执行（包括初次渲染和更新后）**，你可以把 `effect` 看做从 `React` 的纯函数式世界通往命令式世界的逃生通道。

`useEffect` 就是一个 `Effect Hook`，给函数组件增加了操作副作用的能力。它跟 class 组件中的 `componentDidMount`、`compinentDidUpdate` 和 `componentWillUnmout` 三个周期函数结合具有相同的用途，只不过被合并成一个 API

该 Hook 接收一个包含命令式，且可能有副作用代码的函数。

```js
useEffect(didUpdate)
```

**如下实现点击修改状态， 每次修改状态后同步到浏览器标题上**

`useEffect` 的实现方式

```jsx
import React, { Component, useReducer, useState } from "react";
import ReactDOM from "react-dom";

const initialState = 0;
// 每次修改状态后同步到浏览器标题上
function Counter() {
  const [number, setNumber] = useState(initialState);
  useEffect(() => {
    document.title = number;
  });
  return (
    <>
      <p>{number}</p>
      <button onClick={() => setNumber(number + 1)}>ADD</button>
    </>
  );
}

ReactDOM.render(<Counter />, document.getElementById("root"));
```

类组件生命周期的实现方式

```jsx
class Counter1 extends Component {
  state = { number: 0 };
  componentDidMount() {
    document.title = this.state.number;
  }
  componentDidUpdate() {
    document.title = this.state.number;
  }
  render() {
    return (
      <>
        <p>{this.state.number}</p>
        <button
          onClick={() => this.setState({ number: this.state.number + 1 })}
        >
          ADD
        </button>
      </>
    );
  }
}
```

每次渲染都会重新渲染，都会调用 `useEffect` 形成新的 `effect` 替换之前的。某种意义上讲，`effect` 更像是渲染结果的一部分：每个 `effect` 属于一次特定的渲染。每一次渲染都会从头到尾执行生命周期阶段。如果某些特定值在两次重渲染之间没有发生变化，你可以通知 React 跳过对 effect 的调用，只要传递数组作为 `useEffect` 的第二个可选参数即可：

```js
useEffect(() => {
  document.title = `You clicked ${number} times`;
}, [count]); // 仅在 count 更改时更新
```

如果不传入空数组（`[]`）作为第二个参数，但是 `useEffect` 中返回了一个清理函数，可以理解为：此函数会在 `compinentWillUnmount` 阶段执行。如下每次渲染阶段都会 `useEffect` 生成一个 `effect` 开始执行定时器，组件会在销毁阶段执行清理函数销毁定时器。

```jsx
function Example() {
  const [number, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(number=> number+ 1);
    }, 1000);
    return () => clearInterval(timer);
  });
  return <h1>{number}</h1>
}
```

如果想执行**只运行一次**的 effect（仅在组件挂载和卸载时执行），可以传递一个空数组（`[]`）作为第二个参数。这就告诉 React 你的 effect 不依赖于 props 或 state 中的任何值，所以它永远都不需要重复执行。可以通知 React 跳过对 effect 的调用，只要传递数组作为 `useEffect` 的第二个可选参数。

```jsx
function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
  }, []); // 只在开始的时候执行一次后面都不会生成新的 effect
  return <h1>{count}</h1>
}
```



## useRef

`useRef` 返回一个可变的 ref 对象，其 `.current` 属性初始化传入的参数 `(initialValue)`。返回的 `ref` 对象在组件的整个生命周期内保持不变。

```js
const refContainer = useRef(initialValue)
```

**使用**

使用 `useRef` 创建 ref 只会创建一次，之后第一次创建的。而使用 `createRef` 得到的 ref 会在每次渲染时重新执行生成新的 ref。

```jsx
function Child() {
  
  const inputRef = useRef(); // 只创建一次
  // const inputRef = useRef();  没渲染一次创建一次
  
  const focus = () => {
    // 获取
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={focus}>focus</button>
    </>
  );
}
```



## forwardRef

实现 ref 的转发。

````jsx
function Child(props, ref) {
  return (
    <>
      <input ref={ref} />
    </>
  );
}

// 获取得到 ref 的 Child 高阶组件 
let ForwardChild = forwardRef(Child);

function Parent() {
  let [number, setNumber] = useState(0);

  const inputRef = useRef();
  const focus = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <ForwardChild ref={inputRef} />
      <p>{number}</p>
      <button onClick={focus}>focus</button>
    </>
  );
}
````

`forwardRef` 原理

```js
function forwardRef(funCom) {
  return function (props) {
    return funCom(props, props.ref);
  };
}
```

**问题** 这样通过转发 ref 其他组件就可以随便拿到 dom 元素操作不安全。所以使用 `useImperativeHandle`。

 

## useImperativeHandle

可以在使用 ref 时自定义暴露给父组件的实例值。在大多数情况下，应当避免使用 ref 这样的命令式代码。useImperativeHandle 应当与 forwardRef 同时使用。

```jsx
function Child(props, parentRef) {
  const inputRef = useRef();
  const inputRef1 = useRef()
  // const inputRef = useRef(); 此处可以定义多个 ref 值，
  // 通过 useImperativeHandle 的回调函数的返回值来操控 多个 ref
  useImperativeHandle(parentRef, () => {
    return {
      focus() {
        inputRef.current.focus();
      },
      value(arg) {
        inputRef1.current.value = arg;
      }
    };
  });
  return <input ref={inputRef} />;
}

let ForwardChild = forwardRef(Child);

function Parent() {
  let [number, setNumber] = useState(0);

  const parentRef = useRef();

  const focus = () => {
    parentRef.current.focus();
  };

  return (
    <>
      <ForwardChild ref={parentRef} />
      <p>{number}</p>
      <button onClick={focus}>focus</button>
    </>
  );
}
```

`useImperativeHandle(ref,fun)` 参数一为父组件的 ref ，参数二为返回自定义的父组 ref 获取到的 current 对象值。这样就约束了父组件随意操作子组件 dom 的行为。



## useLayoutEffect

其函数签名与 `useEffect` 相同，但它会在所有的 DOM 变更之后同步调用 `effect`，执行完成后在执行之后的内容（**阻塞之后的代码）**；可以使用它尽快地来读取 DOM 布局并同步触发重渲染（此时 `render` 树还没有被浏览器绘制因此不会产生闪烁效果）。在浏览器执行绘制之前 `useLayoutEffect` 内部的更新计划将被同步刷新。

```jsx
function UseLayoutEffectTest() {
  const [color, setColor] = useState("red");

  useLayoutEffect(() => {
    console.log("useLayoutEffect color=" + color);
    alert(color); // 阻塞之后
  });

  return (
    <>
      <div id="box" style={{ background: color }}>
        color
      </div>
      <button onClick={() => setColor("red")}>红</button>
      <button onClick={() => setColor("yellow")}>黄</button>
      <button onClick={() => setColor("blue")}>蓝</button>
    </>
  );
}
```

由于 `useLayoutEffect` 中的 effect 是同步执行的所以会阻塞之后的代码，因此尽可能使用标准的 `useEffect` 以避免阻塞视图更新。  



## 自定义 Hook

有时候我们想要在组件之间重用一些状态逻辑，自定义 Hook 可以让你在不增加组件的情况下达到同样的目的，Hook 是一种复用状态逻辑的方式，它不复用 state 本身。事实上 Hook 的每次调用都有一个完全独立的 state。自定义的 Hook 更像是一种约定，而不是一种功能。如果函数的的名字以 `use` 开头，并且调用了其他的 Hook，则就称其为自定义 Hook。

此前复用逻辑的方案有 Render-Props、和高阶组件。如下是使用自定义 Hook 复用状态。

```jsx
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

// 方法名的以use 开头 方法内使用 hooks 就是 自定义 hook
function useNumber() {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setNumber((number) => number + 1);
    }, 1000);
  }, []);
  return [number, setNumber]; // 返回提供给其他组件使用的数据及其处理方法
}

function Counter1() {
  let [number, setNumber] = useNumber();

  return <button onClick={() => setNumber(number + 1)}>{number}</button>;
}
ReactDOM.render(<Counter1 />, document.getElementById("root"));
```

**注意**：自定义 Hook 只能在函数最外层调用。不要在循环、条件判断或者子函数中调用。只能在 React 的函数组件中调用 Hook 。不要在其他 javascript 函数中调用。



## 附录

**浏览器解析步骤**

* 解析 HTML 生成 DOM 树。
* 解析样式并合并 DOM 树生成渲染树 （render tree）。
* 对渲染树的各个节点计算布局，比如 box 的位置尺寸。
* 根据 render tree 并利用浏览器的 UI 层进行绘制。

![](https://my-blog-leo.oss-cn-chengdu.aliyuncs.com/%E6%B5%8F%E8%A7%88%E5%99%A8%E6%B8%B2%E6%9F%93%E6%B5%81%E7%A8%8B2.png)

























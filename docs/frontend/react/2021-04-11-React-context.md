---
title: "Reac-Contex 使用及其原理"
date: 2021-04-11
sidebar: 'auto'
categories:
- FrontEnd
tags:
- React
---

 


### context

### 使用方式

#### 方式一

> 这是老版本，现在基本不用。

父组件中首先设置 `childContextTypes` 设置向下传递的数据的数据类型 ，然后设置`getChildContext` 传递数据的实体。

在子组件中设置 `contextTypes` 接受传来的数据。使用 `this.context` 来访问。
<!-- more -->
```js
// 父组件
static childContextTypes = {
  count: PropTypes.number,
  color: PropTypes.string,
  setColor: PropTypes.func,
};
getChildContext() {
  return {
    count: this.state.count,
    color: this.state.color,
    setColor: this.setColor,
  };
}
// 子子组件
static contextTypes = {
  count: PropTypes.number,
  color: PropTypes.string,
  setColor: PropTypes.func,
};
```

下面是完整版

```jsx
import React, { Component } from "react";
import PropTypes from "prop-types";

class SubCon extends Component {
  render() {
    return (
      <div>
        子组件
        <SonCon />
      </div>
    );
  }
}

class SonCon extends Component {
  static contextTypes = {
    count: PropTypes.number,
    color: PropTypes.string,
    setColor: PropTypes.func,
  };
  render() {
    return (
      <>
        <div style={{ color: this.context.color }}>
          孙子组件{this.context.count}
          <button
            onClick={() => {
              this.context.setColor("green");
            }}
          >
            变绿
          </button>
        </div>
        <div style={{ color: this.context.color }}>
          孙子组件{this.context.count}
          <button
            onClick={() => {
              this.context.setColor("red");
            }}
          >
            变红
          </button>
        </div>
      </>
    );
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 10,
      color: "red",
      age: 12,
      hobits: ["篮球", "乒乓球", "吉他"],
    };
  }

  static childContextTypes = {
    count: PropTypes.number,
    color: PropTypes.string,
    setColor: PropTypes.func,
  };
  getChildContext() {
    return {
      count: this.state.count,
      color: this.state.color,
      setColor: this.setColor,
    };
  }
  setColor = (color) => {
    this.setState({
      color,
    });
  };
  render() {
    return (
      <div>
        父组件
        <SubCon />
      </div>
    );
  }
}
```



#### 方式二

> 新版本，现在一般用这个。

使用 `React.createContext()` 来设得到 `Provider` 和 ` Consumer` 对象。`Provider` 用来数据的传递 `value` 属性字段代表所传的数据，` Consumer` 用来接收数据（是通过 `render-props` 来实现的通过函数参数来获取数据）。

```js
const { Provider, Consumer } = React.createContext();
```

接收数据的方式有两种，第一是通过 `Consumer` 组件获取，二是通过 `Provider` 类的静态属性获取。

```jsx
import React, { Component } from "react";
import PropTypes from "prop-types";
const { Provider, Consumer } = React.createContext();

class SubCon extends Component {
  render() {
    return (
      <div>
        子组件
        <SonCon />
      </div>
    );
  }
}

class SonCon extends Component {
  render() {
    return (
      <Consumer>
        {({ color, count, setColor }) => (
          <>
            <div style={{ color: color }}>
              孙子组件{count}
              <button
                onClick={() => {
                  setColor("green");
                }}
              >
                变绿
              </button>
            </div>
            <div style={{ color: color }}>
              孙子组件{count}
              <button
                onClick={() => {
                  setColor("red");
                }}
              >
                变红
              </button>
            </div>
          </>
        )}
      </Consumer>
    );
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 10,
      color: "red",
      age: 12,
      hobits: ["篮球", "乒乓球", "吉他"],
    };
  }

  setColor = (color) => {
    this.setState({
      color,
    });
  };
  render() {
    return (
      <Provider
        value={{
          color: this.state.color,
          count: this.state.count,
          setColor: this.setColor,
        }}
      >
        <div>
          父组件
          <SubCon />
        </div>
      </Provider>
    );
  }
}

// 接收数据的第二方式
// 接收数据的组件设置 
static contextType = ThemeContext;
// 通过这种方式获取
this.context
```



### 手写实现

```js
function createContext(){
    class Provider extends Component{
        static value;
        constructor(props){
            super(props);
            Provider.value = props.value;
            this.state = {value:props.value}
        }
        // 每当组件刷新执行的生命周期函数，重新设置 Provider.value 的值
        static getDerivedStateFromProps(props, state) {
            Provider.value = props.value;
            return {value:props.value};
        } 
        render(){
            return this.props.children;
        }
    }
    class Consumer extends Component{
        render(){
            return this.props.children(Provider.value);
        }
    }
    return {Provider,Consumer}
}
```
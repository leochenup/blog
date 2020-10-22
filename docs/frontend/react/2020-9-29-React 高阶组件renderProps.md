---
title: "React 复用方案(高阶组件、render-props)"
date: 2020-09-29
sidebar: 'auto'
categories:
- FrontEnd
tags:
- React
---




## render-props 

作用：实现**状态逻辑复用**

Mouse 组件的职责：
- 1 提供了state
- 2 提供了操作状态的方法

注意：Mouse 组件仅仅负责状态逻辑复用，不会指定要渲染的内容。

要渲染什么内容，就在复用 Mouse 组件的时候，通过 render 属性的返回值指定



<!-- more -->



```js
// 复用Mouse组件，渲染p标签：
<Mouse render={mouse => <p></p>} />

// 复用Mouse组件，渲染img标签：
<Mouse render={mouse => <img src=... />} />
```

但是，render 属性的返回值要生效，必须得在 Mouse 组件中，来处理才可以

```js
class Mouse extends React.Component {
  // ...

  render() {
    // 调用 render 这个属性，通过它的返回值，来拿到要渲染的内容
    return this.props.render(this.state)
  }
}
```

推荐：使用 children 代替 render 属性

```js
<Mouse>
  {
    mouse => <p>{mouse.x} - {mouse.y}</p>
  }
</Mouse>

// 组件中：
render() {
  return this.props.children(this.state)
}
```

例子：[reac-spring](https://www.react-spring.io/docs/props/spring)



## 高阶组件

作用：实现**状态逻辑复用**

使用包装模式，也就是：使用一个组件（A）来包装另外一个组件，这样，另外一个组件中，就可以通过 props 来拿到组件A提供的状态

高阶组件实际上是一个函数，比如：`withMouse`

```js
// 参数Cat：就是被包装的组件
// 返回值CatWithMouse：就是增强后的组件。处理后，CatWithMouse中既有结构又有鼠标位置了
const CatWithMouse = withMouse(Cat)

const withMouse = (WrappedComponent) => {
  class Mouse extends React.Component {
    // 实现状态 和 操作状态的方法

    render() {
      return <WrappedComponent {...this.state} {...this.props} />  //获得传递的属性
    }
  }
  
  //设置 Mouse 组件在 react-dev-tools 显示的名称
  Mouse.displayName = `withMouse${getDisplayName(WrappedComponent)}`
  function getDisplayName(WrappedComponent){
    return WrappedComponent.displayName || WrappedComponent.name || 'Component'
  }

  return Mouse
}

//传递属性 
<CatWithMouse name="jack" />
```

例子：[`react-router-dom`](https://reactrouter.com/web/api)  中的  [`withRouter`](https://reactrouter.com/web/api/withRouter)

**案例**：

实现输入框自动从 `localStorage` 中获取数据 `key`，把 key 作为参数向服务器发送请求得到 key 的中文翻译值，Ï并作为 `defaultValue` 填充到 `input` 中显示。

`withAjax.js` 文件

::: details 点击查看代码

```jsx
import React from 'react';

let withAjax = (Comp) => {
    return class withAjax extends React.Component {
        constructor(props) {
            super(props);
            this.state = { value: '' };
        }

        componentDidMount() {
            fetch("http://localhost:3000/translate.json")
                .then(response => response.json())
                .then((res) => {
                    this.setState({
                        value: res[this.props.keyWord]
                    })
                })
        }

        render() {
            return <Comp {...this.props} defaultValue={this.state.value} />
        }
    }

}

export default withAjax
```

:::

`withLocal.js` 文件

::: details 点击查看代码

```jsx
import React from 'react';

let withLocal = (Comp, key) => {
    return class withLocal extends React.Component {
        constructor(props) {
            super(props);
            this.state = { value: '' };
        }

        componentDidMount() {
            this.setState({
                value: localStorage.getItem(key)
            })
        }

        render() {
            return <Comp {...this.props} keyWord={this.state.value} />
        }
    }

}

export default withLocal
```

:::

`Button.js` 文件

::: details 点击查看代码

```jsx
import React from 'react';

let style = {
    fontWeight:600,
    padding: 0,
    margin: 0,
    padding: '4px 20px',
    background: '#f5f6f5f6',
    color: '#3eaf7c',
    fontSize: 14,
    outline: 'none',
    border: '1px solid #3eaf7c',
    borderRadius: '3px',
    transition: '.3s ease-in-out'
}

let styleClick = {
    fontWeight:600,
    padding: 0,
    margin: 0,
    padding: '4px 20px',
    background: '#3eaf7c',
    color: '#f5f6f5f6',
    fontSize: 14,
    outline: 'none',
    border: '0px',
    borderRadius: '3px',
    border: '1px solid #3eaf7c',
    transition: '.3s ease-in-out'
}

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isClick: false
        };
    }

    mouseDownHandler = () => {
        this.setState({
            isClick: true
        })
    }
    mouseUpHandler = () => {
        this.setState({
            isClick: false
        })
    }

    clickHandler = () => {
        this.props.click()
    }

    render() {
        return (
            <button
                style={this.state.isClick ? styleClick : style}
                onMouseDown={this.mouseDownHandler}
                onMouseUp={this.mouseUpHandler}
                onClick={this.clickHandler}
            >
                {this.props.value}
            </button>
        );
    }
}

export default Button
```

:::

`Input.js` 文件

::: details 点击查看代码

```jsx
import React from 'react';

let style = {
    outline: 'none',
    border: '1px solid #cccccc',
    borderRadius: '3px',
    paddingLeft: 10,
    transition: '.3s ease-in-out'
}

let styleFocus = {
    outline: 'none',
    border: '1px solid rgba(62, 175, 124, 1)',
    borderRadius: '3px',
    paddingLeft: 10,
    boxShadow: "rgba(62, 175, 124, 0.5) 0 0 5px",
    transition: '.3s ease-in-out'
}

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            isFocus: false
        };
    }

    focusHandler = () => {
        this.setState({
            isFocus: true
        })
    }

    blurHandler = () => {
        this.setState({
            isFocus: false
        })
    }

    inputChange = (e) => {
        this.props.inputChange(e)
    }

    render() {
        return (
            <input
                style={this.state.isFocus ? styleFocus : style}
                type="text"
                onFocus={this.focusHandler}
                onBlur={this.blurHandler}
                onChange={this.inputChange}
                defaultValue={this.props.defaultValue}
            />
        );
    }
}

export default Input
```

:::

`App.js` 文件

::: details 点击查看代码

```jsx
import React from 'react';
import Button from './Button'
import Input from './Input'

import withLocal from './withLocal'
import withAjax from './withAjax'


let style = {
    width: 250,
    margin: "200px auto",
    border: '1px solid rgba(0,0,0,0.1)',
    borderRadius: '3px',
    display: 'flex',
    justifyContent: 'space-around',
    padding: 5
}

let WithAjaxInput = withAjax(Input)
let WithLocalInput = withLocal(WithAjaxInput, 'USERNAME')

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
    }

    clickHandler = () => {
        console.log(this.state.inputValue, '发送数据')
    }

    inputChange = (e) => {
        let { value } = e.target
        this.setState({
            inputValue: value
        })
    }

    render() {
        return (
            <div style={style}>
                <WithLocalInput
                    inputChange={this.inputChange} />
                <Button
                    value={'click'}
                    click={this.clickHandler}
                />
            </div>
        );
    }
}

```

:::

**效果**：

服务器中的 `key` 翻译对应值

<img src="https://my-blog-leo.oss-cn-chengdu.aliyuncs.com/20-10-22-demo-react-1.png"/>

本地 `localStorage` 中的数据

<img src="https://my-blog-leo.oss-cn-chengdu.aliyuncs.com/20-10-22demo-rect.png" />

输入框显示默认值效果

<img src="https://my-blog-leo.oss-cn-chengdu.aliyuncs.com/2020-10-22-react-deom.gif" />
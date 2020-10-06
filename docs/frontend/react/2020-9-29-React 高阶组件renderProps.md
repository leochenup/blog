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


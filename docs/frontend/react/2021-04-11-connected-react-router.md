---
title: "connected-react-router"
date: 2021-04-11
sidebar: 'auto'
categories:
- FrontEnd
tags:
- React
---

 

## connected-react-router

> *  *connected-react-router* 这个库帮我们实现了在 redux 中操作路由方法,并将路由变化的信息同步在 redux 的 store 中。
> *  dispatch 派发 可以带有路由跳转的类型的 action ，派发后由routerMiddleware中间件拦截进行跳转。
> *  路径改变的时候 ，可以把当前的路径信息（location）存放到仓库中，router属性里
<!-- more -->
## 使用步骤

创建 `hitory` 共享同一个 `history`

```js
import { createBrowserHistory, createHashHistory } from "history";
// 停工两个工厂方法 创建 history
let history = createHashHistory();
export default history;

```

`Reducers` 创建时传入 `hitory`

```js
import { combineReducers } from "redux";
import { connectRouter } from "../../connected-react-router";
import history from "../history";
import counter from "./counter";

let reducres = combineReducers({
  router: connectRouter(history),
  //...rest of your reducers
  counter,
});
export default reducres;

```

使用中间件 `routerMiddleware`

```jsx
import reducers from "./reducers";
import { routerMiddleware } from "../connected-react-router";
import history from "./history";

let store = createStore(reducers, applyMiddleware(routerMiddleware(history)));
export store
```

使用 `ConnectedRouter `

```js
import { ConnectedRouter as Router } from "connected-react-router";
```

```
<Router history={history}>
{/*根组件*/}
</Router>
```

## 实现

<RecoDemo :collapse="true">
  <template slot="code- ConnectedRouter.js">
    <<< @/docs/frontend/react/code/connected-react-router/ConnectedRouter.js
  </template>
  <template slot="code- connectRouter.js">
    <<< @/docs/frontend/react/code/connected-react-router/connectRouter.js
  </template>
  <template slot="code- constants.js">
    <<< @/docs/frontend/react/code/connected-react-router/constants.js
  </template>
  <template slot="code- push.js">
    <<< @/docs/frontend/react/code/connected-react-router/push.js
  </template> 
  <template slot="code- routerMiddleware.js">
    <<< @/docs/frontend/react/code/connected-react-router/routerMiddleware.js
  </template>
</RecoDemo>


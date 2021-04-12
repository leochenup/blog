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

<iframe height=330 width=510 src="https://my-blog-leo.oss-cn-chengdu.aliyuncs.com/react-router.mov" frameborder=0 allowfullscreen></iframe>

案例实现如下

<RecoDemo :collapse="true">

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



```jsx
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import User from "./components/user";
import Profile from "./components/proflie";
import Home from "./components/home";
import Login from "./components/login";
import Protected from "./components/protected";
import MenuLink from "./components/menulink";
import NavHead from "./components/navhead";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <Router>
    <>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <NavHead />
          <ul className="nav navbar-nav">
            <li>
              <MenuLink activeClassName="active" to="/" exact>
                首页
              </MenuLink>
            </li>
            <li>
              <MenuLink
                activeClassName="active"
                to={{ pathname: "/user", state: { title: "用户管理" } }}
              >
                用户管理
              </MenuLink>
            </li>
            <li>
              <MenuLink
                activeClassName="active"
                to={{ pathname: "/profile", state: { title: "个人中心" } }}
              >
                个人中心
              </MenuLink>
            </li>
            <li>
              <MenuLink activeClassName="active" to="/login">
                登陆
              </MenuLink>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Route path="/" component={Home} exact />
            <Route path="/user" component={User} />
            <Route path="/login" component={Login} />
            <Protected path="/profile" component={Profile} />
          </div>
        </div>
      </div>
    </>
  </Router>,
  document.getElementById("root")
);
```

home.js

```jsx
import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return <div>home</div>;
  }
}
```

Login.js

```jsx
import React, { Component } from "react";
import { login } from "../utils/local";

export default class Login extends Component {
  state = {
    user: { username: "", email: "" },
  };
  handleChange = (name, e) => {
    this.setState({
      user: {
        ...this.state.user,
        [name]: e.target.value,
      },
    });
  };
  handleClick = (e) => {
    e.preventDefault();
    login(this.state.user);
    console.log(this.props);
    let state = this.props.location.state;
    if (state) {
      this.props.history.push(state.from);
    } else {
      this.props.history.push("/");
    }
  };
  render() {
    return (
      <div>
        <form>
          <label htmlFor="username">用户名</label>
          <input
            name="username"
            type="text"
            onChange={(e) => {
              this.handleChange("username", e);
            }}
          />
          <label>密码</label>
          <label htmlFor="email"></label>
          <input
            type="password"
            name="email"
            onChange={(e) => {
              this.handleChange("email", e);
            }}
          />
          <button type="submit" onClick={this.handleClick}>
            登陆
          </button>
        </form>
      </div>
    );
  }
}

```

MenuLink

```jsx
import React, { Component } from "react";
// import { Route, Link } from "react-router-dom";
import { Route, Link } from "../react-router-dom2.0";

// Route 里有三种方式 指定渲染内容 component; render; children
// component; render; 只有在路径匹配时才渲染内容
// children 不管路径匹不匹配都渲染
export default function ({ to, exact, children, activeClassName }) {
  return (
    <Route // Link 点击修改hash 触发重新渲染，使用 Route 包裹 获得 props 信息 以便比较操作
      path={typeof to === "object" ? to.pathname : to}
      exact={exact}
      children={(props) => (
        <Link to={to} className={props.match ? activeClassName : ""}>
          {children}
        </Link>
      )}
    />
  );
}
```

NavHead.js

```jsx
import React, { Component } from "react";
import { withRouter } from "../react-router-dom2.0";

class NavHead extends Component {
  render() {
    return (
      <div
        className="navbar-heading"
        onClick={() => {
          this.props.history.push("/");
        }}
      >
        <div className="navbar-brand">Router 学习</div>
      </div>
    );
  }
}

export default withRouter(NavHead);

```

Proflie.js

```jsx
import React, { Component } from "react";
import { getLoginMsg } from "../utils/local";

export default class Proflie extends Component {
  render() {
    let user = getLoginMsg();
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>用户信息</h1>
        {user.username}
      </div>
    );
  }
}

```

protected.js

```jsx
import React from "react";
// import { Route, Redirect } from "react-router-dom";
import { Route, Redirect } from "../react-router-dom2.0";
import { getLoginMsg } from "../utils/local";

export default function ({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        getLoginMsg() ? (
          <Component {...props} />
        ) : (
          <Redirect 
            to={{
              pathname: "/login",
              state: { from: props.location.pathname },
            }}
          />
        )
      }
    />
  );
}

```

user.js

```jsx
import React, { Component } from "react";
// import { Redirect, Route, Link, Switch, NavLink } from "react-router-dom";
import { Redirect, Route, Link, Switch } from "../react-router-dom2.0";
import UserList from "./userlist";
import UserAdd from "./useradd";
import UserDetail from "./userdetail";
import MenuLink from "./menulink";

export default class User extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-2">
          <ul className="nav nav-sidebar">
            <li>
              <MenuLink activeClassName="active" to="/user/list">
                用户列表
              </MenuLink>
            </li>
            <li>
              <MenuLink activeClassName="active" to="/user/add">
                添加用户
              </MenuLink>
            </li>
          </ul>
        </div>
        <div className="col-md-10">
          <Switch>
            <Route path="/user/list" component={UserList} />
            <Route path="/user/add" component={UserAdd} />
            <Route path="/user/userdetail/:id" component={UserDetail} />
            <Redirect to="/user/list" />
          </Switch>
        </div>
      </div>
    );
  }
}

```

useradd.js

```jsx
import React, { Component } from "react";
import { addUser } from "../utils/local";
import { Prompt } from "../react-router-dom2.0";

export default class UserAdd extends Component {
  state = {
    user: { username: "", email: "" },
    blocking: false,
  };
  handleChange = (name, e) => {
    this.setState({
      user: {
        ...this.state.user,
        [name]: e.target.value,
      },
      blocking: this.state.blocking || e.target.value.length > 0,
    });
  };
  handleClick = (e) => {
    e.preventDefault();
    addUser(this.state.user);
    this.props.history.push("/user/list");
  };
  render() {
    return (
      <div>
        <form>
          <Prompt
            when={this.state.blocking}
            message={(location) => `你确定要离开${location.pathname}吗？`}
          />
          <label htmlFor="username">用户名</label>
          <input
            name="username"
            type="text"
            onChange={(e) => {
              this.handleChange("username", e);
            }}
          />
          <label>邮箱</label>
          <label htmlFor="email"></label>
          <input
            type="text"
            name="email"
            onChange={(e) => {
              this.handleChange("email", e);
            }}
          />
          <button type="submit" onClick={this.handleClick}>
            提交
          </button>
        </form>
      </div>
    );
  }
}

```

Userdetial.js

```jsx
import React, { Component } from "react";
import { getUser } from "../utils/local";

export default class UserDetail extends Component {
  state = {
    user: {},
  };
  componentDidMount() {}
  render() {
    console.log(this.props);
    let user = this.props.location.state || getUser(this.props.match.params.id);
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>用户详情</h1>
        <ul>
          <li
            key="123"
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <p>ID</p>
            <p>用户名</p>
            <p>邮箱</p>
          </li>
          <li
            key="asd"
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <p>{user.id}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
          </li>
        </ul>
      </div>
    );
  }
}

```

userlist.js

```jsx
import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Link } from "../react-router-dom2.0";
import { getUserList } from "../utils/local";

export default class UserList extends Component {
  state = {
    users: [],
  };
  componentDidMount() {
    let userList = getUserList();
    this.setState({
      users: userList,
    });
  }
  render() {
    return (
      <div>
        <ul style={{ listStyle: "none" }}>
          {this.state.users.length
            ? this.state.users.map((user) => (
                <li key={user.id}>
                  <Link
                    to={{
                      pathname: `/user/userdetail/${user.id}`,
                      state: user,
                    }}
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <p>{user.username}</p>
                  </Link>
                </li>
              ))
            : "没有数据"}
        </ul>
      </div>
    );
  }
}

```



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
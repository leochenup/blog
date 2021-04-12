import React from "react";
import ReactDOM from "react-dom";
// import { HashRouter as Router, Route, Link } from "react-router-dom";
// import { HashRouter as Router, Route, Link } from "./react-router-dom2.0";
import { BrowserRouter as Router, Route, Link } from "./react-router-dom2.0";
import User from "./components/user";
import Profile from "./components/proflie";
import Home from "./components/home";
import Login from "./components/login";
import Protected from "./components/protected";
import MenuLink from "./components/menulink";
import NavHead from "./components/navhead";
import "bootstrap/dist/css/bootstrap.css";

// {/*exact 精确匹配*/}
// HashRouter  路由容器 用到了context
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

// /user?  /user

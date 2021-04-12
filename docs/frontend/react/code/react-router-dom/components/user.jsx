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

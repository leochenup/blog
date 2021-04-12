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

import React, { Component } from "react";
import { pathToRegexp } from "path-to-regexp";
import { RouteContext } from "./context";
// 循环 儿子 匹配则显示 只显示一个
export default class Switch extends Component {
  static contextType = RouteContext;
  render() {
    let { pathname } = this.context.location;
    let children = Array.isArray(this.props.children)
      ? this.props.children
      : [this.props.children];
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      let { path = "/", exact = false } = child.props;
      let paramNames = [];
      let regexp = pathToRegexp(path, paramNames, { end: exact });
      if (pathname.match(regexp)) {
        return child; // 组件的实例 外部定义时已经 经过了 createElment所以是实例
      }
    }
    return null;
  }
}

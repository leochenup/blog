import React, { Component } from "react";
import { RouteContext } from "./context";
import { pathToRegexp } from "path-to-regexp";

export default class Route extends Component {
  static contextType = RouteContext;

  render() {
    let { pathname } = this.context.location;
    let {
      path = "/",
      component: Component,
      exact = false,
      render,
      children,
    } = this.props;
    let paramNames = [];
    let regexp = pathToRegexp(path, paramNames, { end: exact });

    let props = {
      location: this.context.location,
      history: this.context.history,
      match: null,
    };
    let result = pathname.match(regexp);
    if (result) {
      // 处理占位符参数 存放到 match params里
      paramNames = paramNames.map((param) => param.name); // 映射 paramNames
      let [url, ...values] = result;
      let params = {};
      paramNames.forEach((name, i) => {
        params[name] = values[i];
      });
      props.match = {
        isExact: pathname === url, // 看匹配的字符串路径 是否与 pathname 相同
        params, // 占位参数对象
        path, // Route path 路由规则
        url, // 匹配的字符串
      };

      if (Component) {
        return <Component {...props} />;
      } else if (render) {
        return render(props);
      } else if (children) {
        return children(props); //match 为有值
      } else {
        return null;
      }
    }
    if (children) {
      return children(props); //match 为null
    }
    return null;
  }
}

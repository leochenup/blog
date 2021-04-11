import React, { Component } from "react";
import { RouteContext } from "./context";

export default class HashRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {
        pathname: window.location.hash.slice(1),
        state: null,
        hash: null,
        search: null,
      },
    };
    this.routerState = undefined; // 暂存的 route 组件的 state
  }
  componentDidMount() {
    // window.location.hash 不存在时 赋值为 “/”
    window.location.hash = window.location.hash || "#/";
    // 监听路由变化  window.onhashchange
    window.onhashchange = (e) => {
      this.setState({
        location: {
          ...this.state.location,
          pathname: window.location.hash.slice(1),
          state: this.routerState,
        },
      });
    };
  }
  render() {
    let value = {
      location: this.state.location,
      history: {
        push: (to) => {
          console.log(this.blockMessage);
          // Prompt 阻止跳转实现
          if (this.blockMessage) {
            let confirm = window.confirm(
              this.blockMessage(typeof to === "object" ? to : { pathname: to })
            );
            if (!confirm) return;
          }
          window.location.hash = typeof to === "object" ? to.pathname : to;
          this.routerState = typeof to === "object" ? to.state : undefined;
        },
        block: (message) => {
          this.blockMessage = message; //暂存到 HashRouter类实例上
        },
      },
    };
    return (
      <RouteContext.Provider value={value}>
        {this.props.children}
      </RouteContext.Provider>
    );
  }
}

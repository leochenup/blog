import React, { Component } from "react";
import { RouteContext } from "./context";

export default class HashRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {
        pathname: window.location.pathname,
        state: null,
        hash: null,
        search: null,
      },
    };
  }
  componentDidMount() {
    window.onpopstate = (e) => {
      console.log(e);
      if (this.blockMessage) {
        let confirm = window.confirm(
          this.blockMessage({ pathname: this.state.location.pathname })
        );
        if (!confirm) return;
      }
      this.setState({
        location: {
          ...this.state.location,
          pathname: window.location.pathname,
          state: e.state,
        },
      });
    };

    window.onpushstate = (pathname, state) => {
      this.setState({
        location: {
          ...this.state.location,
          pathname,
          state,
        },
      });
    };
  }
  render() {
    let value = {
      location: this.state.location,
      history: {
        push: (to) => {
          // Prompt 阻止跳转实现
          if (this.blockMessage) {
            let confirm = window.confirm(
              this.blockMessage({ pathname: this.state.location.pathname })
            );
            if (!confirm) return;
          }

          let pathname = typeof to === "object" ? to.pathname : to;
          let state = typeof to === "object" ? to.state : null;
          window.onpushstate(pathname, state);
          window.history.pushState(state, null, pathname);
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

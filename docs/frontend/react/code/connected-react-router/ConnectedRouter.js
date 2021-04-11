import React, { Component } from "react";
import { Router } from "react-router";
import { ReactReduxContext } from "react-redux";
import { LOCATION_CHANGE } from "./constants";

export default class ConnectedRouter extends Component {
  static contextType = ReactReduxContext;
  componentDidMount() {
    // 每当路径发生变化之后 都会执行此监听函数
    // 并传入两个参数 location（新路径） action（新动作）
    this.unlisten = this.props.history.listen((location, action) => {
      console.log("listen")
      this.context.store.dispatch({
        type: LOCATION_CHANGE,
        payload: {
          action,
          location,
        },
      });
    });
  }
  componentWillUnmount() {
    this.unlisten();
  }
  render() {
    const { history, children } = this.props;
    return <Router history={history}>{children}</Router>;
  }
}

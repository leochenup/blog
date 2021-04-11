import React, { Component } from "react";

export default class PersistGate extends Component {
  componentDidMount() {
    // 初始化 localState 和 redux state 
    this.props.persistor.initState();
  }
  render() {
    return this.props.children;
  }
}

import React, { Component } from "react";
import { RouteContext } from "./context";

export default class Redirect extends Component {
  static contextType = RouteContext;
  componentDidMount() {
    this.context.history.push(this.props.to);
  }
  render() {
    return null;
  }
}

import React, { Component } from "react";
import { RouteContext } from "./context";

export default class Link extends Component {
  static contextType = RouteContext;
  render() {
    return (
      <a
        onClick={() => this.context.history.push(this.props.to)}
        className={this.props.className}
      >
        {this.props.children}
      </a>
    );
  }
}

import React, { Component } from "react";
import { withRouter } from "../react-router-dom2.0";

class NavHead extends Component {
  render() {
    return (
      <div
        className="navbar-heading"
        onClick={() => {
          this.props.history.push("/");
        }}
      >
        <div className="navbar-brand">Router 学习</div>
      </div>
    );
  }
}

export default withRouter(NavHead);

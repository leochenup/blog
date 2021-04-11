import React, { Component } from "react";
import { Route } from "../react-router-dom2.0";
// import { Route } from "react-router-dom";

export default function withRouter(Com) {
  return class C extends Component {
    render() {
      return (
        <Route
          component={Com}
        />
      );
    }
  };
}

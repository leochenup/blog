import React from "react";
// import { Route, Redirect } from "react-router-dom";
import { Route, Redirect } from "../react-router-dom2.0";
import { getLoginMsg } from "../utils/local";

export default function ({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        getLoginMsg() ? (
          <Component {...props} />
        ) : (
          <Redirect 
            to={{
              pathname: "/login",
              state: { from: props.location.pathname },
            }}
          />
        )
      }
    />
  );
}

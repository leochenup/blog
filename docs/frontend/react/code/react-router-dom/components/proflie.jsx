import React, { Component } from "react";
import { getLoginMsg } from "../utils/local";

export default class Proflie extends Component {
  render() {
    let user = getLoginMsg();
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>用户信息</h1>
        {user.username}
      </div>
    );
  }
}

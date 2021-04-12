import React, { Component } from "react";
import { getUser } from "../utils/local";

export default class UserDetail extends Component {
  state = {
    user: {},
  };
  componentDidMount() {}
  render() {
    console.log(this.props);
    let user = this.props.location.state || getUser(this.props.match.params.id);
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>用户详情</h1>
        <ul>
          <li
            key="123"
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <p>ID</p>
            <p>用户名</p>
            <p>邮箱</p>
          </li>
          <li
            key="asd"
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <p>{user.id}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
          </li>
        </ul>
      </div>
    );
  }
}

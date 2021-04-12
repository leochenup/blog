import React, { Component } from "react";
import { addUser } from "../utils/local";
import { Prompt } from "../react-router-dom2.0";

export default class UserAdd extends Component {
  state = {
    user: { username: "", email: "" },
    blocking: false,
  };
  handleChange = (name, e) => {
    this.setState({
      user: {
        ...this.state.user,
        [name]: e.target.value,
      },
      blocking: this.state.blocking || e.target.value.length > 0,
    });
  };
  handleClick = (e) => {
    e.preventDefault();
    addUser(this.state.user);
    this.props.history.push("/user/list");
  };
  render() {
    return (
      <div>
        <form>
          <Prompt
            when={this.state.blocking}
            message={(location) => `你确定要离开${location.pathname}吗？`}
          />
          <label htmlFor="username">用户名</label>
          <input
            name="username"
            type="text"
            onChange={(e) => {
              this.handleChange("username", e);
            }}
          />
          <label>邮箱</label>
          <label htmlFor="email"></label>
          <input
            type="text"
            name="email"
            onChange={(e) => {
              this.handleChange("email", e);
            }}
          />
          <button type="submit" onClick={this.handleClick}>
            提交
          </button>
        </form>
      </div>
    );
  }
}

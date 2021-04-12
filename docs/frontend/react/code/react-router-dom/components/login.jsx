import React, { Component } from "react";
import { login } from "../utils/local";

export default class Login extends Component {
  state = {
    user: { username: "", email: "" },
  };
  handleChange = (name, e) => {
    this.setState({
      user: {
        ...this.state.user,
        [name]: e.target.value,
      },
    });
  };
  handleClick = (e) => {
    e.preventDefault();
    login(this.state.user);
    console.log(this.props);
    let state = this.props.location.state;
    if (state) {
      this.props.history.push(state.from);
    } else {
      this.props.history.push("/");
    }
  };
  render() {
    return (
      <div>
        <form>
          <label htmlFor="username">用户名</label>
          <input
            name="username"
            type="text"
            onChange={(e) => {
              this.handleChange("username", e);
            }}
          />
          <label>密码</label>
          <label htmlFor="email"></label>
          <input
            type="password"
            name="email"
            onChange={(e) => {
              this.handleChange("email", e);
            }}
          />
          <button type="submit" onClick={this.handleClick}>
            登陆
          </button>
        </form>
      </div>
    );
  }
}

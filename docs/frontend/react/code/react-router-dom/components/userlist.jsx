import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Link } from "../react-router-dom2.0";
import { getUserList } from "../utils/local";

export default class UserList extends Component {
  state = {
    users: [],
  };
  componentDidMount() {
    let userList = getUserList();
    this.setState({
      users: userList,
    });
  }
  render() {
    return (
      <div>
        <ul style={{ listStyle: "none" }}>
          {this.state.users.length
            ? this.state.users.map((user) => (
                <li key={user.id}>
                  <Link
                    to={{
                      pathname: `/user/userdetail/${user.id}`,
                      state: user,
                    }}
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <p>{user.username}</p>
                  </Link>
                </li>
              ))
            : "没有数据"}
        </ul>
      </div>
    );
  }
}

// 测试正确性
import React from "./React/react";
import ReactDom from "./React/react-dom";

let vElement1 = React.createElement(
  "div",
  {
    className: "box",
    style: {
      color: "red",
    },
  },
  "hello",
  React.createElement("span", null, "world")
);

function Test1(props) {
  return React.createElement(
    "div",
    {
      className: "functiontest",
      id: "functiontest",
      style: {
        color: "hotpink",
        fontSize: "30px",
      },
    },
    props.a,
    React.createElement("div", null, props.b)
  );
}
let vElement2 = React.createElement(Test1, { a: "hello", b: "world" });

class Test2 extends React.Component {
  render() {
    return React.createElement(
      "div",
      {
        className: "functiontest",
        id: "functiontest",
        style: {
          color: "hotpink",
          fontSize: "30px",
        },
      },
      this.props.a,
      React.createElement("div", null, this.props.b)
    );
  }
}
let vElement3 = React.createElement(Test2, { a: "hello", b: "world" });

ReactDom.render(vElement3, document.getElementById("app"));

function createElement(type, config, ...children) {
    let props = {};
    if (typeof config === "object" && config !== null) {
      for (const key in config) {
        props[key] = config[key];
      }
    }
  
    if (children.length === 1) {
      props.children = children[0];
    } else if (children.length > 1) {
      props.children = Array.from(children);
    }
    return assemble(type, props);
  }
  
  class Component {
    static isReactComponent = true;
    constructor(props) {
      this.props = props;
    }
   // ......
  }
  
  function assemble(type, props) {
    return {
      type,
      props,
    };
  }
  
  
  // .....
  export default { createElement, Component };
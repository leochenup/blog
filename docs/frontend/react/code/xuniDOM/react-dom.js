// 根据 组件的 `type` 值不同惊醒不同的渲染，
function render(vElement, domParent) {
    if (typeof vElement === "string" || typeof vElement === "number") {
      domParent.appendChild(document.createTextNode(vElement));
      return;
    }
  
    let type = vElement.type;
    let props = vElement.props;
  
    // 为类组件
    if (type.isReactComponent) {
      let element = new type(props).render();
      type = element.type;
      props = element.props;
    }else if (typeof type === "function") {
      //函数组件
      let element = type(props);
      type = element.type;
      props = element.props;
    }
  
    // 字面量形式组件
    let domElement = document.createElement(type);
    for (const key in props) {
      //添加样式
      if (key === "style") {
        let styles = props[key];
        let stylesString = "";
        for (const key in styles) {
          const newKey = transStyleName(key);
          let str = `${newKey}:${styles[key]};`;
          stylesString += str;
        }
        domElement.setAttribute("style", stylesString);
      } else if (key === "children") {
        // 添加子组件
        const children =
          props.children instanceof Array ? props.children : [props.children];
        for (let i = 0; i < children.length; i++) {
          const element = children[i];
          // 递归 render 生成组件
          render(element, domElement);
        }
      } else if (key === "className") {
        // 添加class 属性
        domElement.setAttribute("class", props.className);
      } else {
        // 添加其他自定义属性
        domElement.setAttribute(key, props.className);
      }
    }
    // 挂载到目标组件元素上
    domParent.appendChild(domElement);
  }
  
  //该驼峰命名为 a-b-c 形式
  function transStyleName(name) {
    return name.replace(/[(A-Z)]/g, function (target) {
      return "-" + target.toLowerCase();
    });
  }
  
  export default { render };
  
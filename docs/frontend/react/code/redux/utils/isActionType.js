// 判断是不是 actino 是不是 纯对象
function isActionType(action) {
    if (typeof action !== "object" || typeof action === null) return false;
    let proto = action;
    while (Object.getPrototypeOf(proto)) {
      proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(action) === proto;
  }
  export default isActionType
import { isActionType } from "./utils";

export default function createStore(reducer, initState) {
  if (typeof reducer !== "function")
    throw new Error("reducer must be a function type!");

  let state = initState;
  let subscribeFuncs = [];

  //派发
  function dispatch(action) {
    if (!isActionType(action)) throw new Error("action`s type is error!");
    if (action.type === undefined) throw new Error("action`s type is error!");
    state = reducer(state, action);
    for (let i = 0; i < subscribeFuncs.length; i++) {
      const fun = subscribeFuncs[i];
      fun();
    }
    return action;
  }
  //订阅
  function subscribe(func) {
    let isSubscribe = true;
    subscribeFuncs.push(func);
    return function () {
      if (isSubscribe) {
        // 返回取消订阅函数
        let index = subscribeFuncs.indexOf(func);
        subscribeFuncs.splice(index, 1);
        isSubscribe = false;
      }
    };
  }
  function getState() {
    return state;
  }

  dispatch({ type: "9090909" });
  return {
    dispatch,
    subscribe,
    getState,
  };
}

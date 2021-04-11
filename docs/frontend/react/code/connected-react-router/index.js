import routerMiddleware from "./routerMiddleware";
import ConnectedRouter from "./ConnectedRouter";
import connectRouter from "./connectRouter";
import push from "./push";

export {
  routerMiddleware, // 创建路由中间件的函数，接受一个history
  connectRouter, // 创建库自己的 reducer 的函数，接收一个 history
  push, // 返回一个用来跳转路径的 action
  ConnectedRouter, // 是一个路由容器
};

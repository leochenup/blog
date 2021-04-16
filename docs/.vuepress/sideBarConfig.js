// const getPagesUrls = require('./getPagesUrls')

let webappconfig = [
  {
    title: "CSS",
    collapsable: true,
    children: [
      "/frontend/styles/css/2020-1-21-CSS三大特性",
      "/frontend/styles/css/2020-1-27-弹性布局",
    ],
  },
  {
    title: "Sass",
    collapsable: true,
    children: [],
  },
  {
    title: "Stylus",
    collapsable: true,
    children: [],
  },
  {
    title: "JavaScrip",
    collapsable: true,
    children: [
      "/frontend/javascript/js2",
      "/frontend/javascript/js3",
      "/frontend/javascript/2020-1-29-code-clean",
      "/frontend/javascript/2020-2-20-formData",
      "/frontend/javascript/2020-9-29-防抖",
      "/frontend/javascript/2020-10-10-Object.defineProperty()",
      "/frontend/javascript/2020-10-10-Symbol",
      "/frontend/javascript/2021-2-2-js模块化",
      "/frontend/javascript/2021-3-23-Promise与异步处理",
      "/frontend/javascript/2021-04-14-防抖节流",
    ],
  },
  {
    title: "TypeScript",
    collapsable: true,
    children: [
      "/frontend/typescript/2020-10-6-TypeScript声明文件",
      "/frontend/typescript/2021-2-1-Typescript 编译选项",
      "/frontend/typescript/2021-2-1-webpack基础环境搭建",
    ],
  },
  {
    title: "BootStrap",
    collapsable: true,
    children: ["/frontend/bootstrap/"],
  },
  {
    title: "Vue",
    collapsable: true,
    children: [
      "/frontend/vue/2020-5-30-vue基础语法",
      "/frontend/vue/2020-5-30-vue常用特性",
      "/frontend/vue/2020-5-31-vue组件化",
      "/frontend/vue/2020-5-31-vue接口调用",
      "/frontend/vue/2021-03-21-vue数据响应式原理observer",
      "/frontend/vue/2021-04-16-Vue 混入",
      "/frontend/vue/2021-04-16-vuex 使用",
      "/frontend/vue/2021-04-16-vuex 原理",
      
    ],
  },
  {
    title: "React",
    collapsable: true,
    children: [
      "/frontend/react/2020-9-29-React生命周期",
      "/frontend/react/2020-9-29-React组件",
      "/frontend/react/2020-9-29-React参数传递",
      "/frontend/react/2020-9-29-React表单处理",
      "/frontend/react/2020-9-29-React部分原理",
      "/frontend/react/2021-04-11-React-context",
      "/frontend/react/2021-04-11-React 纯组件",
      "/frontend/react/2021-04-11-React-Portals",
      "/frontend/react/2020-9-29-React路由",
      "/frontend/react/2020-9-29-React父组件给props.children组件传参",
      "/frontend/react/2020-9-29-React高阶组件renderProps",
      "/frontend/react/2020-9-29-React中antD按需加载",
      "/frontend/react/2020-9-29-React代码分割",
      "/frontend/react/2021-03-21-React虚拟DOM创建渲染",
      "/frontend/react/2021-03-21-React中ref原理及实现",
      "/frontend/react/2021-03-21-React中state和setState",
      "/frontend/react/2021-03-29-Redux使用及原理",
      "/frontend/react/2021-03-31-Reac-redux 使用及其原理",
      "/frontend/react/2021-04-11-React-Router",
      "/frontend/react/2021-04-11-connected-react-router",
      "/frontend/react/2021-04-11-React Hook",
    ],
  },
  {
    title: "Webpack",
    collapsable: true,
    children: [
      "/frontend/webpack/2020-10-9-开发环境",
      "/frontend/webpack/2020-10-09-开发环境优化",
      "/frontend/webpack/2020-10-9-生产环境",
      "/frontend/webpack/2020-10-09-生产环境优化",
      "/frontend/webpack/2020-10-10-webpack详细配置",
      "/frontend/webpack/2020-10-10-webpack5部分内容",
    ],
  },
  {
    title: "微前端",
    collapsable: true,
    children: ["/microfrontend/"],
  },
  {
    title: "微信小程序",
    collapsable: true,
    children: ["/wechat/microapp/"],
  },
  {
    title: "微信公众号",
    collapsable: true,
    children: ["/wechat/publicaccount/"],
  },
  {
    title: "Node",
    collapsable: true,
    children: [
      {
        title: "Node基础",
        children: [
          "/backend/node/基础模块/02",
          "/backend/node/基础模块/2020-1-19-简单服务器创建",
          "/backend/node/基础模块/2020-1-19-静态资源",
          "/backend/node/基础模块/2020-1-19-路由",
          "/backend/node/基础模块/2020-1-19-系统模块",
          "/backend/node/基础模块/2020-1-19-异步编程",
          "/backend/node/基础模块/2020-1-19-HTTP请求与响应处理",
          "/backend/node/基础模块/2020-1-19-HTTP协议",
          "/backend/node/基础模块/2020-1-19-Package.json",
          "/backend/node/基础模块/2020-1-20-node全局对象",
          "/backend/node/基础模块/2020-2-1-模板引擎",
          "/backend/node/基础模块/2020-2-10-生产环境与开发环境",
          "/backend/node/基础模块/2020-2-12-cookie与session",
          "/backend/node/基础模块/2020-2-20-文件上传",
          "/backend/node/基础模块/2020-2-20-ajax",
          "/backend/node/基础模块/2020-2-20-ajax扩展",
          "/backend/node/基础模块/2020-2-20-RESTful风格的API",
          "/backend/node/基础模块/2020-2-20-XML",
        ],
      },
      {
        title: "Node第三方模块",
        children: [
          "/backend/node/第三方模块/2020-2-10-第三方模块config",
          "/backend/node/第三方模块/2020-2-10-第三方模块nodemon",
          "/backend/node/第三方模块/2020-2-10-第三方模块nrm",
          "/backend/node/第三方模块/2020-2-10-Node第三方模块",
          "/backend/node/第三方模块/2020-2-12-第三方模块bcrypt",
          "/backend/node/第三方模块/2020-2-12-第三方模块body-parer",
          "/backend/node/第三方模块/2020-2-12-第三方模块dateformat",
          "/backend/node/第三方模块/2020-2-20-第三方模块joi",
          "/backend/node/第三方模块/2020-2-20-第三方模块Loash",
          "/backend/node/第三方模块/2020-2-20-第三方模块mongoose-sex-page",
        ],
      },
    ],
  },
  {
    title: "Express",
    collapsable: true,
    children: ["/backend/express/2020-2-1-express框架"],
  },
  {
    title: "Koa",
    collapsable: true,
    children: ["/backend/koa/"],
  },
  {
    title: "Egg",
    collapsable: true,
    children: ["/backend/egg/"],
  },
];

let mobileappconfig = [
  {
    title: "Android",
    collapsable: true,
    children: ["/android/2020-10-26-Android布局管理"],
  },
  {
    title: "React Native",
    collapsable: true,
    children: ["/reactnative/"],
  },
  {
    title: "Futter",
    collapsable: true,
    children: ["/flutter/"],
  },
];

let databaseconfig = [
  {
    title: "MongoDB",
    collapsable: true,
    children: [
      "/database/mongodb/2020-1-20-mongoDB",
      "/database/mongodb/2020-1-21-集合关联",
      "/database/mongodb/2020-1-21-mongoose验证",
      "/database/mongodb/2020-2-10-mongoDB添加数据库账号",
      "/database/mongodb/2020-1-21-案例1",
    ],
  },
  {
    title: "Mysql",
    collapsable: true,
    children: ["/database/mysql/"],
  },
  {
    title: "Redis",
    collapsable: true,
    children: ["/database/redis/"],
  },
];

let otherconfig = [
  {
    title: "数据结构",
    collapsable: true,
    children: ["/computerbase/datastructure/"],
  },
  {
    title: "操作系统",
    collapsable: true,
    children: ["/computerbase/os/"],
  },
  {
    title: "算法",
    collapsable: true,
    children: ["/computerbase/algorithms/"],
  },
  {
    title: "C++",
    collapsable: true,
    children: [
      "/other/c/2020-9-8-C++基础",
      "/other/c/2020-9-8-C++核心编程",
      "/other/c/2020-9-8-C++提高编程",
    ],
  },
  {
    title: "Java",
    collapsable: true,
    children: [
      "/other/java/2020-9-8-Java面向对象",
      "/other/java/2020-9-8-Java常用类",
      "/other/java/2020-9-8-Java多线程",
      "/other/java/2020-9-8-Java枚举类",
      "/other/java/2020-10-30-java-default",
      "/other/java/2020-10-30-java-Collection",
      "/other/java/2020-10-30-java-Iterator",
    ],
  },
  {
    title: "Python",
    collapsable: true,
    children: ["/other/python/"],
  },
  {
    title: "php",
    collapsable: true,
    children: ["/other/php/"],
  },
  {
    title: "思路随笔",
    collapsable: true,
    children: [
      "/记录/思路随笔/摘录",
      "/记录/思路随笔/年度总结",
      "/记录/思路随笔/2020-2-7-关于李文亮事件",
    ],
  },
  {
    title: "零散笔记",
    collapsable: true,
    children: [
      "/记录/零散笔记/2020-10-07-手写插件发布到npm",
      "/记录/零散笔记/2020-1-28-crud案例知识点总结",
      "/记录/零散笔记/2020-2-22-Git-GitHub",
      "/记录/零散笔记/2020-11-6-百度网盘网页版倍速播放",
      "/记录/零散笔记/2021-03-21-移动端适配",
    ],
  },
  {
    title: "错误日志",
    collapsable: true,
    children: ["/记录/错误日志/2020-3-5-React-Native-Errors"],
  },
  {
    title: "疑问记录",
    collapsable: true,
    children: ["/记录/疑问记录/"],
  },
];

module.exports = {
  //web APP
  "/frontend/bootstrap/": webappconfig,
  "/frontend/javascript/": webappconfig,
  "/frontend/typescript/": webappconfig,
  "/frontend/styles/css/": webappconfig,
  "/frontend/styles/sass/": webappconfig,
  "/frontend/styles/stylus/": webappconfig,
  "/frontend/vue/": webappconfig,
  "/frontend/react/": webappconfig,
  "/frontend/webpack/": webappconfig,
  "/backend/node/第三方模块/": webappconfig,
  "/backend/node/基础模块/": webappconfig,
  "/backend/express/": webappconfig,
  "/backend/koa/": webappconfig,
  "/backend/egg/": webappconfig,
  "/wechat/microapp/": webappconfig,
  "/wechat/publicaccount/": webappconfig,
  "/microfrontend/": webappconfig,

  // Mobile App
  "/android/": mobileappconfig,
  "/reactnative/": mobileappconfig,
  "/flutter/": mobileappconfig,

  //DataBase
  "/database/mongodb": databaseconfig,
  "/database/mysql": databaseconfig,
  "/database/redis": databaseconfig,

  //Other
  "/other/c/": otherconfig,
  "/other/java/": otherconfig,
  "/other/php/": otherconfig,
  "/other/python/": otherconfig,
  "/computerbase/algorithms/": otherconfig,
  "/computerbase/datastructure/": otherconfig,
  "/computerbase/os/": otherconfig,
  "/记录/错误日志/": otherconfig,
  "/记录/零散笔记/": otherconfig,
  "/记录/思路随笔/": otherconfig,
  "/记录/疑问记录/": otherconfig,
};

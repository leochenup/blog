(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{556:function(t,e,s){"use strict";s.r(e);var o=s(6),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"mongodb添加数据库账号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mongodb添加数据库账号"}},[t._v("#")]),t._v(" "),s("code",[t._v("mongoDB")]),t._v("添加数据库账号")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("账号分两种")]),t._v(" "),s("ul",[s("li",[t._v("超级管理员：对数据库中所有数据库进行操作")]),t._v(" "),s("li",[t._v("普通管理员：对数据中所某一数据库进行操作")])])]),t._v(" "),s("h2",{attrs:{id:"操作步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#操作步骤"}},[t._v("#")]),t._v(" 操作步骤")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("以管理员方式运行"),s("code",[t._v("power shell")])])]),t._v(" "),s("li",[s("p",[t._v("连接数据库 "),s("code",[t._v("mongo")])])]),t._v(" "),s("li",[s("p",[t._v("查看数据库 "),s("code",[t._v("show ads")])])]),t._v(" "),s("li",[s("p",[t._v("切换到"),s("code",[t._v("admin")]),t._v("数据库"),s("code",[t._v("use admin")])])]),t._v(" "),s("li",[s("p",[t._v("创建超级管理员账户 "),s("code",[t._v("db.createUser()")])])]),t._v(" "),s("li",[s("p",[t._v("切换到"),s("code",[t._v("blog")]),t._v("数据库 "),s("code",[t._v("use blog")])])]),t._v(" "),s("li",[s("p",[t._v("使用"),s("code",[t._v("db.createUser()")]),t._v(" 创建普通账号")])]),t._v(" "),s("li",[s("p",[t._v("卸载现有"),s("code",[t._v("mongodb")]),t._v("服务")]),t._v(" "),s("ol",[s("li",[t._v("停止服务 "),s("code",[t._v("net stop mongodb")])]),t._v(" "),s("li",[t._v("删除服务"),s("code",[t._v("mongod -remove")])])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("mongodb")]),t._v("服务")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("mongod --logpath"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C:\\Program Files\\MongoDB\\Server'),s("span",{pre:!0,attrs:{class:"token entity",title:"\\4"}},[t._v("\\4")]),t._v('.1\\log\\mongod.log"')]),t._v(" \n--dbpath"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C:\\ProgramFiles\\MongoDB\\Server'),s("span",{pre:!0,attrs:{class:"token entity",title:"\\4"}},[t._v("\\4")]),t._v('.1\\data"')]),t._v(" --install –-auth\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("启动服务 "),s("code",[t._v("net start mongodb")])])])])])}),[],!1,null,null,null);e.default=a.exports}}]);
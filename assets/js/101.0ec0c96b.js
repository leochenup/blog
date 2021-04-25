(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{601:function(s,t,a){"use strict";a.r(t);var e=a(6),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"编译选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译选项"}},[s._v("#")]),s._v(" 编译选项")]),s._v(" "),a("h2",{attrs:{id:"tsc-app-ts-w"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tsc-app-ts-w"}},[s._v("#")]),s._v(" "),a("code",[s._v("tsc app.ts -w")])]),s._v(" "),a("p",[s._v("监视文件变化 ,当文件发生变化时，自动将ts 文件编译成对应的js文件。弊端：多个文件要开启多个终端执行多次执行命令，每个终端对应一个文件。")]),s._v(" "),a("h2",{attrs:{id:"配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[s._v("#")]),s._v(" 配置文件")]),s._v(" "),a("p",[s._v("首先在目录中建立一个配置文件 "),a("code",[s._v("tsconfig.json")]),s._v(",然后执行 "),a("code",[s._v("tsc")]),s._v(" 命令会把指定的 ts 文件编译成 js 文件，执行 "),a("code",[s._v("tsc -w")]),s._v(" 监视指定的 ts 文件，一旦变化变化就重新编译。")]),s._v(" "),a("p",[a("code",[s._v("tsconfig.json")]),s._v(" 文件是 ts 文件编译的配置文件。包含配置项如下：")]),s._v(" "),a("h3",{attrs:{id:"include"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#include"}},[s._v("#")]),s._v(" "),a("strong",[a("code",[s._v("include")])])]),s._v(" "),a("p",[s._v("定义希望被编译文件所在的目录")]),s._v(" "),a("p",[s._v("默认值："),a("code",[s._v('["**/*"]')]),s._v(" ，"),a("code",[s._v("**")]),s._v(" 表示任意目录 "),a("code",[s._v("*")]),s._v(" 表示任意文件，该配置项可以写多个路径。")]),s._v(" "),a("p",[s._v("示例："),a("code",[s._v('"include":["src/**/*", "tests/**/*"]')]),s._v(" 。所有 "),a("code",[s._v("src")]),s._v(" 目录和 "),a("code",[s._v("tests")]),s._v(" 目录下的文件都会被编译")]),s._v(" "),a("h3",{attrs:{id:"exclude"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exclude"}},[s._v("#")]),s._v(" "),a("strong",[a("code",[s._v("exclude")])])]),s._v(" "),a("p",[s._v("定义需要排除在外的目录")]),s._v(" "),a("p",[s._v("默认值："),a("code",[s._v('["node_modules", "bower_components", "jspm_packages"]')])]),s._v(" "),a("p",[s._v("示例："),a("code",[s._v('"exclude": ["./src/hello/**/*"]')]),s._v(" 。"),a("code",[s._v("src")]),s._v(" 下 "),a("code",[s._v("hello")]),s._v(" 目录下的文件都不会被编译")]),s._v(" "),a("h3",{attrs:{id:"extends"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extends"}},[s._v("#")]),s._v(" "),a("strong",[a("code",[s._v("extends")])])]),s._v(" "),a("p",[s._v("定义被继承的配置文件")]),s._v(" "),a("p",[s._v("示例："),a("code",[s._v('"extends": "./configs/base"')]),s._v(" 。当前配置文件中会自动包含 "),a("code",[s._v("config")]),s._v(" 目录下 "),a("code",[s._v("base.json")]),s._v(" 中的所有配置信息。")]),s._v(" "),a("h3",{attrs:{id:"files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#files"}},[s._v("#")]),s._v(" "),a("strong",[a("code",[s._v("files")])])]),s._v(" "),a("p",[s._v("指定被编译文件的列表，只有需要编译的文件少时才会用到。列表中的文件都会被TS编译器所编译")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"files"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"core.ts"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sys.ts"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"types.ts"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scanner.ts"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"parser.ts"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"utilities.ts"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"binder.ts"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"checker.ts"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tsc.ts"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h3",{attrs:{id:"compileroptions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compileroptions"}},[s._v("#")]),s._v(" "),a("strong",[a("code",[s._v("compilerOptions")])])]),s._v(" "),a("p",[s._v("编译选项是配置文件中非常重要也比较复杂的配置选项，在 "),a("code",[s._v("compilerOptions")]),s._v(" 中包含多个子选项，用来完成对编译的配置。")]),s._v(" "),a("p",[s._v("项目选项")]),s._v(" "),a("h4",{attrs:{id:"target"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#target"}},[s._v("#")]),s._v(" "),a("code",[s._v("target")])]),s._v(" "),a("p",[s._v("设置ts代码编译的目标版本")]),s._v(" "),a("p",[s._v("可选值："),a("code",[s._v("ES3（默认）")]),s._v("、"),a("code",[s._v("ES5")]),s._v("、"),a("code",[s._v("ES6/ES2015")]),s._v("、"),a("code",[s._v("ES7/ES2016")]),s._v("、"),a("code",[s._v("ES2017")]),s._v("、"),a("code",[s._v("ES2018")]),s._v("、"),a("code",[s._v("ES2019")]),s._v("、"),a("code",[s._v("ES2020")]),s._v("、"),a("code",[s._v("ESNext")])]),s._v(" "),a("p",[s._v("我们所编写的 ts 代码将会被编译为 ES6 版本的 js 代码")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"compilerOptions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"target"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ES6"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h4",{attrs:{id:"lib"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lib"}},[s._v("#")]),s._v(" "),a("code",[s._v("lib")])]),s._v(" "),a("p",[s._v("指定代码运行时所包含的库（宿主环境），一般不需要改，配置后使用对应环境下的对象不会提示错误。")]),s._v(" "),a("p",[s._v("可选值："),a("code",[s._v("ES5")]),s._v("、"),a("code",[s._v("ES6/ES2015")]),s._v("、"),a("code",[s._v("ES7/ES2016")]),s._v("、"),a("code",[s._v("ES2017")]),s._v("、"),a("code",[s._v("ES2018")]),s._v("、"),a("code",[s._v("ES2019")]),s._v("、"),a("code",[s._v("ES2020")]),s._v("、"),a("code",[s._v("ESNext")]),s._v("、"),a("code",[s._v("DOM")]),s._v(" ......")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"compilerOptions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"target"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ES6"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"lib"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ES6"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"DOM"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"outDir"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dist"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"outFile"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dist/aa.js"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h4",{attrs:{id:"module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#module"}},[s._v("#")]),s._v(" "),a("code",[s._v("module")])]),s._v(" "),a("p",[s._v("设置编译后代码使用的模块化系统")]),s._v(" "),a("p",[s._v("可选值："),a("code",[s._v("none")]),s._v(", "),a("code",[s._v("commonjs")]),s._v(", "),a("code",[s._v("amd")]),s._v(", "),a("code",[s._v("system")]),s._v(", "),a("code",[s._v("umd")]),s._v(", "),a("code",[s._v("es6")]),s._v(", "),a("code",[s._v("es2015")]),s._v(", "),a("code",[s._v("es2020")]),s._v(", "),a("code",[s._v("esnext")])]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"compilerOptions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"module"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CommonJS"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h4",{attrs:{id:"outdir"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outdir"}},[s._v("#")]),s._v(" "),a("code",[s._v("outDir")])]),s._v(" "),a("p",[s._v("编译后文件的所在目录")]),s._v(" "),a("p",[s._v("默认情况下，编译后的 js 文件会和 ts 文件位于相同的目录，设置 "),a("code",[s._v("outDir")]),s._v(" 后可以改变编译后文件的位置")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"compilerOptions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"outDir"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dist"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("设置后编译后的 js 文件将会生成到 dist 目录")]),s._v(" "),a("h4",{attrs:{id:"outfile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outfile"}},[s._v("#")]),s._v(" "),a("code",[s._v("outFile")])]),s._v(" "),a("p",[s._v("将所有的文件编译为一个js文件")]),s._v(" "),a("p",[s._v("默认会将所有的编写在全局作用域中的代码合并为一个 js 文件，module 制定了 None、System 或 AMD 则不会报错，会将编译后的模块一起合并到文件之中")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"compilerOptions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"outFile"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dist/app.js"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h4",{attrs:{id:"rootdir"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rootdir"}},[s._v("#")]),s._v(" "),a("code",[s._v("rootDir")])]),s._v(" "),a("p",[s._v("指定代码的根目录，默认情况下编译后文件的目录结构会以最长的公共目录为根目录，通过 "),a("code",[s._v("rootDir")]),s._v(" 可以手动指定根目录")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"compilerOptions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"rootDir"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./src"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h4",{attrs:{id:"allowjs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#allowjs"}},[s._v("#")]),s._v(" "),a("code",[s._v("allowJs")])]),s._v(" "),a("p",[s._v("是否对 js 文件编译, 默认为 "),a("code",[s._v("false")])]),s._v(" "),a("h4",{attrs:{id:"checkjs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#checkjs"}},[s._v("#")]),s._v(" "),a("code",[s._v("checkJs")])]),s._v(" "),a("p",[s._v("是否对 js 文件进行语法检查，默认为 "),a("code",[s._v("false")])]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"compilerOptions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"allowJs"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"checkJs"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h4",{attrs:{id:"removecomments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#removecomments"}},[s._v("#")]),s._v(" "),a("code",[s._v("removeComments")])]),s._v(" "),a("p",[s._v("是否删除注释，默认值："),a("code",[s._v("false")])]),s._v(" "),a("h4",{attrs:{id:"noemit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#noemit"}},[s._v("#")]),s._v(" "),a("code",[s._v("noEmit")])]),s._v(" "),a("p",[s._v("不对代码进行编译，不生成编译后的文件，默认值："),a("code",[s._v("false")])]),s._v(" "),a("h4",{attrs:{id:"noemitonerror"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#noemitonerror"}},[s._v("#")]),s._v(" "),a("code",[s._v("noEmitOnError")])]),s._v(" "),a("p",[s._v("代码有错误的情况下不进行编译，默认值："),a("code",[s._v("false")])]),s._v(" "),a("h4",{attrs:{id:"sourcemap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sourcemap"}},[s._v("#")]),s._v(" "),a("code",[s._v("sourceMap")])]),s._v(" "),a("p",[s._v("是否生成 "),a("code",[s._v("sourceMap")]),s._v("，默认值："),a("code",[s._v("false")])]),s._v(" "),a("p",[s._v("是什么 "),a("code",[s._v("sourceMap")]),s._v("： 我们在项目进行打包后，会将开发中的多个文件代码打包到一个文件中，并且经过压缩，去掉多余的空格，且babel编译化后，最终会用于线上环境，那么这样处理后的代码和源代码会有很大的差别，当有bug的时候，我们只能定位到压缩处理后的代码位置，无法定位到开发环境中的代码，对于开发不好调式，因此sourceMap出现了，它就是为了解决不好调式代码问题的。")]),s._v(" "),a("p",[a("strong",[s._v("严格检查")])]),s._v(" "),a("h4",{attrs:{id:"strict"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#strict"}},[s._v("#")]),s._v(" "),a("code",[s._v("strict")])]),s._v(" "),a("p",[s._v("启用所有的严格检查，默认值为 "),a("code",[s._v("true")]),s._v("，设置后相当于开启了所有的严格检查")]),s._v(" "),a("h4",{attrs:{id:"alwaysstrict"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alwaysstrict"}},[s._v("#")]),s._v(" "),a("code",[s._v("alwaysStrict")])]),s._v(" "),a("p",[s._v("总是以严格模式对代码进行编译，编译后的代码为严格模式")]),s._v(" "),a("h4",{attrs:{id:"noimplicitany"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#noimplicitany"}},[s._v("#")]),s._v(" "),a("code",[s._v("noImplicitAny")])]),s._v(" "),a("p",[s._v("禁止隐式的 "),a("code",[s._v("any")]),s._v(" 类型")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" b\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//其中的 a, b 为隐式 any 类型")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h4",{attrs:{id:"noimplicitthis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#noimplicitthis"}},[s._v("#")]),s._v(" "),a("code",[s._v("noImplicitThis")])]),s._v(" "),a("p",[s._v("禁止类型不明确的 "),a("code",[s._v("this")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//函数的this 与调用者有关所以是不确定的，开启此配置项后可以检查出不明确的this")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h4",{attrs:{id:"strictbindcallapply"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#strictbindcallapply"}},[s._v("#")]),s._v(" "),a("code",[s._v("strictBindCallApply")])]),s._v(" "),a("p",[s._v("严格检查 "),a("code",[s._v("bind")]),s._v("、"),a("code",[s._v("call")]),s._v(" 和 "),a("code",[s._v("apply")]),s._v(" 的参数列表")]),s._v(" "),a("h4",{attrs:{id:"strictfunctiontypes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#strictfunctiontypes"}},[s._v("#")]),s._v(" "),a("code",[s._v("strictFunctionTypes")])]),s._v(" "),a("p",[s._v("严格检查函数的类型")]),s._v(" "),a("h4",{attrs:{id:"strictpropertyinitialization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#strictpropertyinitialization"}},[s._v("#")]),s._v(" "),a("code",[s._v("strictPropertyInitialization")])]),s._v(" "),a("p",[s._v("严格检查属性是否初始化")]),s._v(" "),a("h4",{attrs:{id:"strictnullchecks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#strictnullchecks"}},[s._v("#")]),s._v(" "),a("code",[s._v("strictNullChecks")])]),s._v(" "),a("p",[s._v("严格的空值检查")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" box "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getelementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'box'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nbox"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'click'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// box 可能为空，开启检查后会检测出此类问题")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[a("strong",[s._v("额外检查")])]),s._v(" "),a("p",[a("code",[s._v("noFallthroughCasesInSwitch")]),s._v(" ：检查 "),a("code",[s._v("switch")]),s._v(" 语句包含正确的 "),a("code",[s._v("break")])]),s._v(" "),a("p",[a("code",[s._v("noImplicitReturns")]),s._v(" ：检查函数没有隐式的返回值")]),s._v(" "),a("p",[a("code",[s._v("noUnusedLocals")]),s._v(" ：检查未使用的局部变量")]),s._v(" "),a("p",[a("code",[s._v("noUnusedParameters")]),s._v("： 检查未使用的参数")]),s._v(" "),a("p",[a("code",[s._v("allowUnreachableCode")])]),s._v(" "),a("p",[s._v("检查不可达代码，可选值："),a("code",[s._v("true")]),s._v("，忽略不可达代码；"),a("code",[s._v("false")]),s._v("，不可达代码将引起错误")])])}),[],!1,null,null,null);t.default=n.exports}}]);
---
title: "tsconfig.json编译选项"
date: 2021-02-01
sidebar: 'auto'
categories:
- FrontEnd
tags:
- TypeScript
---




# 编译选项



## `tsc app.ts -w`

监视文件变化 ,当文件发生变化时，自动将ts 文件编译成对应的js文件。弊端：多个文件要开启多个终端执行多次执行命令，每个终端对应一个文件。



## 配置文件

首先在目录中建立一个配置文件 `tsconfig.json`,然后执行 `tsc` 命令会把指定的 ts 文件编译成 js 文件，执行 `tsc -w` 监视指定的 ts 文件，一旦变化变化就重新编译。



`tsconfig.json` 文件是 ts 文件编译的配置文件。包含配置项如下：

### **`include`**

定义希望被编译文件所在的目录

默认值：`["**/*"]` ，`**` 表示任意目录 `*` 表示任意文件，该配置项可以写多个路径。

示例：`"include":["src/**/*", "tests/**/*"]` 。所有 `src` 目录和 `tests` 目录下的文件都会被编译



### **`exclude`**

定义需要排除在外的目录

默认值：`["node_modules", "bower_components", "jspm_packages"]`

示例：`"exclude": ["./src/hello/**/*"]` 。`src` 下 `hello` 目录下的文件都不会被编译



### **`extends`**

定义被继承的配置文件

示例：`"extends": "./configs/base"` 。当前配置文件中会自动包含 `config` 目录下 `base.json` 中的所有配置信息。



### **`files`**

指定被编译文件的列表，只有需要编译的文件少时才会用到。列表中的文件都会被TS编译器所编译

```json
"files": [
  "core.ts",
  "sys.ts",
  "types.ts",
  "scanner.ts",
  "parser.ts",
  "utilities.ts",
  "binder.ts",
  "checker.ts",
  "tsc.ts"
]
```



### **`compilerOptions`**

编译选项是配置文件中非常重要也比较复杂的配置选项，在 `compilerOptions` 中包含多个子选项，用来完成对编译的配置。

项目选项

#### `target`

设置ts代码编译的目标版本

可选值：`ES3（默认）`、`ES5`、`ES6/ES2015`、`ES7/ES2016`、`ES2017`、`ES2018`、`ES2019`、`ES2020`、`ESNext`

我们所编写的 ts 代码将会被编译为 ES6 版本的 js 代码

```json
"compilerOptions": {
  "target": "ES6"
}
```



#### `lib`

指定代码运行时所包含的库（宿主环境），一般不需要改，配置后使用对应环境下的对象不会提示错误。

可选值：`ES5`、`ES6/ES2015`、`ES7/ES2016`、`ES2017`、`ES2018`、`ES2019`、`ES2020`、`ESNext`、`DOM` ......

```json
"compilerOptions": {
  "target": "ES6",
  "lib": ["ES6", "DOM"],
  "outDir": "dist",
  "outFile": "dist/aa.js"
}
```



#### `module`

设置编译后代码使用的模块化系统

可选值：`none`, `commonjs`, `amd`, `system`, `umd`, `es6`, `es2015`, `es2020`, `esnext`

```json
"compilerOptions": {
  "module": "CommonJS"
}
```



#### `outDir`

编译后文件的所在目录

默认情况下，编译后的 js 文件会和 ts 文件位于相同的目录，设置 `outDir` 后可以改变编译后文件的位置

```json
"compilerOptions": {
    "outDir": "dist"
}
```

设置后编译后的 js 文件将会生成到 dist 目录



#### `outFile`

将所有的文件编译为一个js文件

默认会将所有的编写在全局作用域中的代码合并为一个 js 文件，module 制定了 None、System 或 AMD 则不会报错，会将编译后的模块一起合并到文件之中

```json
"compilerOptions": {
  "outFile": "dist/app.js"
}
```



#### `rootDir`

指定代码的根目录，默认情况下编译后文件的目录结构会以最长的公共目录为根目录，通过 `rootDir` 可以手动指定根目录

```json
"compilerOptions": {
    "rootDir": "./src"
}
```



#### `allowJs` 

是否对 js 文件编译, 默认为 `false` 

#### `checkJs` 

是否对 js 文件进行语法检查，默认为 `false`

```json
"compilerOptions": {
  "allowJs": true,
  "checkJs": true
}
```



#### `removeComments` 

是否删除注释，默认值：`false`

#### `noEmit` 

不对代码进行编译，不生成编译后的文件，默认值：`false`

#### `noEmitOnError` 

代码有错误的情况下不进行编译，默认值：`false`

#### `sourceMap` 

是否生成 `sourceMap`，默认值：`false`

是什么 `sourceMap`： 我们在项目进行打包后，会将开发中的多个文件代码打包到一个文件中，并且经过压缩，去掉多余的空格，且babel编译化后，最终会用于线上环境，那么这样处理后的代码和源代码会有很大的差别，当有bug的时候，我们只能定位到压缩处理后的代码位置，无法定位到开发环境中的代码，对于开发不好调式，因此sourceMap出现了，它就是为了解决不好调式代码问题的。



**严格检查**

#### `strict` 

启用所有的严格检查，默认值为 `true`，设置后相当于开启了所有的严格检查

#### `alwaysStrict` 

总是以严格模式对代码进行编译，编译后的代码为严格模式 

#### `noImplicitAny`

禁止隐式的 `any` 类型

``` js
function sum(a, b){
  return a + b
}
//其中的 a, b 为隐式 any 类型
```



#### `noImplicitThis`

禁止类型不明确的 `this`

``` js
function fn(){
  console.log(this)
}
//函数的this 与调用者有关所以是不确定的，开启此配置项后可以检查出不明确的this
```



#### `strictBindCallApply` 

严格检查 `bind`、`call` 和 `apply` 的参数列表

#### `strictFunctionTypes` 

严格检查函数的类型

#### `strictPropertyInitialization` 

严格检查属性是否初始化



#### `strictNullChecks` 

严格的空值检查

``` js
let box = document.getelementById('box')
box.addEventListener('click', function(){
  // ...
})
// box 可能为空，开启检查后会检测出此类问题
```







**额外检查**

`noFallthroughCasesInSwitch` ：检查 `switch` 语句包含正确的 `break` 

`noImplicitReturns` ：检查函数没有隐式的返回值

`noUnusedLocals` ：检查未使用的局部变量

`noUnusedParameters`： 检查未使用的参数

`allowUnreachableCode`

检查不可达代码，可选值：`true`，忽略不可达代码；`false`，不可达代码将引起错误
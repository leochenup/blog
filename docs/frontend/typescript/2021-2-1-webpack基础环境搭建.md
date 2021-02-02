---
title: "webpack基础环境配置"
date: 2020-02-01
sidebar: 'auto'
categories:
- FrontEnd
tags:
- TypeScript
---




# webpack 基础环境配置

## `webpack.config.js`

所需的插件

```shell
npm i -D webpack webpack-cli typescript ts-loader
npm i -D babel-loader @babel/core @babel/preset-env core-js
npm i -D html-webpack-plugin clean-webpack-plugin 
```



`babel` 设置兼容后 ie 浏览器任然可能报错，是因为最后打包的 `bundle.js` 包裹函数为箭头函数，ie 不兼容，要通过 `"arrowFunction: flase"` 字段设置禁用箭头函数。

```js
let { resolve } = require('path')
const Htmlplugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist'),
        environment: {
           //让webpck 不用箭头函数
            arrowFunction: false
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['babel-loader', 'ts-loader'],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new Htmlplugin({
            template: './src/index.html'
        }),
       //编译前删除 dist 目录，防止多余的干扰文件。
        new CleanWebpackPlugin()
    ],
    devServer: {
        contentBase: resolve(__dirname, 'bundle'),
        port: 3001,
        hot: true,
        compress: true
    },
   //配置那些类文件可以作为模块引用
    resolve: {
        extensions: ['.ts', '.js']
    }
}
```



## `bable` 配置文件 `.babellrc`

`"presets"` 字段配置打包后代码运行的环境，使用 `@babel/preset-env` 预设环境，设置 chrome 最高兼容到 58 ie 最高兼容到 11。使用 `core.js` 的版本为 3 ，并配置 `"useBuiltIns"` 字段为 `"usage"` 按需加载所需的模块。`core.js` 为当前环境提供不存在的特性如 `promise` 等等。

```json
{
    "presets": [
        [
            "@babel/preset-env",
            {
                "targets": {
                    "chrome": "58",
                    "ie": "11"
                },
                "corejs": "3",
                "useBuiltIns": "usage"
            }
        ]
    ]
}
```


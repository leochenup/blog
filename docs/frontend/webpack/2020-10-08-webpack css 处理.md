---
title: "webpack css 处理"
date: 2020-09-10
sidebar: 'auto'
categories:
- FrontEnd
tags:
- webpack
---





# webpack css 处理



## `mini-css-extract-plugin`

`style-loader` 

将项目中的 `css` 文件打包进入 `build.js`(打包后的 `js`)，最后通过 `js` 在`HTML` 中引用

`mini-css-extract-plugin` 

用来取代 `style-loader` 将项目中的 `css` 文件提取出来形成单独的 `css` 文件，然后再通过 `<style />` 标签插入模板文件中 `index.html`。一个 `js` 文件引用多个 `css` 文件，最后会被 打包成一个 `css` 文件 。

配置项目

```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'js/build.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          //代替 style-loader 处理css
          MiniCssExtractPlugin.loader,
          'css-loader',
        ]
      }
    ]
  },
  mode: 'development',
  plugins: [
    new MiniCssExtractPlugin({ // 配置项
      //对输出的文件 重命名，并输出到 css 目录下
      filename: 'css/build.css'
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}
```



## postcss-loader 

`postcss-loader` 应该是 `Webpack` 配置中不可或缺的一个 `CSS loader`。它负责进一步处理 `CSS` 文件，比如添加浏览器前缀，压缩 `CSS` 等

### css 兼容性 postcss-preset-env

先再 `package.json` 中配置 `browserslist` 属性，方便配置项获取要兼容的浏览器版本。配置项通过获取以下信息来为 `css` 做兼容处理。

```json
"browserslist": {
  "production": [
    ">0.2%",
    "not dead",
    "not op_mini all"
  ],
  "development": [
    "last 1 chrome version",
    "last 1 firefox version",
    "last 1 safari version"
  ]
}
```

在通过 `postcss-preset-env` 做 `css` 兼容（添加 `css` 前缀），配置如下：

```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'js/build.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            //配置 postcss-loader
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  //postcss的插件
                  require('postcss-preset-env')(/*optoins*/),
                ]
              }
            }
          }
        ]
      }
    ]
  },
  mode: 'development',
  plugins: [
    new MiniCssExtractPlugin({
      //对输出的文件 重命名
      filename: 'css/build.css'
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}
```



## css 压缩 optimize-css-assets-webpack-plugin

`optimize-css-assets-webpack-plugin` 把项目中的 `css` 压缩处理。配置：

```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'js/build.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ]
      }
    ]
  },
  mode: 'development',
  plugins: [

    new MiniCssExtractPlugin({

      filename: 'css/build.css'
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    //压缩 css 插件使用
    new OptimizeCSSAssetsPlugin()
  ]
}
```












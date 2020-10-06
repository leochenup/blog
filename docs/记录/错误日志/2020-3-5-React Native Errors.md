---
title: "RN 错误一"
date: 2020-03-05
sidebar: 'auto'
categories:
- 记录
tags: 
- 错误集锦

---





# 未正确卸载 App 导致无法再次安装应用

## 1.1 错误状态

![RN-error1.png](https://my-blog-leo.oss-cn-chengdu.aliyuncs.com/63.png)

## 1.2 错误原由

执行 `react-native run-android` 在真机上安装了 的一个应用 `AwesomeProject` ，然后直接从手机上卸载了该软件。

当再次执行 `react-native run-android` 时就报如上的错误。 

## 1.3 错误解决

**先使用 `adb uninstall com.awesomeproject` 将手机上的 `AwesomeProject`  软件正确的卸载。**

**然后再执行 `react-native run-android` 就完美启动了！！**





 
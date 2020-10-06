---
title: 数组
date: 2020-01-15
sidebar: 'auto'
categories:
- FrontEnd
tags:
- JavaScript
---



## 常用的数组方法

### push

`push()` 可以在数组的末尾依次添加元素，并返回新数组的长度

```javascript
var arr = []
var len = arr.push(1,2,3)
console.log(arr)//[1,2,3]
console.log(len)//返回新数组长度3
```

### pop

`pop()` 删除数组末尾的元素，并将删除元素返回

```javascript
var arr = [1,2,3,4,5]
var del = a.pop()//del用来保存被删除的数据
console.log(del)//5。 5被删除了
console.log(arr)//[1,2,3,4]
```

### unshift

`unshift()` 向数组开头添加一个或多个元素，并返回新数组长度

```javascript
var arr = [1,2,3,4]
var len = arr.unshift("tt","威少")
console.log(len)//6 
console.log(arr)//["tt","威少",1,2,3,4]
```

### shift

`shift()` 可以删除数组的第一个元素，并返回删除的元素

```javascript
var arr = ["t",1,2,3,4]
var del = arr.shift()
console.log(del)//"t"
console.log(arr)//[1,2,3,4]
```

### forEach

`forEach()`

需要一个函数作为参数

由我们创建不由我们执行，数组中有几个元素就执行几次

每次执行时浏览器会在回调函数中传入三个参数

参数一：就是当前遍历的元素、参数二：当前遍历的元素的索引值、参数三：整个数组


```javascript
var arr = ["t","y","x","威","少"]
arr.forEach(function(a,b,c){
 console.log("参数1："+a,"参数2："+b,"参数3："+c)
})

//输出结果
/*
参数1：t 参数2：0 参数3：t,y,x,威,少
参数1：y 参数2：1 参数3：t,y,x,威,少
参数1：x 参数2：2 参数3：t,y,x,威,少
参数1：威 参数2：3 参数3：t,y,x,威,少
参数1：少 参数2：4 参数3：t,y,x,威,少
*/
```

### slice

`slice()`

可以用来从数组提取指定元素(不会改变原数组，返回一个截取到的数组对象)

参数1：截取开始位置的索引、参数2：截取结束位置的索引（不包含,不会截取）。**参数2可以不写** ：表示从开始位置到最后。参数可以传负数：-1代表最后一个，-2代表倒数2个……


```javascript
var arr = [1,2,3,4,5,6,7,8]
var newArr1 = arr.slice(1,3)
console.log(newArr1)//[2,3]

var newArr2 = arr.slice(2)//传入一个值,代表截取索引为2之后的所有元素
console.log(newArr2)//[3,4,5,6,7,8]

var newArr3 = arr.slice(1,-2)//从索引为1的元素一直截取到倒数第2个元素（不包含倒数第2个元素）
console.log(newArr3)//[2,3,4,5,6]
```

### splice

`splice()`

可用于删除数组中指定的元素，要修改原数组，并向数组添加新数据，且以数组的形式返回原数组删除的元素

参数1：开始位置的索引参数2：想要删除数据的个数、参数3及以后：传入的一些新元素，自动插入到开始索引对应的元素之前


```javascript
//splice()练习：写一个函数去除数组中重复的数字并返回新的数组
var arr = [2,1,3,5,6,1,3,6,2,5]

function delRe(arr){
 for(var i = 0;i<arr.length;i++){
     for(var j=i+1;j<arr.length;j++){
         if(arr[i]==a[j]){//如果相等就删除
         	arr.splice(i,1)
             j = i+1
         }
     }
 }
 return arr
}

var newArr = delRe(arr)
console.log(newArr)
```

### concat

`concat()` 可以连接多个数组或元素。该方法不会对原数组产生影响，返回一个连接好的新数组

```javascript
var arr1 = [1,2,3]
var arr2 = [4,5,6]
var arr3 = [7,8,9]

var newArr = arr1.concat(arr2,arr3,"chang","y")
console.log(newArr)// [1, 2, 3, 4, 5, 6, 7, 8, 9, "chang", "y"]
```

### join

`join()`

可以将数组转换成字符串。指定一个参数为连接字符串


```javascript
var arr = ["雷","霆","总","冠","军"]
var newArr = arr.join("!")//指定！为分割符
console.log(newArr)//"雷！霆！总！冠！军"
```

### reverse

`reverse()` 用来翻转数组，会对原数组产生影响

```javascript
var arr = [1,2,3,4,5,6]
console.log(arr.reverse())//[6,5,4,3,2,1]
```

### sort

`sort()`

用来给数组排序（会影响原数组）。按照Unicode编码来排序，所以排数字的时候可能出错

我们可以自己指定排序规则

可以在sort()写一个回调函数，回调函数中指定两个参数 a、b。浏览器会分别使用数组中的元素作为实参去调用函数

a在b前面:

* 如果函数返回值大于0，则a b 交换位置。a>b	
* 如果返回一个负数， 则a b位置不变。a<b
* 如果返回0，两个元素相等，位置不变。
* 总结：返回a-b（升序排列）返回b-a（降序排列）


```javascript
var arr = [1,4,2,6,7,5,11]
console.log(arr.sort())//[1, 11,2, 4, 5, 6, 7] 排序出现错误！11比2还小？

//自定义排序规则
arr = [1,4,2,6,7,5,11]
var newArr1 = arr.sort(function(a,b){//顺序
 if(a>b){
     return 1
 }else if(a<b){
      return -1    
 }else{
     return 0
 }
})
console.log(newArr1)// [1, 11, 2, 4, 5, 6, 7]

var newArr2 = arr.sort(function(a,b){//倒序
 if(a>b){
     return -1
 }else if(a<b){
      return 1    
 }else{
     return 0
 }
})
console.log(newArr2)//[11, 7, 6, 5, 4, 2, 1]

//简写
var newArr3 = arr.sort(function(a,b){
	return a-b//顺序排
})
var newArr3 = arr.sort(function(a,b){
	return b-a//到序排
})
```


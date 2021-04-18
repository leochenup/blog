---
title: "JS Generator"
date: 2021-04-18
sidebar: 'auto'
categories:
- FrontEnd
tags:
- JavaScript
---







# JS Generator

## 概念

 Generator 函数是 ES6 提供的一种异步编程解决方案。它既是一个生成器，也是一个状态机，内部拥有值及相关的状态，生成器返回一个迭代器 Iterator 对象，我们可以通过这个迭代器，手动地遍历相关的值、状态，保证正确的执行顺序。

## 特征

`function` 关键字与函数名之间有一个星号（ES6 没有规定，`function` 关键字与函数名之间的星号，写在哪个位置）。函数体内部使用 `yield` 表达式，定义不同的内部状态。调用 Generator 函数后，该函数并不执行，返回的也不是函数运行结果，而是一个指向内部状态的指针对象，也就是遍历器对象（Iterator Object）

```js
function* gen() { 
  yield 1
  yield 2
  return 3
  yield 4
}

let g = gen(); 
console.log(g.next())   // {value: 1, done: false}
console.log(g.next())   // {value: 2, done: false}
console.log(g.next())   // {value: 3, done: true}
console.log(g.next())   // {value: undefined, done: true}
```

<!-- more -->

 每次调用 `next()` 方法，内部指针就从函数头部或上一次停下来的地方开始执行，直到遇到下一个 `yield` 表达式（或 `return` 语句）为止。换言之，Generator 函数是分段执行的，`yield` 表达式是暂停执行的标记，而 `next()` 方法可以恢复执行。
 调用 Generator 函数，返回一个遍历器对象 Iterator，代表 Generator 函数的内部指针。每次调用遍历器对象的 `next()` 方法，就会返回一个有着 `value` 和 `done` 两个属性的对象。`value` 属性表示当前的内部状态的值，是 `yield` 表达式后面那个表达式的值；`done` 属性是一个布尔值，表示是否遍历结束。
 Generator 函数的暂停执行的效果，意味着可以把异步操作写在 `yield` 语句里面，等到调用 `next` 方法时再往后执行。这实际上等同于不需要写回调函数了，因为异步操作的后续操作可以放在 `yield` 语句下面，反正要等到调用 `next()` 方法时再执行。所以，Generator 函数的一个重要实际意义就是用来处理异步操作，改写回调函数。

**注意**：如果 `return` 语句后面还有 `yield` 表达式，那么后面的 yield 完全不生效。

**Iterator 的 return 的值不会被 for…of 循环到 ， 也不会被扩展符遍历到**

```js
function* gen() { 
  yield 1
  yield 2
  return 3
}

let g = gen()

console.log([...g])     // [1, 2]

for(let foo of g) {
    console.log( foo )  // 1, 2
}
```



## yield 表达式和 next() 方法

 由于 Generator 函数返回的遍历器对象，只有调用 `next` 方法才会遍历下一个内部状态，所以其实提供了一种可以暂停执行的函数。`yield` 表达式就是暂停标志。

**遍历器对象的next方法的运行逻辑：**

* 遇到 `yield` 表达式，就暂停执行后面的操作，并将紧跟在 `yield` 后面的那个表达式的值，作为返回的对象的 `value` 属性值。

* 下一次调用 `next(`) 方法时，再继续往下执行，直到遇到下一个 `yield` 表达式。

* 如果没有再遇到新的 `yield` 表达式，就一直运行到函数结束，直到 `return` 语句为止，并将 `return` 语句后面的表达式的值，作为返回的对象的 `value` 属性值。

* 如果该函数没有 `return` 语句，则返回的对象的 `value` 属性值为 `undefined`。

**注意：**

`yield` 表达式后面的表达式，只有当调用 `next` 方法、内部指针指向该语句时才会执行。

`yield` 语句只能用于 `function *` 的作用域，如果 `function*` 的内部还定义了其他的普通函数，则函数内部不允许使用 `yield` 语句。

`yield` 语句如果参与运算，必须用括号括起来

```js
function* gen() {
  	yield  123 + 456;      // yield后面的表达式123 + 456，不会立即求值，只会在next方法将指针移到这一句时，才会求值
}

function* gen() {
	return function () {
	    yield 1   // SyntaxError
	}
}

function* gen() {
  console.log('Hello' + yield); // SyntaxError

  console.log('Hello' + (yield)); // OK
}
```



## next() 方法的参数

`yield` 表达式本身没有返回值，或者说总是返回 `undefined`。

`next()` 方法可以带一个参数，该参数会改变上一个 `yield` 表达式的返回值。

```js
function* gen(x) {
  var y = 2 * (yield (x + 1))
  var z = yield (y / 3)
  return (x + y + z)
}

var a = gen(5);
a.next()    // {value: 6, done: false}
a.next()    // {value: NaN, done: false}
a.next()    // {value: NaN, done: true}

var b = gen(5);
b.next() 	// {value: 6, done: false}
b.next(12)  // {value: 8, done: false}
b.next(13)  // {value: 42, done: true}
```

 第一次调用 `a` 的 `next()` 方法时，返回 `x+1` 的值 `6`。第二次运行 `a` 的 `next()` 方法的时候不带参数，导致 `y` 的值等于 `2 * undefined`（即 `NaN` ），除以 `3` 以后还是 `NaN`，因此返回对象的 `value` 属性也等于 `NaN`。第三次运行 `a` 的 `next()` 方法的时候不带参数，所以 `z` 等于 `undefined`，返回对象的 `value` 属性等于 `5 + NaN + undefined`，即 `NaN`。
 第一次调用 `b` 的 `next()` 方法时，返回 `x+1` 的值 `6`；第二次调用 `next()` 方法，将上一次 `yield` 表达式的值设为 `12`，因此 `y` 等于 `24`，返回 `y / 3` 的值`8 `；第三次调用 `next()` 方法，将上一次 `yield` 表达式的值设为 `13`，因此 `z` 等于 `13`，这时` x` 等于 `5`，`y` 等于 `24`，所以 `return` 语句的值等于 `42`。

**注意**

在第一次使用 `next` 方法时，传递参数是无效的。V8 引擎直接忽略第一次使用 `next()` 方法时的参数，只有从第二次使用 `next` 方法开始，参数才是有效的。从语义上讲，第一个 `next` 方法用来启动遍历器对象，所以不用带有参数。

## Generator 的应用

### 处理 Promise

```js
let fs = require('fs');
let blueBird =  require('bluebird');
let read2 = blueBird.promisify(fs.readFile);
function *r(){
    let content1 = yield read2('./1.txt','utf8');
    let content2 = yield read2(content1,'utf8');
    return content2
}
let it2 = r();
it2.next().value.then(res=>{
   it2.next(res).value.then(res=>{
        console.log(res);
        console.log(it2.next(res));
     //需要给content2赋值，然后产出{ value: '大大大', done: true }
    })
});
```

为了更好的结合 `promise` 使用，出现了 co 库。
co 库的作用就是：把一个生成器函数的迭代器，最后一步执行完毕后，然后统一执行一个成功回调
安装：`npm install co --save`

```js
let co = require('co');
function *r2(){
    let content1 = yield read2('./1.txt','utf8');
    let content2 = yield read2(content1,'utf8');
    return content2
}
co(r2).then(function(res){console.log(res,11111111111111)});
```

co 库实现原理，就是利用产出值的 `done` 的状态，去判断是否需要再次递归执行 `next` 方法。

```js
function co(it){
    return new Promise(function(resolve,reject){
        function next(data){
            let {value,done}= it.next(data);
            if(!done){
                value.then(next, reject)
            }else{
                resolve(value)
            }
        }
        next();
    })
}
```

### 其他

**1. 斐波那契数列**

```js
function* flb(){
    let [pre, cur] = [0, 1]
    for(;;) {
        [pre, cur] = [cur, pre + cur]
        yield cur
    }
}
for(let k of flb()){
    if( k > 1000 ) break
    console.log(k)
}

// 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987
```

**2. Genarator 对数组部署 Iterator 接口**

```js
function* deploy(arr){
    var Index = 0
    while(Index < arr.length){
        yield arr[Index++]
    }
}

var arr = ['name', 'age', 'sex', 'hobby']

var val = deploy(arr)
console.log(val.next())  // {value: "name", done: false}
console.log(val.next())  // {value: "age", done: false}
console.log(val.next())  // {value: "sex", done: false}
console.log(val.next())  // {value: "hobby", done: false}
console.log(val.next())  // {value: undefined, done: true}

for(let k of deploy(arr)) {
	console.log(k)  // name age sex hobby
}
```













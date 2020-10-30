---
title: "java Iterator 迭代器接口"
date: 2020-10-30
sidebar: 'auto'
categories:
- 其他
tags:
- Java
---



# Iterator 迭代器接口



## Iterator 概述

`Collection` 接口继承了 `java.lang.Iterable` 接口，该接口有一个 `iterator()` 方法，那么所 有实现了`Collection` 接口的集合类都有一个 `iterator()` 方法，用以返回一个实现了 `Iterator` 接口的对象。

`Iterator` 仅用于遍历集合，`Iterator` 本身并不提供承装对象的能力。如果需要创建 `Iterator` 对象，则必须有一个被迭代的集合。

集合对象每次调用 `iterator()` 方法都得到一个全新的迭代器对象，默认游标都在集合 的第一个元素之前。



## Iterator接口的方法

| 方法                               | 描述                                     |
| ---------------------------------- | ---------------------------------------- |
| `boolean hasNext()`                | 判断是否还有下一个元素                   |
| `<T> next()`  `T` 为集合元素的类型 | 返回下一个元素                           |
| `void remove()`                    | 删除下一个元素（ `next()` 所返回的元素） |

::: details 点击显示代码

```java
package com.cqy.java;

import org.junit.Test;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;

/**
 * 集合元素遍历操作 使用Iterator 接口
 */
public class IteratorTest {

    @Test
    public void test1() {
        Collection coll = new ArrayList();
        coll.add(123);
        coll.add(false);
        coll.add(new Person(30, "ack"));

        Iterator iterator = coll.iterator();

        // 执行完一轮 next()，之后再执行 next(), 没有就报错 NoSuchElementException
//        System.out.println(iterator.next());

//        for (int i = 0; i < coll.size() ; i++) {
//            System.out.println(iterator.next());
//        }

        // 通常用法遍历collection ： hasNext() 搭配 next() 使用
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }
    }

    @Test
    public void test2() {
        // iterator.remove() 方法
        Collection coll1 = new ArrayList();
        coll1.add(123);
        coll1.add(false);
        coll1.add("str");
        coll1.add(new Person(30, "ack"));

        Iterator iterator = coll1.iterator();
        while (iterator.hasNext()) {
            Object object = iterator.next();
            if ("str".equals(object)) {
                // 删除 "str" 数据
                iterator.remove();
            }
        }

        Iterator iterator1 = coll1.iterator();
        while (iterator1.hasNext()) {
            System.out.println(iterator1.next());
        }
    }
}
```

:::

::: tip 注意

在调用 `it.next()` 方法之前必须要调用 `it.hasNext()` 进行检测。若不调用，且 下一条记录无效，直接调用 `it.next()` 会抛出 `NoSuchElementException` 异常。

`Iterator` 可以删除集合的元素，但是是遍历过程中通过迭代器对象的 `remove` 方法，不是集合对象的 `remove`方法。
如果还未调用`next()` 或在上一次调用 `next` 方法之后已经调用了 `remove` 方法，再调用 `remove`  都会报`IllegalStateException`。

:::


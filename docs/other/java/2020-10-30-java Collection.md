---
title: "java Collection 接口"
date: 2020-10-30
sidebar: 'auto'
categories:
- 其他
tags:
- Java
---




# java Collection 接口



## 集合概述

`Java` 集合可分为 `Collection` 和 `Map` 两种体系。

`Collection` 接口：单列数据，定义了存取一组对象的方法的集合。`List` 元素有序、可重复的集合。`Set` 元素无序、不可重复的集合。

`Map` 接口：双列数据，保存具有映射关系 `“key-value对”` 的集合。



### Collection 接口继承树

<img src="https://my-blog-leo.oss-cn-chengdu.aliyuncs.com/java_collection.png" width="500px" style="margin-left:50%; transform:translateX(-50%);"/>

<!-- more -->

### Map 接口继承树

<img src="https://my-blog-leo.oss-cn-chengdu.aliyuncs.com/java_map.png" width="500px" style="margin-left:50%; transform:translateX(-50%);"/>



## Collection 接口

`Collection` 接口是 `List`、`Set` 和 `Queue` 接口的父接口，该接口里定义的方法 既可用于操作 `Set` 集合，也可用于操作 `List` 和 `Queue` 集合。

`JDK` 不提供此接口的任何直接实现，而是提供更具体的子接口(如: `Set` 和 `List` ) 实现。

在 `Java5` 之前，`Java` 集合会丢失容器中所有对象的数据类型，把所有对象都 当成 `Object` 类型处理;从 `JDK 5.0` 增加了泛型以后，`Java` 集合可以记住容 器中对象的数据类型。



## Collection 接口方法

| 方法                                 | 描述                                                         |
| :----------------------------------- | :----------------------------------------------------------- |
| `add(Object obj) `                   | 添加单个元素                                                 |
| `addAll(Collection coll)`            | 添加单个元素                                                 |
| `int size()`                         | 获取有效元素的个数                                           |
| `void clear()`                       | 清空集合                                                     |
| `boolean isEmpty()`                  | 判断集合是否是空集合                                         |
| `boolean contains(Object obj)`       | 判断集合是否包含某个元素。是通过元素的 `equals` 方法来判断是否是同一个对象 |
| `boolean containsAll(Collection c)`  | 也是调用元素的 `equals` 方法来比较的。拿两个集合的元素挨个比较。 |
| `boolean remove(Object obj)`         | 通过元素的 `equals` 方法判断是否是要删除的那个元素。只会删除找到的第一个元素 |
| `boolean removeAll(Collection coll)` | 删除两个集合的公共元素。                                     |
| `boolean retainAll(Collection c)`    | 把交集的结果存在当前集合中，不影响c                          |
| `boolean equals(Object obj)`         | 集合是否相等                                                 |
| `Object[] toArray()`                 | 转成对象数组                                                 |
| `hashCode()`                         | 获取集合对象的哈希值                                         |
| `iterator()`                         | 遍历，返回迭代器对象，用于遍历集合                           |

::: details 点击查看代码
```java
package com.cqy.java;

import org.junit.Test;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;

/**
 * Collection 中元素类要重写 equals 方法 便于比较
 */

public class CollectionTest {

    @Test
    public void test1() {
//       add 方法参数为一个对对象
        Collection coll = new ArrayList();
        coll.add(123);
        coll.add(456);
        coll.add(new String("Tom"));
        coll.add(false);
        Person p = new Person(10, "CQY");
        coll.add(p);

//      coll.contains(123); 判断是否拥有 该对象
        boolean contains = coll.contains(123);
        System.out.println(contains);

        //判断的是内容 string 对象值相等就相等
        System.out.println(coll.contains(new String("Tom")));

        System.out.println(coll.contains(p));
        // 没有重写 equals 方法 ：类判断 地址是否相等。重写 equals 方法后执行equals 方法比较
        // 添加obj 类推荐重写 equals 方法。便于比较 coll.contains
        System.out.println(coll.contains(new Person(10, "CQY")));


        //2 containsAll(Collection coll1)
        // 判断 是否包含 coll1 中的所有元素
        Collection coll1 = Arrays.asList(123, 456, 4565);
        System.out.println("containsAll: " + coll.containsAll(coll1));
    }

    @Test
    public void test2() {
        // 3 remove(Object obj) 移除元素 返回bool值,删除成功 true
        // 也要比较 所以要执行 equals 方法，要重写 equals 方法
        Collection coll = new ArrayList();
        coll.add(123);
        coll.add(new Person(20, "Leo"));

        boolean r1 = coll.remove(234);
        boolean r2 = coll.remove(new Person(20, "Leo"));

        System.out.println("remove: " + r1);
        System.out.println("remove: " + r2);

        // 4 removeAll(Collection coll1) : 从集合中去除所有相同的元素（去除交集元素）
    }

    @Test
    public void test3() {
        // 5 retainAll(Collection coll) 求出与coll集合的交集。修改当前集合为所得值。
        Collection coll = new ArrayList();
        Collection coll1 = new ArrayList();
        coll.add(123);
        coll.add(345);
        coll1.add(345);
        coll.add(new Person(30, "ack"));

        coll.retainAll(coll1);
        System.out.println("retainAll: " + coll);

        // 6 equals(Object obj) 方法 比较集合是否相等
        boolean b = coll.equals(coll1);
        System.out.println(b);
    }

    @Test
    public void test4() {
        Collection coll = new ArrayList();
        coll.add(123);
        coll.add(345);
        coll.add(new Person(30, "ack"));

        // 7 hashCode() 返回当前对象的哈希值。Object 中 所有对象都可以调用
        System.out.println(coll.hashCode());

        // 8 toArray() 集合转换为数组
        Object[] arr = coll.toArray();
        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);
        }

        // 数组转集合
        List<Integer> list = Arrays.asList(new Integer[]{123, 345, 5});
        System.out.println(list);

        //iterator() 返回Iterator 接口实例,用于遍历集合元素


    }
}
```
:::



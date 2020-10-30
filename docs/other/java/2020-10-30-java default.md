---
title: "Java8 中的 default 方法详解"
date: 2020-10-30
sidebar: 'auto'
categories:
- 其他
tags:
- Java
---






# Java8 中的 default 方法详解


`Java 8` 新增了`default` 方法，它可以在接口添加新功能特性，而且还不影响接口的实现类。下面我们通过例子来说明这一点。


```java
public class MyClass implements InterfaceA {
 public static void main(String[] args){
 }

 @Override
 public void saySomething() {
 // TODO Auto-generated method stub
 }
}



interface InterfaceA{
 public void saySomething();
}
```

上面的代码显示了 `MyClass` 类实现了 `InterfacesA` 接口的 `saySomething()` 方法。现在我们为 `InterfacesA` 接口新增一个 `sayHi()` 方法。这么做的话，`MyClass` 类是无法通过编译的，除非我们提供了 `sayHi()` 的实现方法。

`Default` 方法是非常有用的，通过在接口定义的方法的访问修饰符前加上关键字 `default`，那么实现类就无需提供该方法的实现了。

```java
public class MyClass implements InterfaceA {
 public static void main(String[] args){
 }

 @Override
 public void saySomething() {
 // TODO Auto-generated method stub
 }
}



interface InterfaceA{
 public void saySomething();
 default public void sayHi(){
 System.out.println("Hi");
 }
}
```



**注意：我们必须提供所有的 `default` 方法的实现。** 因此，`default` 方法使我们的代码更加灵活，在接口中也可以写方法实现了。实现的方法会作为默认的方法实现。
那么，多接口存在冲突该怎么办？

由于 `Java` 类可以实现多个接口，那么就可能存在这样的情况：两个或多个接口都有一个同名的 `default` 接口方法，从而造成冲突。因为 `Java` 虚拟机在程序运行时，并不清楚你要使用哪一个 `default` 方法。这会导致编译错误。

```java
public class MyClass implements InterfaceA, InterfaceB {
 public static void main(String[] args){
 MyClass mc = new MyClass();
 mc.sayHi();
 }

 @Override
 public void saySomething() {
 // TODO Auto-generated method stub
 }
}



interface InterfaceA{
 public void saySomething();
 default public void sayHi(){
 System.out.println("Hi from InterfaceA");
 }
}

interface InterfaceB{
 default public void sayHi(){
 System.out.println("Hi from InterfaceB");
 }
}
```

它是通不过编译的，会报以下错误：

```
“Duplicate default methods named sayHi with the parameters () and () are inherited from the types InterfaceB and InterfaceA.”
```

除非在 `MyClass` 类中重写了 `sayHi()` 方法：

```java
public class MyClass implements InterfaceA, InterfaceB {
 public static void main(String[] args){
 MyClass mc = new MyClass();
 mc.sayHi();
 }

 @Override
 public void saySomething() {
 // TODO Auto-generated method stub
 }

 @Override
 public void sayHi(){
 System.out.println("implemetation of sayHi() in MyClass");
 }
}

interface InterfaceA{
 public void saySomething();
 default public void sayHi(){
 System.out.println("Hi from InterfaceA");
 }
}

interface InterfaceB{
 default public void sayHi(){
 System.out.println("Hi from InterfaceB");
 }
}
```

如果想指定调用哪一个接口的 `sayHi()`方法，我们可以这么做：`XXX.super.sayHi();`

```java
public class MyClass implements InterfaceA, InterfaceB {
 public static void main(String[] args){
 MyClass mc = new MyClass();
 mc.sayHi();
 }

 @Override
 public void saySomething() {
 // TODO Auto-generated method stub
 }

 @Override
 public void sayHi(){
 InterfaceA.super.sayHi();
 }
}

interface InterfaceA{
 public void saySomething();
 default public void sayHi(){
 System.out.println("Hi from InterfaceA");
 }
}

interface InterfaceB{
 default public void sayHi(){
 System.out.println("Hi from InterfaceB");
 }
}
```
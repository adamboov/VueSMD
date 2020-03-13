# Vue基本语法

## V-for
## V-on 语法糖 @
   * v-on:click="某个变量" 语法糖 @click="某个变量"
   * v-on:click="某个方法名" 语法糖 @click="某个方法名"

## 掌握el data methods
  * el 类型：string | HTMLElement
        作用： 决定之后Vue实例会管理哪个DOM
  *data 类型： Object | Function(组件当中data必须是一个函数)
        作用： Vue实例对应的数据对象
  *methods 类型 { [ key: string ]: Function }
        作用：定义方法，在其他地方调用，也可在指令中使用

## 方法与函数的区别：
      在类里面的叫方法，单独在外的叫函数。

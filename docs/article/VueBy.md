---
title: Vue
---
# Vue.js

## 计算属性和侦听器

### 计算属性

::: warning 注意
对于任何复杂逻辑，你都应当使用计算属性。
:::
**计算属性是基于它们的响应式依赖进行缓存的**。只在相关响应式依赖发生改变时它们才会重新求值。如果没有发生改变，计算属性会从缓存中读取

#### 计算属性的 setter

``` js
// ...
computed: {
  fullName: {
    /**
     * getter
     * 回调函数 当需要读取当前属性值是执行，根据相关数据计算并返回当前属性的值
     */
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    /**
     * setter
     * 监视当前属性值的变化，当属性值发生变化时执行，更新相关的属性数据
     * newValue就是fullName3的最新属性值
     */
    set: function (newValue) {
      var names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}
// ...
```

### 侦听器(watch)

::: tip 提示
虽然计算属性在大多数情况下更合适，但有时也需要一个自定义的侦听器。这就是为什么 Vue 通过 watch 选项提供了一个更通用的方法，来响应数据的变化。当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。
:::
使用 `watch` 选项允许我们执行异步操作 (访问一个 API)，限制我们执行该操作的频率，并在我们得到最终结果前，设置中间状态。这些都是计算属性无法做到的。

#### watch的使用

- **类型**：`{ [key: string]: string | Function | Object | Array }`
- **详细**：

    一个对象，键是需要观察的表达式，值是对应回调函数。值也可以是方法名，或者包含选项的对象。Vue 实例将会在实例化时调用 $watch()，遍历 watch 对象的每一个属性。
- **示例**：

``` js
var vm = new Vue({
  data: {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: {
      f: {
        g: 5
      }
    }
  },
  watch: {
    a: function (val, oldVal) {
      console.log('new: %s, old: %s', val, oldVal)
    },
    // 方法名
    b: 'someMethod',
    // 该回调会在任何被侦听的对象的 property 改变时被调用，不论其被嵌套多深
    c: {
      handler: function (val, oldVal) { /* ... */ },
      deep: true
    },
    // 该回调将会在侦听开始之后被立即调用
    d: {
      handler: 'someMethod',
      immediate: true
    },
    e: [
      'handle1',
      function handle2 (val, oldVal) { /* ... */ },
      {
        handler: function handle3 (val, oldVal) { /* ... */ },
        /* ... */
      }
    ],
    // watch vm.e.f's value: {g: 5}
    'e.f': function (val, oldVal) { /* ... */ }
  }
})
vm.a = 2 // => new: 2, old: 1
```

::: warning 注意
不应该使用箭头函数来定义 watcher 函数 (例如 searchQuery: newValue => this.updateAutocomplete(newValue))。理由是箭头函数绑定了父级作用域的上下文，所以 this 将不会按照期望指向 Vue 实例，this.updateAutocomplete 将是 undefined。
:::

- **选项：deep**

为了发现对象内部值的变化，可以在选项参数中指定 deep: true 。注意监听数组的变动不需要这么做。

``` js
  vm.$watch('someObject', callback, {
  deep: true
})
vm.someObject.nestedValue = 123
// callback is fired
```

- **选项：immediate**

在选项参数中指定 immediate: true 将立即以表达式的当前值触发回调：

``` js
vm.$watch('a', callback, {
  immediate: true
})
// 立即以 `a` 的当前值触发回调
```

注意在带有 immediate 选项时，你不能在第一次回调时取消侦听给定的 property。

``` js
// 这会导致报错
var unwatch = vm.$watch(
  'value',
  function () {
    doSomething()
    unwatch()
  },
  { immediate: true }
)
```

如果你仍然希望在回调内部调用一个取消侦听的函数，你应该先检查其函数的可用性：

``` js
var unwatch = vm.$watch(
  'value',
  function () {
    doSomething()
    if (unwatch) {
      unwatch()
    }
  },
  { immediate: true }
)
```

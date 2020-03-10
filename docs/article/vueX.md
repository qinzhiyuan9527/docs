# 学习vuex
## state
#### 在 Vue 组件中获得 Vuex 状态
由于 `Vuex` 的状态存储是响应式的，从 `store` 实例中读取状态最简单的方法就是在[计算属性](https://qinzhiyuan.top/article/vueJs.html#计算属性)中返回某个状态：
``` js
// 创建一个 Counter 组件
const Counter = {
  template: `<div>{{ count }}</div>`,
  computed: {
    count () {
      return store.state.count
    }
  }
}
```
每当 `store.state.count` 变化的时候, 都会重新求取计算属性，并且触发更新相关联的 DOM。

然而，这种模式导致组件依赖全局状态单例。在模块化的构建系统中，在每个需要使用 `state` 的组件中需要频繁地导入，并且在测试组件时需要模拟状态。

Vuex 通过 `store` 选项，提供了一种机制将状态从根组件“注入”到每一个子组件中（需调用 Vue.use(Vuex)）：
``` js
const app = new Vue({
  el: '#app',
  // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
  store,
  components: { Counter },
  template: `
    <div class="app">
      <counter></counter>
    </div>
  `
})
```
通过在根实例中注册 `store` 选项，该 `store` 实例会注入到根组件下的所有子组件中，且子组件能通过 `this.$store` 访问到。让我们更新下 `Counter` 的实现：
``` js
const Counter = {
  template: `<div>{{ count }}</div>`,
  computed: {
    count () {
      return this.$store.state.count
    }
  }
}
```
::: warning 提醒
`Vue.use(Vuex)` 在哪里使用
:::
在 `Vuex` 所在的文件里：
``` js
// src/store 文件
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state' // 引入的文件
import mutations from './mutations' // 引入的文件

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations
})
```
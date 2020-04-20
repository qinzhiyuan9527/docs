# vue组件间的通信
## 兄弟组件通信
#### 新建一个`bus`的文件,里面代码
``` js
/**
 * bus文件哪里用到就在哪里引入
 */

// 导入Vue
import Vue from 'vue'
// 创建一个新的Vue实例
const Bus = new Vue()
// 导出创建的实例
export default Bus
```
#### 传出数据的组件里的代码:
``` vue
<script>
import bus from '@/lib/bus'
export default {
  name: 'tongxing1',
  data () {
    return {}
  },
  methods: {
    // 触发的事件
    Mysend () {
        /**
         * @$emit
         * 第一个参数：要自定义的事件名
         * 第二个参数：是要传出的数据
         */
        bus.$emit('on-send', { age: 1 })
    }
  }
}
</script>
```
#### 接收数据的组件里的代码:
``` vue
<script>
import bus from '@/lib/bus'
export default {
  name: 'tongxing2',
  data () {
    return {
      dataSend: 0 // 初始值
    }
  },
  created () {
    /**
     * 监听on-send事件，获取兄弟组件传出的值
     * data 是传过来的数据
     */
    bus.$on('on-send', data => {
      this.dataSend += data.age
    })
  }
}
</script>
```
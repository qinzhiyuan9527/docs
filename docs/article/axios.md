# axios
## axios封装
::: tip 提示
使用 `class` 类封装
:::
``` js
// 这个文件的路径是 @/lib/axios
import axios from 'axios'
import { baseURL } from '@/config'
class HttpRequest {
  constructor (baseUrl = baseURL) {
    this.baseUrl = baseUrl
    this.queue = {}
  }
  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        //
      }
    }
    return config
  }
  distroy (url) {
    delete this.queue[url]
    if (!Object.keys(this.queue).length) {
      // Spin.hide()
    }
  }
  interceptors (instance, url) {
    instance.interceptors.request.use(config => {
      // 添加全局的loading...
      if (!Object.keys(this.queue).length) {
        // Spin.show()
      }
      this.queue[url] = true
      return config
    }, error => {
      return Promise.reject(error)
    })
    instance.interceptors.response.use(res => {
      this.distroy(url)
      const { data, status } = res
      return { data, status }
    }, error => {
      this.distroy(url)
      return Promise.reject(error)
    })
  }
  request (options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}
export default HttpRequest
```
- 使用是需要先创建 `axios` 的实例
``` js
// 这个文件的路径是 @/lib/axios
// 引入封装的axios
import HttpRequest from '@/lib/axios'
// 创建实例
const axios = new HttpRequest()
export default axios
```
示范
``` js
import axios from '@/lib/axios'

export const getUserInfo = ({ userId }) => {
  return axios.request({
    url: '/getUserInfo',
    method: 'post',
    data: {
      userId
    }
  })
}
```
::: warning 提示
官方的方法
:::
``` js
import axios from 'axios'
// import store from '@/store'

// Set config defaults when creating the instance
const request = axios.create({
  baseURL: '127.0.0.1' // 请求基础路径
})

// Add a request interceptor
request.interceptors.request.use(function (config) {
  // Do something before request is sent
  // const { user } = store.state
  // if (user) {
  //   config.headers.Authorization = `Bearer ${user.token}`
  // }
  config.data = JSON.stringify(config.data)
  config.headers = {
    'token': 'sssss',
    'Content-Type': 'application/json'
  }
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
request.interceptors.response.use(function (response) {
  // Do something with response data
  // return response.data
  // return response.data.data || response.data
  return response
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})

export default request
```
- 示例

``` js
import request from '@/utils/request'

// POST
export const login = ({ mobile, code }) => {
  return request({
    method: 'POST',
    url: '/app/v1_0/authorizations',
    data: {
      mobile,
      code
    }
  })
}
// 或
export const login = (data) => {
  return request({
    method: 'POST',
    url: '/app/v1_0/authorizations',
    data: data
  })
}
// GET
export const NewsRecommendation = ({ channelId, timestamp, withTop }) => {
  return request({
    method: 'GET',
    url: '/app/v1_1/articles',
    params: {
      channel_id: channelId,
      timestamp,
      with_top: withTop
    }
  })
}
// 或
export const NewsRecommendation = (params) => {
  return request({
    method: 'GET',
    url: '/app/v1_1/articles',
    params: params
  })
}
```
// app.js
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import { createRouter } from './router'
Vue.use(ElementUI);
Vue.use(axios)
export function createApp () {
  // 创建 router 实例
  const router = createRouter()

  const app = new Vue({
    // 注入 router 到根 Vue 实例
    router,
    render: h => h(App)
  })

  // 返回 app 和 router
  return { app, router }
}
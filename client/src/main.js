// app.js
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import "element-ui/lib/theme-chalk/index.css"
import api from "./api/api.js"
import {getCookie,setCookie,delCookie} from "./utils/cookie.js"
Vue.use(ElementUI)
Vue.prototype.$getCookie = getCookie;
Vue.prototype.$setCookie = setCookie;
Vue.prototype.$delCookie = delCookie;
Vue.prototype.$api = api;
const app = new Vue({
  // 注入 router 到根 Vue 实例
  router,
  render: h => h(App)
}).$mount("#app")

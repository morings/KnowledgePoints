// app.js
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import "../src/assets/css/reset.css"
import "element-ui/lib/theme-chalk/index.css"
import "../src/assets/css/main.css"
import "../src/assets/css/star.css"
import api from "./api/api.js"
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
import vuescroll from 'vuescroll';
import store from "./store"
// 你可以在这里设置全局配置
Vue.use(vuescroll); // install the vuescroll first
Vue.use(Viewer)
import {getCookie,setCookie,delCookie} from "./utils/cookie.js"
Vue.use(ElementUI)
Vue.prototype.$getCookie = getCookie;
Vue.prototype.$setCookie = setCookie;
Vue.prototype.$delCookie = delCookie;
Vue.prototype.$api = api;
const app = new Vue({
  // 注入 router 到根 Vue 实例
  router,
  store,
  render: h => h(App)
}).$mount("#app")

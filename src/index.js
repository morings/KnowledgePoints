import Vue from "vue"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import ZmScroll from "./zm-scroll.vue"
Vue.use(ElementUI);
window.zmComponents = {
  scroll:Vue.extend(ZmScroll)
}

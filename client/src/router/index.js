import Vue from 'vue'
import VueRouter from 'vue-router'
import {getCookie} from "../utils/cookie.js"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/index'
  },
  {
    path: '/login',
    name: 'Login',  
    component: () => import( '../views/login/Login.vue')
  },
  {
    path: '/index',
    name: 'Index', 
    component: () => import( '../views/chat/index.vue'),
    meta:{
      needLogin:true
    }
  }
]
const router = new VueRouter({
  routes
})
router.beforeEach((to,form,next)=>{
  if(to.meta.needLogin){
    if(getCookie('userid')){
      next()
    }else{
      next('/login')
    }
  }else{
    next()
  }  
})
export default router

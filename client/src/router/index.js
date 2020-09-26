import Vue from 'vue'
import VueRouter from 'vue-router'
import {getCookie} from "../utils/cookie.js"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/login'
  },
  {
    path: '/login',
    name: 'Login',  
    component: () => import( '../views/login/Login.vue')
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

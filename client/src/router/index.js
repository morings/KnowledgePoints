import Vue from 'vue'
import VueRouter from 'vue-router'
import {getCookie} from "../utils/cookie.js"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/chat'
  },
  {
    path: '/login',
    name: 'Login',  
    component: () => import( '../views/login/Login.vue')
  },
  {
    path:'/main',
    redirect:'/chat',
    component: () => import( '../views/main/index.vue'),
    children:[
      {
        path: '/chat',
        name: 'Chat', 
        component: () => import( '../views/main/chat/Chat.vue'),
        meta:{
          needLogin:true
        }
      }
    ]
  } 
]
const router = new VueRouter({
  routes
})
/*router.beforeEach((to,form,next)=>{
  if(to.meta.needLogin){
    if(getCookie('userid')){
      next()
    }else{
      next('/login')
    }
  }else{
    next()
  }  
})*/
export default router

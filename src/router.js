// router.js
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path:'/',
        redirect:'/login'
      },
      {
        path: '/login',
        name: 'login',
        component:() => import('./components/login/Login.vue') 
      },
      {
        path: '/register',
        name: 'register',
        component:() => import('./components/login/Register.vue') 
      },
    ]
  })
}
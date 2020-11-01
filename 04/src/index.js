
import  "./main.scss"
import App from "./app.vue"
import Vue from "vue"
import 'babel-polyfill'
new Promise((resolve)=>{
  setTimeout(()=>{
    resolve()
  },1000)
  
}).then(()=>{
  console.log('promise执行了')
})
new Vue({
  render: h => h(App), 
}).$mount('#app')
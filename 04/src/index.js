
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
let a = 123;//用babel，webpack打包后，转换成es5写法(let-var)
console.log(a)
new Vue({
  render: h => h(App), 
}).$mount('#app')
# vue实例创建时template中的内容会完全替换$el(包括$el),如果没有template就以$el中的内容渲染
# new Vue时可以是对象也可以是函数，Vue.component和Vue.extend时只能时函数
# 使用基础 Vue 构造器，创建一个“子类”。Vue.extend()
# 优先级：组件中>mixins>extends>extned
# Vue实例只能$mount一次，一旦初始化时指定了$el,执行$mount方法无效，同样第二次$mount方法也无效
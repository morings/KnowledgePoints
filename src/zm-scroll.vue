<template>
  <el-scrollbar :wrap-class="wrapClass" :view-class="viewClass">
    <div v-html="content"></div>
  </el-scrollbar>
</template>
<script>
export default {
  name:'ZmScroll',
  beforeMount(){
    this.content = this.content?this.content:this.$el.innerHTML;
  },
  data(){
    return {
      content:'',
      viewClass:'',
      wrapClass:''
    }
  }
}
</script>
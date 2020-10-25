<template>
<div class="index">
  <main-nav class="side"></main-nav>
  <router-view class="content"></router-view>
</div> 
</template>
<script>
import MainNav from "./MainNav"
export default {
  components:{
    MainNav
  },
  mounted(){
    this.$store.dispatch('getUserInfo',this.$getCookie('userid'))
  }
}
</script>
<style lang="scss" scoped>
.index{
  display: flex;
  width: 100%;
  height: 100%;
}
.side{
  width: 70px;
  flex-shrink: 0;
  height: 100%;
}
.content{
  flex:1;
  height: 100%;
}
</style>
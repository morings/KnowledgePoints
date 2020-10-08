<template>
<div class="index">
  <main-nav class="side"></main-nav>
</div> 
</template>
<script>
import MainNav from "./MainNav"
export default {
  components:{
    MainNav
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
</style>
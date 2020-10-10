<template>
  <div class="SearchPanel">
    <search-input v-model="search"></search-input>
    <i class="iconfont iconPlus"></i>
  </div>
</template>
<script>
import SearchInput from "@components/SearchInput"
export default {
  components:{
    SearchInput
  }
}
</script>
<style lang="scss" scoped>
.SearchPanel{
  display: flex;
  padding: 17px 12px 10px;
  align-items: center;
  flex-shrink: 0;
  .iconPlus{
    margin-left: 12px;
    flex-shrink: 0;
    font-size: 30px;
    color:#606060;
    cursor: pointer;
  }
}
</style>
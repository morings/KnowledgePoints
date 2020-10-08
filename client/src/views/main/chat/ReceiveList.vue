<template>
  <div class="ReceiveList">
    <div class="search">
      <search-input v-model="search"></search-input>
      <i class="iconfont iconPlus"></i>
    </div>
    
  </div>
</template>
<script>
import SearchInput from "../../../components/SearchInput"
export default {
  data(){
    return{
      search:''
    }
  },
  components:{
    SearchInput
  }
}
</script>
<style lang="scss" scoped>
.ReceiveList{
  width: 315px;
  background-color: #E5E4E4;
  padding: 25px 0;
  .search{
    display: flex;
    padding: 0 12px;
    margin-bottom: 12px;
    align-items: center;
    .iconPlus{
      margin-left: 12px;
      flex-shrink: 0;
      font-size: 30px;
      color:#606060;
      cursor: pointer;
    }
  }
}
</style>

<template>
  <div class="ChatSide">
    <div class="search">
      <search-input v-model="search"></search-input>
      <i class="iconfont iconPlus"></i>
    </div>
    <div class="receiveList">
      <vue-scroll>
        <receive-item v-for="item in receiveList" :key="item.name" :item='item'></receive-item>
      </vue-scroll>
    </div>
  </div>
</template>
<script>
import SearchInput from "../../../components/SearchInput"
import ReceiveItem from "@components/ReceiveItem"
export default {
  data(){
    return{
      search:'',
      receiveList:[
        {
          name:"冯倩",
          avatar:'',
          desc:'',
          time:''
        },
         {
          name:"订阅号",
          avatar:'',
          desc:'前端大全，做了八年前端还是一事无成',
          time:''
        }
      ]
    }
  },
  components:{
    SearchInput,
    ReceiveItem
  }
}
</script>
<style lang="scss" scoped>
.ChatSide{
  width: 315px;
  background-color: #E5E4E4;
  padding: 25px 0;
  display: flex;
  flex-direction: column;
  .search{
    display: flex;
    padding: 0 12px;
    margin-bottom: 12px;
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
  .receiveList{
    flex:1
  }
}
</style>

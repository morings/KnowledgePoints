<template>
  <div class="ChatSide">
    <div class="search">
      <search-input v-model="search"></search-input>
      <i class="iconfont iconPlus"></i>
    </div>
    <div class="receiveList">
      <vue-scroll :ops='ops'>
        <receive-item v-for="(item,index) in receiveList" :key="index" :item='item'></receive-item>
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
          time:'14：06'
        },
         {
          name:"订阅号",
          avatar:'',
          desc:'前端大全，做了八年前端还是一事无成',
          time:'昨天'
        },
        {
          name:"冯倩",
          avatar:'',
          desc:'',
          time:'14：06'
        },
         {
          name:"订阅号",
          avatar:'',
          desc:'前端大全，做了八年前端还是一事无成',
          time:'昨天'
        },
        {
          name:"冯倩",
          avatar:'',
          desc:'',
          time:'14：06'
        },
         {
          name:"订阅号",
          avatar:'',
          desc:'前端大全，做了八年前端还是一事无成',
          time:'昨天'
        },
        {
          name:"冯倩",
          avatar:'',
          desc:'',
          time:'14：06'
        },
         {
          name:"订阅号",
          avatar:'',
          desc:'前端大全，做了八年前端还是一事无成',
          time:'昨天'
        },
        {
          name:"冯倩",
          avatar:'',
          desc:'',
          time:'14：06'
        },
         {
          name:"订阅号",
          avatar:'',
          desc:'前端大全，做了八年前端还是一事无成',
          time:'昨天'
        },
        {
          name:"冯倩",
          avatar:'',
          desc:'',
          time:'14：06'
        },
         {
          name:"订阅号",
          avatar:'',
          desc:'前端大全，做了八年前端还是一事无成',
          time:'昨天'
        },
        {
          name:"冯倩",
          avatar:'',
          desc:'',
          time:'14：06'
        },
         {
          name:"订阅号",
          avatar:'',
          desc:'前端大全，做了八年前端还是一事无成',
          time:'昨天'
        },{
          name:"冯倩",
          avatar:'',
          desc:'',
          time:'14：06'
        },
         {
          name:"订阅号",
          avatar:'',
          desc:'前端大全，做了八年前端还是一事无成',
          time:'昨天'
        },
        {
          name:"冯倩",
          avatar:'',
          desc:'',
          time:'14：06'
        },
         {
          name:"订阅号",
          avatar:'',
          desc:'前端大全，做了八年前端还是一事无成',
          time:'昨天'
        },{
          name:"冯倩",
          avatar:'',
          desc:'',
          time:'14：06'
        },
         {
          name:"订阅号",
          avatar:'',
          desc:'前端大全，做了八年前端还是一事无成',
          time:'昨天'
        }
      ],
      ops:{
        bar:{
          background:'#e8e6e6'
        }
      }
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
  background-color: #f5f5f5;
  padding-top: 25px ;
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
    height: calc(100% - 43px);
    width: 100%;
  }
}
</style>

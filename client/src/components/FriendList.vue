<template>
  <div class="FriendList">
    <section class="block" v-for="(block,index) in blocks" :key="index">
      <div class="blockName">{{block.name}}</div>
      <ul>
        <li v-for="item in block.friends" :key="item.name" class="star-flex1 friend">
          <img :src="item.avatar" alt="" class="star-avatar">
          <div class="friendName star-flex-item" style="margin-left:5px">{{item.name}}</div>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
export default {
  data(){
    return{
      blocks:[
        {
          name:"A",
          friends:[
            {
              name:"阿爸",
              avatar:''
            },
            {
              name:"阿妈",
              avatar:''
            }
          ]
        },
        {
          name:"B",
          friends:[
            {
              name:"阿爸",
              avatar:''
            },
            {
              name:"阿妈",
              avatar:''
            }
          ]
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.FriendList{
  .block{
    border-bottom: 1px solid #e8e6e6;
    padding-top: 20px;
    &:last-child{
      border: none;
    }
  }
  .friend{
    padding: 10px 15px;
  }
  .blockName{
    padding: 0 15px;
  }
}
</style>
<template>
  <div class="new_friends">
    <section class="header">新的朋友</section>
    <ul class="list">
      <li class="apply" v-for="item in list" :key="item._id">
        <img :src="item.avatar" alt="">
        <div>
          <div class="nickname">{{item.nickname}}</div>
          <div class="nickname">{{item.desc}}</div>
        </div>
        <el-button type='success' v-if="!item.isAggre">接受</el-button>
        <el-button type='text' disabled>接受</el-button>
      </li>
    </ul>   
  </div>
</template>
<script>
export default {
  computed:{
    userid(){
      
      return this.$store.state.user.userid;
    }
  },
  data(){
    return{
      list:[]
    }
  },
  mounted(){
    this.search()
  },
  methods:{
    search(){
      this.$api.queryFriendApply({userid:this.userid}).then(res=>{
        this.list = res.list
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.new_friends{
  position: relative;
  height: 100%;
  background-color: #f5f5f5;
  flex:1;
  .header{
    display: flex;
    padding: 20px 0;
    padding-left: 50px;
    border-bottom: 1px solid #e8e6e6;
  }
  .list{
    height: calc(100% - 57px);
    overflow: auto;
    padding: 0 100px;
    .apply{
      padding: 15px ;
      border-bottom: 1px solid #e8e6e6;
      
    }
  }
}
</style>
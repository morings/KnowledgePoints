<template>
  <nav class="main-nav">
    <img :src="avatar" alt="头像" class="avatar_img" v-viewer>
    <div class="navs">
      <router-link :to="'index'" v-for="(item,index) in navs" :key="item.name" :title="item.name" :class="['iconfont',item.class,active==index?'active':'']" tag="i"></router-link>
    </div>   
    <footer>
      <i class="iconfont icongengduo-2" title="更多"></i>
    </footer>
  </nav>
</template>
<script>
export default {
  data(){
    return{
      navs:[
        {
          name:"聊天",
          class:'iconchat',
          path:'/chat'
        },
        {
          name:"通讯录",
          class:'iconweimingmingwenjianjia_tongxunlu',
           path:'/chat1'
        },
        {
          name:"收藏",
          class:'iconshoucanghezi',
           path:'/chat2'
        }
      ],
      avatar:''
    }
  },
  computed:{
    active(){
      return this.$router.path
    }
  },
  mounted(){
    this.$api.getUserInfo({userid:this.$getCookie("userid")}).then(res=>{
      this.avatar = res.avatar
    })
  }
}
</script>
<style lang="scss" scoped>
.main-nav{
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  box-sizing: border-box;
  .avatar_img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-bottom: 20px;
  }
  .navs{
     display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
  }
  .iconfont{
    font-size: 32px;
    color: #fff;
    margin-top: 20px;
    cursor: pointer;
    &.active{
      color: chartreuse;
    }
  }
}
</style>
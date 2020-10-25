<template>
  <div class="CommunicationWindow">
    <div class="friendInfo">
      <section class="base">
        <div class="name">{{info.name}}</div>
        <img :src="info.avatar" alt="" class="avatar">
      </section>
      <footer class="star-text-center">
        <el-button type='success' @click="addRecive">发消息</el-button>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      id:'',
      info:{

      }
    }
  },
  computed:{
    userid(){
      return this.$store.state.user.userid
    }
  },
  mounted(){
    this.id = this.$route.params.id;
    this.getFriendInfo()
  },
  methods:{
    getFriendInfo(){
      this.$api.getFriendInfo({id:this.id}).then(res=>{
        this.info = res;
      })
    },
    addRecive(){
      this.$api.addReceive({userid:this.userid,friendId:this.id}).then(res=>{
        this.$router.push(`/receive/${res.id}`)
      });
    }
  }
}
</script>
<style lang="scss" scoped>
.CommunicationWindow{
  position: relative;
  height: 100%;
  background-color: #eeeeee;
  flex: 1;
  .friendInfo{
    position: absolute;
    top: 50px;
    margin: auto;
    left: 0;
    right: 0;
    width: 400px;
    .base{
      display: flex;
      padding: 20px 0;
      border-bottom: 1px solid #e8e6e6;
      .avatar{
        width: 80px;
        height: 80px;
        margin-left: 10px;
      }
      .name{
        flex:1
        
      }
    }
    .detail{
      padding: 20px 0;
      border-bottom: 1px solid #e8e6e6;
      .label{
        width: 150px;
      }
      li{
        margin-bottom: 10px;
        &:last-child{
          margin-bottom: 0;
        }
      }
    }
    footer{
      padding-top: 20px;
    }
  }
}
</style>
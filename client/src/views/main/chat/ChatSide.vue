<template>
  <div class="ChatSide">
    <search-panel></search-panel>
    <div class="receiveList star-side-main">
      <vue-scroll :ops='ops'>
        <receive-item v-for="(item,index) in receiveList" :key="index" :item='item'></receive-item>
      </vue-scroll>
    </div>
  </div>
</template>
<script>
import SearchPanel from "@components/SearchPanel"
import ReceiveItem from "@components/ReceiveItem"
export default {
  data(){
    return{
      search:'',
      receiveList:[
      ],
      ops:{
        bar:{
          background:'#e8e6e6'
        }
      }
    }
  },
  components:{
    SearchPanel,
    ReceiveItem
  },
  computed:{
    userid(){
      return this.$store.state.user.userid || this.$getCookie('userid')
    }
  },
  mounted(){
    this.$api.getReceiveList({userid:this.userid}).then(res=>{
      this.receiveList = res;
    })
  }
}
</script>
<style lang="scss" scoped>
.ChatSide{
  width: 315px;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #DCDFE6;
}
</style>

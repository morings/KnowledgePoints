<template>
  <div class="SearchPanel">
    <search-input v-model="search"></search-input>
    <el-dropdown trigger="click" @command='handle'>
      <i class="iconfont iconPlus"></i>
      <el-dropdown-menu slot="dropdown" class="add_menu">
        <el-dropdown-item command='1'><i class="iconfont iconxiaoxi"></i>发起群聊</el-dropdown-item>
        <el-dropdown-item command='2'><i class="iconfont icontianjiahaoyou"></i>添加朋友</el-dropdown-item>
        <el-dropdown-item command='3'><i class="iconfont iconrichscan_icon"></i>扫一扫</el-dropdown-item>
        <el-dropdown-item command='4'><i class="iconfont iconshoufukuan"></i>收付款</el-dropdown-item>
        <el-dropdown-item command='5'><i class="iconfont iconziyuan"></i>帮助与反馈</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <add-friend ref="add_friend"></add-friend>
  </div>
</template>
<script>
import SearchInput from "@components/SearchInput"
import AddFriend from "@components/AddFriend"
export default {
  components:{
    SearchInput,
    AddFriend
  },
  data(){
    return{
      search:''
    }
  },
  methods:{
    handle(index){
      if(index==2){
        this.$refs.add_friend.show()
      }
    }
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
<style lang="scss">
.add_menu.el-dropdown-menu{
  background-color: #333333;
  color: #fff;
  padding: 0;
  .el-dropdown-menu__item{
    color: #fff;
    &:hover{
      background-color: #282525;
    }
  }
  .iconfont{
    margin-right: 15px;
  }
}
.add_menu .popper__arrow::after{
  border-bottom-color: #333333!important;
}

</style>
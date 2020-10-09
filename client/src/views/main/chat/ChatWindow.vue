<template>
  <div class="ChatWindow" ref='window'>
    <div class="chatName">文件传输助手</div>
    <div class="messageList" ref="messageList">
      <vue-scroll></vue-scroll>
    </div>
    <div class="sendPanel" ref="sendPanel">
      <div class="tools">
        <i class="iconfont iconemoji_icon"></i>
        <i class="iconfont iconwenjian"></i>
        <i class="iconfont iconjianqie"></i>
        <i class="iconfont icondibudaohanglan-"></i>
      </div>
      <div class="move" ref="move"></div>
      <el-input type='textarea'></el-input>
      <el-button type="info" plain size='mini' class="sendBtn">发送</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      move_s:null
    }
  },
  mounted(){
    console.log(this.$refs.sendPanel.offsetHeight)
    this.$refs.move.addEventListener('mousedown',(e)=>{
      this.move_s = e.clientY;
    },false);
    this.$refs.window.addEventListener('mousemove',(e)=>{
      if(!this.move_s) return;
      let dis = e.clientY - this.move_s;
      let height = this.$refs.sendPanel.offsetHeight - dis ;
      this.move_s = e.clientY;   
      if(height<200 || height>400) return;
      this.$refs.sendPanel.style.height = height+'px';
      this.$refs.messageList.style.bottom = height+'px';   
    },false);
    document.body.addEventListener('mouseup',(e)=>{
      this.move_s = null;
    },false)
  }
}
</script>
<style lang="scss" scoped>
.ChatWindow{
  position: relative;
  .chatName{
    padding:20px 30px;
    font-size: 16px;
    color:#333;
    background-color: #f5f5f5;
    border-bottom: 1px solid #e8e6e6;
  }
  .messageList{
    position: absolute;
    left: 0;
    right: 0;
    top: 58px;
    bottom:200px
  }
  .sendPanel{
    position: absolute;
    bottom:0px;
    left: 0;
    right: 0;
    .tools{
      position: absolute;
      top: 10px;
      margin-left: 10px;
      z-index: 99;
      i{
        color:#B1B1B1;
        font-size: 14px;
        margin-left: 10px;
      }
    }
    .sendBtn{
      position: absolute;
      bottom:10px;
      right: 20px;
    }
    .move{
      width: 100%;
      display: block;
      border-top:1px solid #DCDFE6;
      padding-bottom: 9px;
      content: '';
      cursor: n-resize;
      pointer-events:auto;
      position: absolute;  
      z-index: 99;
    }
  }
}
</style>
<style lang="scss">
.sendPanel{
  height: 200px;
  .el-textarea{
    height: 100%;
  }
  .el-textarea__inner{
    height: 100%;
    padding: 30px 20px 35px;
    color: #333;
    font-size: 14px;
    border-top: none;
    border-left: none;
    border-right: none;
    background-color: #f5f5f5;
    border-radius: 0;
    &:focus{
      background-color: #fff;
      border-color: #DCDFE6;
    }    
  }
}
</style>
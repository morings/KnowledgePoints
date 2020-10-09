<template>
  <div class="ChatWindow">
    <div class="chatName">文件传输助手</div>
    <div class="messageList">
      <vue-scroll></vue-scroll>
    </div>
    <div class="sendPanel">
      <div class="tools"></div>
      <el-input type='textarea'></el-input>
      <el-button type="info" plain size='mini' class="sendBtn">发送</el-button>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.ChatWindow{
  .chatName{
    padding:20px 30px;
    font-size: 16px;
    color:#333;
    background-color: #f5f5f5;
    border-bottom: 1px solid #e8e6e6;
  }
  .sendPanel{
    position: relative;
    .tools{
      position: absolute;
    }
    .sendBtn{
      position: absolute;
      bottom:10px;
      right: 10px;
    }
  }
}
</style>
<style lang="scss">
.sendPanel{
  .el-textarea__inner{
    height: 250px;
    padding: 40px 10px;
  }
}
</style>
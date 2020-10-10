<template>
  <div class="CommunicationWindow">
    <div class="friendInfo">
      <section class="base">
        <div class="name">曲志龙</div>
        <img src="" alt="" class="avatar">
      </section>
      <section class="detail">
        <ul>
          <li class="star-flex1">
            <div class="label">姓名</div>
            <div class="value star-flex-item">姓名</div>
          </li>
          <li class="star-flex1">
            <div class="label">姓名</div>
            <div class="value star-flex-item">姓名</div>
          </li>
        </ul>
      </section>
      <footer class="star-text-center">
        <el-button type='success'>发消息</el-button>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.CommunicationWindow{
  position: relative;
  height: 100%;
  background-color: #eeeeee;
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
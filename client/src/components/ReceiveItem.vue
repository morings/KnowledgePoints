<template>
  <div class="ReceiveItem">
    <img :src="item.avatar" class="icon">
    <div class='info star-flex-item'>
      <div class="star-flex1">
        <div class="name star-flex-item star-textover">{{item.name}}</div>
        <div class="time">{{item.time}}</div>
      </div>
      <div class="desc star-textover">{{item.desc}}</div>
    </div>
  </div>
</template>
<script>
export default {
  props:['item']
}
</script>
<style lang="scss" scoped>
.ReceiveItem{
  padding: 12px;
  width: 100%;
  display: flex;
  &.active{
    background-color: #e8e6e6;;
  }
  .icon{
    width:38px;
    height: 38px;
  }
  .info{
    margin-left: 10px;
    .name{
      font-size: 14px;
      color:#333
    }
    .time,.desc{ 
      font-size: 12px;
      color:#9e9e9e
    }
    .desc{
      margin-top: 10px;
    }
    .time{
      margin-left: 10px;
    }
  }
}
</style>

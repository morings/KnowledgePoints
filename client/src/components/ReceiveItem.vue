<template>
  <div class="ReceiveItem star-flex1">
    <img :src="item.avatar" alt="头像">
    <div class='info star-flex-item'>
      <div class="star-flex1">
        <div class="name star-flex-item">{{item.name}}</div>
        <div class="time">{{item.time}}</div>
      </div>
      <div class="desc">{{item.desc}}</div>
    </div>
  </div>
</template>
<script>
export default {
  props:['item']
}
</script>
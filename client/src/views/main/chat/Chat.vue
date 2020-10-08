<template>
  <div class="Chat">
    <receive-list class="receiveList"></receive-list>
  </div>
</template>
<script>
import ReceiveList from "./ReceiveList"
export default {
  components:{
    ReceiveList
  }
}
</script>
<style lang="scss" scoped>
.Chat{
  display: flex;
  .receiveList{
    flex-shrink: 0;
    height: 100%;
  }
}
</style>
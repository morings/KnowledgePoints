<template>
  <div class="Chat">
    <chat-side class="ChatSide"></chat-side>
  </div>
</template>
<script>
import ChatSide from "./ChatSide"
export default {
  components:{
    ChatSide
  }
}
</script>
<style lang="scss" scoped>
.Chat{
  display: flex;
  .ChatSide{
    flex-shrink: 0;
    height: 100%;
  }
}
</style>
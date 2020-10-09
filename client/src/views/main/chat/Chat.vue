<template>
  <div class="Chat">
    <chat-side class="ChatSide"></chat-side>
    <chat-window class="star-flex-item"></chat-window>
  </div>
</template>
<script>
import ChatSide from "./ChatSide"
import ChatWindow from "./ChatWindow"
export default {
  components:{
    ChatSide,
    ChatWindow
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
<template>
  <div class="communication star-flex1">
    <communication-side class="CommunicationSide"></communication-side>
    <router-view></router-view>
  </div>
</template>
<script>
import CommunicationSide from "./CommunicationSide"
import CommunicationWindow from "./CommunicationWindow"
export default {
  components:{
    CommunicationSide,
    CommunicationWindow
  }
}
</script>
<style lang="scss" scoped>
.communication{
  .CommunicationSide{
    flex-shrink: 0;
    height: 100%;
  }
}
</style>
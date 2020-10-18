<template>
  <div class="CommunicationSide">
    <search-panel></search-panel>

    <friend-list class="FriendList star-side-main"> </friend-list>
  </div>
</template>
<script>
import SearchPanel from "@components/SearchPanel"
import FriendList from "@components/FriendList"
export default {
  components:{
    SearchPanel,
    FriendList
  }
}
</script>
<style lang="scss" scoped>
.CommunicationSide{
  width: 315px;
  background-color: #eeeeee;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #DCDFE6;
}
</style>
<template>
  <div class="FriendList">
    <section class="block">
      <div class="blockName">新的朋友</div>
      <ul>
        <router-link class="star-flex1 friend" tag='li' to="/newFriends">
          <img src="../assets/img/newFriend.png" class="star-avatar">
           <div class="friendName star-flex-item" style="margin-left:5px">新的朋友</div>
        </router-link>
      </ul>
    </section>
    <section class="block" >
      <div class="blockName">好友列表</div>
      <ul>
        <li v-for="item in friends" :key="item.friendName" class="star-flex1 friend">
          <img :src="item.friendAvatar" alt="" class="star-avatar">
          <div class="friendName star-flex-item" style="margin-left:5px">{{item.friendName}}</div>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
export default {
  computed:{
    friends(){
      return this.$store.state.user.friendList
    }
  }
}
</script>
<style lang="scss" scoped>
.FriendList{
  .block{
    border-bottom: 1px solid #e8e6e6;
    padding-top: 20px;
    &:last-child{
      border: none;
    }
  }
  .friend{
    padding: 10px 15px;
    cursor: pointer;
  }
  .blockName{
    padding: 0 15px;
  }
}
</style>
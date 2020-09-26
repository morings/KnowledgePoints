<template>
  <nav class="main-nav">
    <img src="" alt="头像" class="avatar">
    <img v-for="item of navs" :key="item.name" :src="item.icon" :alt="item.name" :title="item.name">
    <footer>
      <img src="" alt="更多" class="more">
    </footer>
  </nav>
</template>
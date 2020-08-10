<template>
  <div id="app">
    <input type="text" v-model.trim="msg">
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: ''
    }
  },
  watch: {
    msg(newValue) {
      console.log(newValue);
    }
  }
}
</script>
<template>
  <div id="app">
    <input type="text" v-model.lazy="msg">
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
  }
}
</script>
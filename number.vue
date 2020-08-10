<template>
  <div id="app">
    <input type="text" v-model.number="msg">
    <p>{{msg}} : {{typeof(msg)}}</p>
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
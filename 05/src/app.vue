<template>
<img :src="son" alt="">
</template>
<script>
import son from "./son.png"
export default {
  data(){
    return{
      son:son
    }
  }
}
</script>
<style lang="scss">
#app{
  color:red
}
</style>
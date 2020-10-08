<template>
  <el-input placeholder="搜索" prefix-icon="el-icon-search"  size='mini' class="SearchInput" :clearable='true' v-model="val" @change="change"></el-input>
</template>
<script>
export default {
  props:['value'],
  data(){
    return{
      val:''
    }
  },
  methods:{
    change(){
      this.$emit('input',this.val)
    }
  }
}
</script>
<style lang="scss">
.SearchInput{
  .el-input__inner{
    background-color: #DBD9D8;
    &:focus{
      background-color: #fff;
    }
    &::placeholder{
      color:#818181
    }
  }
  .el-input__icon{
    color: #818181;
  }
}
</style>
//单图片上传组件
<template>
  <div class="Avatar-Upload">
    <template v-if="url || disabled">
      <img :src="url" alt="" class="avatar-uploader-img" ref="img" v-viewer>
      <div class="hover" v-if='!disabled'>
        <el-button type="primary" @click="selectFile">重传</el-button><el-button type="danger" @click="preview">预览</el-button>
      </div>
    </template>
    <template v-else>
      <i class="el-icon-plus avatar-uploader-icon" @click="selectFile"></i>
    </template>
    <input type="file" style="display:none" ref="input" accept='image/*' @change='changed'>
  </div>
</template>
<script>
export default {
  props:{
    disabled:{
      default:false,
      type:Boolean
    },
    value:{
      
    }
  },
  data(){
    return {
      url:"",
      file:null,
      view:null
    }
  },
  watch:{
    value(){
      if(this.value instanceof File){
        this.url = URL.createObjectURL(this.value);
      }else{
        this.url = this.value
      }
    }
  },
  mounted(){
    if(this.value instanceof File){
        this.url = URL.createObjectURL(this.value);
      }else{
        this.url = this.value
      }
  },
  methods:{
    selectFile(){
      this.$refs.input.click();
    },
    changed(e){
      this.file = this.$refs.input.files[0];
      this.url = URL.createObjectURL(this.file);
      this.$emit('input',this.file)
    },
    preview(){
      this.$refs.img.click()
    }
  }
}
</script>
<style lang="scss" scoped>
.Avatar-Upload{
  display: inline-block;
  text-align: center;
  border: 1px dashed #d9d9d9;
  background-color: #fbfdff;
  position: relative;
  &:hover{
    border-color: #409eff;
    .hover{
      opacity: 1;
    }   
  }
  .hover{
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
    position: absolute;
    top:0;
    left: 0;
    background-color: rgba(0,0,0,.5);
    opacity: 0;
    transition: opacity .3s;
  }
  .avatar-uploader-icon{
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
    cursor: pointer;
  }
  .avatar-uploader-img{
    width: 178px;
    height: 178px;
    cursor: pointer;
  }
}
</style>
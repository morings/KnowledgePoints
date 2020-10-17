<template>
  <el-dialog class="add_friend"  title="添加好友" width="50%" :visible.sync="visible">
    <el-input placeholder="请输入邮箱" v-model="email" ><el-button slot="append" icon="el-icon-search"></el-button></el-input>
    <el-table border  style=" margin-top: 30px;" >
      <el-table-column
        align='center'
        prop="date"
        label="用户头像">
      </el-table-column>
     <el-table-column
        align='center'
        prop="date"
        label="邮箱">
      </el-table-column>
      <el-table-column
        align='center'
        prop="name"
        label="昵称">
      </el-table-column>
      <el-table-column
        align='center'
        prop="address"
        label="操作">
      </el-table-column>
    </el-table>
  </el-dialog>
</template>
<script>
export default {
  data(){
    return{
      visible:false,
      email:''
    }
  },
  methods:{
    show(){
      this.visible = true
    }
  }
}
</script>

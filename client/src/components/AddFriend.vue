<template>
  <el-dialog class="add_friend"  title="添加好友" width="50%" :visible.sync="visible">
    <el-input placeholder="请输入邮箱" v-model="query.email" ><el-button slot="append" icon="el-icon-search" @click='queryAccount'></el-button></el-input>
    <el-table border  style=" margin: 30px 0;" :data='tableData'>
      <el-table-column
        align='center'
        prop="avatar"
        label="用户头像">
        <template slot-scope="scoped">
          <el-avatar  :src="scoped.row.avatar" alt=""></el-avatar>
        </template>
      </el-table-column>
     <el-table-column
        align='center'
        prop="email"
        label="邮箱">
      </el-table-column>
      <el-table-column
        align='center'
        prop="nickname"
        label="昵称">
      </el-table-column>
      <el-table-column
        align='center'
        label="操作">
        <template slot-scope="scoped">
          <el-button type="text" v-if="!scoped.row.hasApply" @click="addFriend(scoped.row._id)">添加</el-button>
          <el-button type="text" disabled v-else>已添加</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      @current-change="queryAccount"
      :current-page.sync="query.pageIndex"
      :page-size="query.pageSize"
      layout="prev, pager,next,jumper"
      :total="total">
    </el-pagination>
  </el-dialog>
</template>
<script>
export default {
  data(){
    return{
      visible:false,      
      tableData:[],
      total:0, 
      query:{
        pageIndex:1,
        pageSize:10,
        email:''
      }
    }
  },
  computed:{
    userid(){
      return this.$store.state.user.userid
    }
  },
  methods:{
    show(){
      this.visible = true
    },
    queryAccount(){
      this.$api.queryAccount({userid:this.userid,...this.query}).then(res=>{
        this.tableData = res.list;
        this.total = res.total;
      })
    },
    addFriend(id){
      this.$api.addFriend({userid:this.userid,friendId:id}).then(res=>{
        this.$message({type:'success',message:'已发送好友申请'})
        this.queryAccount()
      })
    }
  }
}
</script>

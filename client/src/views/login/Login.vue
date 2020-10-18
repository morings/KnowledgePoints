<template lang="html">
  <div class="">
    <el-row>
      <el-col :span="10" :offset="7">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="用户登录" name="login">
            <el-col >
              <el-form :model="dynamicValidateForm" label-width="100px" ref="dynamicValidateForm">
                    <el-form-item
                      prop="email"
                      label="邮箱"
                      :rules="rules.email"
                    >
                      <el-input v-model="dynamicValidateForm.email"></el-input>
                    </el-form-item>
                    <el-form-item
                    prop="password"
                    label="密码"
                    :rules = "rules.password" 
                    >
                      <el-input type="password" v-model="dynamicValidateForm.password"></el-input>
                    </el-form-item>
                    <el-button type="primary" @click="submitForm('dynamicValidateForm')">登录</el-button>
                    <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
              </el-form>
            </el-col>
          </el-tab-pane>
          <el-tab-pane label="用户注册" name="register">
            <Register @complete="activeName='login'"></Register>
          </el-tab-pane>
      </el-tabs>
    </el-col>
    </el-row>
  </div>
</template>

<script>
import Register from "./Register.vue"
export default {
    name: 'login',
    data() {
        return {
            dynamicValidateForm: {
                email: '',
                password: ''
            },
            activeName: 'login',
            // 输入校验
            rules: {
                email: [{
                        required: true,
                        message: '请输入邮箱地址',
                        trigger: 'blur'
                    },
                    {
                        type: 'email',
                        message: '请输入正确的邮箱地址',
                        trigger: 'blur'
                    }
                ],
                password: {
                    required: true,
                    message: '请输入密码',
                    trigger: 'blur'
                }
            }
        }
    },
    components: {
        Register
    },
    methods: {
        handleClick(tab, event) {},
        // 重置
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        // 登录
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    let opt = this.dynamicValidateForm;
                    this.$api.login(opt).then(data => {                                      
                        this.$message({
                            type: 'success',
                            message: '登录成功'
                        })
                        this.$setCookie('userid',data._id);
                        this.$router.push("/chat")     
                    })
                } else {
                    console.log('Error Submit!!');
                    return false;
                }
            });
        }
    }
}
</script>

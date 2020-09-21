webpackJsonp([0],{162:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{},[t("el-row",[t("el-col",{attrs:{span:10,offset:7}},[t("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(r){e.activeName=r},expression:"activeName"}},[t("el-tab-pane",{attrs:{label:"用户登录",name:"first"}},[t("el-col",[t("el-form",{ref:"dynamicValidateForm",attrs:{model:e.dynamicValidateForm,"label-width":"100px"}},[t("el-form-item",{attrs:{prop:"email",label:"邮箱",rules:e.rules.email}},[t("el-input",{model:{value:e.dynamicValidateForm.email,callback:function(r){e.$set(e.dynamicValidateForm,"email",r)},expression:"dynamicValidateForm.email"}})],1),t("el-form-item",{attrs:{prop:"password",label:"密码",rules:e.rules.password}},[t("el-input",{attrs:{type:"password"},model:{value:e.dynamicValidateForm.password,callback:function(r){e.$set(e.dynamicValidateForm,"password",r)},expression:"dynamicValidateForm.password"}})],1),t("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.submitForm("dynamicValidateForm")}}},[e._v("登录")]),t("el-button",{on:{click:function(r){return e.resetForm("dynamicValidateForm")}}},[e._v("重置")])],1)],1)],1),t("el-tab-pane",{attrs:{label:"用户注册",name:"second"}},[t("Register")],1)],1)],1)],1)],1)},s=[],i=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{},[t("el-form",{ref:"registerValidateForm",attrs:{model:e.registerValidateForm,"label-width":"100px"}},[t("el-form-item",{attrs:{prop:"email",label:"邮箱",rules:e.rules.email}},[t("el-input",{model:{value:e.registerValidateForm.email,callback:function(r){e.$set(e.registerValidateForm,"email",r)},expression:"registerValidateForm.email"}})],1),t("el-form-item",{attrs:{prop:"password",label:"密码",rules:e.rules.password}},[t("el-input",{attrs:{type:"password"},model:{value:e.registerValidateForm.password,callback:function(r){e.$set(e.registerValidateForm,"password",r)},expression:"registerValidateForm.password"}})],1),t("el-form-item",{attrs:{prop:"checkPass",label:"再次输入",rules:e.rules.checkPass}},[t("el-input",{attrs:{type:"password"},model:{value:e.registerValidateForm.checkPass,callback:function(r){e.$set(e.registerValidateForm,"checkPass",r)},expression:"registerValidateForm.checkPass"}})],1),t("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.submitForm("registerValidateForm")}}},[e._v("注册")]),t("el-button",{on:{click:function(r){return e.resetForm("registerValidateForm")}}},[e._v("重置")])],1)],1)},l=[],o={name:"login",data:function(){var e=this;return{registerValidateForm:{email:"",password:"",checkPass:"",first:"first"},rules:{email:[{required:!0,message:"请输入邮箱地址",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{validator:function(e,r,t){/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{6,16}$/.test(r)?t():t(new Error("密码长度需6-16位，且包含字母和字符"))},trigger:"blur"}],checkPass:[{required:!0,message:"请再次输入密码",trigger:"blur"},{validator:function(r,t,a){""===t?a(new Error("请再次输入密码")):t!==e.registerValidateForm.password?a(new Error("两次输入密码不一致!")):a()},trigger:"blur"}]}}},methods:{resetForm:function(e){this.$refs[e].resetFields()},submitForm:function(e){var r=this;this.$refs[e].validate(function(e){if(!e)return console.log("Error Submit!!"),!1;var t=r.registerValidateForm;api.userRegister(t).then(function(e){e.data.success?(r.$message({type:"success",message:"注册成功，请登录"}),r.$router.go(0),r.$router.push("/login")):r.$message({type:"info",message:"此账户已存在"})}).catch(function(e){console.log(e)})})}}},n=o,m=t(78),c=Object(m.a)(n,i,l,!1,null,null,null),u=c.exports,d={name:"login",data:function(){return{dynamicValidateForm:{email:"",password:""},activeName:"first",rules:{email:[{required:!0,message:"请输入邮箱地址",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:"blur"}],password:{required:!0,message:"请输入密码",trigger:"blur"}}}},components:{Register:u},methods:{handleClick:function(e,r){},resetForm:function(e){this.$refs[e].resetFields()},submitForm:function(e){var r=this;this.$refs[e].validate(function(e){if(!e)return console.log("Error Submit!!"),!1;var t=r.dynamicValidateForm;api.UserLogin(t).then(function(e){var t=e.data;if(console.log(t),t.info||r.$message({type:"info",message:"账号不存在"}),t.success){r.$message({type:"success",message:"登录成功"}),r.$store.dispatch("UserLogin",t.token),r.$store.dispatch("UserName",t.email);var a=decodeURIComponent(r.$route.query.redirect||"/");r.$router.push({path:a})}else r.$message({type:"info",message:"密码错误"})})})}}},p=d,g=Object(m.a)(p,a,s,!1,null,null,null);r.default=g.exports}});
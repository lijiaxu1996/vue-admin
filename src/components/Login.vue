<template>
  <div class="login-container">
    <div class="login-content">
      <!-- <span class="login-title">vue-admin</span> -->
      <el-form ref="loginFormRef"  :model="loginForm" label-width="0px" class="login-form" :rules="loginRules">
        <el-form-item :class="formItem" prop="username"> 
          <el-input v-model="loginForm.username" prefix-icon="iconfont iconyonghu" :class="loginInput"></el-input>
        </el-form-item>
         <el-form-item :class="formItem" prop="password">
          <el-input v-model="loginForm.password" type="password" prefix-icon="iconfont iconmima"  :class="loginInput"></el-input>
        </el-form-item>
         <el-form-item class="login-btns" >
          <el-button type="primary" :class="elMarginLeft" @click="loginValidate">登录</el-button>
           <el-button type="info" :class="elMarginRight" @click="resetBtnHandler">重置</el-button>
         </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
// import { delete } from 'vue/types/umd';
import jwtDecode from 'jwt-decode'

import decode from '../utils/'
export default {
    data(){
        return {
            formItem: 'el-form-item__content_update',
            loginBtns:'login-btns',
            elMarginLeft: 'el-margin-left',
            elMarginRight: 'el-margin-right',
            loginInput:'login-input',
            loginForm: {
                username:'lijiaxu1996',
                password:'123456 '
            },
      
            loginRules: {
              username:[
                
                  { required: true, message: '请输入管理员名字', trigger: 'blur' },
                  { min: 3, max: 20, message: '账号长度需要 3到 20 个字符', trigger: 'blur' }
                
              ],
              password: [
                { required: true, message: '请输入登录密码', trigger: 'blur' },
              { min: 6, max: 20, message: '密码长度需要 6 到 15 个字符', trigger: 'blur' }
              ]
            }
        }
    },
    beforeRouteEnter(to,from,next){
      if(from.path!=='/home'){
      next(vm=>{
        vm.$notify.success({
          message:'欢迎您登录vue-admin后台管理系统',
          duration: 3000
        });
      })}
      else if(from.path==='/home')
      next(vm => {
        vm.$msg.success('退出成功!');
      });
    },
    methods:{
      resetBtnHandler(){
        this.$refs.loginFormRef.resetFields();
      },
      loginValidate(){
        this.$refs.loginFormRef.validate(async res => {
          if(!res) return;
          let user=await this.$http.post('signin',this.loginForm);
          // console.log(user);
          let {data:result} = user;
          // console.log(result); 
          if(result.code===1) return this.$msg.error(result.error);
          else {
            this.$msg.success(`登录成功!`);
            let token = result.data;
             const decode = jwtDecode(token);  
              this.$store.dispatch('setUser',decode);        

            localStorage.setItem('token',token)
            // console.log(decode);
            // window.sessionStorage.setItem('username',decode.username)
            // window.sessionStorage.setItem('username',decode(user.config.headers))
            this.$router.push('/home')
            }
        })
      }
    }
};
</script>
<style lang="less" scoped>
#app>.login-container {
  height: 100%;
  background: url("https://cdn.jsdelivr.net/gh/lijiaxu1996/img-hosting@master//login.jpg")
    no-repeat;
  background-size: cover;
// background-color: rgb(40,44,52);
}
.login-title{
    display: inline-block;
    width: 50%;
    height: 15%;
    text-align: center;
    line-height: 15%;
    position: absolute;
    top: 10%;
    left: 25%;
    font-size: 18px;
}
.login-content {
  width: 35%;
  height: 35%;
  background-color: rgba(255, 255, 255, 0.3);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
}
.login-btns{
    position: relative;
}
.login-form {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 20px 10px;
    box-sizing: border-box;
}
.login-input{
    // margin-top: 5px;
    margin-bottom: 5px;
}
.el-form-item__content_update {
    line-height: 0;
}
.el-margin-left{
    position: absolute;
    left: 10%;
    top: -10%;
}
.el-margin-right{
    position: absolute;
    right: 10%;
    top: -10%
    // margin-left: 90px;
}
@media screen and (max-width: 500px) {
    .el-margin-left {
      min-width: 40px !important;
      // font-size:;
      padding: 5px 5px;
    }
    .el-margin-right {
      min-width: 40px !important;
      // font-size:;
      padding: 5px 5px;
    }
   .login-content{
     min-width: 80%;
    //  min-height: 5%;
   }
   .login-title{
     top: 14%;
   }
}

</style>
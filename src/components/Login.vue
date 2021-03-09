<template>
  <div class="login-container">
    <div class="login-content">
      <el-form ref="loginFormRef"  :model="loginForm" label-width="0px" class="login-form" :rules="loginRules">
        <el-form-item :class="formItem" prop="username"> 
          <el-input v-model="loginForm.username" prefix-icon="iconfont icon-yonghu" :class="loginInput"></el-input>
        </el-form-item>
         <el-form-item :class="formItem" prop="password">
          <el-input v-model="loginForm.password" type="password" prefix-icon="iconfont icon-mima"  :class="loginInput"></el-input>
        </el-form-item>
         <el-form-item class="login-btns" >
          <el-button type="primary" :class="elMargin" @click="loginValidate">登录</el-button>
           <el-button type="info" @click="resetBtnHandler">重置</el-button>
         </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return {
            formItem: 'el-form-item__content_update',
            loginBtns:'login-btns',
            elMargin: 'el-margin',
            loginInput:'login-input',
            loginForm: {
                username:'zhangshan',
                password:'123456 '
            },
      
            loginRules: {
              username:[
                
                  { required: true, message: '请输入管理员名字', trigger: 'blur' },
                  { min: 3, max: 10, message: '账号长度需要 3到 10 个字符', trigger: 'blur' }
                
              ],
              password: [
                { required: true, message: '请输入登录密码', trigger: 'blur' },
              { min: 6, max: 15, message: '密码长度需要 6 到 15 个字符', trigger: 'blur' }
              ]
            }
        }
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
            this.$msg.success('登录成功');
            window.sessionStorage.setItem('token',result.data)
            this.$router.push('/home')
            }
        })
      }
    }
};
</script>
<style lang="less" scoped>
.login-container {
  height: 1209px;
  background: url("https://cdn.jsdelivr.net/gh/lijiaxu1996/img-hosting@master//login.jpg")
    no-repeat;
  background-size: cover;
// background-color: rgb(40,44,52);
}
.login-title{
    display: inline-block;
    width: 200px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    position: absolute;
    top: 35px;
    left: 25%;
    font-size: 18px;
}
.login-content {
  width: 35%;
  height: 280px;
  background-color: rgba(255, 255, 255, 0.3);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
}
.login-btns{
    display: flex;
    justify-content: space-around;
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
.el-margin{
    margin-right: 80px;
}
</style>
<template>
  <div class="login-container">
    <div class="login-content">
      <el-form  :model="loginForm" label-width="0px" class="login-form" >
        <el-form-item :class="formItem">
          <el-input v-model="loginForm.username" prefix-icon="iconfont icon-yonghu" :class="loginInput"></el-input>
        </el-form-item>
         <el-form-item :class="formItem">
          <el-input v-model="loginForm.password" type="password" prefix-icon="iconfont icon-mima"  :class="loginInput"></el-input>
        </el-form-item>
         <el-form-item class="login-btns" >
          <el-button type="primary" :class="elMargin">登录</el-button>
           <el-button type="info">重置</el-button>
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
                username:'李佳叙',
                password:'123345 '
            }
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
  height: 300px;
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
    margin-bottom: 25px;
}
.el-form-item__content_update {
    line-height: 0;
}
.el-margin{
    margin-right: 80px;
}
</style>
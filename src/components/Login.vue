<template>
  <div class="login-container">
    <video
      autoplay
      loop
      poster="polina.jpg"
      class="bgvid"
      id="bgvid"
      muted="muted"
    >
      <source
        src="https://cdn.jsdelivr.net/gh/lijiaxu1996/img-hosting@master/img/sky.mp4"
        type="video/mp4"
      />
    </video>
    <!-- <div class="login-content">
      <el-form label-width="0px" class="login-form">
          <el-form-item>
          <el-input></el-input>
        </el-form-item>
          <el-form-item>
          <el-input></el-input>
        </el-form-item>

          <el-form-item>
            <el-button type="primary" disabled>登录</el-button>
            <el-button type="info" disabled>重置</el-button>
        </el-form-item>
      </el-form>
    </div> -->
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.login-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
}
.login-content {
  position: absolute;
  z-index: 100;
  width: 8rem;
  height: 10.67rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:transparent;
}
.login-content > .login-form{
  height: 4.44rem;
  width: 4rem;
  background-color: rgba(0,0,0,0.3);
}
.login-form-item{

}
video#bgvid {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -100;
  background-size: cover;
}
</style>

<template>
  <div class="login-container">
  <video autoplay loop poster="polina.jpg" class="bgvid" id="bgvid" muted="muted">
          <source src="https://cdn.jsdelivr.net/gh/lijiaxu1996/img-hosting@master/img/me.mp4" type="video/mp4">
    </video>
  </div>
</template>
<script>
export default {

};
</script>
<style lang="less" scoped>
body{
        background-color:gray;
        background:url("https://cdn.jsdelivr.net/gh/lijiaxu1996/img-hosting@master/img/me.mp4") no-repeat center 0px;
    }
 video#bgvid {
        position: fixed; right: 0; bottom: 0;
        min-width: 100%; min-height: 100%;
        width: auto; height: auto; z-index: -100;
        background-size: cover;
    }
</style>

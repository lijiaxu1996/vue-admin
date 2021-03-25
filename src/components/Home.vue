<template>
  <el-container>
    <el-header>
      <span class="home-logo">vue-admin后台管理系统</span>
      <!-- <el-menu class="el-menu-demo">
        <template slot="title">我的工作台</template>
        <el-menu-item></el-menu-item>
        <el-menu-item><el-button type="info" @click="signOutHandler">登出</el-button></el-menu-item>
      </el-menu>
      <el-dropdown>
        <span class="el-dropdown-link">
          个人中心<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>修改密码</el-dropdown-item>
          <el-dropdown-item></el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>-->
      <el-button
        :class="loginSignout"
        type="text"
        class="iconfont icontuichu"
        @click="signOutHandler"
        >退出</el-button
      >
      
    </el-header>

    <el-container>
      <el-aside :width="iscollaps ? '64px' : '224px'">
        <!-- 侧边栏区域开始 -->
        <div class="toggle-button" @click="toggleHandler">|||</div>
        <el-menu
          background-color=" #254244"
          text-color="#fff"
          unique-opened
          :collapse="iscollaps"
          router
        >
          <el-submenu
            :index="menu.id + ''"
            v-for="menu in menuList"
            :key="menu.id"
          >
            <template slot="title">
              <i :class="iconsObj[menu.id]"></i>
              <span>{{ menu.name }}</span>
            </template>

            <el-menu-item
              :index="subMenusObj[menuc.id] + ''"
              v-for="menuc in menu.children"
              :key="menuc.id"
            >
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{ menuc.name }}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view />
        <el-footer>©{{ newDate }}|Lijiaxu版权所有</el-footer>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      loginSignout: 'login-signout',
      menuList: [],
      iconsObj: {
        1: 'iconfont iconquanxian',
        2: 'iconfont iconyonghu',
      },
      iscollaps: false,
      subMenusObj: {
        3: '/roles',
        4: '/menus',
        5: '/users',
      },
      username:''
    }
  },
  created() {

    this.getMenus()

  },
  mounted:function(){
    this.username=this.$store.state.user.username;
    console.log(this.username);
  },
  methods: {
    signOutHandler() {
      window.sessionStorage.clear()
      this.$router.push('/login')
      //   this.$msg.success('退出成功!')
    },
    async getMenus() {
      const { data } = await this.$http.get('/api/role/getResource')
      // console.log(data);
      if (data.code !== 0) return this.$notify.error('列表获取失败')
      else this.menuList = data.data.menus
      // console.log(this.menuList);
    },
    toggleHandler() {
      this.iscollaps = !this.iscollaps
    }
  },
  computed: {
    newDate: function () {
      return new Date().getFullYear()
    },
  },
}
</script>
<style lang="less">
.el-header {
  background-color: rgb(47, 68, 78);
  color: whitesmoke;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
}

.el-aside {
  background-color: #254244;
  color: whitesmoke;
  margin-right: none;
  .el-menu {
    margin-right: none;
  }
}
.el-submenu__title:hover,
.el-menu-item:hover {
  background-color: rgb(69, 112, 117) !important;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  // position: relative;
}
#app > .el-container {
  height: 100%;
}
.home-login {
  display: inline-block;
}
.login-signout {
  // padding: 4px 6px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 14px;
  color: rgb(235, 235, 235);
}
.el-footer {
  background-color: rgb(47, 68, 78);
  height: 60px;
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
  color: whitesmoke;
  text-align: center;
  font-family: 'Courier New', Courier, monospace;
  font-size: 16px;
  font-weight: 100;
  line-height: 60px;
  padding-left: 20%;
  box-sizing: border-box;
}
.toggle-button {
  background-color: rgb(96, 136, 143);
  font-size: 10px;
  line-height: 20px;
  text-align: center;
  margin-right: none;
  letter-spacing: 0.1em;
  cursor: pointer;
}
</style>
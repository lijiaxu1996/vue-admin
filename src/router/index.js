import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path:'/',
    redirect:'/login'
  },
  {
    path:'/home',
    component:Home
  }
]

const router = new VueRouter({
  routes
})


//路由前置守卫
router.beforeEach((to,from,next) => {
  if(to.path === '/login') return next();
  let getToken = window.sessionStorage.getItem('token');
  if(!getToken) return next('/login');
  next();
})
export default router

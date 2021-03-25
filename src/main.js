import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuex from 'vuex'
import store from './store'
import './plugins/element.js'
import '@/assets/css/reset.css'
import '@/assets/font/iconfont.css'
import axios from 'axios'
Vue.prototype.$http=axios
axios.defaults.baseURL = 'http://localhost:7001/'
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.localStorage.getItem('token');
  console.log(config);
  return config;
})
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

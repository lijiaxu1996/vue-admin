import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import '@/assets/css/reset.css'
import '@/assets/font/iconfont.css'
import axios from 'axios'
Vue.prototype.$http=axios
axios.defaults.baseURL = 'http://localhost:7001/'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

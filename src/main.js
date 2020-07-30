import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import './assets/css/gloable.css'
import './assets/fonts/iconfont.css'

Vue.config.productionTip = false
import axios from 'axios'
//配置请求根路径
// axios.defaults.baseURL = 'http://test.nbyunlong.cn/api'
Vue.prototype.$axios = axios;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

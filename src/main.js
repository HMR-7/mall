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
//通过axios请求拦截器添加token，保证拥有获取数据的权限
axios.interceptors.request.use(config => {
  console.log(config, 'config');
  config.headers.Authorization = window.sessionStorage.getItem('token');
  return config
})
Vue.prototype.$axios = axios;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

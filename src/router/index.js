import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "about" */ '../components/login.vue')
  },
  {
    path: '/home',
    component: () => import(/* webpackChunkName: "about" */ '../components/home.vue')
  }
]

const router = new VueRouter({
  routes
})
//挂载路由导航守卫
router.beforeEach((to, from, next) => {
  //to 将要访问的路径
  //from 代表从哪个路径跳转过来
  //next 是一个函数，表示是否通过放行
  //next()通过放行，next('/login') 强制跳转
  if (to.path === '/login') {
    return next()
  } else {
    const token = window.sessionStorage.getItem('token')
    if (!token) {
      return next('/login')
    } else {
      return next()
    }
  }
})
//暴露router
export default router

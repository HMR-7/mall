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

export default router

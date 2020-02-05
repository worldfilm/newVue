import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/page/home.vue'//主页

// const originalPush = Router.prototype.push
// Router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }

Vue.use(Router)

const router = new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    { path: '/', component: Home, meta: { title: '首页' }, },
    { path: '/home', meta: { title: '首页' }, component: Home },
  ]
})

export default router

// 路由器对象模块
import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../pages/MSite/MSite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'

// 声明使用路由插件
Vue.use(VueRouter)

// 向外暴露一个默认的路由器对象
export default new VueRouter({
  // 所有的路由
  routes: [
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/msite',
      component: MSite,
      meta: {
        showFooter: true
      }
    },
    // 默认显示的路由，重定向
    {
      path: '/',
      redirect: '/msite'
    }
  ]
})

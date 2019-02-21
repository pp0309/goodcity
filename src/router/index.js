import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Shopcart from '@/components/shopcart'

import My from '@/components/my'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/shopcart',
      name: 'Shopcart',
      component: Shopcart
    },
    {
      path: '/my',
      name: 'My',
      component: My
    }, {
      path: '/live',
      name: 'Live',
      component: Live
    },
    {
      path: '/ health',
      name: ' Health',
      component:  Health
    },
    {
      path: '/electric',
      name: 'Electric',
      component: Electric
    },
    {
      path: '/beauty',
      name: 'Beauty',
      component: Beauty
    },
    {
      path: '/homepage',
      name: 'Homepage',
      component: homepage
    },
  ]
})

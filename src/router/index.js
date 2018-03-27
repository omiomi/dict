import Vue from 'vue'
import Router from 'vue-router'

import Welcome from '@/components/Welcome'
//import Swiper from '@/components/swiper'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Welcome
    },
    {
      path: '/Welcome',
      name: 'Welcome',
      component: Welcome
    }
  ]
})

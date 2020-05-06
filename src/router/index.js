import Vue from 'vue'
import Router from 'vue-router'
import { Message } from 'element-ui'

Vue.use(Router)

let router =  new Router({
  routes: [
    {
      path: '/404',
      component: () => import('@/view/404')
    },
    {
      path: '/login',
      component: () => import('@/view/auth/login.vue')
    },
    {
      path: '*',
      redirect: '/404',
    },
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/layout',
      component: () => import('@/view/layout'),
      children: [
        {
          path: '/home',
          component: () => import('@/view/home')
        }
      ]
    }
  ]
})

export default router

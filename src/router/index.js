import Vue from 'vue'
import Router from 'vue-router'
import pages from './pages'
import { Message } from 'element-ui'
import NProgress  from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(Router)

let router =  new Router({
  routes: pages
})

router.beforeEach((to,from,next) =>{
  /* if(to.path == '/login') {

  } */
  NProgress.start();
  next()
})

router.afterEach((to,from) =>{
  NProgress.done()
  console.log(location)
  /* Message.success('成功') */
})

export default router

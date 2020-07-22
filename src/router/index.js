import Vue from 'vue'
import Router from 'vue-router'
import pages from './pages'
import { Message, Progress } from 'element-ui'
import NProgress  from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(Router)

let router =  new Router({
  routes: pages
})
let routered = ['/404','/login']
router.beforeEach((to,from,next) =>{
  NProgress.start();

  if(routered.indexOf(to.path) !== -1) {
    next()
  } else {
    if(process.env.NODE_ENV === 'development' ) {
      next()
    }else {
      try{
        let treeList = []
        let tree = JSON.parse(localStorage.getItem('menuInfoLIst'));
        let has = (tree) => {
          tree.map(i => {
            i.children.map(j =>{
              if(j.children) {
                has(j)
              }else {
                treeList.push(j.menuUrl);
              }
            })
          })
        }
        has(tree)
      }catch (err) {
        router.replace(`/login?returnUrl=${router.history.pending.path}`);
      }
    }
  }
  /* next() */
})

router.afterEach((to,from) =>{
  NProgress.done()
  /* Message.success('成功') */
})

export default router

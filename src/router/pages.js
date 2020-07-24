let pages = [
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
        path: 'userQuery',
        component: () => import('@/view/home/userQuery'),
        meta: {
          menuActive: 'userQuery'
        }
      },
      {
        path: 'roleManage',
        component: () => import('@/view/home/roleManage'),
        meta: {
          menuActive: 'roleManage'
        }
      },
      {
        path: 'userControl',
        component: () => import('@/view/home/userControl'),
        meta: {
          menuActive: 'userControl'
        }
      },
    ]
  }
];

export default pages;


/**
 * meta:
 * hideTop--隐藏头部
 * hideFooter--隐藏下方导航
 * hideBack--隐藏返回按钮
 * prePath--返回上一级的路由
 * hideMsg--隐藏右上方客服入口
 *  */

export default [
    {
      path: '/',
      redirect:'/hot',
      component: () => import('../views/content/index.vue'),
      children:[
        {
          path: 'hot',
          meta:{
            hideBack:true
          },
          component: () => import(/* webpackChunkName: "content" */ '../views/content/hot.vue'),
        },
        {
          path: 'collect',
          meta:{
            hideBack:true
          },
          component: () => import(/* webpackChunkName: "content" */ '../views/content/collect.vue'),
        },
        {
          path: 'shopcar',
          meta:{
            prePath:'/',
            hideFooter:true,
            title:'购物车',
          },
          component: () => import(/* webpackChunkName: "content" */ '../views/content/shopcar.vue'),
        },
        {
          path: 'mine',
          meta:{
            hideTop:true
          },
          component: () => import(/* webpackChunkName: "content" */ '../views/content/mine/index.vue'),
        },
        {
          path:'/infodetail',
          meta:{
            title:'个人资料',
            hideMsg:true,
            hideFooter:true,
            prePath:'/mine'
          },
          component: () => import(/* webpackChunkName: "content" */ '../views/content/mine/detail/index.vue'),
          children:[
            {
              path:'set/:info',
              component: () => import(/* webpackChunkName: "content" */ '../views/content/mine/detail/setInfo.vue'),
            }
          ]
        },
      ]
    },
    
    {
      path: '/login',
      component: () => import(/* webpackChunkName: "loginReg" */ '../views/loginReg/login-page.vue')
    },
    {
      path: '/reg',
      component: () => import(/* webpackChunkName: "loginReg" */ '../views/loginReg/reg-page.vue')
    },
    {
      path: '/forget',
      component: () => import(/* webpackChunkName: "loginReg" */ '../views/loginReg/forget-page.vue')
    },
    
    {
      path: '/404',
      component: () => import(/* webpackChunkName: "404" */ '../views/404.vue')
    },
    // {
    //   path: '*',
    //   redirect: '/404'
    // }
  ]
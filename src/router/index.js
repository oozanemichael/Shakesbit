import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    }, {
      path: '/',
      name: 'PageView',
      component: resolve => require(['@/view/PageView'], resolve),
      children: [
        {
          path: '/',
          redirect: '/Shakesbit'
        }, {
          path: '/Shakesbit',
          name: 'Shakesbit',
          component: resolve => require(['@/view/Shakesbit'], resolve),
          meta: {
            title: '首页'
          }
        }
      ]
    }
  ]
})


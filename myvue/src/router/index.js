import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DashBoard from '@/components/DashBoard'
import Change from '@/components/Change'
import showData from '@/components/showData'
import manage from '@/components/manage'
import chart from '@/components/chart'
import blacklist from '@/components/blacklist'
import recreate_users from '@/components/recreate_users'
import black from '@/components/black'
import score from '@/components/score'
import showres from '@/components/showres'
// import piepage from '@/components/piepage'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '',
      component: manage,
      children: [{
        path: '',
        component: blacklist,
        meta: [],
      }]
    },
    {
      path: '/chart',
      name: '',
      component: chart
    },
    {
      path: '/blacklist',
      name: '',
      component: blacklist
    },
    {
      path: '/recreate_users',
      name: '',
      component: recreate_users
    },
    {
      path: '/black',
      name: '',
      component: black
    },
    {
      path: '/score',
      name: '',
      component: score
    },{
      path: '/showres',
      name: '',
      component: showres
    },
    // {
    //   path: '/piepage',
    //   name: '',
    //   component: piepage
    // }
  ]
})

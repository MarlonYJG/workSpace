import Vue from 'vue'
import Router from 'vue-router'
// import Header from '@/components/header'

import Page_1 from '@/pages/page_1'
import Page_1_2 from '@/pages/page_1_2'
import Page_1_3 from '@/pages/page_1_3'
import Page_1_4 from '@/pages/page_1_4'
import Page_1_5 from '@/pages/page_1_5'

import Page_2 from '@/pages/page_2'
import Page_2_2 from '@/pages/page_2_2'

import Page_3 from '@/pages/page_3'
import Page_3_2 from '@/pages/page_3_2'

import Page_4 from '@/pages/page_4'
import Page_4_2 from '@/pages/page_4_2'

import Page_5 from '@/pages/page_5'
import Page_5_2 from '@/pages/page_5_2'

import Page_6 from '@/pages/page_6'

//page_1_1
import download_chart from '@/components/downloadAmount_chart'
import equipment_chart from '@/components/equipment_chart'
import week_chart from '@/components/week_chart'
import day_chart from '@/components/day'
//page_1_2

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      redirect:'/download_chart',
      name: 'Page_1_1',
      component: Page_1,
      children:[
        {
          path:'download_chart',
          name:'download_chart',
          component:download_chart,
        },
        {
          path:'equipment_chart',
          name:'equipment_chart',
          component:equipment_chart,
        },
        {
          path:'week_chart',
          name:'week_chart',
          component:week_chart,
        },
        {
          path:'day_chart',
          name:'day_chart',
          component:day_chart,
        }
      ]
    },
    {
      path: '/page_1_2',
      name: 'Page_1_2',
      component: Page_1_2,
    },
    {
      path: '/page_1_3',
      name: 'Page_1_3',
      component: Page_1_3,
    },
    {
      path: '/page_1_4',
      name: 'Page_1_4',
      component: Page_1_4,
    },
    {
      path: '/page_1_5',
      name: 'Page_1_5',
      component: Page_1_5,
    },

    {
      path: '/page_2',
      name: 'Page_2_1',
      component: Page_2,
    },
    {
      path: '/page_2_2',
      name: 'Page_2_2',
      component: Page_2_2,
    },
    
    {
      path: '/page_3',
      name: 'Page_3_1',
      component: Page_3,
    },
    {
      path: '/page_3_2',
      name: 'Page_3_2',
      component: Page_3_2,
    },

    {
      path: '/page_4',
      name: 'Page_4_1',
      component: Page_4,
    },
    {
      path: '/page_4_2',
      name: 'Page_4_2',
      component: Page_4_2,
    },
    {
      path: '/page_5',
      name: 'Page_5_1',
      component: Page_5,
    },
    {
      path: '/page_5_2',
      name: 'Page_5_2',
      component: Page_5_2,
    },
  ]
})

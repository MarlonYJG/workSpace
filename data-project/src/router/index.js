import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/header'

import Page_1 from '@/pages/page_1'
import Page_2 from '@/pages/page_2'
import Page_3 from '@/pages/page_3'
import Page_4 from '@/pages/page_4'
import Page_5 from '@/pages/page_5'
import Page_6 from '@/pages/page_6'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Header',
      component: Header,
      children:[
        {
          path: 'page_1',
          name: 'Page_1',
          component: Page_1,
        },
        {
          path: 'page_2',
          name: 'Page_2',
          component: Page_2,
        },
        {
          path: 'page_3',
          name: 'Page_3',
          component: Page_3,
        },
        {
          path: 'page_4',
          name: 'Page_4',
          component: Page_4,
        },
        {
          path: 'page_5',
          name: 'Page_5',
          component: Page_5,
        },
        {
          path: 'page_6',
          name: 'Page_6',
          component: Page_6,
        }
      ]
    }
  ]
})

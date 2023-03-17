import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    redirect:'/home',
    children: [
        {    
            path: '/home',
            name: 'home',
            component: () =>import('../components/home.vue'),
            meta:{name:'首页'}
        },
        {    
          path: '/about',
          name: 'about',
          component: () =>import('../components/about.vue'),
          meta:{name:'关于我们'}
      },
        {    
          path: '/trends',
          name: 'trends',
          component: () =>import('../components/trends.vue'),
          meta:{name:'行业动态'}
      },
        {    
          path: '/product',
          name: 'product',
          component: () =>import('../components/product.vue'),
          meta:{name:'产品服务'}
      },
        {    
          path: '/cooperate',
          name: 'cooperate',
          component: () =>import('../components/cooperate.vue'),
          meta:{name:'合作伙伴'}
      },
        {    
          path: '/joinUs',
          name: 'joinUs',
          component: () =>import('../components/joinUs.vue'),
          meta:{name:'加入我们'}
      },
        {    
          path: '/contactUs',
          name: 'contactUs',
          component: () =>import('../components/contactUs.vue'),
          meta:{name:'联系我们'}
      },
      {    
        path: '/details',
        name: 'details',
        component: () =>import('../components/details.vue'),
        meta:{name:'详情'}
    },
    ]
},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

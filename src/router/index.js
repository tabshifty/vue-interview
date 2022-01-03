import { createRouter, createWebHashHistory } from 'vue-router'
import { cssContentRoutes, jsContentRoutes, httpContentRoutes, vueContentRoutes } from './config'
import Home from '../views/Home.vue'
// import Css from '../views/Css.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/css',
    name: 'Css',
    component: () => import('../views/Css.vue'),
    children: cssContentRoutes,
    meta: {
      banner: 'CSS常见问题列表'
    }
  },

  {
    path: '/vue',
    name: 'Vue',
    component: () => import('../views/Vue.vue'),
    children: vueContentRoutes,
    meta: {
      banner: 'Vue常见问题列表'
    }
  },

  {
    path: '/javascript',
    name: 'Javascript',
    component: () => import('../views/Javascript.vue'),
    children: jsContentRoutes,
    meta: {
      banner: 'Javascript常见问题列表'
    }
  },
  {
    path: '/http',
    name: 'Http',
    component: () => import('../views/Http.vue'),
    children: httpContentRoutes,
    meta: {
      banner: 'http常见问题列表'
    }
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import { cssContentRoutes, jsContentRoutes } from './config.js'
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
    path: '/javascript',
    name: 'Javascript',
    component: () => import('../views/Javascript.vue'),
    children: jsContentRoutes,
    meta: {
      banner: 'Javascript常见问题列表'
    }
  },
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

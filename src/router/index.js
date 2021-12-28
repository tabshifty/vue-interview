import { createRouter, createWebHistory } from 'vue-router'
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
    meta: {
      banner: 'Flex描述和常见问题'
    }
  },

  
  {
    path: '/js/copy',
    name: 'copy',
    component: () => import('../views/Javascript.vue'),
    meta: {
      banner: 'Flex描述和常见问题'
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

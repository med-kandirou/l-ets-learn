import { createRouter, createWebHistory } from 'vue-router'

import notfound from '../components/notfound.vue'
import Login from '@/login.vue'
const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/:pathMatch(.*)',
    name: 'notfound',
    component: notfound
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
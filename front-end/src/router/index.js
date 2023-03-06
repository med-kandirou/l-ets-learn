import { createRouter, createWebHistory } from 'vue-router'

// import notfound from '../components/notfound.vue'
import Login from '@/login.vue'
const routes = [
//   {
//     path: '/:pathMatch(.*)',
//     name: 'notfound',
//     component: notfound
//   }

  {
    path: '/',
    name: 'Login',
    component: Login
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
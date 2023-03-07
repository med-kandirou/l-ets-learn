import { createRouter, createWebHistory } from 'vue-router'

import notfound from '../components/notfound.vue'
import Login from '@/guest/login.vue'
import Signup from '@/guest/signup.vue'
import Index from '@/guest/index.vue'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
  },
  {
    path: '/:pathMatch(.*)',
    name: 'notfound',
    component: notfound,
  }

];



const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});
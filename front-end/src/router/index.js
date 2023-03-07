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
    meta: { title: 'Home' }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { title: 'login' }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    meta: { title: 'Signup' }
  },
  {
    path: '/:pathMatch(.*)',
    name: 'notfound',
    component: notfound,
    meta: { title: 'Not found' }
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
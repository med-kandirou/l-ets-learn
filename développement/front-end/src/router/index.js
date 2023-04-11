import { createRouter, createWebHistory } from 'vue-router'

//route guest
import notfound from '../components/notfound.vue'
import Login from '@/views/login.vue'
import Signup from '@/views/signup.vue'
import Index from '@/views/index.vue'
import Course from '@/views/course.vue'
import devenirFormateur from '@/views/formateur.vue'
import Signupform from '@/views/signupform.vue'
import Loginform from '@/views/loginform.vue'
import Watch from '@/views/watch.vue'

//routes user 
import mesFavories from '@/views/user/favories.vue'
import mesCours from '@/views/user/mesCours.vue'
import UserProfil from '@/views/user/profil.vue'

//route formateur 
import IndexFormateur from '@/views/formateur/index.vue';
import CourseFormateur from '@/views/formateur/cours.vue';
import UpdateCour from '@/views/formateur/updateCour.vue';
import MesEtudiant from '@/views/formateur/mesEtudiant.vue';
import ProfileFormateur from '@/views/formateur/profile.vue';

//route admin 
import IndexAdmin from '@/views/admin/index.vue';
import FormateurAdmin from '@/views/admin/formateur.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
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
    path: '/watch/:id',
    name: 'watch',
    component: Watch,
  },
  {
    path: '/devenirformateur',
    name: 'devenir formateur',
    component: devenirFormateur,
  },
  {
    path: '/signupform',
    name: 'sign up formateur',
    component: Signupform,
  },
  {
    path: '/loginFormateur',
    name: 'login formateur',
    component: Loginform,
  },
  {
    path: '/course/:id',
    name: 'course',
    component: Course,
  },
  {
    path: '/formateur',
    name: 'formateur',
    component: IndexFormateur,
  },
  {
    path: '/user/profile',
    name: 'profile',
    component: UserProfil,
  },
  {
    path: '/mesFavories',
    name: 'mesFavories',
    component: mesFavories,
  },
  {
    path: '/mesCours',
    name: 'mesCours',
    component: mesCours,
  },
  {
    path: '/formateur/mesCours',
    name: 'cours formateur',
    component: CourseFormateur,
  },
  {
    path: '/formateur/profile',
    name: 'profile formateur',
    component: ProfileFormateur,  
  },
  {
    path: '/formateur/updateCour/:id',
    name: 'update formateur',
    component: UpdateCour,
  },
  {
    path: '/formateur/mesEtudiant',
    name: 'mes Etudiant',
    component: MesEtudiant,
  },
  {
    path: '/admin',
    name: 'admin',
    component: IndexAdmin,
  },
  {
    path: '/admin/formateures',
    name: 'formateurs',
    component: FormateurAdmin,
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
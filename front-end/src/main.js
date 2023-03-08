import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/index.css'
import  "flowbite/dist/flowbite.js";
import './axios.config'
import router from './router/index'

import 'sweetalert2/dist/sweetalert2.min.css';
import VueSweetalert2 from 'vue-sweetalert2';

const app = createApp(App)

app.use(createPinia())
app.use(VueSweetalert2)
app.use(router)
app.mount('#app')

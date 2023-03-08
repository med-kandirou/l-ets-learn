import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/index.css'

//js flowbite
import  "flowbite/dist/flowbite.js";
//config axios
import './axios.config'
//router
import router from './router/index'

//sweet alert
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';



//app
const app = createApp(App)
app.use(createPinia())
app.use(VueSweetalert2)
app.use(router)
app.mount('#app')

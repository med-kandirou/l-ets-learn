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


import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)




//app
const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')

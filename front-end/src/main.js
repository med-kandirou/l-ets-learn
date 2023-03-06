import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/index.css'
import  "flowbite/dist/flowbite.js";
import router from './router/index'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')

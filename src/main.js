import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import router from '@/router'

const app = createApp(App)
app.use(router)
app.mount('#app')

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import pinia from '@/plugins/pinia'
import './style.css'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from '@/router/index'
const app = createApp(App)
app.use(router).use(pinia).use(ElementPlus)
app.mount('#app')

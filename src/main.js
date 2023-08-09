import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'

import './assets/main.css'

// Vue
const app = createApp(App)
// Pinia
const pinia = createPinia()

// // Vue 套用 router 資料
app.use(router)
// // // 套用 Pinia
app.use(pinia)

app.mount('#app')

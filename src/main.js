import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import i18n from '@/plugins/i18n.js'
import MainLayout from "@/layouts/MainLayout.vue";


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.component('MainLayout', MainLayout)

app.mount('#app')

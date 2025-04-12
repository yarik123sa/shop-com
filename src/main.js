import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import i18n from '@/plugins/i18n.js'
import MainLayout from "@/layouts/MainLayout.vue";



/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'


/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


/* import icons */
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'


/* add icons to the library */
library.add(fab, fas, far)


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.component('MainLayout', MainLayout)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')

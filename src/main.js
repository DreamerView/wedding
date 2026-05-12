import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import 'aos/dist/aos.css'

const app = createApp(App)

app.use(createPinia())
app.mount('#app')
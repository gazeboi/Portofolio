import { createApp } from 'vue'
import './style.css'
import './main-style.css'
import './app-style.css'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'

import '@fortawesome/fontawesome-free/css/all.min.css'

// Create the app first
const app = createApp(App)

// Use the router
app.use(router)

// Mount the app
app.mount('#app')


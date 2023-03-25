import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL = 'http://194.5.195.183/api/v1'

createApp(App).use(store).use(router).mount('#app')

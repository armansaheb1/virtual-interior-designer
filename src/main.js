import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { IonicVue } from '@ionic/vue';
import styles from './index.css'

createApp(App).use(store).use(router).use(IonicVue).mount('#app')

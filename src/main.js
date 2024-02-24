import VueAnimXyz from '@animxyz/vue3'
import { createPinia } from 'pinia'
import '@/assets/css/index.css'
import { createApp } from 'vue'
import router from '@/router'
import App from '@/App.vue'
import '@animxyz/core'
//////////////////////////
const app = createApp(App)
app.use(createPinia())
app.use(VueAnimXyz)
app.use(router)
// ////////////
app.mount('#app')

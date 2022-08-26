import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from '@/plugins/router'
import Vue3Lottie from 'vue3-lottie'
import App from '@/App.vue'
import 'vue3-lottie/dist/style.css'
import '@/css/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Vue3Lottie, { name: 'LottieAnimation' })

app.mount('#app')

import { createApp } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTelegram } from '@fortawesome/free-brands-svg-icons'
import App from './App.vue'
import router from './router'

library.add(faFacebook , faTelegram)

createApp(App)
.component('icon', FontAwesomeIcon)
.use(router)
.mount('#app')

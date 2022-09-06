import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.css"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLocation } from '@fortawesome/free-solid-svg-icons'
import { faMobilePhone } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import App from './App.vue'
import router from './router'

import "bootstrap/dist/js/bootstrap.js"

library.add(faFacebook , faTelegram, faPhone , faLocation , faMobilePhone ,faHeart)

createApp(App)
.component('icon', FontAwesomeIcon)
.use(router)
.mount('#app')

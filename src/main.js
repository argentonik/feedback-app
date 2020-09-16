import Vue from 'vue'

import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.use(Buefy)
Vue.config.productionTip = false

Vue.prototype.$http = axios;
let token = localStorage.getItem('token')
if (!token) {
    token = sessionStorage.getItem('token')
}

if (token) {
    Vue.prototype.$http.defaults.headers.common['Authorization'] = "Bearer " + token
}

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
}).$mount('#app')

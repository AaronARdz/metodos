import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import './assets/dist/dist/css/adminlte.css';
import './assets/dist/dist/css/adminlte.min.css';
import './assets/dist/dist/js/adminlte.min.js';
import './assets/dist/plugins/jquery/jquery.min.js';
import './assets/dist/plugins/bootstrap/js/bootstrap.bundle.min.js';


Vue.use(Vuelidate)

Vue.config.productionTip = false

import {auth} from './firebase'

auth.onAuthStateChanged(user => {
  if(user) {
    const userDetected = {
      email: user.email,
      uid: user.uid
    }
    store.dispatch('detectUser', userDetected)
  } else {
    console.log(user)
    store.dispatch('detectUser', user)
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import '../src/assets/css/style.css'
import router from './router.js'



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import '../src/assets/css/style.css'
import router from './router.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { store } from './store/store'

 
// defalut install


//Axios
Vue.use(VueAxios, axios)
axios.defaults.baseURL = 'http://localhost:80/'
//  Vue.prototype.$http = axios;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import '../src/assets/css/style.css'
import router from './router.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { store } from './store/store'
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

 
// defalut install

//Forms Validation
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

//slider 
import VueSplide from '@splidejs/vue-splide';
Vue.use( VueSplide );


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

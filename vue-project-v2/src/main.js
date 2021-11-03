import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router.js'
import App from './App'
import './assets/style/var.scss'
import VueAxios from 'vue-axios'
import axios from "axios";
import $ from 'jquery'
import store from './store/store.js'
import qs from 'qs'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGoogle,faInstagram,faLine} from '@fortawesome/free-brands-svg-icons'
import { faAnglesLeft,faAngleLeft,faAnglesRight,faAngleRight,fa5,fa4,fa3,fa2,fa1,faXmark,faSortDown,faSortUp, faCircle, faMagnifyingGlass, faAnglesDown, faPlus, faMinus, faTrashCan,faSquarePlus} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faGoogle,faInstagram,faLine,faAnglesLeft,faAngleLeft,faAnglesRight,faAngleRight,fa5,fa4,fa3,fa2,fa1,faXmark,faSortDown,faSortUp, faCircle, faMagnifyingGlass, faAnglesDown, faPlus, faMinus, faTrashCan,faSquarePlus)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.prototype.$qs = qs
// Vue.config.productionTip = true
Vue.use(VueRouter,VueAxios,axios)
const router = new VueRouter({
  routes,
  mode:"history",
})
// console.log(router)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

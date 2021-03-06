import Vue from "vue"
import App from "./App.vue"
import "./registerServiceWorker"
import router from "./router"
import store from "./store"

import "./firebase"

import { library } from '@fortawesome/fontawesome-svg-core'

import { 
  faBrush, 
  faFillDrip, 
  faMousePointer, 
  faVectorSquare, 
  faEraser, 
  faShapes, 
  faBolt, 
  faLightbulb, 
  faTrashAlt, 
  faPlus, 
  faTimes, 
  faFile, 
  faFolder,
  faEye,
  faEyeSlash,
  faBorderAll,
  faBorderNone
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faBrush, 
  faFillDrip, 
  faMousePointer, 
  faVectorSquare, 
  faEraser, 
  faShapes, 
  faBolt, 
  faLightbulb, 
  faTrashAlt,
  faPlus,
  faTimes,
  faFile,
  faFolder,
  faEye,
  faEyeSlash,
  faBorderAll,
  faBorderNone
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");


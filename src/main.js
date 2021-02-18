import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import "@fortawesome/fontawesome-free/css/all.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { TabsPlugin } from 'bootstrap-vue'


// Make BootstrapVue a
Vue.use(BootstrapVue)
Vue.use(TabsPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

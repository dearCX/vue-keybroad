import Vue from 'vue'
import App from './App.vue'
import Vuekeybroad from './lib/index.js'
Vue.use(Vuekeybroad)

new Vue({
  el: '#app',
  render: h => h(App)
})

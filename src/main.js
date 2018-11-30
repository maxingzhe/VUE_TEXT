import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './mock/mockServer'
import 'swiper/dist/css/swiper.css'
import Split from './components/Split/Split.vue'

Vue.component('Split',Split)
new Vue({
  el:'#app',
  render:h=>h(App),
  router
})

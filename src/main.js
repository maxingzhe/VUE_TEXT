import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './mock/mockServer'
import 'swiper/dist/css/swiper.css'
import VueLazyload from 'vue-lazyload'
import Split from './components/Split/Split.vue'

import loading from './common/images/zhaosi.jpg'
Vue.use(VueLazyload, {
  loading
})


Vue.component('Split',Split)
new Vue({
  el:'#app',
  render:h=>h(App),
  router,
  store
})

import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home/Home.vue'
import Classify from '../pages/Classify/Classify.vue'
import Distinguish from '../pages/Distinguish/Distinguish.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Personal from '../pages/Personal/Personal.vue'

Vue.use(VueRouter)
export default new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/home',
      component:Home,
      meta:{
        showFoot:true
      }
    },
    {
      path:'/classify',
      component:Classify,
      meta:{
        showFoot:true
      }
    },
    {
      path:'/distinguish',
      component:Distinguish,
      meta:{
        showFoot:true
      }
    },
    {
      path:'/shopcart',
      component:ShopCart,
      meta:{
        showFoot:true
      }
    },
    {
      path:'/personal',
      component:Personal
    },
    {
      path:'/',
      redirect:'/home'
    }
  ]
})

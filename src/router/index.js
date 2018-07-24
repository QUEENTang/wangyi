import Vue from 'vue'
import VueRouter from "vue-router"

import FirstShow from "../pages/FirstShow/FirstShow.vue"
import Home from "../pages/Home/Home.vue"
import Knowledge from "../pages/Knowledge/Knowledge.vue"
import Classify from "../pages/Classify/Classify.vue"
import Cart from "../pages/Cart/Cart.vue"
import Personal from "../pages/Personal/Personal.vue"
import Recommend from "../pages/Home/Recommend/Recommend.vue"
import LiveHome from "../pages/Home/LiveHome/LiveHome.vue"

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/firstshow',
      component: FirstShow
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '/home/recommend',
          component: Recommend
        },
        {
          path: '/home/livehome',
          component: LiveHome
        }
      ]
    },
    {
      path: '/knowledge',
      component: Knowledge
    },
    {
      path: '/classify',
      component: Classify
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/personal',
      component: Personal
    },
    {
      path: '/',
      redirect: '/firstshow'
    }
  ]
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store"
import Split from "./components/Split/Split.vue"
import Footer from "./components/Footer/Footer.vue"

import "./mock/mockServer"

// Vue.config.productionTip = false;

Vue.component("Split",Split);
Vue.component("Footer",Footer);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});

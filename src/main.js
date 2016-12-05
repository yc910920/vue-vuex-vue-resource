import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routerConfig from './routers'
import store from './vuex/store'
import ElementUI from 'element-ui'
import { sync } from 'vuex-router-sync'
import * as filters from './filters'


import 'element-ui/lib/theme-default/index.css'


Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUI)

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

const router = new VueRouter({routes: routerConfig})

// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router)


/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  store,
  render: h => h(App)
})

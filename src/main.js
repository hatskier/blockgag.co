import Vue from 'vue'
import VueRouter from 'vue-router'
import VueLazyload from 'vue-lazyload'

import App from './App.vue'

import Home from './components/pages/Home.vue'
import Posts from './components/pages/Posts.vue'
import Post from './components/pages/Post.vue'
import Add from './components/pages/Add.vue'

// It disables anoying notification
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueLazyload, {
  lazyComponent: true,
  preLoad: 1.3,
  observer: true,
  // loading: '../public/loading.gif',
})


const routes = [
  { path: '/', component: Posts },
  { path: '/home', component: Home },
  { path: '/posts', component: Posts },
  { path: '/posts/:category', component: Posts },
  { path: '/post/:id', component: Post },
  { path: '/add', component: Add },
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

export default app

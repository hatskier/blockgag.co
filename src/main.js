import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'

import Home from './components/pages/Home.vue'
import Posts from './components/pages/Posts.vue'
import Post from './components/pages/Post.vue'
import Add from './components/pages/Add.vue'

// It disables anoying notification
Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
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

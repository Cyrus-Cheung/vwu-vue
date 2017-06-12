// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './styles/index.scss'
import Axios from 'axios'
import App from './App'
import router from './router'
import store from './store'

Vue.use(ElementUI)
Vue.prototype.$http = Axios
Vue.config.productionTip = false

const whiteList = ['/login'] // 免登录 不重定向白名单

router.beforeEach((to, from, next) => {
  if (store.getters.token) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) { // 在白名单中直接进入
      next()
    } else {
      next({ path: '/login' })   // 全部重定向到登录页面
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

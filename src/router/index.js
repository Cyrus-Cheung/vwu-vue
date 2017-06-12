import Vue from 'vue'
import Router from 'vue-router'

import Layout from '../views/layout/Layout'

/* dashboard */
import dashboard from '../views/dashboard'

/* article */
import articleList from '../views/article/Index'
import articleNew from '../views/article/New'

/* login */
import login from '../views/login/Index'

Vue.use(Router)

const constantRouterMap = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: '控制台',
    children: [{ path: 'dashboard', component: dashboard }]
  },
  {
    path: '/article',
    component: Layout,
    redirect: '/article/index',
    children: [
      { path: 'index', component: articleList, name: '文章列表' },
      { path: 'new', component: articleNew, name: '添加文章' }
    ]
  },
  { path: '/login', component: login, name: '登录' }
]

export default new Router({
  routes: constantRouterMap
})

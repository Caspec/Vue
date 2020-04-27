import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/giftcards',
    name: 'Giftcards',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Giftcard" */ '../views/Giftcards.vue')
  },
  {
    path: '/giftcard/:id',
    name: 'Giftcard',
    props: true,
    component: () => import(/* webpackChunkName: "Giftcard" */ '../views/Giftcard.vue')
  },
  {
    path: '/buyerinformation/',
    name: 'BuyerInformation',
    props: true,
    component: () => import(/* webpackChunkName: "BuyerInformation" */ '../views/BuyerInformation.vue')
  },
  {
    path: '/fakepaid/',
    name: 'Fakepaid',
    props: true,
    component: () => import(/* webpackChunkName: "Fakepaid" */ '../views/Fakepaid.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path: '/dashboard/',
    name: 'Dashboard',
    props: true,
    component: () => import(/* webpackChunkName: "Dashboard" */ '../views/Dashboard.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

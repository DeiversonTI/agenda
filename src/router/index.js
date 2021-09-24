import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Registrar from "../components/Registrar.vue"
import Login from "../components/login.vue"
import Auth from "../components/auth.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/registrar',
    name: 'Registrar',
    component: Registrar
  },
  {
    path:'/login',
    name: 'Login',
    component: Login
  },
  {
    path:'/auth',
    name: 'Auth',
    component: Auth
  },

 
   
    // {
    // // path: '/about',
    // // name: 'About',
    // // // route level code-splitting
    // // // this generates a separate chunk (about.[hash].js) for this route
    // // // which is lazy-loaded when the route is visited.
    // // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

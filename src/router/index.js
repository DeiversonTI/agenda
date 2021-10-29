import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Registrar from "../components/Registrar.vue"
import Login from "../components/login.vue"
import Auth from "../components/auth.vue"
import Action from "../views/actionTela.vue"
import User from "../views/userTela.vue"
import Teste from "../components/teste.vue"
// import {getAuth} from "firebase/auth"


const routes = [

  // OBS.: Necessário criar tela de erro para usuario que digitar alguma rota errada navegador.
 
  // { path: '/:pathMatch(.*)*', name: 'Login' , component: Login },

  {
    path: '/',
    name: 'Home',
    component: Home,
    // meta:{
    //   requiresAuth: true
    // }
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
    component: Auth,
    // meta:{
    //   requiresAuth: true
    // }
   
  },
  {
    path:'/actionTela',
    name: 'actiontela',
    component: Action,
    // meta:{
    //   requiresAuth: true
    // }

  },
  {
    path:'/userTela',
    name:'usertela',
    component:User,
    // meta:{
    //   requiresAuth: true
    // }
  },
  {
    path:'/teste',
    name:'teste',
    component:Teste,
    // meta:{
    //   requiresAuth: true
    // }
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

// router.beforeEach((to, from, next)=>{
//   const currentUser = getAuth().currentUser;
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

//   if(requiresAuth && !currentUser) next('Login');
//   else if(!requiresAuth && currentUser) next('Auth');
//   else next();
// })

export default router

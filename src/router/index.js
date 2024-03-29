import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Registrar from "../components/Registrar.vue"
import Login from "../components/login.vue"
import Auth from "../components/auth.vue"
import Auth2 from "../components/authOld.vue"
import AuthEventos from "../components/EauthEventos.vue"
import userTelaEventos from "../views/userTelaEventos.vue"
import Action from "../views/actionTela.vue"
import User from "../views/userTela.vue"
import UserEmail from "../views/userTelaVisitante.vue"
import Teste from "../components/teste.vue"
// import { getAuth } from "firebase/auth"
import Footer from "../components/footer.vue"
import Start from "../components/start.vue"
import Help from "../components/help.vue"
import Eventos from "../components/eventos.vue"
// import cal from "../components/calendar.vue"
import ResetPassword from "../components/ResetPassword.vue"
import EditUser from '../components/editUser.vue'
import useFirebase from '../components/db/dbConfig'
import selectMode from '../components/compLogado/selectMode.vue'
import Selected from '../components/compLogado/dataLogado.vue'

const routes = [

  // OBS.: Necessário criar tela de erro para usuario que digitar alguma rota errada navegador.
 
  // { path: '/:pathMatch(.*)*', name: 'Login' , component: Login },

  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      requiresAuth: true
    }
  },
  {
    path:'/registrar',
    name: 'Registrar',
    component: Registrar
  },
  {
    path:'/selected',
    name: 'selected',
    component: Selected
  },
  {
    path:'/select-mode',
    name: 'select-mode',
    component: selectMode
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
    meta:{
      requiresAuth: true
    }
   
  },
  {
    path:'/auth2',
    name: 'Auth2',
    component: Auth2,
    meta:{
      requiresAuth: true
    }
   
  },
  {
    path:'/authVis',
    name: 'AuthVis',
    component: UserEmail,
    meta:{
      requiresAuth: true
    }
   
  },
  {
    path:'/actionTela',
    name: 'actiontela',
    component: Action,
    meta:{
      requiresAuth: true
    }

  },
  {
    path:'/authEventos',
    name: 'autheventos',
    component: AuthEventos,
    meta:{
      requiresAuth: true
    }

  },
  {
    path:'/userTelaEventos',
    name: 'usertelaeventos',
    component: userTelaEventos,
    meta:{
      requiresAuth: true
    }

  },
  
  {
    path:'/userTela',
    name:'usertela',
    component:User,
    meta:{
      requiresAuth: true
    }
  },
  {
    path:'/teste',
    name:'teste',
    component:Teste,
    // meta:{
    //   requiresAuth: true
    // }
  },
  {
    path: '/footer',
    name: 'footer',
    component: Footer,
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/start',
    name: 'start',
    component: Start,

  },
  {
    path: '/help',
    name: 'help',
    component: Help,
  },
  {
    path:'/eventos',
    name: 'eventos',
    component: Eventos,
  },
  {
    path:'/ResetPassword',
    name: 'resetPassword',
    component: ResetPassword,
  },
  {
    path:'/edituser/:docId',
    name: 'edituser',
    component: EditUser,
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
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes
})

// router.beforeEach((to, from, next)=>{
//   const userConnected = getAuth().currentUser;
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

//   if (requiresAuth && !userConnected) next();
//   else if (!requiresAuth && userConnected) next();

//   // if(requiresAuth && !userConnected) next('Login');
//   // else if(!requiresAuth && userConnected) next('Home');
//   else next();
// })

router.beforeEach(async (to, from, next) => {
  const currenteUserGet = useFirebase().getCurrentUser()
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!await currenteUserGet) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() 
  }
})

export default router

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../src/assets/css/index.css'


import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import {initializeApp} from "firebase/app"

const firebaseConfig = {
    
    apiKey: "AIzaSyA9o-v7L11duoSemb_ve6h2cBtyBrn8_FY",
    authDomain: "agenda-db-80434.firebaseapp.com",
    projectId: "agenda-db-80434",
    storageBucket: "agenda-db-80434.appspot.com",
    messagingSenderId: "834638941622",
    appId: "1:834638941622:web:75bee4aa13bf9052250517"
  };
  
  // Initialize Firebase
  initializeApp(firebaseConfig);


createApp(App).use(VueSweetalert2).use(store).use(router).mount('#app')

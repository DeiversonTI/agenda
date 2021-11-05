import {initializeApp} from "firebase/app"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
    authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN ,
    projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID ,
    storageBucket: process.env.VUE_APP_FIREBASE_STORARE_BUCKET ,
    messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID ,
    appId:process.env.VUE_APP_FIREBASE_APP_ID

    
    // apiKey: "AIzaSyA9o-v7L11duoSemb_ve6h2cBtyBrn8_FY",
    // authDomain: "agenda-db-80434.firebaseapp.com",
    // projectId: "agenda-db-80434",
    // storageBucket: "agenda-db-80434.appspot.com",
    // messagingSenderId: "834638941622",
    // appId: "1:834638941622:web:75bee4aa13bf9052250517"
  };
  
  // Initialize Firebase
   
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  

  export default {db}
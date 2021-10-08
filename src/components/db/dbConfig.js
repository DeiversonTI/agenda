import {initializeApp} from "firebase/app"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    
    apiKey: "AIzaSyA9o-v7L11duoSemb_ve6h2cBtyBrn8_FY",
    authDomain: "agenda-db-80434.firebaseapp.com",
    projectId: "agenda-db-80434",
    storageBucket: "agenda-db-80434.appspot.com",
    messagingSenderId: "834638941622",
    appId: "1:834638941622:web:75bee4aa13bf9052250517"
  };
  
  // Initialize Firebase
   
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export default {db}
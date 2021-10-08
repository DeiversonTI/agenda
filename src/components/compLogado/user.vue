<template>
  <div>
      <h1 class="text-center text-md pr-4 font-thin text-black" >Bem vindo(a), {{this.email}}  </h1>
  </div>
</template>
<script>
// import { getAuth, onAuthStateChanged } from "firebase/auth"
// import db from "../db/dbConfig"
// import * as firebase from "firebase/app" 

export default {
  name: "user",
  data() {
    return {
      email: "",
      
    };
  },
  // metodo de apresentação do nome do usuário nas telas logadas
  // está apresentando problema ao iniciar junto com os usuários do banco(userLogado.vue)
  //  async created() {

  //      try {
  //          firebase
  //           db
  //         const dbuser = getAuth();
  //           await onAuthStateChanged(dbuser, (user) => {
           
  //               this.email = user.email;
               
           
  //           }); 
           
  //      } catch (error) {
  //          this.error = error.message;
           
  //      }
      
    
  // },
};
</script>

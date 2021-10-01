<template>
    
        <div class="flex justify-end items-center py-1 pr-2 bg-gray-50">
            <h1 class="text-center text-md pr-4 font-thin text-black" >Bem vindo(a), {{this.email}}  </h1>
            <button @click="signUp()" class="flex p-1   bg-red-500 rounded-md text-gray-50 px-2 ">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
                Sair
            </button>
        </div>
    
</template>
<script>
import { getAuth, signOut } from "firebase/auth";

export default {
    name: "userLogado",
    data(){
        return{           
           email: null
        }
    }, 
    methods:{
        signUp(){
            const auth = getAuth();
            signOut(auth)
            .then(() => {
                this.$swal({
                    icon:'success',
                    title: 'Desconectado com sucesso!!',
                    text: 'Obrigado, volte sempre!!!!',
                    showConfirmButton: false,
                    timer: 2000
                })
                .then(()=>{
                    setTimeout(() => {
                        this.$router.replace({name: 'Login'})
                    }, 2000);
                })
            // Sign-out successful.
            }).catch((error) => {
                this.error = error.message
            });
        },
        
    },
       created(){
        const auth = getAuth();
         const user = auth.currentUser;
        if(user !== null){
            this.email = user.email;
            
        }
       
    },
  
     
}
</script>
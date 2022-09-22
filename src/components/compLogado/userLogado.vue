<template>
        <div class=" text-xs flex justify-end items-center py-1 pr-2 ">
            
            <button @click.prevent="signUp()" class="flex items-center py-2 bg-red-500 rounded-md text-gray-50 px-2 ">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
    created(){
        // setTimeout(() => {
        //     if (!this.signUp()) {
        //         this.$swal({
        //              title: 'Sessão Expirou!! ',
        //                 showClass: {
        //                     popup: 'animate__animated animate__fadeInDown'
        //                 },
        //                 hideClass: {
        //                     popup: 'animate__animated animate__fadeOutUp'
        //                 }

        //         })
        //         // alert("Sessão Expirou... Entre novamente!")
        //         setTimeout(() => {
        //             this.$router.replace({name: 'Home'})
        //         }, 2000)
                
        //     }
        // },180000)
    },
  
    methods:{
       
        signUp(){
            const auth = getAuth();
            signOut(auth)
            .then(() => {
                  setTimeout(() => {
                    this.$router.replace({name: 'Home'})
                }, 2000)
                // this.$router.replace({name: 'Home'})
                // setTimeout(() => {
                //         this.$router.replace({name: 'Home'})
                //     }, 2000);
                // this.$swal({
                //     icon:'success',
                //     title: 'Desconectado com sucesso!!',
                //     showConfirmButton: false,
                //     timer: 2000
                // })
                // .then(()=>{
                //     setTimeout(() => {
                //         this.$router.replace({name: 'Login'})
                //     }, 2000);
                // })
            // Sign-out successful.
            }).catch((error) => {
                this.error = error.message
            });
        },
        
    }        
            
}
</script>
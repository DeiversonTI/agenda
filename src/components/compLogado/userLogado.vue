<template>
        <div class=" text-xs flex justify-end items-center py-1 pr-2 bg-gray-50">
            
            <button @click.prevent="signUp()" class="flex items-center p-1 bg-red-500 rounded-md text-gray-50 px-2 ">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
    methods:{
        signUp(){
            const auth = getAuth();
            signOut(auth)
            .then(() => {
                this.$swal({
                    icon:'success',
                    title: 'Desconectado com sucesso!!',
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
        
    }        
            
}
</script>
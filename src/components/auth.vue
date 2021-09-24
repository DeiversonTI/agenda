<template>
<div>
    <!--  -->
    <div>
        <h1 class="text-center">Bem vindo(a), {{nome}}</h1>
        <button @click="signUp()">Desconectar</button>
    </div>
    <div>

    </div>
</div>
</template>
<script>
import { getAuth, signOut } from "firebase/auth";
export default {
    data(){
        return{
            nome:"Verônica",
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
    //       resetPass() {
    //             const auth = getAuth();
    //             const user = auth.currentUser;
    //             const newPassword = getASecureRandomPassword();

    //             updatePassword(user, newPassword)
    //                 .then(() => {
    //                 console.log("Email enviado!");
    //                 // Password reset email sent!
    //                 // ..
    //                 })
    //                 .catch((error) => {
    //                 this.error = error.code;
    //                 this.error = error.message;
    //                 // ..
    //                 });
    // },
    }
    
}
</script>


  
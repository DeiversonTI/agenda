<template>
    <div class="bg-gray-900 w-screen h-screen flex justify-center items-center  ">
        <div class="lg:px-40 xl:px-56 lg:h-80 md:h-80 sm:h-80 xl:h-80 xl:w-3/4 2xl:h-80  2xl:w-3/5 sm:px-11 w-full mx-4 sm:flex sm:justify-center sm:items-center  ">
            <div class=" sm:py-12 sm:rounded-none sm:rounded-l-lg flex items-center justify-center w-full bg-blue-300 sm:w-2/4 h-full rounded-t-lg  ">
                <div class=" justify-center items-center py-1 ">
                    <img src="../assets/Agendamentos.png" alt="" class="w-44 2xl:w-full md:w-full lg:w-full sm:w-full xl:w-full ">
               </div>
            </div>
             
            <div class="sm:w-full bg-gray-50 h-full sm:h-80 sm:rounded-r-lg sm:rounded-bl-none rounded-b-lg ">
                <form  class="bg-white rounded-lg sm:h-80 px-3 pt-2 pb-6 mb-2 w-full  shadow-2xl ">
                    <h2 class="py-1 text-center text-3xl font-thin text-gray-700 sm:mb-2 2xl:text-xl 2xl:mb-1">Reset Password</h2>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Email
                        </label>
                        <input v-model="email"  required class="pl-8 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Entre com o Email">
                    </div>
                    <div  class=" m-auto h-16 justify-between text-gray-900 items-center flex text-center w-full   sm:mt-3 mt-8 2xl:mt-5">
                        <button class="m-auto w-36 h-8 mt-10 rounded  text-center text-gray-50 bg-blue-400" alt="Botão de resetar senha" @click="reset()">Esqueci a Senha</button>
                    </div>
                    <router-link to="/Login">
                        <div  class=" m-auto h-16 justify-between text-gray-900 items-center flex text-center w-full   sm:mt-3 mt-8 2xl:mt-5">
                            <button class="m-auto w-36 h-8    text-center text-red-500 " alt="Botão de resetar senha" >Voltar</button>
                        </div>
                    </router-link>
               </form>
           </div>
        </div>
    </div>
</template>
<script>


import { getAuth, sendPasswordResetEmail } from "firebase/auth"



export default {

    name:"login",
    data(){

   

        return{
            email:'',
            password:'',
            isDesabled: true,
            
        }
    },
    methods:{
        
       
        // Código de reset de senha
         async reset(){
            try{
               
            const auth = getAuth();
           await sendPasswordResetEmail(auth, this.email)
           .then(()=>{
                this.$swal({
                    icon:'success',
                    title:'Foi enviado uma notificação para seu email!',
                    showConfirmButton: false,
                    timer: 2500

                    })
                 
                        this.$router.go({name: 'resetPassword'})
                  
                  
           
                 })
                 
            }catch(error){
                const erro = error.code
                switch (erro) {
                    case "auth/invalid-email":
                        this.$swal({
                        icon:'error',
                        title:'Email Inválido!',
                        })                       
                        break;
                    case "auth/user-not-found":
                        this.$swal({
                        icon:'error',
                        title:'Usuário não encontrado!',
                        })                       
                        break;
                       
                
                    default:
                        this.error = error.message
                        break;
                }
                
                

            }
           
      
        }

        
    }
}
</script>
<style scoped>

input[type='email']{
    background-image: url(../assets/mail.png);
    background-size: 1.2em;
    background-repeat: no-repeat;
    background-position: 7px 9px ;
   
}

input[type='password']{
    background-image: url(../assets/cadeado.png);
    background-size: 1.2em;
    background-repeat: no-repeat;
    background-position: 7px 9px ;
    
}

</style>

 
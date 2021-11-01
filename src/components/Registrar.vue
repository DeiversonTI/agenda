<template>
      <div class="bg-gray-900 w-screen h-screen flex justify-center items-center">
       
            <div class="lg:px-40 xl:px-56 lg:h-80 md:h-80 sm:h-80 xl:h-80 xl:w-3/4 2xl:h-80  2xl:w-3/5 sm:px-11 w-full mx-4 sm:flex sm:justify-center sm:items-center  ">
                <div class=" sm:py-12 sm:rounded-none sm:rounded-l-lg flex items-center justify-center w-full bg-blue-700 sm:w-2/4 h-full rounded-t-lg ">
                    <div class=" justify-center items-center py-1 ">
                        <img src="../assets/escola1.png" alt="" class="w-44 2xl:w-full md:w-full lg:w-full sm:w-full xl:w-full">
                        
                    </div>

                </div>
             
                <div class="sm:w-full bg-gray-50 h-full sm:h-80 sm:rounded-r-lg sm:rounded-bl-none rounded-b-lg ">
                    
                        <form @submit.prevent="login()" class="bg-white rounded-lg sm:h-80 px-3 pt-2 pb-6 mb-2 w-full ">
                            <h2 class="py-1 text-center text-3xl font-thin text-gray-700 sm:mb-2 2xl:text-xl 2xl:mb-3 mt-3">CADASTRO</h2>
                            <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
                            <input v-model="email" type="email" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  placeholder="Entre com seu email xxx@ersvp.g12.br" pattern=".+@ersvp\.g12\.br">
                            </div>
                           

                            <div class="mb-6 sm:mb-2">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Senha</label>
                            <input  v-model="password" required  class="shadow appearance-none border focus:border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Digite sua senha">
                             </div>
                             
                            <div class="flex items-center justify-between sm:pt-1 xl:mt-8">

                            <div>
                                <input type="submit" value="Cadastrar" class="cursor-pointer bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            </div>
                          
                            <!-- <p class="flex justify-center items-center mr-4 font-bold text-md text-blue-500 hover:text-blue-800 2xl:text-lg">
                                
                                <router-link to="/login">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                    </svg>
                                </router-link>
                            </p> -->
                            </div>
                            <!-- <div class="text-gray-900 flex text-center w-full justify-start items-center sm:mt-3 mt-8 2xl:mt-5">
                                    <span class="mr-2 font-sans font-bold text-sm text-gray-700 2xl:text-lg">Não é cadastrado? </span>
                                    <p class="text-red-600 font-bold text-lg"><router-link to="/Registrar"> Cadastre-se!!</router-link></p>
                            </div> -->
                            
                        </form>
                   
                </div>
               
            </div>
             
    </div>
    
    
  
</template>
<script>

import * as firebase from "firebase/app"
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification  } from "firebase/auth"


export default {
    name:"login",
    data(){
        return{
            email:'',
            password:'',

            
            
        }
    },

  
    methods:{

          
         async login(){

            
                firebase;
                    
                   
                    const userId = getAuth()
                    
                    await createUserWithEmailAndPassword(userId, this.email, this.password)
                    .then(()=>{

                        const userGet = userId.currentUser
                        
                        const actionCodeSettings = {

                            // PRECISA SER ALTERADO SEMPRE ANTES DO BUILD
                          
                            // url: 'http://localhost:8080/#/',
                            url: 'https://ersvp.g12.br/agenda/#/'

                        }

                        sendEmailVerification(userGet, actionCodeSettings)
                        .then(()=>{
                           
                            this.$swal({
                            icon:"success",
                            title:"Enviamos uma CONFIRMAÇÃO para seu email!", 
                            footer:'<a href="https://www.ersvp.g12.br:2096/">Acessar Webmail da Escola - <strong style="color:red">CLICK AQUI!</strong></a>'
                            
                            
                            })

                             .then(()=>{
                                setTimeout(() => {
                                    this.$router.go({name: 'Home'})
                                }, 2000)
                            })
                        })


                     }).catch((error)=>{
                 
                   const erro = error.code
                        switch(erro){
                            case "auth/email-already-in-use":
                                this.$swal({
                                    icon:'error',
                                    title:'Email em uso, tente outro!',
                                    showConfirmButton:false,
                                    timer: 2000,
                                })
                                break
                           
                                default:
                                    this.$swal({
                                        icon: 'error',
                                        title: 'Digite uma senha válida!',
                                        showConfirmButton: false,
                                        timer: 2000,

                                    })
                          }
                     })

                    
         }
    }
}
</script>


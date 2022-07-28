<template>
      <div class="bg-gray-900 w-screen h-screen flex justify-center items-center">
          <div class="lg:px-40 xl:px-56 lg:h-96 md:h-96 sm:h-96 xl:h-96 xl:w-3/4 2xl:h-96  2xl:w-3/5 sm:px-11 w-full mx-4 sm:flex sm:justify-center sm:items-center  ">
                <div class=" sm:py-12 sm:rounded-none sm:rounded-l-lg flex items-center justify-center w-full bg-blue-400 sm:w-2/4 h-full rounded-t-lg ">
                    <div class=" justify-center items-center py-1 ">
                        <img src="../assets/Agendamentos.png" alt="" class="w-44 2xl:w-full md:w-full lg:w-full sm:w-full xl:w-full">
                    </div>
                </div>
                <div class="sm:w-full bg-gray-50 h-full sm:h-80 sm:rounded-r-lg sm:rounded-bl-none rounded-b-lg 2xl:h-96 xl:h-96 lg:h-96 sm:h-96  md:h-96 ">
                    <form @submit.prevent="login()" class="bg-white rounded-lg sm:h-80 px-3 pt-2 pb-6 mb-2 w-full ">
                        <h2 class="py-1 text-center text-3xl font-thin text-gray-700 sm:mb-2 2xl:text-xl 2xl:mb-3 mt-3">CADASTRO</h2>
                         <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Nome</label>
                            <input v-model="name" type="text" title="Entre seu nome " required class="pl-8 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  placeholder="Seu Nome" >
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
                            <input v-model="email" type="email" title="Entre com o email da escola " required class="pl-8 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  placeholder="Seu Email @ersvp.g12.br" pattern=".+@ersvp\.g12\.br">
                        </div>
                        <div class="mb-6 sm:mb-2">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Senha</label>
                            <input  v-model="password" required  class="pl-8 shadow appearance-none border focus:border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" title="Cadastre uma senha no mínimo com 8 digitos" placeholder="Cadastre sua senha com 8 digitos">
                        </div>
                        <div class="flex items-center justify-between sm:pt-1 xl:mt-1 ">
                            <div>
                                <input type="submit" value="Cadastrar" class="cursor-pointer bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            </div>
                            <router-link to="/Login">
                                <button class="m-auto w-36 h-8 text-center text-red-500 " alt="Botão de resetar senha" >Voltar</button>
                            </router-link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
</template>
<script>

import * as firebase from "firebase/app"
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile  } from "firebase/auth"

export default {
    name:"login",
    data(){
        return{
            email:'',
            password:'',
            name: ''
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
                            url: 'https://agenda.ersvp.g12.br/#/',

                        }

                        sendEmailVerification(userGet, actionCodeSettings)
                        .then(()=>{
                           
                            this.$swal({
                                
                            html:'<h1 style="font-size:1.4em; font-family:sans-serif;">ACESSE O WEBMAIL</h1>'+
                            '<a href="https://www.ersvp.g12.br:2096/" target="_blank"><strong style="color:white; font-size:0.9em; background:red; border-radius:5px; padding: 1px 50px;">CLICK AQUI</strong></a>',
                            showConfirmButton: false,
                            timer:12000,
                            icon:"success",
                            // text:"Enviamos uma CONFIRMAÇÃO para seu email!", 
                            footer:'<strong style="color:red">**Enviamos uma CONFIRMAÇÃO para seu email!</strong>'
                            
                            
                            })

                             .then(()=>{
                                setTimeout(() => {
                                    this.$router.go({name: 'Home'})
                                    
                                }, 2000)
                            })
                        })
                        updateProfile(userId.currentUser, {
                            displayName: this.name
                            }).then(() => {
                                console.log('Uhuu Gravou!')
                            
                            }).catch((error) => {
                                console.log(error)
                            });
                        


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
input[type='text']{
    background-image: url(../assets/text.png);
    background-size: 1.2em;
    background-repeat: no-repeat;
    background-position: 7px 9px ;
    
}


</style>


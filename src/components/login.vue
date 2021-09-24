<template>
    <div class="bg-gray-900 w-screen h-screen flex justify-center items-center">
       
            <div class="lg:px-40 xl:px-56 xl:h-96 lg:h-96 md:h-96 sm:h-96 2xl:h-96 2xl:px-96 2xl:w-3/4 sm:px-11 w-full mx-4 sm:flex sm:justify-center sm:items-center  ">
                <div class="  sm:py-28 sm:rounded-none sm:rounded-l-lg flex items-center justify-center w-full bg-blue-200 sm:w-2/4 h-full rounded-t-lg ">
                    <div class=" justify-center items-center py-4 ">
                        <img src="../assets/escola.png" alt="" class="w-96 2xl:w-9/6">
                        <h2 class="py-4 text-center text-3xl text-gray-700 font-sans font-semibold 2xl:text-xl">LOGIN</h2>
                    </div>

                </div>
             
                <div class=" sm:w-full bg-gray-50 h-full sm:rounded-r-lg sm:rounded-bl-none rounded-b-lg ">
                    
                        <form  class="bg-white rounded-lg px-6 pt-6 pb-6 mb-4 w-full 2xl:mt-4">
                            <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                               Email
                            </label>
                            <input v-model="email" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Nome, email ou cpf">
                            </div>

                            <div class="mb-6">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                                Senha
                            </label>
                            <input v-model="password" required class="shadow appearance-none border focus:border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Digite sua senha">
                            <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
                            </div>
                            <div class="flex items-center justify-between">
                            <button @click.prevent="login()"  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
                                Logar
                            </button>
                            <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                                Esqueceu a senha?
                            </a>
                            </div>
                            <div class="text-gray-900 flex text-center w-full justify-start items-center mt-8">
                                    <span class="mr-2 font-sans font-bold text-lg text-gray-700">Não é cadastrado? </span>
                                    <p class="text-red-600 font-bold text-xl"><router-link to="/Registrar"> Cadastre-se!!</router-link></p>
                                </div>
                            
                        </form>
                   
                </div>
               
            </div>
             
    </div>
</template>
<script>

import * as firebase from "firebase/app"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"


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
             try{
                firebase
                    const dev = getAuth()
                   await signInWithEmailAndPassword(dev, this.email, this.password)
                    .then(()=>{
                        this.$swal({
                        icon:'success',
                        title: "conectado com sucesso!"
                             })
                        })
                        .then(()=>{
                            setTimeout(() => {
                                this.$router.replace({name: 'Auth'})
                        }, 2000);
                     })
                //    .then(()=>{
                //        this.$swal({
                //            icon:'success',
                //            title: "conectado com sucesso!"
                //        })
                //    })
                //    this.$router.push({name: 'Auth'})
                   
                    }catch(error)
                    
                    {

                        const erro = error.code
                        switch(erro){
                            case "auth/invalid-password":
                                this.$swal({
                                    icon:'error',
                                    title:'Senha Inválida!',
                                })
                                break
                             case "auth/invalid-email":
                                this.$swal({
                                    icon:'error',
                                    title:'Email Inválido!',
                                })
                                break
                             case "auth/user-not-found":
                                this.$swal({
                                    icon:'error',
                                    title:'Usuário não encontrado!',
                                })
                                break
                                //  case "auth/email-already-exists":
                                // this.$swal({
                                //     icon:'error',
                                //     title:'Email já existe, tente outro',
                                // })
                                // break
                                
                                // default:
                                //     this.error = error.message
                                    // then(()=>{
                                    //     this.$swal({
                                    //         icon:'success',
                                    //         title: "conectado com sucesso!"
                                    //     })
                                    // })
                                    // .then(()=>{
                                    //     setTimeout(() => {
                                    //         this.$router.replace({name: 'Auth'})
                                    //     }, 2000);
                                    // })
                                    // this.$router.push({name: 'Auth'})
                                
                            }
                    }
                     
       },
        
    }
}
</script>
<template>
    <div class="bg-gray-100 w-screen h-screen flex justify-center items-center  ">
       
            <div class="lg:px-40 xl:px-56 lg:h-80 md:h-80 sm:h-80 xl:h-80 xl:w-3/4 2xl:h-80  2xl:w-3/5 sm:px-11 w-full mx-4 sm:flex sm:justify-center sm:items-center  ">
                <div>
                  
                    <!-- <div>
                        <h1 class="text-center text-white text-2xl">Bem Vindo ao PlaAg</h1>
                    </div> -->
                </div>

                <div class=" sm:py-12 sm:rounded-none sm:rounded-l-lg flex items-center justify-center w-full bg-blue-300 sm:w-2/4 h-full rounded-t-lg  ">
                    <div class=" justify-center items-center py-1 ">
                        <img src="../assets/Agendamentos.png" alt="" class="w-44 2xl:w-full md:w-full lg:w-full sm:w-full xl:w-full ">
                        
                    </div>

                </div>
             
                <div class="sm:w-full bg-gray-50 h-full sm:h-80 sm:rounded-r-lg sm:rounded-bl-none rounded-b-lg ">
                    
                        <form  class="bg-white rounded-lg sm:h-80 px-3 pt-2 pb-6 mb-2 w-full  shadow-2xl ">
                            <h2 class="py-1 text-center text-3xl font-thin text-gray-700 sm:mb-2 2xl:text-xl 2xl:mb-1">LOGIN</h2>
                            <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                               Email
                            </label>
                            <input v-model="email"  required class="pl-8 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Entre com o Email">
                            </div>

                            <div class="mb-6 sm:mb-2">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                                Senha
                            </label>
                            <input v-model="password" required class="pl-8 hadow appearance-none border focus:border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Digite sua Senha">
                            <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
                            </div>
                            <div class="flex items-center justify-between sm:pt-1">
                            <button @click.prevent="login()"  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
                                Logar
                            </button>
                            <router-link to="resetPassword">
                                <p class=" cursor-pointer inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                                    Esqueceu a senha?
                                </p>
                            </router-link>
                            </div>
                            <div  class="justify-between text-gray-900 items-center flex text-center w-full  sm:mt-3 mt-8 2xl:mt-5">
                                    <div class="flex items-center ">
                                        <span class="mr-2 font-sans font-bold text-lg text-gray-700 2xl:text-md">1º Acesso ? </span>
                                        <p class="  text-red-600 font-bold text-lg" ><router-link to="/Registrar"  > Cadastre-se!!</router-link></p>
                                    </div>
                                    <div>
                                        <router-link to="/help">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600 cursor-pointer" title="Ajuda" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </router-link>
                                    </div>
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
            isDesabled: true,
            
        }
    },
    methods:{
        async login(){
            try{
                firebase
                    const dev = getAuth()
                   await signInWithEmailAndPassword(dev, this.email, this.password)
                    .then(()=>{

                        const userGet = dev.currentUser.emailVerified

                        if(userGet === false){

                        this.$swal({
                            icon:'warning',
                            title: "NEGADO! Verifique seu email!",
                            showConfirmButton:false,
                            timer:2500
                        })


                        }else if(userGet != false){

                        this.$swal({
                            icon:'success',
                            title: "Conectado com Sucesso!!!",
                            showConfirmButton:false,
                            timer:2500
                        })
                                                
                        setTimeout(() => {
                            this.$router.replace({name: 'actiontela'})
                        }, 2000);
                       
                        }else{

                            alert("Por favor, entre em contato com o suporte!")



                        }


                        
                        
                       
                     })
                //    .then(()=>{
                //        this.$swal({
                //            icon:'success',
                //            title: "conectado com sucesso!"
                //        })
                //    })
                //    this.$router.push({name: 'Auth'})
                   
            }catch(error){

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
                                    title:'Usuário Não Encontrado!',
                                })
                                break
                                case "auth/email-already-exists":
                                this.$swal({
                                    icon:'error',
                                    title:'Email já existe!',
                                })
                                break
                                 case "auth/wrong-password":
                                this.$swal({
                                    icon:'error',
                                    title:'Senha Incorreta!',
                                })
                                break
                                case "auth/null-user":
                                this.$swal({
                                    icon:'error',
                                    title:'Usuário Nulo!',
                                })
                                break
                                 case "auth/invalid-claims":
                                this.$swal({
                                    icon:'error',
                                    title:'Usuário Claims!',
                                })
                                break
                                  case "auth/too-many-requests":
                                this.$swal({
                                    icon:'error',
                                    title:'Solicitação Bloqueadas, tente mas tarde!',
                                })
                                break
                                
                                default:
                                    this.error = error.message
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

 
<template>
    <div class="bg-gray-900 w-screen h-screen flex justify-center items-center">
       
            <div class="lg:px-40 xl:px-56 lg:h-80 md:h-80 sm:h-80 xl:h-80 xl:w-3/4 2xl:h-80  2xl:w-3/5 sm:px-11 w-full mx-4 sm:flex sm:justify-center sm:items-center  ">
                <div>
                  
                    <!-- <div>
                        <h1 class="text-center text-white text-2xl">Bem Vindo ao PlaAg</h1>
                    </div> -->
                </div>

                <div class=" sm:py-12 sm:rounded-none sm:rounded-l-lg flex items-center justify-center w-full bg-blue-400 sm:w-2/4 h-full rounded-t-lg ">
                    <div class=" justify-center items-center py-1 ">
                        <img src="../assets/escola1.png" alt="" class="w-44 2xl:w-full md:w-full lg:w-full sm:w-full xl:w-full">
                        
                    </div>

                </div>
             
                <div class="sm:w-full bg-gray-50 h-full sm:h-80 sm:rounded-r-lg sm:rounded-bl-none rounded-b-lg ">
                    
                        <form  class="bg-white rounded-lg sm:h-80 px-3 pt-2 pb-6 mb-2 w-full ">
                            <h2 class="py-1 text-center text-3xl font-thin text-gray-700 sm:mb-2 2xl:text-xl 2xl:mb-1">LOGIN</h2>
                            <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                               Email
                            </label>
                            <input v-model="email" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Entre com o e-mail">
                            </div>

                            <div class="mb-6 sm:mb-2">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                                Senha
                            </label>
                            <input v-model="password" required class="shadow appearance-none border focus:border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Digite sua senha">
                            <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
                            </div>
                            <div class="flex items-center justify-between sm:pt-1">
                            <button @click.prevent="login()"  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
                                Logar
                            </button>
                            <p class=" cursor-pointer inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" @click.prevent="reset()">
                                Esqueceu a senha?
                            </p>
                            </div>
                            <div  class="text-gray-900 flex text-center w-full justify-start items-center sm:mt-3 mt-8 2xl:mt-5">
                                    <span class="mr-2 font-sans font-bold text-sm text-gray-700 2xl:text-lg">Não é cadastrado? </span>
                                    <p class="  text-red-600 font-bold text-lg" ><router-link to="/Registrar"  > Cadastre-se!!</router-link></p>
                            </div>
                            
                        </form>
                   
                </div>
               
            </div>
             
    </div>
</template>
<script>

import * as firebase from "firebase/app"
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth"


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
                        this.$swal({
                        icon:'success',
                        title: "Conectado com Sucesso!",
                        showConfirmButton:false,
                        timer:2000
                             })
                        })
                        .then(()=>{
                            setTimeout(() => {
                                this.$router.replace({name: 'actiontela'})
                        }, 2000);
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
                                    title:'Usuário não encontrado!',
                                })
                                break
                                case "auth/email-already-exists":
                                this.$swal({
                                    icon:'error',
                                    title:'Email já existe, tente outro',
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
                                    title:'Solicitação bloqueadas, tente mas tarde!',
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
        // Código de reset de senha
         async reset(){
            try{
               
            const auth = getAuth();
           await sendPasswordResetEmail(auth, this.email)
           .then(()=>{
                this.$swal({
                    icon:'success',
                    title:'foi enviado uma notificação para seu email!',
                    showConfirmButton: false,
                    timer: 2500

                    })
           
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
           
        //     .catch((error) => {
        //         this.error = error.code;
        //  });
        }

        
    }
}
</script>

 
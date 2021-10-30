<template>

<!-- <div>
   -->
        <!-- Breakpoint prefix	Minimum width	CSS

        sm	640px	@media (min-width: 640px) { ... }

        md	768px	@media (min-width: 768px) { ... }

        lg	1024px	@media (min-width: 1024px) { ... }

        xl	1280px	@media (min-width: 1280px) { ... }
        
        2xl	1536px	@media (min-width: 1536px) { ... } -->

<!-- </div> -->

<div>
        <div class="w-full h-screen border-2 ">

                <h1 class="text-5xl text-center pt-12 pb-4">Ambiente de Teste</h1>
                
                <form @submit.prevent="enviar()" class="bg-gray-300 w-96 border-2 mx-auto container py-4  px-4 mt-4 rounded-md shadow-lg">
                <h1 class="text-xl pb-4">Cadastro de Usuário</h1>
                E-mail <input v-model="email" type="email" class="border-2 mb-4 w-80
                 rounded-md pl-2" pattern=".+@ersvp\.g12\.br"><br>
                Senha <input v-model="senha" type="password" class="border-2 mb-4 w-80 rounded-md pl-2" ><br>
                
                <input type="submit" value="Enviar" class=" mt-8 cursor-pointer bg-blue-600 text-xl text-blue-50 flex container justify-center  mx-auto  py-2 px-4 rounded-md w-1/2">
                </form>

        </div>
        
</div>
</template>

<script>
import {getAuth,  createUserWithEmailAndPassword, sendEmailVerification} from "firebase/auth"
// import {getFirebase} from "firebase/firestore"

export default {
        name:'teste',
        data(){
                return{

                        email:'',
                        senha:'',

                }
        },
        methods:{

                async enviar(){

                       const userId = getAuth()

                        await createUserWithEmailAndPassword(userId, this.email, this.password)
                    .then(()=>{

                        const userGet = userId.currentUser
                        
                        const actionCodeSettings = {
                          
                            url: 'http://localhost:8080/#/',
                            // url: 'https://ersvp.g12.br/agenda/#/'

                        }

                        sendEmailVerification(userGet, actionCodeSettings)
                        .then(()=>{

                            alert("Enviamos uma CONFIRMAÇÃO para seu email!")

                            // this.$swal({
                            // icon:"success",
                            // title:"Enviamos uma CONFIRMAÇÃO para seu email!", 
                            // showConfirmButton: false, 
                            // timer: 3000
                            })

                             .then(()=>{
                                setTimeout(() => {
                                    this.$router.go({name: 'Home'})
                                }, 2000)
                            })



                    .catch((error)=>{
                 
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

                     })
                }
        }
        
}
</script>

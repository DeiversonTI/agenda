<template>
<div class="bg-gray-500 w-full h-screen">
    <div class="bg-gray-50 w-full" >
        <!-- botão de logout -->
        <div class="flex justify-end items-center py-1 pr-2 bg-gray-200">
            <h1 class="text-center text-md pr-4 font-thin text-black" >Bem vindo(a), {{email}}  </h1>
            <button @click="signUp()" class="flex p-1   bg-red-500 rounded-md text-gray-50 px-2 ">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
                Sair
            </button>
        </div>

        <!-- Navbar -->
        <div class="h-40 bg-blue-200 shadow-lg border-b-2 border-gray-300">
            <div class=" flex flex-col justify-center items-center container w-full m-auto h-36 ">
                <div class=" flex justify-center items-center w-full flex-wrap ">
                    <img src="../assets/escola.png" alt="" class="w-80 ml-1 mt-4">
                     <p class="text-center w-full font-sans text-3xl mt-4 ">Agenda <span class="text-white border bg-red-500  px-2 rounded-full  font-extrabold font-sans text-3xl pb-2">on</span>line</p>  
                </div>
            </div>
        </div>
        <!-- Main -->
        <div class=" mt-4 w-full h-screen">
            <div class="container mx-auto flex flex-col justify-start  "> 
                <div class="mb-4">
                        <h1 class="text-center font-sans text-2xl text-gray-800">Cadastro de Eventos</h1>
                </div>
                <div class="space-y-4 ml-2 font-thin text-lg">
                        <form class="space-y-6">    
                            <!-- Data do Evento-->
                            <div>Data do Evento: <input id="date" type="date"></div>

                            <!-- Horário do Evento -->
                            <div>
                                 <label for="hora">Horário do Evento: </label>
                                <select id="hora" name="hora">
                                    <option value="07h20/8h">07h20/8h</option>
                                    <option value="08h/8h40">08h/8h40</option>
                                    <option value="09h30/10h10">09h30/10h10</option>
                                    <option value="10h50/11h30">10h50/11h30</option>
                                </select>
                            </div>

                            <!-- Seleção da Situação -->
                            <div>
                                <label for="action">Situação: </label>
                                <select id="action" name="action">
                                    <option value="salão">Salão</option>
                                    <option value="monitor">Monitor</option>
                                    <option value="agendamento">Agendamento</option>
                                    <option value="trator">Trator</option>
                                </select>
                            </div>

                            <!-- Setor -->
                             <div>
                                <label for="setor">Setor: </label>
                                <select id="setor" name="setor">
                                    <option value="diretoria">Diretoria</option>
                                    <option value="assistente social">Assistente Social</option>
                                    <option value="coord-fundI">Coord-FundI</option>
                                    <option value="coord-fundII">Coord-FundII</option>
                                    <option value="coord-edinf">Coord-EdInf</option>
                                </select>
                            </div>

                            <!-- Motivo -->
                            <div class="border-gray-800">
                                <label for="motivo">Motivo: </label>
                                <textarea id="motivo" name="motivo" rows="4" cols="41" class="border border-gray-300 pl-1"></textarea>
                            </div>

                            <!-- upload -->
                            <div class="">
                                <input type="file" id="myFile" name="filename" class="w-full">
                            </div>

                            <!-- link -->
                            <div>
                                <label for="linkEnviar">Link: </label>
                                <input type="url" name="linkEnviar" id="linkEnviar" placeholder="cole seu link aqui!" class="border border-gray-300 px-1 rounded-sm w-10/12 ">
                            </div>

                            <!-- Botão de submit -->
                            <div class=" flex pt-12 w-full items-center justify-center">
                               <input type="submit" value="Enviar" class="p-2 bg-red-600 text-gray-50 rounded-md"> 
                            </div>
                            
                        </form>
                </div>
              

            </div>
        </div>
    </div>
</div>
</template>
<script>
import { getAuth, signOut } from "firebase/auth";
// import {initializeApp} from "firebase/app";


export default {
    name:"auth",
    data(){
        return{           
           email: null
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
                    text: 'Obrigado, volte sempre!!!!',
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
                this.erro = error.message
            });
        },
        
    },
    created(){
        const auth = getAuth();
        const user = auth.currentUser;
        if(user !== true){
            this.email = user.email;
        }


        // const auth = initializeApp().getAuth().currentUser;
        // this.email = auth.email   
  
    }
     
}
</script>


  
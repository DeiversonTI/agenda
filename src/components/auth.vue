<template>
<div class="bg-gray-500 w-full h-screen">
    <div class="bg-gray-50 w-full" >
        <!-- botão de logout -->
        <User/>

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

                <!-- Cabeçalho do formulário -->
                <div class="mb-4">
                        <h1 class="text-center font-sans text-2xl text-gray-800">Cadastro de Eventos</h1>
                </div>
                <!-- formulario de arquivos logado -->
                <div class="space-y-4 ml-2 font-thin text-lg">
                        <form class="space-y-6">    
                            <!-- Data do Evento-->
                            <Data/>
                           
                            <!-- Horário do Evento -->
                            <Horario/>
                          
                            <!-- Seleção da Situação -->
                            <Situacao/>
                          
                            <!-- Setor -->
                             <Setor/>
                             
                            <!-- Motivo -->
                            <Motivo/>
                          
                            <!-- upload -->
                            <Upload/>
                           
                            <!-- link -->
                            <Link/>
                          
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
import User from "./compLogado/userLogado.vue"
import Data from "./compLogado/dataLogado.vue"
import Horario from "./compLogado/horarioLogado.vue"
import Setor from "./compLogado/setorLogado.vue"
import Situacao from "./compLogado/situacaoLogado.vue"
import Motivo from "./compLogado/motivoLogado.vue"
import Upload from "./compLogado/uploadLogado.vue"
import Link from "./compLogado/linkLogado.vue"

export default {
    name:"auth",
    components:{
        User,
        Data,
        Horario,
        Setor,
        Situacao,
        Motivo,
        Upload,
        Link

    },
      
}
</script>


  
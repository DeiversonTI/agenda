<template>
    <!-- ADICIONAR AQUI OS LINKS DE WEBMAIL E AGENDA -->
    <div class="bg-blue-400 w-full h-screen flex items-center">
        
        
        <div class="mx-auto container   w-full  ">
            <div class="flex flex-col py-24 items-center justify-center text-gray-50 ">
                <div class="mb-4">
                    <img src="@/assets/logo.png" alt="" class="w-60 sm:w-80 ">
                </div>
                <div>
                    <h1 class=" font-thin text-2xl sm:text-5xl md:text-5xl lg:text-7xl ">Bem Vindos ao Portal Vicentino</h1>
                </div>
               
            </div>
           
             
           
            <div class=" space-y-2 sm:space-x-2 sm:flex  mx-2 justify-evenly items-center" >
                   
                <router-link to="/Login">
                <div  class=" rounded-3xl  px-16 py-4  cursor-pointer p-6 border-r-4 border-b-4 border-gray-400  bg-blue-50 shadow-xl  ">
                    <!-- <h3>Agendamentos</h3> -->
                    <img src="@/assets/Agendamentos.png" alt="" title="Agendamento Vicentino Online" class="w-52">
                    
                    
                </div>
              
                </router-link>

                
                <div class=" px-16  py-9 cursor-pointer p-6 rounded-3xl bg-blue-50 border-r-4 border-b-4 border-gray-400 shadow-xl">
                    <!-- <a href="https://ersvp.g12.br"><h3 class="text-blue-700 font-sans text-5xl">Webmail</h3></a> -->
                    <a href="https://ersvp.g12.br"><img src="@/assets/webmail.png" alt="" title="Acesse o webmail" class="w-52"></a>
                </div>

            </div>
        </div>

    </div>
</template>


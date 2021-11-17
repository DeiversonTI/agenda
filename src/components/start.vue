<template>
    <!-- ADICIONAR AQUI OS LINKS DE WEBMAIL E AGENDA -->
    <div class="bg-blue-400 w-full h-screen">
        
        
        <div class="h-screen bg-gray-800">
            <div class="bg-blue-400 flex flex-col items-center justify-center text-gray-50 h-screen">
                <div>
                    <img src="@/assets/logo.png" alt="" class="w-60 sm:w-80 ">
                </div>
                <div>
                    <h1 class=" font-thin text-2xl sm:text-5xl md:text-5xl lg:text-7xl ">Bem Vindos ao Portal Vicentino</h1>
                </div>
                <div class="sm:flex items-center justify-center  ">
                    
                    <div  class=" mt-14 mb-4 w-80 sm:ml-2 sm:mr-4 md:mr-4  flex items-center justify-center rounded-3xl   cursor-pointer  border-r-4 border-b-4 border-gray-400  bg-blue-50 shadow-xl  ">
                        <!-- <h3>Agendamentos</h3> -->
                        <a href="http://agenda.ersvp.g12.br/" target="_blank"><img src="@/assets/Agendamentos.png" alt="" title="Agendamento Vicentino Online" class="w-52 "></a>
                        
                        
                    </div>
                
                  

                    
                    <div class=" w-80 py-1 sm:mr-2 mt-10 flex items-center justify-center rounded-3xl cursor-pointer bg-blue-50 border-r-4 border-b-4 border-gray-400 shadow-xl">
                        <!-- <a href="https://ersvp.g12.br"><h3 class="text-blue-700 font-sans text-5xl">Webmail</h3></a> -->
                        <a href="https://ersvp.g12.br:2096/"  target="_blank"><img src="@/assets/webmail.png" alt="" title="Acesse o webmail" class="w-72"></a>
                    </div>
                </div>
               
            </div>
           
             
           
          
        </div>

    </div>
</template>


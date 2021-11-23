<template>
<!-- No action tela vou chamar auth e a tela do usuario -->
    
    <div class="flex items-center justify-center w-full h-screen ">
        <div class="rounded-md bg-white  w-4/5  lg:mx-auto ">

            <!-- <h1 class="font-thin text-4xl mb-8 text-center">Tela de Ação</h1> -->
            <div class="gap-4 sm:block md:block lg:flex  lg:gap-4 space-y-5 lg:space-y-0 ">
                
                <!-- CADASTRAR EVENTOS -->
                <div class="  py-8 px-2 rounded-md text-gray-50 border-2 shadow-xl lg:w-1/2 xl:w-3/6 2xl:w-3/6 ">
                    <div class=" flex items-center justify-center 2xl:w-full ">
                        <div class="rounded-lg hidden sm:block sm:w-full md:w-80 2xl:w-3/6 ">
                            <img src="../assets/cadastro.jpg" alt=""  >
                        </div>
                        <div class="ml-2 mr-2">                 
                            <p class=" text-3xl font-extrabold text-blue-700 ">Cadastrar Eventos</p>
                            <p class="text-gray-900 text-justify text-lg font-thin mt-4">Cadastre seu evento em nossa agenda 
                            on-line, possibilitando  segurança e conforto para nossos colaboradores!</p>
                            <router-link to="/Auth">
                            <button class="text-gray-50 bg-blue-700 py-2 px-12 rounded-xl mt-4 text-lg border-4 hover:border-4 hover:border-blue-300 hover:bg-blue-800">Entrar</button>
                            </router-link>
                        </div>
                    </div>
               </div>

                <!-- AGENDA ONLINE -->
                <div class="py-8 px-2 rounded-md text-gray-50 border-2 shadow-lg lg:w-1/2 xl:w-3/6 2xl:w-3/6  ">
                    <div class="flex items-center justify-center 2xl:w-full">
                        <div class="hidden sm:flex md:w-56 sm:w-3/4 lg:w-56 2xl:w-2/6">
                            <img src="../assets/login.jpg" alt="" >
                        </div>
                        <div class="ml-2 mr-2">                 
                            <p class=" text-3xl font-extrabold text-green-700 ">Agenda on-line</p>
                            <p class="text-gray-900 text-justify text-lg font-thin mt-4">Acesse seus cadastro e fique sempre atualizado com seus eventos!
                            </p>
                            <router-link to="/userTela">
                            <button class="text-gray-50 bg-green-700 py-2 px-12 rounded-xl mt-8 text-lg hover:bg-green-800 border-4 hover:border-4 hover:border-green-300 ">Entrar</button>
                            </router-link>
                        </div>
                    </div>
               </div>
                <!-- <div class="flex py-4 px-2  rounded-md text-gray-50 border-2">
                    <img src="../assets/login.jpg" alt="" class="w-80">
                    <button class="text-gray-900"><router-link to="/userTela">Agenda Online</router-link> </button>
                </div> -->
            </div>
            <router-link to="/eventos"><button class="text-center w-full mt-4 py-2 text-white ">.</button></router-link> 
        </div>
    </div>
</template>



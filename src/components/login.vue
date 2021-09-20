<template>
    <div class="bg-gray-900 w-screen h-screen flex justify-center items-center">
       
            <div class="lg:px-40 xl:px-56 2xl:px-96 2xl:w-3/4 sm:px-11 w-full mx-4 sm:flex sm:justify-center sm:items-center ">
                <div class=" sm:h-72 sm:rounded-none sm:rounded-l-lg flex items-center justify-center w-full bg-blue-200 sm:w-2/4 h-full rounded-t-lg ">
                    <div class=" justify-center items-center py-4 ">
                        <img src="../assets/escola.png" alt="" class="w-96 2xl:w-11/12 ">
                        <h2 class="py-4 text-center text-3xl text-gray-700 font-sans font-semibold 2xl:text-xl">AGENDA ONLINE</h2>
                    </div>

                </div>
             
                <div class=" sm:w-full bg-gray-50 h-full sm:rounded-r-lg sm:rounded-bl-none rounded-b-lg ">
                    
                        <form class="bg-white rounded-lg px-6 pt-6 pb-6 mb-4 w-full">
                            <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Login
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Nome, email ou cpf">
                            </div>
                            <div class="mb-6">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                                Senha
                            </label>
                            <input class="shadow appearance-none border focus:border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Digite sua senha">
                            <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
                            </div>
                            <div class="flex items-center justify-between">
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Logar
                            </button>
                            <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                                Esqueceu a senha?
                            </a>
                            </div>
                        </form>
                   
                </div>
            </div>
    </div>
</template>
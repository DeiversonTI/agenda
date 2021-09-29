<template>
<!-- No action tela vou chamar auth e a tela do usuario -->
    
    <div class="flex flex-col items-center justify-center w-full h-screen ">
        <div class="border-2 border-gray-400 p-8 rounded-md bg-gray-100">
            <h1 class="font-thin text-4xl mb-8 text-center">Tela de Ação</h1>
            <div class="flex gap-7">
                <div class="py-4 px-2 bg-red-600 rounded-md text-gray-50">
                    <button type="text"><router-link to="/Auth">Cadastro</router-link></button>
                    
                </div>
                <div class="py-4 px-2 bg-red-600 rounded-md text-gray-50">
                    <button><router-link to="/userTela">Agenda Online</router-link> </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name:'actiontela',
    data(){
        return{

        }
    }
    
}
</script>


<template>

<!-- <div> -->
  
        <!-- Breakpoint prefix	Minimum width	CSS

        sm	640px	@media (min-width: 640px) { ... }

        md	768px	@media (min-width: 768px) { ... }

        lg	1024px	@media (min-width: 1024px) { ... }

        xl	1280px	@media (min-width: 1280px) { ... }
        
        2xl	1536px	@media (min-width: 1536px) { ... } -->

<!-- </div> -->
<div class=" flex flex-col container mx-auto justify-center ">
        <div class="
        bg-yellow-400 flex flex-col justify-center w-1/2 container mx-auto pl-4 font-thin text-2xl" @click="clicar()">X</div>

<div class="   bg-green-500 flex flex-col justify-center w-1/2 container mx-auto " v-show="verdadeiro">
        
                <h1 class="font-thin text-4xl ml-4 p-4 text-gray-900">
                        <ul>
                                <li>Maçã</li>
                                <li>Laranja</li>
                                <li>Pera</li>
                                <li>Uva</li>

                        </ul>
                
                </h1>
                  
       

</div>


</div>
 
   
 
 
</template>

<script>
export default {
        name: 'Teste',
        props:{


        },
        data(){
                return{
                        verdadeiro: true,
                }
        },
       methods: {
        clicar(){

              this.verdadeiro = !this.verdadeiro

                
        }


       },
        
}
</script>


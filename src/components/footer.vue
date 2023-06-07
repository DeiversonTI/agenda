<template>

    <!-- <div class="mx-auto bg-Sky-300  w-full "> -->
        <div class=" flex flex-col items-center justify-center w-full bg-Cyan-700">
            <div class="text-xs sm:text-sm  font-medium text-blue-50 w-full text-center ">Agendamento Vicentino Online</div>
            <div  class="text-xs sm:text-sm  font-medium  text-blue-50 w-full text-center">All rights reserved &copy; 2021-{{new Date().getFullYear()}} - <versionApp  />  </div>
            <!-- <div  class="text-xs sm:text-sm  font-medium  text-blue-50 w-full text-center"> <infoFooterHome /> </div> -->
            <div class="text-xs sm:text-sm font-mediun text-blue-50  py-1 w-full text-center">Desenvolvido pelo Setor de TI - ERVSVP</div>
        </div>
    <!-- </div> -->

    
</template>
<script setup>
import versionApp from './versionApp.vue';

</script>

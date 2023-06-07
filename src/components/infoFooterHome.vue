<template>
      <div class="text__white text__copyright text-xs font-thin sm:text-sm">
      &copy; 2021-{{ new Date().getFullYear() }} E.R.S.V.P - All rights reserved - <versionApp />
    </div>
    <div>
      <router-link
         to="/help">
        <p class="font-mono text-red-500 font-bold">Ajuda</p>
      </router-link>
    </div>
</template>
<script setup>
import versionApp from './versionApp.vue';
</script>
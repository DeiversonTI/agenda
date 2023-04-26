<template>
        <div>
                <h1>AMBIENTE DE TESTE</h1>
        </div>
</template>
<script>
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
        setup() {

                const form = ref({

                })
                onMounted(()=>{
                        const arr1  = ["Salão", "Agenda", "Jardim"]
                        const arr2  =  ["Salão"]
                        const arr3 = ["Jardim", "Agenda"]

                        const getArr = [...arr1, ...arr2, ...arr3]
                        getArr.slice(2)
                        console.log(getArr)
                })
                return{
                        form  
                }
                
        }
})
</script>

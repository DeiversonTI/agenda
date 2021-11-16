<template>
    <div>
        <h1>Eventos</h1>
        <ul v-for="evento in eventos" :key="evento.id">
            <li>Nome: {{evento.nome}} | Local: {{evento.situacao}} | Data: {{evento.dia}} de {{evento.mes}} de {{evento.ano}}</li>
           
        </ul>
    </div>
</template>
<script>
import {getFirestore, getDocs, collection} from "firebase/firestore"
export default {
    name:'eventos',
    data(){
        return{
             eventos:[],
        }
    },
   

    async created(){

        const db  =  getFirestore();
        const docRef = await getDocs(collection(db, "usuarios"))

        docRef.forEach((docu)=>{

           
            const dbUser = {
                nome: docu.data().nome,
                situacao: docu.data().situacao,
                dia:docu.data().dia,
                mes:docu.data().mes,
                ano:docu.data().ano,

            }
            this.eventos.push(dbUser)



           

        })





    }


    
    
}
</script>
<template>
    <div class=" w-full h-screen ">
        <div class="flex items-center justify-center w-full  flex-col ">
            <div>
                
                
            </div>
            <div class="bg-blue-800 p-2 w-full sm:w-10/12 md:w-8/12 lg:w-7/12 xl:w-5/12">
               
            
                <ul class="text-lg font-mono text-gray-90 mt-2 p-2 bg-blue-200" v-for="evento in eventos" :key="evento.id">
                    <li>Nome: {{evento.nome}}</li>  
                    <li>Local: {{evento.situacao}}</li> 
                     <li>Horário: {{evento.horario}}</li>  
                    <li>Dia: {{evento.dia}}/{{evento.mes}}/{{evento.ano}}</li>
                    
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import {getFirestore, getDocs, collection, query, orderBy} from "firebase/firestore"
export default {
    name:'eventos',
    data(){
        return{
             eventos:[],
        }
    },
   

    async created(){

        const db  =  getFirestore();
        const refDoc = collection(db, "usuarios")
        const q = query(refDoc, orderBy("dia", "desc"))
        const docRef = await getDocs(q)

        docRef.forEach((docu)=>{
            if (docu.data().situacao == "Salão") {
                
                const dbUser = {
                    nome: docu.data().nome,
                    situacao: docu.data().situacao,
                    horario:docu.data().horario,
                    dia:docu.data().dia,
                    mes:docu.data().mes,
                    ano:docu.data().ano,

                }
                 this.eventos.push(dbUser)
            }
           

            console.log(docu.data().horario)



           

        })





    },
    methods:{
        maior(){
            console.log("teste")
        },
    }


    
    
}
</script>
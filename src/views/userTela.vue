<template>
  <div class="w-full h-screen bg-gray-50">
    <section class="bg-blue-100">
      <!--navbar -->
      <div
        class="
          w-full
          container
          mx-auto
          items-center
          justify-between
          py-2
          sm:flex
        "
      >
        <div class="flex items-center justify-center">
          <img src="../assets/escola.png" alt="" class="w-72" />
        </div>
        <div class="flex justify-center items-center">
          <h1 class="font-medium text-3xl text-gray-700 text-center">
            Agenda-Online
          </h1>
        </div>
      </div>
    </section>
    <section>
      <!-- body aplicação -->
      <div class="w-full bg-gray-50">
        <div>
          <div class="container mx-auto">
            <div class="flex items-center justify-between">
              <div>
                <h1 class="py-8 font-thin text-5xl text-blue-600">
                  Agendamento
                </h1>
              </div>
              <div class="flex items-center">
                <Logado />
              </div>
            </div>
            <!-- <ul class="h-40 rounded-md py-4">
              <h2 class="font-thin text-2xl mb-4">Lista de Usuários</h2>
              <li v-for="agendas in agenda" :key="agendas.id">
                {{ agendas.id }} | {{ agendas.nomeUser }} |
                {{ agendas.setorUser }} | {{ agendas.funcaoUser }}
              </li>
            </ul> -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Logado from "../components/compLogado/userLogado.vue"
import {  getDocs, collection, getFirestore} from "firebase/firestore"


export default {
    name: "userLogado",
    data(){
      return{
        agenda:[ ]
      }
    },
  
    components:{
      Logado
    },
      async created(){
      try{
      const db = getFirestore();
      const querySnapshot =  await getDocs(collection(db, "agenda"));
        querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().funcao}`);
      });
      }catch(error){
        this.error = error.message;
      }
      // const usar = await getDocs(collection(db, 'agenda'));    
      // usar.querySnapshot((doc) => {
      //    console.log(doc)
      //   const user = 
      //  {
      //       'id':doc.id,
      //       'nomeUser':doc.data().nome,
      //       'funcaoUser':doc.data().funcao,
      //       'setorUser':doc.data().setor,
            
      //  }
      
      //  this.agenda.push(user);
      // })  
      
      }
}
      
</script>
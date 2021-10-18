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
            <div class="w-full flex md:flex flex-col   items-center justify-center">
              
                <div>
                  <h1 class="py-8 sm:text-3xl font-thin text-5xl text-blue-600">
                    Agendamento
                  </h1>
                </div>
                <div class=" flex items-center justify-center ">
                  <h1 class="text-base font-thin mr-2 ">Olá <span class="font-bold text-red-600 px-1">{{this.email}}</span> seja bem vindo(a)</h1>
                  <div>
                    <Logado />
                  </div>
                  
                </div>
              
            </div>
           
                <div v-if="isLoggedIn" class=" bg-gray-100 w-full  border-t-2 mt-4">
                   <!-- <button @click.prevent="clicar()" class="bg-blue-700 text-white py-2 px-8 mb-8 rounded-lg ml-4">Inserir</button> -->
                   <h1 class="font-thin text-4xl mb-4 mt-2 text-center"> Agendamentos </h1>
                 
                      <div  class="w-full flex flex-col mt-4 px-2 py-4 bg-gray-200 rounded-lg shadow-md" v-for="agendas in agenda" :key="agendas.id">
                     
                              <ul class="flex flex-col font-sans text-lg text-gray-900 space-y-1">
                                   <li class=""><span class="text-xl font-bold">Nome: </span> {{agendas.nome}}</li>                           
                                  <li class=""><span class="text-xl font-bold">Dia: </span> {{agendas.dia}}</li>
                                  <li class=""><span class="text-xl font-bold">Horário: </span> {{agendas.horario}}</li>
                                  <li class=""><span class="text-xl font-bold">Responsável: </span> {{agendas.responsavel}}</li>
                                  <li class=""><span class="text-xl font-bold">Setor: </span> {{agendas.situacao}}</li>
                                  <li class=""><span class="text-xl font-bold">Motivo: </span> {{agendas.motivo}}</li>
                                  <li class=""><span class="text-xl font-bold">Upload: </span> {{agendas.arquivo}}</li>
                                  <li class=""><span class="text-xl font-bold">Link: </span> {{agendas.link}}</li>    
                              </ul>
                       
                      </div>
                         
                        
          </div>
        </div>
      </div>
      </div>
    </section>
  </div>
</template>

<script>
import Logado from "../components/compLogado/userLogado.vue";
import { getDocs, collection,  getFirestore } from "firebase/firestore";
import {getAuth, onAuthStateChanged} from "firebase/auth";
// import * as firebase from "firebase/app";
// import db from "../components/db/dbConfig";

export default {
  name: "userLogado",
  data() {
    return {
      agenda: [],
      email: '',
      isLoggedIn: false,
    };
  },

  components: {
    Logado,
  },


  // COMANDO DE USUÁRIO LOGADO
  async created() {
  const dbuser = getAuth();
  onAuthStateChanged(dbuser, (user) => {
   
        this.email = user.email;    

  });


  // COMANDO PARA ADICIONAR TELA FINAL PARA O USUARIO
  const dbUser = getFirestore();
  
  const user = await getDocs(collection(dbUser, "usuarios"));
  user.forEach((doc) => {

    const dbAuth = getAuth().currentUser.uid;
    const userTeste = doc.data().user_id;

      if(userTeste === dbAuth){

        const dbMonitor = {
        user_id: userTeste,
        nome:doc.data().nome,
        dia: doc.data().dia,
        horario: doc.data().horario,
        responsavel: doc.data().responsavel,
        situacao: doc.data().situacao,
        motivo: doc.data().motivo,
        // arquivo: doc.data().arquivo,
        link: doc.data().link,
        };

          this.agenda.push(dbMonitor);
     
    }
   
  });
  
  const verUser = dbuser.currentUser
    if(verUser.uid){
     this.isLoggedIn =  true;
  }

  }
  }
</script>
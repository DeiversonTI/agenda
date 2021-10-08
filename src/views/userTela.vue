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
                <h1 class="text-lg font-thin mr-4">Olá <span class="font-bold text-red-600 px-1">{{this.email}}</span> seja bem vindo(a)</h1>
                <div>
                  <Logado />
                </div>
                
              </div>
            </div>
           
                <div class=" bg-gray-100 w-full p-4">
                   <button @click.prevent="clicar()" class="bg-blue-700 text-white py-2 px-8 mb-8 rounded-lg ml-4">Inserir</button>
                   <h1 class="font-thin text-4xl mb-8">Lista de Usuários</h1>
                 
                      <div class="md:px-32 py-8 w-full">
                        <div>
                          <table v-for="agendas in agenda" :key="agendas.id">
                            <thead class="bg-gray-800 text-white ">
                              <tr>
                                <th class="  w-auto text-left py-3 px-4 uppercase font-semibold text-sm">Data</th>
                                <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Horário</th>
                                <th class=" w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Responsável</th>
                                <th class=" w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Local</th>
                                <th class=" w-auto text-left py-3 px-4 uppercase font-semibold text-sm">Assunto</th>
                                <th class=" w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Upload</th>
                                <th class=" w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Link</th>
                                
                              </tr>
                            </thead>
                          <tbody class="text-gray-700">
                            <tr>
                              <td class=" w-auto text-left py-3 px-4 border-2">{{agendas.dia}}</td>
                              <td class="w-1/3 text-left py-3 px-4 border-2">{{agendas.horario}}</td>
                              <td class="w-1/3 text-left py-3 px-4 border-2">{{agendas.responsavel}}</td>
                              <td class="w-1/3 text-left py-3 px-4 border-2">{{agendas.situacao}}</td>
                              <td class="w-auto text-left py-3 px-4 border-2">{{agendas.motivo}}</td>
                              <td class="w-1/3 text-left py-3 px-4 border-2">{{agendas.arquivo}}</td>
                              <td class="w-1/3 text-left py-3 px-4 border-2">{{agendas.link}}</td>    
                            </tr>
                            </tbody>
                          </table>
                        </div>
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
import { getDocs, collection, addDoc, getFirestore } from "firebase/firestore";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import * as firebase from "firebase/app";
import db from "../components/db/dbConfig";

export default {
  name: "userLogado",
  data() {
    return {
      agenda: [],
      email: '',
    };
  },

  components: {
    Logado,
  },
  async created() {
    firebase;
    db;

     const dbuser = getAuth();
            await onAuthStateChanged(dbuser, (user) => {
            this.email = user.email;             
           
    }); 
    const dbUser = getFirestore();
    const user = await getDocs(collection(dbUser, "agenda"));
    user.forEach((doc) => {
      const dbMonitor = {
      
        dia: doc.data().dia,
        horario: doc.data().horario,
        responsavel: doc.data().responsavel,
        situacao: doc.data().situacao,
        motivo: doc.data().motivo,
        arquivo: doc.data().arquivo,
        link: doc.data().link,
      };

      this.agenda.push(dbMonitor);
      
    });
  },
  methods: {
    async clicar() {
      // db
      //  firebase
      const dbUser = getFirestore();
      const docRef = await addDoc(collection(dbUser, "agenda"), {
        dia: "Rodrigo Pederneiras",
        horario: "Analista de Projetos",
        responsavel: "Assitente Social",
        situacao: "Assitente Social",
        motivo: "Não sei você, mas quero ir embora!",
        arquivo: "arquivos",
        link: "outro link",
      });
      console.log("Documento foi adicionado com Id: ", docRef.id);
    },
  },
};
</script>
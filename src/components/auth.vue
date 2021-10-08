<template>
  <div class="bg-gray-500 w-full h-screen">
    <div class="bg-gray-50 w-full">
      <div class="flex items-center justify-end">
        <h1 class="text-lg font-thin mr-4">
          Olá
          <span class="font-bold text-red-600 px-1">{{ this.email }}</span> seja
          bem vindo(a)
        </h1>
        <div>
          <Logado />
        </div>
      </div>
      <!-- botão de logout -->
      <!-- <User/> -->

      <!-- Navbar -->
      <div class="h-40 bg-blue-200 shadow-lg border-b-2 border-gray-300">
        <div
          class="
            flex flex-col
            justify-center
            items-center
            container
            w-full
            m-auto
            h-36
          "
        >
          <div class="flex justify-center items-center w-full flex-wrap">
            <img src="../assets/escola.png" alt="" class="w-80 ml-1 mt-4" />
            <p class="text-center w-full font-sans text-3xl mt-4">
              Agenda
              <span
                class="
                  text-white
                  border
                  bg-red-500
                  px-2
                  rounded-full
                  font-extrabold font-sans
                  text-3xl
                  pb-2
                "
                >on</span
              >line
            </p>
          </div>
        </div>
      </div>

      <!-- Main -->
      <div class="mt-4 w-full h-screen">
        <div class="container mx-auto flex flex-col justify-start">
          <!-- Cabeçalho do formulário -->
          <div class="mb-4">
            <h1 class="text-center font-sans text-2xl text-gray-800">
              Cadastro de Eventos
            </h1>
          </div>
          <!-- formulario de arquivos logado -->
          <div class="space-y-4 ml-2 font-thin text-lg">
            <form @submit.prevent="clicar" class="space-y-6">
              <!-- Data do Evento-->
              <div>
                Data do Evento:
                <input id="date" type="date" v-model="form.dia" />
              </div>
              <!-- <Data/> -->

              <!-- Horário do Evento -->
              <div>
                <label for="hora">Horário do Evento: </label>
                <select id="hora" name="hora" v-model="form.horario">
                  <option value="07h20/8h">07h20/8h</option>
                  <option value="08h/8h40">08h/8h40</option>
                  <option value="09h30/10h10">09h30/10h10</option>
                  <option value="10h50/11h30">10h50/11h30</option>
                </select>
              </div>
              <!-- <Horario/>
                           -->
              <!-- Seleção da Situação -->
              <div>
                <label for="action">Situação: </label>
                <select id="action" name="action" v-model="form.situacao">
                  <option value="salão">Salão</option>
                  <option value="monitor">Monitor</option>
                  <option value="agendamento">Agendamento</option>
                  <option value="trator">Trator</option>
                </select>
              </div>
              <!-- <Situacao/> -->

              <!-- Setor -->
              <div>
                <label for="setor">Setor: </label>
                <select id="setor" name="setor" v-model="form.responsavel">
                  <option value="diretoria">Diretoria</option>
                  <option value="assistente social">Assistente Social</option>
                  <option value="coord-fundI">Coord-FundI</option>
                  <option value="coord-fundII">Coord-FundII</option>
                  <option value="coord-edinf">Coord-EdInf</option>
                </select>
              </div>
              <!-- <Setor/> -->

              <!-- Motivo -->
              <div class="border-gray-800">
                <label for="motivo">Motivo: </label>
                <textarea
                  id="motivo"
                  name="motivo"
                  rows="4"
                  cols="41"
                  class="border border-gray-300 pl-1"
                  v-model="form.motivo"
                ></textarea>
              </div>
              <!-- <Motivo/> -->

              <!-- upload -->
              <!-- <div class="">
                <input type="file" id="myFile" name="filename" class="w-full" />
              </div> -->
              <!-- <Upload/> -->

              <!-- link -->

              <!-- <Link/> -->
              <div>
                <label for="linkEnviar">Link: </label>
                <input
                  type="text"
                  name="linkEnviar"
                  id="linkEnviar"
                  placeholder="cole seu link aqui!"
                  class="border border-gray-300 px-1 rounded-sm w-10/12"
                  v-model="form.link"
                />
              </div>

              <!-- Botão de submit -->
              <div class="flex pt-12 w-full items-center justify-center">
                <input
                  type="submit"
                  value="Enviar"
                  class="p-2 bg-red-600 text-gray-50 rounded-md"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>


import {getAuth, onAuthStateChanged} from "firebase/auth";
// import * as firebase from "firebase/app";
// import db from "../components/db/dbConfig";
import {  collection, addDoc, getFirestore } from "firebase/firestore";
import Logado from "../components/compLogado/userLogado.vue"

export default {
    name:"auth",
    components:{
        Logado
    },
    data(){
        return{
            email:'',
            form:{                    
                    dia: null,
                    horario:null,
                    responsavel: null,
                    situacao: null,
                    motivo: null,
                    arquivo: null,
                    link:null,
            }
        }
            
    },
    
     methods: {
    async clicar() {
        try{
      const dbUser = getFirestore();
     await addDoc(collection(dbUser, "agenda"), {
        dia: this.form.dia,
        horario: this.form.horario,
        responsavel: this.form.responsavel,
        situacao: this.form.situacao,
        motivo: this.form.motivo,
        link: this.form.link,
      }).then(() =>{
          this.$swal({
            icon:'success',
            text:'Enviado com Sucesso!',
            showConfirmButton: false,
            timer: 2500,

          })
          .then(()=>{
              setTimeout(() => {
                  this.$router.replace({name: 'usertela'})
              }, 2000);
              
          })
          
      })}catch(error){
              this.error = error.message;
          }
      console.log("Documento foi adicionado");
    },
    
  },
  async created(){
        // firebase;
        // db;
         const dbuser = getAuth();
            await onAuthStateChanged(dbuser, (user) => {
            this.email = user.email;             
           
    }); 
    },
      
}

</script>


  
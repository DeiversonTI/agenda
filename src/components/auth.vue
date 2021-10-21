<template>
  <div class="bg-gray-500 w-full h-screen">
    <div class="bg-gray-50 w-full">
      
      <div class="flex items-center justify-end">
        <h1 class="text-base font-thin mr-4 px-4">
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
      <div class="bg-blue-300 py-8 shadow-md">
        <div class="flex justify-around items-center">
          
          
            <div class="ml-2">
             <img src="../assets/escola.png" alt="" class="w-64 "/>
            </div>
            <div class="font-thin text-2xl text-blue-900 mt-4 text-center">
              Agenda ONLINE
            </div>
          
        </div>
      </div>
     

      <!-- Main -->
      <div class="  flex mt-4 w-full h-screen">
        <div class=" bg-gray-100 sm:container sm:mx-auto sm:w-4/5 md:container md:mx-auto md:w-4/5 lg:container lg:mx-auto lg:w-3/5  xl:mx-aut xl:container  xl:w-2/5 xl:rounded-xl xl:border-2 h-screen flex flex-col justify-start">
          <!-- Cabeçalho do formulário -->
          <div class="mb-4 mt-8">
            <h1 class="text-center font-sans text-3xl">
              Cadastro de Eventos
            </h1>
          </div>
          <!-- formulario de arquivos logado -->
          <div class="space-y-4 ml-2 font-thin text-lg mr-1 px-4">
            <form @submit.prevent="clicar" class="space-y-6">
              <!-- Data do Evento-->
              <div>               
                   <label for="nameConnect">Nome: </label>
                   <input type="text" id="nameConnect" v-model="form.nome" class="border-2 border-gray-400 w-full rounded-md" />
                   
              </div>
              <div>
                <label for="date">Data do Evento:</label> 
                <input  id="date" type="date"  v-model="form.dia" class="border-2 border-gray-400 w-full rounded-md"  />
               
                
              </div>
              <!-- <Data/> -->

              <!-- Horário do Evento -->
            
              <div>
                <label for="hora">Horário do Evento: </label>
                <select id="hora" name="hora" v-model="form.horario" class="border-2 border-gray-400 w-full rounded-md" >
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
                <label for="action">Local ou Equipamento: </label>
                <select id="action" name="action" v-model="form.situacao" class="border-2 border-gray-400 w-full rounded-md" >
                  <option value="Salao">Salão</option>
                  <option value="Jardim_Sensorial">Jardim Sensorial</option>
                  <option value="Agendamento">Agendamento</option>
                  <option value="Trator">Trator</option>
                  <option value="Área_Gourmet">Área Gourmet</option>
                 
                </select>
              </div>
              <!-- <Situacao/> -->

              <!-- Setor -->
              <div>
                <label for="setor">Setor Responsável: </label>
                <select id="setor" name="setor" v-model="form.responsavel" class="border-2 border-gray-400 w-full rounded-md" >
                  <option value="Diretoria">Diretoria</option>
                  <option value="Assistente-Social">Assistente Social</option>
                  <option value="Coord-fundI">Coord-FundI</option>
                  <option value="Coord-fundII">Coord-FundII</option>
                  <option value="Coord-edinf">Coord-EdInf</option>
                  <option value="Professor">Professor</option>
                  <option value="Secretaria">Secretaria</option>
                  <option value="Tesouraria">Tesouraria</option>
                   <option value="TI">TI</option>
                </select>
              </div>
              <!-- <Setor/> -->

                   <!-- Seleção de Seguimento -->
              <div>
                <label for="seg">Seguimento: </label>
                <select id="seg" name="seg" v-model="form.seguimento" class="border-2 border-gray-400 w-full rounded-md" >
                  <option value="Fundamental-I">Fundamental I</option>
                  <option value="Fundamental-II">Fundamental II</option>
                  <option value="Edu-Infantil">Educação Infantil</option>
                 
                 
                </select>
              </div>

              <!-- Motivo -->
              <div class="border-gray-800 w-full">
                <label for="motivo">Motivo: </label>
                <textarea
                  id="motivo"
                  name="motivo"
                  rows="4"
                  cols="41"
                  class=" border-2 border-gray-400 w-full rounded-md pl-2 pt-1" 
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
                  class=" border-gray-300 px-1   border-2  w-full rounded-md"
                  v-model="form.link"
                />
              </div>

              <!-- Botão de submit -->
              <div class="flex pt-12 w-full items-center justify-center">
                <input
                  type="submit"
                  value="Enviar"
                  class="py-3  bg-red-600 text-gray-50 rounded-md cursor-pointer px-8"
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
import db from "../components/db/dbConfig";
import {  collection, addDoc, getFirestore} from "firebase/firestore";
import Logado from "../components/compLogado/userLogado.vue"
// import Data from "../components/compLogado/dataLogado.vue"
// import DataUser from "../components/compLogado/dataUser"
import dataUser from '../components/compLogado/dataUser';

export default {
    name:"auth",
    components:{
        Logado,
        // Data,
        
    },
   
    
    data(){
        return{
            email:'',
            
            
            
            form:{                    
                    nome:null,
                    dia: '',
                    horario:null,
                    responsavel: null,
                    situacao: null,
                    seguimento:null,
                    motivo: null,
                    arquivo: null,
                    link:null,

            }
        }
            
    },
     async created(){
            // firebase;
            db;
            const dbuser = getAuth();
                await onAuthStateChanged(dbuser, (user) => {
                this.email = user.email;
                          
              
            });
        
            

      },
    
     methods: {
    async clicar() {
       
    try{
      
    
      
              
      // const authUser  = dataUser();
     const dbUser = getFirestore();
     const authentication = getAuth();
     const userConnected = authentication.currentUser.uid; 

     
           

        const usuarioDb = {
        user_id:userConnected,
        nome:this.form.nome,
        dia: this.form.dia,
        horario: this.form.horario,
        responsavel: this.form.responsavel,
        situacao: this.form.situacao,
        seguimento:this.form.seguimento,
        motivo: this.form.motivo,
        link: this.form.link,
        data:dataUser,
        
       }
       

       await addDoc(collection(dbUser, "usuarios"), usuarioDb)
       
      
   
      .then(() =>{
          this.$swal({
            icon:'success',
            text:'Enviado com Sucesso!',
            showConfirmButton: false,
            timer: 2500,
          })
          .then(()=>{
              setTimeout(() => {
                  this.$router.replace({name: 'usertela'})
              }, 5000);
          })
          
        })}catch(error){
                  this.error = error.message;
          }
         
    }
    
    
  }
     
      
}

</script>
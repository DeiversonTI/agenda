<template>
<div>
  <div class="bg-gray-500 w-full h-auto">
    <div class="bg-gray-50 w-full">
      
      <div class="flex items-center justify-end">
        <h1 class="text-base font-thin mr-4 px-4">
          Olá
          <span class="font-bold text-red-600 px-1">{{ this.email }}</span> Seja
          Bem Vindo(a)
        </h1>
          <div>
            <Logado />
          </div>
      </div>
      <!-- botão de logout -->
      <!-- <User/> -->

      <!-- Navbar -->
      <div class="bg-blue-100 py-8 shadow-md">
        <div class="flex justify-around items-center">
          
          
            <div class="ml-2">
             <img src="../assets/escola.png" alt="" class="w-48  sm:w-64 md:w-64 lg:w-64 xl:w-64 2xl:w-64 "/>
            </div>
            <div class="font-thin text-2xl text-blue-900 mt-4 text-center">
             <img src="../assets/Agendamentos.png" alt="" class="w-24 sm:w-44 md:w-44 lg:w-44 xl:w-44 2xl:w-44 "/>
            </div>
          
        </div>
      </div>
     

      <!-- Main -->
      <div class="  flex mt-4 w-full h-auto ">
        <div class=" bg-gray-100 sm:container sm:mx-auto sm:w-4/5 md:container md:mx-auto md:w-4/5 lg:container lg:mx-auto lg:w-3/5  xl:mx-aut xl:container  xl:w-2/5 xl:rounded-xl xl:border-2  flex flex-col justify-start">
          <!-- Cabeçalho do formulário -->
          <div class="mb-4 mt-8">
            <h1 class="text-center font-sans text-3xl">
              Cadastro de Eventos
            </h1>
          </div>
          <!-- formulario de arquivos logado -->
          <div  class="space-y-4 ml-2 font-thin text-lg mr-1 px-4 ">
            <form @submit.prevent="clicar()" class="space-y-6 ">
              <!-- Data do Evento-->

              <div>               
                   <label class="flex" for="nameConnect">Nome do Colaborador: <p class="text-red-500 ml-1 font-extrabold">*</p> </label>
                   <input placeholder="Nome do Colaborador" required type="text" id="nameConnect" v-model="form.nome" class="border-2  border-gray-400 w-full rounded-md" />
                   
              </div>
              <div>
                  <div>
                        <label  for="data" class="flex">Data do Evento:<p class="text-red-500 ml-1 font-extrabold">*</p></label> 
                  </div>
                  <div class="flex">
                  <div >
                    Dia:<select id="data" required class="px-2 border-2 rounded-md mr-2 border-gray-400 " v-model="form.dia">
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                </select>
                </div>
                <div>
                  Mês:
                  <select id="data" required class="px-3 border-2 rounded-md mr-2 border-gray-400"  v-model="form.mes">
                    <option value="Janeiro">Janeiro</option>
                    <option value="Fevereiro">Fevereiro</option>
                    <option value="Março">Março</option>
                    <option value="Abril">Abril</option>
                    <option value="Maio">Maio</option>
                    <option value="Junho">Junho</option>
                    <option value="Julho">Julho</option>
                    <option value="Agosto">Agosto</option>
                    <option value="Setembro">Setembro</option>
                    <option value="Outubro">Outubro</option>
                    <option value="Novembro">Novembro</option>
                    <option value="Dezembro">Dezembro</option>
                   
                </select>
                </div>
                 <div>
                   Ano:
                  <select id="data" required class="px-2 border-2 rounded-md border-gray-400"  v-model="form.ano">
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                  
                   
                </select>
                </div>
                </div>
                <!-- <input type="text" v-model="form.dia" id="data" required class="form-control border-2 border-gray-400 w-full rounded-md" placeholder="Ex.: dd/mm/aaaa" data-mask="00/00/0000" maxlength="10" autocomplete="on"> -->
                <!-- <input   id="data" type="date" required  v-model="form.dia" class="border-2 border-gray-400 w-full rounded-md"  /> -->
              </div>
              <!-- <Data/> -->

              <!-- Horário do Evento -->
              <div>
                <label class="flex"  for="hora">Horário do Evento:<p class="text-red-500 ml-1 font-extrabold">*</p> </label>
                <input type="time" id="hora"  v-model="form.horario" name="hora" min="07:10" max="19:00" class=" flex border-2 border-gray-400 w-1/3 rounded-md " required>
                <p class=" text-base font-bold text-red-600 ">Os eventos terão a duração de 40min, exceto, agendamentos.</p>
               
              </div>

              <!-- <Horario/>
                           -->
              <!-- Seleção da Situação -->
                <div>
                <label class="flex"  for="action">Local ou Situação:<p class="text-red-500 ml-1 font-extrabold">*</p> </label>
                <select id="action" name="action" v-model="form.situacao" class="border-2 border-gray-400 w-full rounded-md" required >
                  <option value="Salão">Salão</option>
                  <option value="Jardim Sensorial">Jardim Sensorial</option>
                  <option value="Agendamentos">Agendamentos</option>
                  <option value="Ranchinho de Maria">Ranchinho de Maria</option>
                  <option value="Área Gourmet">Área Gourmet</option>
                  <option value="Sala Informática">Sala Informática</option>
                  <option value="Outros">Outros</option>
                 
                </select>
              </div> 
              <!-- <Situacao/> -->

              <!-- Setor -->

             
              <div  >
                <label class="flex" for="setor">Função ou Setor do Colaborador:<p class="text-red-500 ml-1 font-extrabold">*</p> </label>
                <select  id="setor" name="setor" v-model="form.responsavel" class="border-2 border-gray-400 w-full rounded-md" required >
                  <option value="Diretoria">Diretora</option>
                  <option value="Assistente-Social">Assistente-Social</option>
                  <option value="Coordenadora Fundamental-I">Coordenadora Fundamental-I</option>
                  <option value="Coordenadora Fundamental-II">Coordenadora Fundamental-II</option>
                  <option value="Coordenadora Educação Infantil">Coordenadora Educação Infantil</option>
                  <option value="Professor">Professor</option>
                  <option value="Secretaria">Secretaria</option>
                  <option value="Tesouraria">Tesouraria</option>
                   <option value="Setor-TI">Setor de TI</option>
                </select>
              </div> 
              <!-- <Setor/> -->

                   <!-- Seleção de Seguimento -->
              <div>
                <label class="flex" for="seg">Seguimento ou Setor Correspondente:<p class="text-red-500 ml-1 font-extrabold">*</p> </label>
                <select @click="pegarData()" id="seg" name="seg" v-model="form.seguimento" class="border-2 border-gray-400 w-full rounded-md" title="Selecione o setor ou seguimento relacionados ao evento. " required >
                  <option value="Fundamental-I">Fundamental-I</option>
                  <option value="Fundamental-II">Fundamental-II</option>
                  <option value="Edu-Infantil">Edu-Infantil</option>
                  <option value="Diretoria">Diretoria</option>
                  <option value="Secretaria">Secretaria</option>
                  <option value="Setor-TI">Setor de TI</option>
                  <option value="Todos-Seguimentos">Todos-Seguimentos</option>
                   <option value="Assistente-Social">Assistente-Social</option>
                   <option value="Tesouraria">Tesouraria</option>
                 
                 
                </select>
              </div>

              <!-- Motivo -->
              <div class="border-gray-800 w-full">
                <label class="flex" for="motivo">Descrição do Evento:<p class="text-red-500 ml-1 font-extrabold">*</p> </label>
                <textarea
                  id="motivo" 
                  name="motivo"
                  rows="4"
                  cols="41"
                  class=" border-2 border-gray-400 w-full rounded-md pl-2 pt-1" 
                  v-model="form.motivo"
                  required
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
                  placeholder="Adicione seu link aqui..."
                  class=" border-gray-300 px-1   border-2  w-full rounded-md"
                  v-model="form.link"
                />
              </div>
              <div>
                <div class="flex font-bold text-red-500 items-center justif-start"><p class="text-red-500 ml-1 font-extrabold mr-2">*</p> Obrigatório.</div>
              </div>

              <!-- Botão de submit -->
              <div class="flex pt-8 w-full items-center justify-center">
                <input
                  title="Enviar formulário"

                  type="submit"
                  value="Enviar"
                  class="py-2 bg-red-600 text-gray-50 rounded-md cursor-pointer px-8 mb-8 "
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="relative bottom-0">
    <Footer/>
  </div>
  </div>
</template>
<script>


import {getAuth, onAuthStateChanged } from "firebase/auth";
// import * as firebase from "firebase/app";
import db from "../components/db/dbConfig";
import {  collection,  getFirestore, addDoc, getDocs} from "firebase/firestore";
import Logado from "../components/compLogado/userLogado.vue"
import Footer from "../components/footer.vue"
// import Data from "../components/compLogado/dataLogado.vue"
// import DataUser from "../components/compLogado/dataUser"

// import dataUser from '../components/compLogado/dataUser';
// import getUser from "../components/db/getUser"


export default {
    name:"auth",
    components:{
        Logado,
        Footer,
        // Data,
        
    },
   
    
    data(){
        return{
            email:'',
            disabled: true,
            
            
            
            form:{                    
                    
                    nome:null,
                    dia: null,
                    mes:null,
                    ano:null,
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
          //  APRESENTA NA TELA O USUÁRIO CONECTADO
            db;
            const dbuser = getAuth();
                onAuthStateChanged(dbuser, (user) => {
                this.email = user.email;           
            });

            
           

    },
    
   
     methods: {

      
        clicado(){

        this.disabledUser = !this.disabledUser;

      },
      

      //  FUNÇÃO DE VALIDAÇÃO DE CAMPOS - FUNCIONANDO
       async pegarData(){
            const dbUser = getFirestore();
           
            const querySnapshot =  await getDocs(collection(dbUser, "usuarios"));
            querySnapshot.forEach((doc) => {
            
            let dia = doc.data().dia;
            let mes = doc.data().mes;
            let ano = doc.data().ano;
            let hora = doc.data().horario;
            let sitUser = doc.data().situacao;
           
           
            if(this.form.dia === dia && this.form.mes === mes && this.form.ano === ano && hora === this.form.horario && this.form.situacao === sitUser){
              this.$swal({
              icon:'error',
              title: 'Data ou Hora já em uso!!'
              })
              setTimeout(() => {
                this.$router.go({name:'auth'})
              }, 2500);
                               
            }else if(this.form.dia != dia){

              console.log("Continua o fluxo")
             
            }
            else{
              console.log("deu muito ruim")
            }
      })

    },

   

     async clicar() {
    try{

     


    //  const authUser  = dataUser;
     const dbUser = getFirestore();
     const authentication = getAuth();
     const userConnected = authentication.currentUser.uid; 

     console.log(dbUser)


        const usuarioDb = {

         

        user_id:userConnected,
        
        nome:this.form.nome,
        dia: this.form.dia,
        mes: this.form.mes,
        ano: this.form.ano,
        horario: this.form.horario,
        responsavel: this.form.responsavel,
        situacao: this.form.situacao,
        seguimento:this.form.seguimento,
        motivo: this.form.motivo,
        link: this.form.link,
        data:new Date().toLocaleString(),
        
        }
       
      //  MENSAGEM APRESENTADA ANTES DE GRAVAR NO BANCO DE DADOS
        
      // addDoc(collection(dbUser, "usuarios"), usuarioDb)
     
       this.$swal({
        title: 'As informações estão completas?',
        showCancelButton: true,
        confirmButtonText: 'Salvar',
        
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          addDoc(collection(dbUser, "usuarios"), usuarioDb)
          .then(()=>{
            
            setTimeout(() => {
              this.$router.replace({name: 'usertela'})
             
            }, 1500);
          })
          console.log("Salvo")
          // this.$swal('Saved!', '', 'success')
        } else if (result.isDenied) {
         
          this.$swal('Não foi salvo', '', 'info')
          
        }
        
      })
      
      }catch(error){
                  this.error = error.message;
      }
         
    }
    
    
    
     }
     
      
}

</script>
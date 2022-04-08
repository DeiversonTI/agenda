<template>
<div>
  <div class="bg-gray-500 w-full h-auto">
    <div class="bg-gray-50 w-full">
      
      <div class="flex items-center justify-end">
        <h1 class="text-base font-thin mr-4 px-4">
          Olá
          <span class="font-bold text-red-600 px-1">{{ this.usuario }}</span> Seja
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
      <div class="   mt-4 w-full h-auto  ">
        <div class=" bg-blue-200 sm:container sm:mx-auto sm:w-4/5 md:container md:mx-auto md:w-4/5 lg:container lg:mx-auto lg:w-3/5  xl:mx-auto xl:container  xl:w-7/12 xl:rounded-xl xl:border-2 2xl:mx-auto 2xl:container  2xl:w-6/12 2xl:rounded-xl 2xl:border-2  flex flex-col justify-start">
          <!-- Cabeçalho do formulário -->
          <div class="mb-4 mt-8">
            <h1 class="text-center font-sans text-3xl">
              Editar Usuário
            </h1>
          </div>
          <!-- formulario de arquivos logado -->
          <div  class="space-y-4 ml-2 font-thin text-lg mr-1 px-4 ">
            <form @submit.prevent="updataUser()"  class="space-y-6 ">
              <!-- Data do Evento-->

              <div>               
                   <label class="flex" for="nameConnect">Nome do Colaborador: <p class="text-red-500 ml-1 font-extrabold">*</p> </label>
                   <input placeholder="Nome do Colaborador" required type="text" id="nameConnect" v-model="userGetPost.nome" class="border-2  border-gray-400 w-full rounded-md" />
                   
              </div>
              <div>
                  <div>
                        <label  for="data" class="flex">Data do Evento:<p class="text-red-500 ml-1 font-extrabold">*</p></label> 
                  </div>
                  <div class="flex">
                  <div>
                    Dia:<select id="data" required class="px-2 border-2 rounded-md mr-2 border-gray-400 " v-model="userGetPost.dia">
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
                  <select  id="data" required class="px-3 border-2 rounded-md mr-2 border-gray-400"  v-model="userGetPost.mes">
                    <option value="01">Janeiro</option>
                    <option value="02">Fevereiro</option>
                    <option value="03">Março</option>
                    <option value="04">Abril</option>
                    <option value="05">Maio</option>
                    <option value="06">Junho</option>
                    <option value="07">Julho</option>
                    <option value="08">Agosto</option>
                    <option value="09">Setembro</option>
                    <option value="10">Outubro</option>
                    <option value="11">Novembro</option>
                    <option value="12">Dezembro</option>
                   
                </select>
                </div>
                 <div>
                   Ano:
                  <select @click.prevent="dataUser()" id="data" required class="px-2 border-2 rounded-md border-gray-400"  v-model="userGetPost.ano">
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
                <input type="time" id="hora"  v-model="userGetPost.horario" name="hora" min="07:10" max="19:00" class=" mr-2  border-2 border-gray-400 2xl:w-36 w-1/3 rounded-md " required>
                <input type="time" id="hora"  v-model="userGetPost.horario_one" name="hora" min="07:10" max="19:00" class="  border-2 border-gray-400 2xl:w-36 w-1/3 rounded-md " required>
                <p class=" text-base font-bold text-red-600 ">Os eventos terão a duração de 40min, exceto, agendamentos.</p>
               
              </div>

              <!-- <Horario/>
                           -->
              <!-- Seleção da Situação -->
                <div>
                <label class="flex"  for="action">Local ou Situação:<p class="text-red-500 ml-1 font-extrabold">*</p> </label>
                <select id="action" name="action" v-model="userGetPost.situacao" class="border-2 border-gray-400 w-full rounded-md" required >
                  <option value="Salão">Salão</option>
                  <option value="Jardim Sensorial">Jardim Sensorial</option>
                  <option value="Agendamentos">Agendamentos</option>
                  <option value="Ranchinho de Maria">Ranchinho de Maria</option>
                  <option value="Área Gourmet">Área Gourmet</option>
                  <option value="Sala_Informatica">Sala Informática</option>
                  <option value="Outros">Outros</option>
                 
                </select>
              </div> 
              <!-- <Situacao/> -->

              <!-- Setor -->

             
              <div  >
                <label class="flex" for="setor">Função ou Setor do Colaborador:<p class="text-red-500 ml-1 font-extrabold">*</p> </label>
                <select  id="setor" name="setor" v-model="userGetPost.responsavel" class="border-2 border-gray-400 w-full rounded-md" required >
                  <option value="Diretoria">Diretora</option>
                  <option value="Assistente-Social">Assistente-Social</option>
                  <option value="Coordenadora Fundamental-I">Coordenadora Fundamental-I</option>
                  <option value="Coordenadora Fundamental-II">Coordenadora Fundamental-II</option>
                  <option value="Coordenadora Educação Infantil">Coordenadora Educação Infantil</option>
                  <option value="Professor">Professor</option>
                  <option value="Secretaria">Secretaria</option>
                  <option value="Tesouraria">Tesouraria</option>
                  <option value="Setor-TI">Setor de TI</option>
                  <option value="Pastoral">Pastoral</option>
                </select>
              </div> 
              <!-- <Setor/> -->

              <!-- Seleção de Seguimento -->
              <div>
                <label class="flex" for="seg">Segmento ou Setor Correspondente:<p class="text-red-500 ml-1 font-extrabold">*</p> </label>
                <select @click="pegarData()" id="seg" name="seg" v-model="userGetPost.seguimento" class="border-2 border-gray-400 w-full rounded-md" title="Selecione o setor ou seguimento relacionados ao evento. " required >
                  <option value="Fundamental-I">Fundamental-I</option>
                  <option value="Fundamental-II">Fundamental-II</option>
                  <option value="Edu-Infantil">Edu-Infantil</option>
                  <option value="Diretoria">Diretoria</option>
                  <option value="Secretaria">Secretaria</option>
                  <option value="Setor-TI">Setor de TI</option>
                  <option value="Todos-Seguimentos">Todos-Seguimentos</option>
                   <option value="Assistente-Social">Assistente-Social</option>
                   <option value="Tesouraria">Tesouraria</option>
                   <option value="Pastoral">Pastoral</option>
                 
                 
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
                  v-model="userGetPost.motivo"
                  required
                ></textarea>
              </div>
             
              <div>
                <label for="linkEnviar">Link: </label>
                <input
                  type="text"
                  name="linkEnviar"
                  id="linkEnviar"
                  placeholder="Adicione seu link aqui..."
                  class=" border-gray-300 px-1   border-2  w-full rounded-md"
                  v-model="userGetPost.link"
                />
              </div>
              <div>
                <div class="flex font-bold text-red-500 items-center justif-start"><p class="text-red-500 ml-1 font-extrabold mr-2">*</p> Obrigatório.</div>
              </div>

              <!-- Botão de submit -->
              <div class="flex  w-full items-center justify-center pb-12 ">
                  <router-link :to="{name: 'usertela'}">
                    <div title="Voltar tela usuário" class="bg-blue-600 flex items-center px-4 py-2 rounded-md mr-4 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                    Voltar
                    </div>
                  </router-link>
                 
                  <div>
                      <input
                        title="Enviar formulário"
                        type="submit"
                        value="Salvar"
                        class="py-2 bg-red-600 text-gray-50 rounded-md cursor-pointer px-8  "
                      />
                  </div>
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
import {  collection,  getFirestore,  getDocs, doc, getDoc,setDoc } from "firebase/firestore";
import Logado from "../components/compLogado/userLogado.vue"
import Footer from "../components/footer.vue"

export default {
    name:"auth",
    components:{
        Logado,
        Footer,
    },

    data(){
        return{
            email:'',
            disabled: true,
            dataDia:[],
            usuario: '',
            userId:null,
            userRef: null,
            userGetPost:{                    
              nome:null,
              dia: null,
              mes:null,
              ano:null,
              horario:null,
              horario_one:null,
              responsavel: null,
              situacao: null,
              seguimento:null,
              motivo: null,
              arquivo: null,
              link:null,
              info:null,
              coordFI:null,
              coordFII:null,
              coordEI:null,
              social:null,
              diretoria:null,
              secretaria:null,
              tesouraria:null,
            }
        }            
    },
   
     async created(){
      //  APRESENTA NA TELA O USUÁRIO CONECTADO
      const dbuser = getAuth();
      onAuthStateChanged(dbuser, (user) => {
        if(user.displayName === null){
            this.usuario = user.email
        }else{
          this.usuario = user.displayName
        }
                    
      });
      const db = getFirestore()
      let cityId = this.$route.params.docId
      this.userId = cityId
      console.log("Id Userid", cityId)

      let userRef  = doc(db, "usuarios", this.userId)
      this.userRef = userRef
      let user = await getDoc(this.userRef)
      if (user.exists()) {
      
        this.userGetPost = user.data()
      } else {
        console.log("Usuario não enconstrado!")
      }
      
      console.log(user.data())
    
      },
  
     methods: {
      
       async updataUser(){
         
          const db  = getFirestore()
            const userGetRef = doc(db, "usuarios", this.userId);
            await setDoc(userGetRef, this.userGetPost)
            .then(()=>{
                alert('Atualizado com Sucesso!')
              }).then(()=>{
                setTimeout(() => {
                  this.$router.push({name: 'usertela'})
                }, 2000);
                
              }).catch((error)=>{
                    alert(error.message)
            })
       },

      // FUNÇÃO DE BLOQUEIO DA DATA ANTERIOR E DATA ATUAL PARA CADASTRO
       dataUser(){
        const dataFull =  new Date();
        const dataDia = dataFull.getDate();
        const mesDia = dataFull.getMonth()+1
            
         if(this.userGetPost.dia < dataDia && this.userGetPost.mes <= mesDia){
         
             this.$swal({
               icon:'warning',
               title:'Escolha a Data Recente ou Posterior!',
            
             })
                        
         }else if(this.userGetPost.dia == dataDia && this.userGetPost.mes == mesDia){
         
             this.$swal({
               icon:'error',
               title:'Marcar com 12hs de antecedência!',
                    
             })
            
         }
       },

      // FIM FUNÇÃO BLOQUEIO
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
            

           
            if(this.userGetPost.dia === dia && this.userGetPost.mes === mes && this.userGetPost.ano === ano && hora === this.userGetPost.horario && this.userGetPost.situacao === sitUser){
              this.$swal({
              icon:'error',
              title: 'Data ou hora em uso!!'
              })
              setTimeout(() => {
                this.$router.go({name:'auth'})
              }, 2500);
                               
            }else if(this.userGetPost.dia != dia){

              console.log("Continua o fluxo")
             
            }else{
              console.log("Procure o suporte técnico")
            }
      })

    },
      
   }
 
    
}
</script>
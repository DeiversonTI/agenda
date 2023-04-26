<template>
<div>
  <div id="loading">
      <div class="load-fill flex justify-center items-center h-screen">
        <div class="load flex flex-col justify-center items-center w-56 h-56 border rounded bg-gray-50 ">
            <div class="text-center pt-2 loading-text">
              <p class="font-semibold text-xl text-Sky-500">Aguarde</p>
              <p class="text-gray-800">Verificando...</p> 
            </div>
            <p class="animation-load mt-5"></p>
        </div>
      </div>
    </div>
  <div class="w-full h-full bg-gradient-to-l from-white via-Sky-100 to-white">
    <!-- <div class="w-full flex justify-end items-center"> -->
      <div class="w-full flex justify-end items-center">    
        <div class=" flex items-center justify-end  m-1 w-full sm:w-9/12 md:w-7/12 lg:w-6/12 xl:w-5/12 2xl:w-3/12 ">
          <div>
            <div class="flex justify-between items-center sm:bg-Orange-200 w-full  ">
              <div>
                  <p class="sm:bg-Orange-600 w-4 h-12 ">&nbsp;</p>
              </div>
              <div>
                  <h1 class="text-sm sm:text-base font-thin  px-2 ">
                  Olá
              <span class="font-bold text-red-600 px-1 ">{{ this.usuario }}</span> 
                  Seja Bem Vindo(a)
              </h1>
              </div>
              <div>
                <router-link to="/usertela">
                <div title="Volta para a tela de cadastro" class="bg-Sky-600 text-white flex items-center font-thin text-xs justify-center py-2 px-2 rounded-md cursor-pointer
                shadow-md mr-2 ">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  VOLTAR
                </div>
                </router-link>
              </div>
            </div>
        </div>
        <div class="sm:bg-Orange-200 h-12 flex justify-center items-center">
          <Logado />
        </div>
      </div>
    </div>
         <!-- Main -->
      <div class="bg-gradient-to-l from-white via-Sky-100 to-white w-full  2xl:justify-center  flex 2xl:flex-col 2xl:items-center flex-col">
        <div class=" flex flex-col w-11/12 md:w-8/12 2xl:w-1/2 mx-auto container">
          <div class="py-8">
            <h1 class="text-Sky-600 Poppins text-center"> Editar Usuário</h1>
          </div>
          <!-- formulario de arquivos logado -->
          <div class="space-y-4 ml-2 font-thin text-lg mr-1 px-4">
            <form @submit.prevent="updataUser()" class="space-y-6">
            <!-- <form @submit.prevent="updataUser()" class="space-y-6"> -->
              <div>               
                <label class="flex opacity-70" for="nameConnect">Nome do Colaborador: <p class="text-red-500 ml-1 font-extrabold">*</p> </label>
                <input disabled placeholder="Nome do Colaborador" required type="text" id="nameConnect" v-model="form.nome" class="border shadow-sm  w-full rounded-md pl-2 py-1" />
              </div>
             
              <div>
                <label class="flex opacity-70"  for="hora">Data do Evento:<p class="text-red-500 ml-1 font-extrabold">*</p> </label>
                <input disabled type="date" name="" id="hora" v-model="form.dataNew" class="border shadow-sm  rounded-md pl-2 py-1" >
              </div>

              <!-- Horário do Evento -->
              <div>
                <label class="flex opacity-70"  for="hora">Horário do Evento:<p class="text-red-500 ml-1 font-extrabold">*</p> </label>
                <div class="sm:flex md:justify-start lg:justify-start xl:justify-start 2xl:justify-start  sm:justify-center sm:items-center space-x-1">
                  <select disabled name="" id="hora" class="border shadow-sm  rounded-md pl-2 py-1"  v-model="form.horariosFull" required>
                    <optgroup label="Anos Finais" class="pb-6" >                           
                            <option value="07h10-07h55">07h10-07h55</option>
                            <option value="07h55-08h40">07h55-08h40</option>
                            <option value="08h40-09h25">08h40-09h25</option>
                            <option value="09h-09h45">09h-09h45(tempo do 2º e 3º)</option>
                            <option value="09h25-10h10">09h25-10h10(tempo do 6º e 7º)</option>                            
                            <option value="09h45-10h30">09h45-10h30(tempo do 2º, 3º, 8º e 9º)</option>
                            <option value="10h30-11h15">10h30-11h15</option>
                            <option value="11h15-12h">11h15-12h</option>
                            <option value="12h-12h45">12h-12h45</option>
                          </optgroup>

                          <optgroup label="Anos Iniciais" >
                            <option value="12h35-13h20">12h35-13h20</option>
                            <option value="13h20-14h05">13h20-14h05</option>
                            <option value="14h05-14h50">14h05-14h50(tempo do 4º e 5º)</option>
                            <option value="14h25-15h10">14h25-15h10(tempo do 2º e 3º)</option>
                            <option value="15h10-15h55">15h10-15h55</option>
                            <option value="15h55-16h50">15h55-16h50</option>
                          </optgroup>
                          
                          <optgroup  label="Educação Infantil" >
                            <option value="12h40-13h25">12h40-13h25</option>
                            <option value="13h25-14h10">13h25-14h10</option>
                            <option value="14h10-14h35">14h10-14h35</option>
                            <option value="14h35-15h20">14h35-15h20</option>
                            <option value="15h20-16h05">15h20-16h05</option>
                            <option value="16h05-16h50">16h05-16h50</option>
                          </optgroup>

                          <optgroup label="Outros" >
                            <option value="07h10-12h">07h10-12h</option>
                            <option value="12h30-17h">12h30-17h</option>
                            <option value="17h30-21h">17h30-21h</option>
                            <option value="18h-21h">18h-21h</option>
                          </optgroup>
                  </select>
                </div>               
              </div> 
               <!-- Seleção da Situação -->
               <div>
                    
                    <label class="flex opacity-70"  for="action">Local ou Situação:<p class="text-red-500 ml-1 font-extrabold">*</p> </label>
                        <!-- <form id="action" name="action" v-model="form.situacao" class="border w-full rounded-md form-after" required >
                          <option value="Salão">Salão</option>
                          <option value="Jardim Sensorial">Jardim Sensorial</option>
                          <option value="Agendamentos">Agendamentos</option>
                          <option value="Ranchinho de Maria">Ranchinho de Maria</option>
                          <option value="Área Gourmet">Área Gourmet</option>
                          <option value="Sala_Informatica">Sala Informática</option>
                          <option value="Sala Pastoral">Sala Pastoral</option>
                          <option value="Laboratório_Ciências">Laboratório de Ciências</option>
                          <option value="Outros">Outros</option>
                          <option value="Piscina">Piscina</option>
                          <option value="Quadra">Quadra</option>
                          <option value="Rancho">Rancho</option>
                          <option value="Inspetor">Inspetor</option>
                        </form> -->
<!--                      
                      <div @click="changeformed" id="form-change" class="flex w-full text-sm flex-col flex-wrap border py-1 rounded ">
                        <select>                          
                          <option disabled></option>                         
                        </select>
                        <div class="overform"></div>
                      </div> -->
                      <!-- <div v-show="isOpen" id="form-links" class="form__mode">                         
                        <label id="sal" for="salao"><input  v-model="form.salao"  type="checkbox" value="Salão" id="salao">Salão</label> 
                         <label id="jar" for="jardim"><input v-model="form.jardim" type="checkbox" value="Jardim_Sensorial" id="jardim">Jardim Sensorial</label>                         
                         <label id="agend"  for="agenda"><input v-model="form.agenda" type="checkbox" value="Agendamentos" id="agenda">Agendamentos</label>
                         <label id="ran" for="ranchinho"><input  v-model="form.ranchinho" type="checkbox" value="Ranchinho" id="ranchinho">Ranchinho</label> 
                         <label id="gour" for="gourmet"><input v-model="form.gourmet" type="checkbox" value="Área Gourmet" id="gourmet">Área Gourmet</label> 
                         <label id="inform" for="info"><input v-model="form.informatica" type="checkbox" value="Sala Informática" id="info">Sala Informática</label> 
                         <label id="pastor" for="pastoral"><input v-model="form.pastoral" type="checkbox" value="Sala Pastoral" id="pastoral">Sala Pastoral</label> 
                         <label id="lab" for="labCiencias"><input v-model="form.ciencias" type="checkbox" value="Lab. Ciências" id="labCiencias">Lab. Ciências</label> 
                         <label id="out" for="outros"><input v-model="form.outros" type="checkbox" value="Outros" id="outros">Outros</label> 
                         <label id="pisc" for="piscina"><input v-model="form.piscina" type="checkbox" value="Piscina" id="piscina">Piscina</label> 
                         <label id="quad" for="quadra"><input v-model="form.quadra" type="checkbox" value="Quadra" id="quadra">Quadra</label> 
                         <label id="ranch" for="rancho"><input v-model="form.rancho" type="checkbox" value="Rancho" id="rancho">Rancho</label> 
                         <label id="insp" for="inspetor"><input v-model="form.inspetor" type="checkbox" value="Inspetor" id="inspetor">Inspetor</label> 
                      </div> -->
                   
                      <div>
                        <small>Item selecinado(s)</small>
                        <ul v-for="sitU in sit.Users" :key="sitU.id" class=" flex flex-wrap" >                         
                          <li v-if="sitU.salao" class="rounded py-0 px-2 mt-1 mr-1 bg-Sky-500 text-gray-50">Salão </li>
                          <li v-if="sitU.gourmet" class="rounded py-0 px-2 mt-1 mr-1 bg-Sky-500 text-gray-50">Área Gourmet </li>
                          <li v-if="sitU.piscina" class="rounded py-0 px-2 mt-1 mr-1 bg-Sky-500 text-gray-50">Piscina </li>
                          <li v-if="sitU.ciencias" class="rounded py-0 px-2 mt-1 mr-1 bg-Sky-500 text-gray-50">Lab. Ciências </li>
                          <li v-if="sitU.jardim" class="rounded py-0 px-2 mt-1 mr-1 bg-Sky-500 text-gray-50">Jardim Sensorial </li>
                          <li v-if="sitU.ranchinho" class="rounded py-0 px-2 mt-1 mr-1 bg-Sky-500 text-gray-50">Ranchinho </li>
                          <li v-if="sitU.informatica" class="rounded py-0 px-2 mt-1 mr-1 bg-Sky-500 text-gray-50">Sala de Informática </li>
                          <li v-if="sitU.pastoral" class="rounded py-0 px-2 mt-1 mr-1 bg-Sky-500 text-gray-50">Sala Pastoral</li>
                          <li v-if="sitU.ciencias" class="rounded py-0 px-2 mt-1 mr-1 bg-Sky-500 text-gray-50">Lab. Ciências </li>
                          <li v-if="sitU.outros" class="rounded py-0 px-2 mt-1 mr-1 bg-Sky-500 text-gray-50">Outros </li>
                          <li v-if="sitU.quadra" class="rounded py-0 px-2 mt-1 mr-1 bg-Sky-500 text-gray-50">Quadra Esportes </li>
                          <li v-if="sitU.rancho" class="rounded py-0 px-2 mt-1 mr-1 bg-Sky-500 text-gray-50">Rancho </li>
                          <li v-if="sitU.inspetor" class="rounded py-0 px-2 mt-1 mr-1 bg-Sky-500 text-gray-50">Inspetor </li>

                        </ul>
                      </div>
                    </div>                                         
                    <!-- <div>
                      <div class="" >
                        <ul class="flex flex-wrap" >
                          <li v-for="(sel, index) in form" :key="index" class="rounded py-0 px-2 mt-1 mr-1 bg-Sky-500 text-gray-50">{{ sel.salao }} - {{ sel.agenda }} - {{ sel.jardim }} </li>                            
                        </ul>
                      </div>
                    </div>     -->
                <!-- </div>                   -->
                <!-- SETOR -->
                <!-- <div> -->
              <!-- <div>
                <label class="flex opacity-70" for="action">Local ou Situação:<p class="text-red-500 ml-1 font-extrabold">*</p> </label>
                <form  id="action" name="action" v-model="form.situacao" class="border shadow-sm  w-full rounded-md pl-2 py-1" required >
                  <option value="Salão">Salão</option>
                  <option value="Jardim Sensorial">Jardim Sensorial</option>
                  <option value="Agendamentos">Agendamentos</option>
                  <option value="Ranchinho de Maria">Ranchinho de Maria</option>
                  <option value="Área Gourmet">Área Gourmet</option>
                  <option value="Sala_Informatica">Sala Informática</option>
                  <option value="Outros">Outros</option>
                </form>
              </div>  -->

              <!-- Setor -->
              <div>
                <label class="flex opacity-70" for="setor">Função ou Setor do Colaborador:<p class="text-red-500 ml-1 font-extrabold">*</p> </label>
                <select  id="setor" name="setor" v-model="form.responsavel" class="border shadow-sm  w-full rounded-md pl-2 py-1" required >
                  <option value="Diretoria">Diretora</option>
                      <option value="Assistente-Social">Assistente-Social</option>
                      <option value="Coordenadora Anos Iniciais">Coordenadora Anos Iniciais</option>
                      <option value="Coordenadora Anos Finais">Coordenadora Anos Finais</option>
                      <option value="Coordenadora Educação Infantil">Coordenadora Educação Infantil</option>
                      <option value="Diretora Pedagogica">Diretora Pedagógica</option>
                      <option value="Professor">Professor</option>
                      <option value="Secretaria">Secretaria</option>
                      <option value="Tesouraria">Tesouraria</option>
                      <option value="Setor-TI">Setor de TI</option>
                      <option value="Pastoral">Pastoral</option>
                      <option value="Inspetor">Inspetor</option>
                      <option value="Ir Servente">Ir. Servente</option>
                      <option value="Bem Estar">Bem Estar</option>
                      <option value="Supervisor Manutencao">Supervisor de Manutenção</option>
                </select>
              </div>             

              <!-- Seleção de Seguimento -->
              <div>
                <label class="flex opacity-70" for="seg">Segmento ou Setor Correspondente:<p class="text-red-500 ml-1 font-extrabold">*</p> </label>
                <select  id="seg" name="seg" v-model="form.seguimento" class="border shadow-sm  w-full rounded-md pl-2 py-1" title="Selecione o setor ou seguimento relacionados ao evento. " required >
                  <option value="Anos Iniciais">Anos Iniciais</option>
                      <option value="Anos Finais">Anos Finais</option>
                      <option value="Edu-Infantil">Edu-Infantil</option>
                      <option value="Diretoria">Diretoria</option>
                      <option value="Secretaria">Secretaria</option>
                      <option value="Setor-TI">Setor de TI</option>
                      <option value="Todos-Seguimentos">Todos-Seguimentos</option>
                      <option value="Assistente-Social">Assistente-Social</option>
                      <option value="Tesouraria">Tesouraria</option>
                      <option value="Pastoral">Pastoral</option>
                      <option value="Eventos Externos">Eventos Externos</option>
                      <option value="Inspetor">Inspetor</option>
                      <option value="Ir Servente">Ir. Servente</option>
                      <option value="Bem Estar">Bem Estar</option>
                      <option value="Supervisor Manutencao">Supervisor de Manutenção</option>
                </select>
              </div>              

              <!-- Motivo -->
              <div class="border-gray-800 w-full">
                <label class="flex opacity-70" for="motivo">Descrição do Evento:<p class="text-red-500 ml-1 font-extrabold">*</p> </label>
                <textarea
                  id="motivo" 
                  name="motivo"
                  rows="4"
                  cols="41"
                  class=" border shadow-sm  w-full rounded-md pl-2 py-1" 
                  v-model="form.motivo"
                  required>
                </textarea>
              </div>
             
              <div>
                <label for="linkEnviar opacity-70">Link: </label>
                <input
                
                  type="text"
                  name="linkEnviar"
                  id="linkEnviar"
                  placeholder="Adicione seu link aqui..."
                  class=" border shadow-sm  w-full rounded-md pl-2 py-1"
                  v-model="form.link"
                />
              </div>
             

              <div>
                <div class="flex font-bold text-red-500 items-center justif-start"><p class="text-red-500 ml-1 font-extrabold mr-2">*</p> Obrigatório.</div>
              </div>

              <!-- Botão de submit -->
              <div class="flex  w-full items-center justify-center pb-12 ">
                  <router-link :to="{name: 'usertela'}">
                    <div title="Voltar tela usuário" class="bg-blue-600 hover:bg-blue-500 flex items-center px-4 py-2 rounded-md mr-4 text-white">
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
                      value="ATUALIZAR"
                      class="py-2 hover:bg-green-500 bg-green-600 text-gray-50 rounded-md cursor-pointer px-8  "
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
<!-- </div> -->
</template>
<script>

import {getAuth, onAuthStateChanged } from "firebase/auth";
import {  getFirestore, doc, getDoc,setDoc } from "firebase/firestore";
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
            isOpen:false,
            tratado: [] ,
            sit:{
              Users: [],             
            },
           

            form:{
               nome:null,
                dia: null,
                mes:null,
                ano:null,
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
                horariosFull:null,
                dataNew:null,              
                jardim: null,
                agenda: null,
                salao: null,
                ranchinho: null,
                gourmet: null,
                informatica: null,
                pastoral: null,
                ciencias: null,
                outros: null,
                piscina: null,
                quadra: null,
                rancho: null,
                inspetor: null    
                
            },
        }            
    },
   
     async created(){
      //  APRESENTA NA TELA O USUÁRIO CONECTADO
      const dbuser = getAuth();
      onAuthStateChanged(dbuser, (user) => {       
            this.usuario = user.email                    
      })
      this.getUser()   
    
     
    },
    watch: {

      'form.dataNew'(value){
        if(value){
          // console.log(value)
          this.dataUser()
        }
      },   
      // 'form.salao'(value){
      //   if(value){
      //     console.log(value)
      //     this.fullDb()
      //   }
      // },   
      // 'form.salao'(value){
      //   if(value){
      //     console.log(value)
      //     this.pegarData()
      //   }
      // },  
      
      // 'form.horariosFull'(valueOld, value){
      //   if(value){
      //     this.pegarData()      
      //   }
      // },
      //  'form.situacao'(valueOld, value){
      //   if(value){
      //     this.pegarData() 
      //   }
      // },
      // 'form.dataNew'(valueOld, value){
      //   if(value){
      //     this.pegarData()     
      //   }
      // }
   },
  
  methods: {
    async getUser(){
      const db = getFirestore()
      //********************************************** */
      //VARIÁVEL CITYID, ESTÁ PEGANDO O ID POR PARAMETRO
      //QUE ESTÁ VINDO DO ROUTER ATRÁVES DO DOCID
      //********************************************** */
      let cityId = this.$route.params.docId
      this.userId = cityId
      
      let userRef  = doc(db, "usuarios", this.userId)
      // let userRef  = doc(db, "ambTest", this.userId)
     
      this.userRef = userRef
      let docs = await getDoc(this.userRef)
      if (docs.exists()) {

      this.form = docs.data()

      const user = []
      user.push(docs.data())
      this.sit.Users.push(user[0])

      } else {
        console.log("Usuario não enconstrado!")
      }

    },
    // async loading(){
    //   if(this.form.seguimento){
    //     const loader = document.getElementById('loading')
    //     loader.style.display = "inline"
    //     setTimeout(() => {
    //       loader.style.display = "none"
    //     }, 2000);          
    //   }else{
    //     this.$swal({
    //       icon: "warning",
    //       title: "Oops...",
    //       text: "Campo Vazio!",
    //       showConfirmButton: false,
    //       timer: 1000,
    //       showClass: {
    //         popup: 'animate__animated animate__fadeInDown'
    //       },
    //       hideClass: {
    //         popup: 'animate__animated animate__fadeOutUp'
    //       }
    //     })
    //   }      
    // },
    dataUser(){
      const newData = new Date()
      let d = ("0" + newData.getDate()).slice(-2)
      let m = ("0" + (newData.getMonth()+1)).slice(-2)
      let y = newData.getFullYear()
      let fullYearBlock = y+"-"+m+"-"+d        
       
      const dataNew = this.form.dataNew
   
      if(dataNew < fullYearBlock){
        this.$swal({
          icon:'error',
          title:'Ooops!! Essa Data já Passou!',
        })
        setTimeout(() => {
          this.$router.go({name:'auth'})
        }, 2500);
                        
      } else if(dataNew === fullYearBlock){              
        this.$swal({
          icon:'info',
          title:'Marcar com 12hs de Antecedência!',
        })              
        setTimeout(() => {
          this.$router.go({name:'auth'})
        }, 2500);
      }
    },     
      // trocarSal(){       
      //   const sal = document.querySelector(".removeItemSal")
      //   let getUser  = this.form
      //   console.log(getUser)
      //   if(getUser.salao){            
      //     sal.classList.toggle("remItemJar")
      //   }          
      // },
      // trocarJar(event){
    
      //   const jar = document.querySelector(".removeItemJar") 
      //   if(event.target.checked){ 
      //     if(event.target.value === "Jardim_Sensorial" ){
      //       jar.classList.toggle("removeItem")   
      //       console.log(event)   
      //     }         
            
      //   }
      // },
      // trocarAg(event){
      //   const agenda = document.getElementById("agend")       
      //   if(event.target.value  == "Agendamentos"){          
      //       agenda.classList.toggle("removeItem")        
      //   }
      // },
      // trocarRanchinho(event){
      //   const ranchinho = document.getElementById("ran")       
      //   if(event.target.value  == "Ranchinho"){          
      //       ranchinho.classList.toggle("removeItem")        
      //   }
      // },
      // trocarGourmet(event){
      //   const gourmet = document.getElementById("gour")       
      //   if(event.target.value  == "Área Gourmet"){          
      //       gourmet.classList.toggle("removeItem")        
      //   }
      // },
      // trocarInfor(event){
      //   const info = document.getElementById("inform")       
      //   if(event.target.value  == "Sala Informática"){          
      //       info.classList.toggle("removeItem")        
      //   }
      // },
      // trocarPastoral(event){
      //   const pastoral = document.getElementById("pastor")       
      //   if(event.target.value  == "Sala Pastoral"){          
      //       pastoral.classList.toggle("removeItem")        
      //   }
      // },
      // trocarCiencias(event){
      //   const ciencias = document.getElementById("lab")       
      //   if(event.target.value  == "Lab. Ciências"){          
      //       ciencias.classList.toggle("removeItem")        
      //   }
      // },
      // trocarOutros(event){
      //   const outros = document.getElementById("out")       
      //   if(event.target.value  == "Outros"){          
      //       outros.classList.toggle("removeItem")        
      //   }
      // },
      // trocarPiscina(event){
      //   const piscina = document.querySelector("#pisc")       
      //   if(event.target.value  == "Piscina"){          
      //       piscina.classList.toggle("checked")        
      //   }
      // },   
      // trocarQuadra(event){
      //   const quadra = document.getElementById("quad")       
      //   if(event.target.value  == "Quadra"){          
      //       quadra.classList.toggle("removeItem")        
      //   }
      // },
      // trocarRancho(event){
      //   const rancho = document.getElementById("ranch")       
      //   if(event.target.value  == "Rancho"){          
      //       rancho.classList.toggle("removeItem")        
      //   }
      // },
      // trocarInspetor(event){
      //   const inspetor = document.getElementById("insp")       
      //   if(event.target.value  == "Inspetor"){          
      //       inspetor.classList.toggle("removeItem")        
      //   }
      // },
    changeformed(){
        this.isOpen = !this.isOpen
      },       
    updataUser(){
      const db  = getFirestore()
      const userGetRef = doc(db, "usuarios", this.userId);
      // const userGetRef = doc(db, "ambTest", this.userId);
      setDoc(userGetRef, this.form)
        .then(()=>{
          this.$swal({
            icon: 'success',
            title: 'Atualizado com Sucesso!',
            showConfirmButton: false,
            timer: 2000
          })           
      }).then(()=>{
          setTimeout(() => {
            this.$router.push({name: 'usertela'})
          }, 2000)

      }).catch((error)=>{
          alert(error.message)
        })
    },  
      // FUNÇÃO DE BLOQUEIO DA DATA ANTERIOR E DATA ATUAL PARA CADASTRO
      //  dataUser(){
      //   const dataFull =  new Date();
      //   const dataDia = dataFull.getDate();
      //   const mesDia = dataFull.getMonth()+1
            
      //    if(this.form.dataNew < dataDia && this.form.dataNew <= mesDia){
         
      //        this.$swal({
      //          icon:'warning',
      //          title:'Escolha a Data Recente ou Posterior!',
            
      //        })
                        
      //    }else if(this.form.dataNew == dataDia && this.form.dataNew == mesDia){
         
      //        this.$swal({
      //          icon:'error',
      //          title:'Marcar com 12hs de antecedência!',
                    
      //        })
            
      //    }
      //  },

      // FIM FUNÇÃO BLOQUEIO
      clicado(){
        this.disabledUser = !this.disabledUser;
      },

   },
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,500;0,800;1,100&family=Prompt:ital,wght@0,100;0,200;0,400;0,700;0,800;1,500;1,900&display=swap');
/* .anime__full{
    animation: anima 0.8s forwards ease-in-out;
    width: 100%;
    position: fixed;
    top:-100px;
  } */
  #loading{
    width: 100%;
    height: 100vh;
    position:fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index:9999 ;
    display: none;
  } 
  .animation-load{
    border: 10px solid #dad8d8;
    border-top: 10px solid #3498db;
    width: 80px;
    height: 80px;
    border-radius: 100%;
    animation: loading 1s linear infinite;
  }
  @keyframes loading {
    0%{
      transform: rotate(0);
    }
    100%{
      transform: rotate(360deg);
    }
  }
  .loading-text{
    font-family: Poppins, sans-serif;
    font-weight: 300;
  }
  @keyframes anima {
    to{
      top:0px;
    }   
  }
  .elseMensagem {
    width: 100%;
    height: 200px;
    background-color: red;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  }
.Poppins{
  font-family: Poppins, sans;
  font-weight: 500;
  font-size: 2.1em;
}
.form__mode{   
    border: 1px solid #000;
    background-color: #ffffff;    
  }
  .form__mode  label{
    display: flex;
    padding: 3px 5px;
    font-size: 1.1rem;
    font-weight: 400;
    margin: 5px;
    position: relative;
  }
  .form__mode  label:hover{
   background-color: #044c94;
   color:#fff;
   cursor: pointer;
   margin: 5px;
   transition:all .3s;
   border-radius: 5px;
  }
  .form__mode  label input{
    margin: 0 5px;
    display: block;    
  }
  .checked {
   background-color: #f50505;
   font-weight: 800;
   color: #fff;
   cursor: pointer;
   margin: 5px;
   transition: all .3s;
   border-radius: 5px;  
   
  }
  /* .checked::after {
    content: "";
    position: absolute;
    background-image: url('../assets/check.png');
    background-size: cover;
    right: 5px;
    width: 25px;
    height: 25px;
    color: #0ff;
    
     
   
  } */
  .overform {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
#form-change{
  position: relative;
}
  
 
  @media screen and (max-width:640px) {
      .wood::before{
      background-color: transparent;
    }
    .Poppins{
      font-size: 1.5em;
    }
  }

  .removeItemBack{
    background-color: #2bddd4;
    font-weight: 800;
    color: #020202;
    cursor: pointer;
    margin: 5px;
    transition: all .3s;
    border-radius: 5px;
    
  }
  .remItemJar{
    background-color: #f50d05;
    font-weight: 800;
    color: #fff;
    cursor: pointer;
    margin: 5px;
    transition: all .3s;
    border-radius: 5px;
  }
  /* .removeItem{
    background-color: #f50d05;
    font-weight: 800;
    color: #fff;
    cursor: pointer;
    margin: 5px;
    transition: all .3s;
    border-radius: 5px;
  } */

  /* .removeItemSal{
    background-color: #2bddd4;
    color: #000;
  } */
</style>
<template>
  <!-- <div @load.once="pop_up()" class="notification_popup">
    <div class="arrow_box">
      <div></div>
    </div>
    <div class="notification_txt">
      <span>Sei que estou sendo chato!!<br>Dá um Ctrl + F5 (PC) para carregar um cache novo!<br>Mobile, arraste a tela para baixo!</span>
    </div>
  </div> -->
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
   
    <div>
      <div v-if="textDoc===true" class="anime__full">
        <div class="w-80 sm:mt-1 flex justify-center items-center mx-auto h-8 bg-red-500 py-8 sm:rounded-md text-white ">{{textError}}</div>
      </div>                  
      <div class="w-full h-auto">       
        <div class=" bg-gradient-to-l from-white via-Sky-100 to-white w-full ">          
          <!-- botão de logout -->
          <div class="w-full flex justify-end items-center ">            
            <div class=" flex items-center justify-between sm:justify-end  m-1 w-full xs:w-1/2">
              <div>
                <div class="flex justify-between items-center sm:bg-Orange-200 w-full  ">
                  <div>
                    <p class="sm:bg-Orange-600 sm:w-4 sm:h-12 ">&nbsp;</p>
                  </div>
                  <div>
                    <h1 class="text-xs sm:text-base font-thin px-2">Olá<span class="font-bold text-red-600 px-1 ">{{ this.usuario }}</span> 
                      Seja Bem Vindo(a)
                    </h1>
                  </div>
                  <div>
                    <router-link to="usertela">
                    <div title="Volta para a tela de Agendamentos" class="bg-Sky-600 text-white flex items-center font-thin text-xs justify-center py-2 px-2 rounded-md cursor-pointer shadow-md mr-2">                
                      AGENDAMENTOS
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
          <div class="mt-2 w-full h-auto">            
            <div class=" bg-white sm:container sm:mx-auto sm:w-4/5 md:container md:mx-auto md:w-4/5 lg:container lg:mx-auto lg:w-3/5  xl:mx-auto xl:container  xl:w-7/12 xl:rounded-xl xl:border-2 2xl:mx-auto 2xl:container  2xl:w-6/12 2xl:rounded-md 2xl:border  flex flex-col justify-start">
              <!-- Cabeçalho do formulário -->
              <div class="mb-4 mt-8">
                <h1 class="text-center Poppins text-Sky-600">
                  Cadastro de Eventos
                </h1>
              </div>
              <div class="mx-6 mb-6">
                <label class="flex opacity-70 text-lg " for="nameConnect">Eventos Agendados</label>
                 <DatePicker :attributes="attributes" is-expanded :timezone="timezone" locale="pt-BR" :mask ="masks" :first-day-of-week="2" />
              </div>
              <!-- formulario de arquivos logado -->
              <div  class="space-y-4 ml-2 font-thin text-lg mr-1 px-4 ">
                <!-- <form @submit.prevent="clicar(), backUp()" class="space-y-6 "> -->
                <form @submit.prevent="validaUser(), backUp()" class="space-y-6 ">
                  <div>               
                    <label class="flex opacity-70 " for="nameConnect"> Nome do Colaborador: <p class="text-red-500 ml-1 font-extrabold ">*</p> </label>
                    <input placeholder=" Nome do Colaborador" required type="text" id="nameConnect" v-model="form.nome" class="border shadow-sm  w-full rounded-md" />
                  </div>                  
                  <div>
                    <div>
                      <label   for="data" class="flex opacity-70">Data do Evento:<p class="text-red-500 ml-1 font-extrabold">*</p></label> 
                      <input type="date" ref="datanew" name="" required id="data" v-model="form.dataNew" class="px-2 border shadow-sm rounded-md mr-2">
                      <p id="errorMsgData" class="msgErroData"></p>
                    </div>
                  </div>
                    <!-- Horário do Evento -->
                  <div v-if="evExtOld === true">
                    <div>                      
                      <label class="flex opacity-70"  for="hora">Horário do Evento:<p class="text-red-500 ml-1 font-extrabold">*</p> </label>                      
                      <div class="flex justify-between items-center sm:flex md:justify-between lg:justify-start xl:justify-start 2xl:justify-start  sm:justify-center sm:items-center space-x-1">
                        <select name="" id="hora" class="border rounded-md w-full"  v-model="form.horariosFull" required>
                        <!-- <form @change="getDataNew" name="" id="hora" class="border rounded-md w-full"  v-model="form.horariosFull" required> -->
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
                            <option value="07h10-21h">07h-21h</option>
                            <option value="07h10-12h">07h10-12h</option>
                            <option value="12h30-17h">12h30-17h</option>
                            <option value="17h30-21h">17h30-21h</option>
                            <option value="18h-21h">18h-21h</option>
                          </optgroup>
                        </select>
                        <span class=" bg-red-700 rounded-full border border-red-600 text-xs text-red-100 px-2 cursor-pointer">
                          <a title="Atenção colaboradores!!! Cuidado para não marcar em horários de outros seguimentos." tabindex="0">?</a>                         
                        </span>
                      </div>                    
                    </div>
                  </div>
                  <!-- Seleção da Situação -->
                  <div>                    
                      <label class="flex opacity-70"  for="action">Local ou Situação:<p class="text-red-500 ml-1 font-extrabold">*</p> </label>                       
                      <div @click="changeformed" id="form-change" class="flex w-full text-sm flex-col flex-wrap border py-1 rounded ">
                        <select>                          
                          <option disabled></option>
                        </select>
                        <div class="overform"></div>
                      </div>
                      <div v-show="isOpen" id="form-links" class="form__mode">                         
                          <label id="sal" for="salao"><input @change="trocarSal($event)" v-model="form.salao" type="checkbox" value="Salão" id="salao">Salão</label> 
                          <label id="gour" for="gourmet"><input @change="trocarGourmet($event)" v-model="form.gourmet" type="checkbox" value="Área Gourmet" id="gourmet">Área Gourmet</label> 
                          <label id="pisc" for="piscina"><input @change="trocarPiscina($event)" v-model="form.piscina" type="checkbox" value="Piscina" id="piscina">Piscina</label> 
                          <label id="lab" for="labCiencias"><input @change="trocarCiencias($event)" v-model="form.ciencias" type="checkbox" value="Lab. Ciências" id="labCiencias">Lab. Ciências</label> 
                          <label id="ing" for="SalIngles"><input @change="trocarIngles($event)" v-model="form.ingles" type="checkbox" value="Sala Bilíngue" id="SalIngles">Sala Bilíngue</label> 
                          <label id="inform" for="info"><input @change="trocarInfor($event)" v-model="form.informatica" type="checkbox" value="Sala Informática" id="info">Sala Informática</label> 
                          <label id="jar" for="jardim"><input @change="trocarJar($event)" v-model="form.jardim" type="checkbox" value="Jardim_Sensorial" id="jardim">Jardim Sensorial</label> 
                          <label id="agend"  for="agenda"><input @change="trocarAg($event)" v-model="form.agenda" type="checkbox" value="Agendamentos" id="agenda">Agendamentos</label>
                          <label id="ran" for="ranchinho"><input @change="trocarRanchinho($event)" v-model="form.ranchinho" type="checkbox" value="Ranchinho" id="ranchinho">Ranchinho</label> 
                          <label id="pastor" for="pastoral"><input @change="trocarPastoral($event)" v-model="form.pastoral" type="checkbox" value="Sala Pastoral" id="pastoral">Sala Pastoral</label> 
                          <label id="out" for="outros"><input @change="trocarOutros($event)" v-model="form.outros" type="checkbox" value="Outros" id="outros">Outros</label> 
                          <label id="quad" for="quadra"><input @change="trocarQuadra($event)" v-model="form.quadra" type="checkbox" value="Quadra" id="quadra">Quadra</label> 
                          <label id="ranch" for="rancho"><input @change="trocarRancho($event)" v-model="form.rancho" type="checkbox" value="Rancho" id="rancho">Rancho</label> 
                          <label id="insp" for="inspetor"><input @change="trocarInspetor($event)" v-model="form.inspetor" type="checkbox" value="Inspetor" id="inspetor">Inspetor</label> 
                      </div> 
                      <div class="flex justify-start align-center gap-1 flex-wrap">
                        <div class="relative flex bg-Sky-500 text-white px-5 py-1 rounded  mt-1 gap-1" v-if="form.salao">
                            <label class="cursor-pointer"  id="sal" for="salao"><input  @change="trocarSal($event)" v-model="form.salao" type="checkbox" value="Salão" id="salao">Salão</label>
                            <span class="absolute bottom-4 right-1 cursor-pointer"><small>x</small></span>
                        </div>
                        <div class="relative flex bg-Sky-500 text-white px-5 py-1 rounded  mt-1 gap-1" v-if="form.gourmet">
                            <label class="cursor-pointer"  id="gour" for="gourmet"><input  @change="trocarGourmet($event)" v-model="form.gourmet" type="checkbox" value="Área Gourmet" id="gourmet">Área Gourmet</label>
                            <span class="absolute bottom-4 right-1 cursor-pointer"><small>x</small></span>
                        </div>
                        <div class="relative flex bg-Sky-500 text-white px-5 py-1 rounded  mt-1 gap-1" v-if="form.piscina">
                            <label class="cursor-pointer"  id="pisc" for="piscina"><input  @change="trocarPiscina($event)" v-model="form.piscina" type="checkbox" value="Piscina" id="piscina">Piscina</label>
                            <span class="absolute bottom-4 right-1 cursor-pointer"><small>x</small></span>
                        </div>
                        <div class="relative flex bg-Sky-500 text-white px-5 py-1 rounded  mt-1 gap-1" v-if="form.ciencias">
                            <label class="cursor-pointer"  id="lag" for="labCiencias"><input  @change="trocarCiencias($event)" v-model="form.ciencias" type="checkbox" value="Lab. Ciências" id="LabCiencias">Lab. Ciências</label>
                            <span class="absolute bottom-4 right-1 cursor-pointer"><small>x</small></span>
                        </div>
                        <div class="relative flex bg-Sky-500 text-white px-5 py-1 rounded  mt-1 gap-1" v-if="form.ingles">
                            <label class="cursor-pointer"  id="ing" for="SalIngles"><input  @change="trocarIngles($event)" v-model="form.ingles" type="checkbox" value="Sala Bilíngue" id="SalIngles">Sala Bilíngue</label>
                            <span class="absolute bottom-4 right-1 cursor-pointer"><small>x</small></span>
                        </div>
                        <div class="relative flex bg-Sky-500 text-white px-5 py-1 rounded  mt-1 gap-1" v-if="form.informatica">
                            <label class="cursor-pointer"  id="inform" for="info"><input  @change="trocarInfor($event)" v-model="form.informatica" type="checkbox" value="Sala Informática" id="info">Sala Informática</label>
                            <span class="absolute bottom-4 right-1 cursor-pointer"><small>x</small></span>
                        </div>
                        <div class="relative flex bg-Sky-500 text-white px-5 py-1 rounded  mt-1 gap-1" v-if="form.jardim">
                            <label class="cursor-pointer"  id="jar" for="jardim"><input  @change="trocarJar($event)" v-model="form.jardim" type="checkbox" value="Jardim_Sensorial" id="jardim">Jardim Sensorial</label>
                            <span class="absolute bottom-4 right-1 cursor-pointer"><small>x</small></span>
                        </div>
                        <div class="relative flex bg-Sky-500 text-white px-5 py-1 rounded  mt-1 gap-1" v-if="form.quadra">
                            <label class="cursor-pointer"  id="quad" for="quadra"><input  @change="trocarQuadra($event)" v-model="form.quadra" type="checkbox" value="Quadra" id="quadra">Quadra</label>
                            <span class="absolute bottom-4 right-1 cursor-pointer"><small>x</small></span>
                        </div>
                       
                        
                       
                       
                      </div>


                  </div>
                  <!-- </div>                   -->
                  <!-- SETOR -->
                  <div>
                    <label class="flex opacity-70" for="setor">Função ou Setor do Colaborador:<p class="text-red-500 ml-1 font-extrabold">*</p> </label>
                    <select   id="setor" name="setor" v-model="form.responsavel" class="border w-full rounded-md" required >
                      <option value="Diretoria">Diretora</option>
                      <option value="Assistente-Social">Assistente-Social</option>
                      <option value="Coordenadora Anos Iniciais">Coordenadora Anos Iniciais</option>
                      <option value="Coordenadora Anos Finais">Coordenadora Anos Finais</option>
                      <option value="Coordenadora Educação Infantil">Coordenadora Educação Infantil</option>
                      <option value="Coordenadora Integral">Coordenadora Integral</option>
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
                    <select  id="seg" name="seg" v-model="form.seguimento" class="border w-full rounded-md" title="Selecione o setor ou seguimento relacionados ao evento. " required >
                      <option value="Anos-Iniciais">Anos Iniciais</option>
                      <option value="Anos-Finais">Anos Finais</option>
                      <option value="Edu-Infantil">Edu-Infantil</option>
                      <option value="Diretoria">Diretoria</option>
                      <option value="Secretaria">Secretaria</option>
                      <option value="Setor-TI">Setor de TI</option>
                      <option value="Todos-Seguimentos">Todos-Seguimentos</option>
                      <option value="Assistente-Social">Assistente-Social</option>
                      <option value="Tesouraria">Tesouraria</option>
                      <option value="Pastoral">Pastoral</option>
                      <option value="Eventos-Externos">Eventos Externos</option>
                      <option value="Inspetor">Inspetor</option>
                      <option value="Ir-Servente">Ir. Servente</option>
                      <option value="Bem-Estar">Bem Estar</option>
                      <option value="Supervisor-Manutencao">Supervisor de Manutenção</option>
                    </select>
                  </div>

                  <!-- Motivo -->
                  <div class="border-gray-800 w-full ">
                  <!-- <div @click.once="loading" class="border-gray-800 w-full "> -->
                    <label class="flex opacity-70" for="motivo">Descrição do Evento:<p class="text-red-500 ml-1 font-extrabold">*</p> </label>
                    <textarea                    
                        id="motivo" 
                        name="motivo"
                        rows="4"
                        cols="41"
                        class=" border w-full rounded-md pl-2 pt-1" 
                        v-model="form.motivo"
                        required>
                    </textarea>                    
                  </div>

                  <!-- link -->
                  <div>
                    <label class="opacity-70" for="linkEnviar">Link: </label>
                    <input type="text" name="linkEnviar" id="linkEnviar" class="  px-1   border  w-full rounded-md" v-model="form.link" />
                  </div>
                  <div class="pb-8">
                    <div class="flex text-base font-bold text-red-500 items-center justif-start"><p class="text-red-500 ml-1 font-extrabold mr-2">*</p> Itens Obrigatório.</div>
                  </div>

                  <!-- Botão de submit -->
                  <div class="flex  w-full items-center justify-center pb-4  ">
                    <router-link to="usertela">
                      <div title="Voltar tela usuário" class="bg-Sky-600 flex items-center px-4 py-2 rounded-md mr-4 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Voltar
                      </div>
                    </router-link>
                    <div>
                      <input
                        id="mySubmit"                        
                        title="Este botão está bloqueado"
                        type="submit"
                        value="Enviar"
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
      <div class="relative bottom-0 mt-1">
        <Footer />
      </div>
    </div>
</template>
<script>
import {getAuth, onAuthStateChanged } from "firebase/auth";
import db from "../components/db/dbConfig";
import {  collection,  getFirestore, doc,setDoc, getDocs } from "firebase/firestore";
import Logado from "../components/compLogado/userLogado.vue"
import Footer from "../components/footer.vue"
import { DatePicker } from 'v-calendar';

export default {
    name:"auth",
    components:{
      Logado,
      Footer,      
      DatePicker
    },
   
    data(){
      return{  
        timezone: 'UTC', 
        masks: {
          weekdays: 'WWW',
        },
        attributes: [
          {
            highlight: 'red',
            dates: [],
          },
        ],
        dates: [],
        email:'',
        disabled: true,
        dataDia:[],
        usuario: null,
        fullData: null,
        anoComp:null,
        getDat: true,
        FundII: true,
        FundI: true,
        Inf: true,
        Eventos: true,
        anoFull: null,
        disabledData: true,
        disabledDataII: true,
        textDoc: false,
        textError: null,
        evExt:false,
        evExtOld:true,
        evExtOld2:true,
        usr: null,
        dbUser: [],
        postDataBlock: [],
        dataProf:null,
        isOpen:false, 
        teste:[],
        form:{                    
          nome:null,
          diretora:null,
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
          horaEventos:null,
          horariosFull:null,
          dataNew:null,
          evExternos: null,
          hourExtSecund: null,
          hourExtFirst: null,
          evSec:null,
          evHour:null,
          hHour:null,
          sHour:null,
          jardim: "",
          agenda: "",
          salao: "",
          ranchinho: "",
          gourmet: "",
          informatica: "",
          pastoral: "",
          ciencias: "",
          outros: "",
          piscina: "",
          quadra: "",
          rancho: "",
          inspetor: "",
          ingles: ""
        },       

      }            
    },   
    async created(){
      //  APRESENTA NA TELA O USUÁRIO CONECTADO
      db;
      const dbuser = getAuth();      
          onAuthStateChanged(dbuser, (user) => {     
            this.usuario = user.email         
      })        
      this.getDataNew()   
      this.setDate();   

    },
    watch:{
      'form.dataNew'(value){
        if(value){
          this.dataUser()
          this.msgErroData()
          this.setDate()
        }
      },
      'form.informatica'(value){
        if(value){
          
          this.setDate()
        }
      },            
    },      
    methods: {
    //função que bloqueia eventos na sala da informatica nas quartas, quintas e sextas.
    setDate(){

      let newDateInfo =  document.getElementById('data').value;     
      
      const info = this.form.informatica;  

      //Converter a data do form para o dia da semana(2=quarta-feira, 3=quinta-feira e 4=sexta-feira)
      const numeroConvertido = new Date(newDateInfo).getDay();

      //verifica se numeroConvertido e info são true, se for, bloqueia o usuario e dá reload na página.
      if(numeroConvertido === 2 && info || numeroConvertido === 3 && info || numeroConvertido === 4 && info){
        
        setTimeout(()=>{
            this.$swal({
              icon: "warning",
              title: "Ops... Desculpe!",
              html: `
              <p style="font-family: Montserrat; font-weight:300, font-size:2em;">
                Sala de Informática liberada para eventos, apenas na 2ª e 3ª feira.
              </p>`,
              showConfirmButton: false,              
              timerProgressBar: true,
              timer:7500
            })     
          },100) 
          setTimeout(()=>{
            window.location.reload()
          },8000)   
       
        return false;
       
      }
    
    },

    // validação do botão submit
    async validaUser(){     
      this.loading()
      await this.getDataNew()
      this.clicar()
    },    
    msgErroData(){
      const errorMsgData = document.getElementById('errorMsgData')
      const mySubmit = document.getElementById('mySubmit')
      
      const newData = new Date()
      let d = ("0" + newData.getDate()).slice(-2)
      let m = ("0" + (newData.getMonth()+1)).slice(-2)
      let y = newData.getFullYear()
      let fullYearBlock = y+"-"+m+"-"+d 

      if(this.form.dataNew == fullYearBlock){  
        errorMsgData.innerHTML = "<i class='fas fa-exclamation-circle'></i> Precisa marcar com 12h de antecedência."
        mySubmit.disabled = true
        mySubmit.style.backgroundColor = "#9DB2BF"
        mySubmit.style.color = "#fff"
        mySubmit.style.cursor = "not-allowed"
        
      }else{
        errorMsgData.innerHTML = ""
        mySubmit.disabled = false
        mySubmit.style.backgroundColor = "#f00"
        mySubmit.style.color = "#fff"
        mySubmit.style.cursor = "pointer"
      }

    },  
    trocarSal(event){               
      const sal = document.getElementById("sal")
      if(event.target.value == "Salão" ){          
          sal.classList.toggle("checked")          
      }
    },
    trocarIngles(event){                      
      const ing = document.getElementById("ing")       
      if(event.target.value == "Sala Bilíngue" ){          
          ing.classList.toggle("checked")         
      } 
    },
    trocarJar(event){
      const jar = document.getElementById("jar")       
      if(event.target.value == "Jardim_Sensorial" ){          
          jar.classList.toggle("checked")        
      }
    },
    trocarAg(event){
      const agenda = document.getElementById("agend")       
      if(event.target.value  == "Agendamentos"){          
          agenda.classList.toggle("checked")        
      }
    },
    trocarRanchinho(event){
      const ranchinho = document.getElementById("ran")       
      if(event.target.value  == "Ranchinho"){          
          ranchinho.classList.toggle("checked")        
      }
    },
    trocarGourmet(event){
      const gourmet = document.getElementById("gour")       
      if(event.target.value  == "Área Gourmet"){          
          gourmet.classList.toggle("checked")        
      }
    },
    trocarInfor(event){
      const info = document.getElementById("inform")       
      if(event.target.value  == "Sala Informática"){          
          info.classList.toggle("checked")        
      }
    },
    trocarPastoral(event){
      const pastoral = document.getElementById("pastor")       
      if(event.target.value  == "Sala Pastoral"){          
          pastoral.classList.toggle("checked")        
      }
    },
    trocarCiencias(event){
      const ciencias = document.getElementById("lab")       
      if(event.target.value  == "Lab. Ciências"){          
          ciencias.classList.toggle("checked")        
      }
    },
    trocarOutros(event){
      const outros = document.getElementById("out")       
      if(event.target.value  == "Outros"){          
          outros.classList.toggle("checked")        
      }
    },
    trocarPiscina(event){
      const piscina = document.getElementById("pisc")       
      if(event.target.value  == "Piscina"){          
          piscina.classList.toggle("checked")        
      }
    },
    trocarQuadra(event){
      const quadra = document.getElementById("quad")       
      if(event.target.value  == "Quadra"){          
          quadra.classList.toggle("checked")        
      }
    },
    trocarRancho(event){
      const rancho = document.getElementById("ranch")       
      if(event.target.value  == "Rancho"){          
          rancho.classList.toggle("checked")        
      }
    },
    trocarInspetor(event){
      const inspetor = document.getElementById("insp")       
      if(event.target.value  == "Inspetor"){          
          inspetor.classList.toggle("checked")        
      }
    },
    changeformed(){
      // this.isOpen = !this.isOpen
      this.isOpen = true
      
      const sal = document.getElementById("salao")
      sal.addEventListener('click', ()=>{
        this.isOpen = false
      })
      const gourmet = document.getElementById("gourmet")
      gourmet.addEventListener('click', ()=>{
        this.isOpen = false
      })
      const piscina = document.getElementById("piscina")
      piscina.addEventListener('click', ()=>{
        this.isOpen = false
      })
      const labCiencias = document.getElementById("labCiencias")
      labCiencias.addEventListener('click', ()=>{
        this.isOpen = false
      })
      const SalIngles = document.getElementById("SalIngles")
      SalIngles.addEventListener('click', ()=>{
        this.isOpen = false
      })
      const info = document.getElementById("info")
      info.addEventListener('click', ()=>{
        this.isOpen = false
      })
      const jardim = document.getElementById("jardim")
      jardim.addEventListener('click', ()=>{
        this.isOpen = false
      })
      const quadra = document.getElementById("quadra")
      quadra.addEventListener('click', ()=>{
        this.isOpen = false
      })
     
     
      // console.log(sal)
      
    },     
    loading(){
      if(this.form.seguimento){
        const loader = document.getElementById('loading')
        loader.style.display = "inline"
        setTimeout(() => {
          loader.style.display = "none"
        }, 2000);          
      }else{
        this.$swal({
          icon: "warning",
          title: "Oops...",
          text: "Campo Vazio!",
          showConfirmButton: false,
          timer: 1000,
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
      }      
    },
    loadLopping(){
      const loader = document.getElementById('loading')      
        loader.style.display = "none"
          setTimeout(()=>{
            this.$swal({
              icon: "warning",
              title: "Desculpe!",
              text: "Data, Horário e Local já em uso!",
              showConfirmButton: false,              
              timerProgressBar: true,
              timer: 7500
            })     
          },200) 
          setTimeout(()=>{
            window.location.reload()
          },8000)   
    },
    loadLopBlock1(){
      const loader = document.getElementById('loading')      
        loader.style.display = "none"    
          setTimeout(()=>{
            this.$swal({
              icon: "warning",
              title: "Ops... Desculpe!",
              html: `
              <p style="font-family: Montserrat; font-weight:300">
                Todos os seguimentos estão bloqueados. Existe um evento de <b style='background-color:#b71218; color:#fff; padding:0px 3px; border-radius: 5px;'>07h10-21h</b> em uso.
              </p>`,
              showConfirmButton: false,              
              timerProgressBar: true,
              timer: 7500
            })   
           
          },200) 
          setTimeout(()=>{
            window.location.reload()
          },8000)   
    }, 
    loadLopBlock2(){
      const loader = document.getElementById('loading')      
        loader.style.display = "none"
          setTimeout(()=>{
            this.$swal({
              icon: "warning",
              title: "Ops... Desculpe!",
              html: `
              <p style="font-family: Montserrat; font-weight:300">
                Já Existe evento(s) marcado(s) dentro desse período de <b style='background-color:#b71218; color:#fff; padding:0px 3px; border-radius: 5px;'>07h10-21h</b>.
              </p>`,
              // text: "Existe um horário marcado nesse período, o horário de 07h10-21h não poderá ser usado no momento.",
              showConfirmButton: false,              
              timerProgressBar: true,
              timer:7500
            })     
          },100) 
          setTimeout(()=>{
            window.location.reload()
          },8000)   
    }, 
    loadLopBlock3(){
      const loader = document.getElementById('loading')      
        loader.style.display = "none"
          setTimeout(()=>{
            this.$swal({
              icon: "warning",
              title: "Ops... Desculpe!",
              html: `
              <p style="font-family: Montserrat; font-weight:300">
                Todo seguimento ANOS FINAIS estão bloqueados. Existe um evento de <b style='background-color:#b71218; color:#fff; padding:0px 3px; border-radius: 5px;'>07h10-12h</b> em uso.
              </p>`,
              showConfirmButton: false,              
              timerProgressBar: true,
              timer:7500
            })     
          },100) 
          setTimeout(()=>{
            window.location.reload()
          },8000)   
    }, 
    loadLopBlock4(){
      const loader = document.getElementById('loading')      
        loader.style.display = "none"
          setTimeout(()=>{
            this.$swal({
              icon: "warning",
              title: "Ops... Desculpe!",
              html: `
              <p style="font-family: Montserrat; font-weight:300">
                Já Existe evento(s) marcado(s) dentro desse período de <b style='background-color:#b71218; color:#fff; padding:0px 3px; border-radius: 5px;'>07h10-12h</b>.
              </p>`,
              showConfirmButton: false,              
              timerProgressBar: true,
              timer:7500
            })     
          },100) 
          setTimeout(()=>{
            window.location.reload()
          },8000)   
    },  
    loadLopBlock5(){
      const loader = document.getElementById('loading')      
        loader.style.display = "none"
          setTimeout(()=>{
            this.$swal({
              icon: "warning",
              title: "Ops... Desculpe!",
              html: `
              <p style="font-family: Montserrat; font-weight:300">
                Todo seguimento ANOS INICIAIS/INFANTIL estão bloqueados. Existe um evento de <b style='background-color:#b71218; color:#fff; padding:0px 3px; border-radius: 5px;'>12h30-17h</b> em uso.
              </p>`,
              showConfirmButton: false,              
              timerProgressBar: true,
              timer:7500
            })     
          },100) 
          setTimeout(()=>{
            window.location.reload()
          },8000)   
    }, 
    loadLopBlock6(){
      const loader = document.getElementById('loading')      
        loader.style.display = "none"
          setTimeout(()=>{
            this.$swal({
              icon: "warning",
              title: "Ops... Desculpe!",
              html: `
              <p style="font-family: Montserrat; font-weight:300">
                Já Existe evento(s) marcado(s) dentro desse período de <b style='background-color:#b71218; color:#fff; padding:0px 3px; border-radius: 5px;'>12h30-17h</b>.
              </p>`,
              showConfirmButton: false,              
              timerProgressBar: true,
              timer:7500
            })     
          },100) 
          setTimeout(()=>{
            window.location.reload()
          },8000)   
    },   
    async getDataNew() { 
    const dbUser = getFirestore();
    const querySnapshot = await getDocs(collection(dbUser, "usuarios"));

    const newData = new Date()
    let d = ("0" + newData.getDate()).slice(-2)
    let m = ("0" + (newData.getMonth()+1)).slice(-2)
    let y = newData.getFullYear()
    let fullYearBlock = y+"-"+m+"-"+d 

    if(this.form.dataNew == fullYearBlock){              
        this.$swal({
          icon:'info',
          title:'Marcar com 12hs de Antecedência!',
          showConfirmButton: false         
        })              
        setTimeout(() => {
          this.$router.go({name:'auth'})
        }, 3500);
      }

      querySnapshot.forEach((doc) => {       
      this.attributes[0].dates.push(doc.data().dataNew)
      const hFull = doc.data().horariosFull;
      const getFull = doc.data().dataNew;
      this.postDataBlock.push(getFull)

      /*********************** */
      //AMBIENTE DE TESTE  
      /**************************** */

      const salao = doc.data().salao     
      const agenda = doc.data().agenda
      const jardim = doc.data().jardim    
      const ranchinho = doc.data().ranchinho
      const gourmet = doc.data().gourmet
      const informatica = doc.data().informatica
      const pastoral = doc.data().pastoral
      const ciencias = doc.data().ciencias
      const outros = doc.data().outros
      const piscina = doc.data().piscina
      const quadra = doc.data().quadra
      const rancho = doc.data().rancho         
      const inspetor = doc.data().inspetor
      const ingles = doc.data().ingles 

      let sal = this.form.salao
      let ing = this.form.ingles
      let ag = this.form.agenda
      let jar = this.form.jardim
      let ran = this.form.ranchinho
      let gou = this.form.gourmet
      let info = this.form.informatica
      let pas = this.form.pastoral
      let cie = this.form.ciencias
      let out = this.form.outros
      let pis = this.form.piscina
      let qua = this.form.quadra
      let ranch = this.form.rancho
      let insp = this.form.inspetor
      
      if(ing == ""){
        ing = "sit"        
      }
      if(sal == ""){
        sal = "sit"        
      }
      if(ag == ""){
        ag = "sit"
      }
      if(jar == ""){
        jar = "sit"
      }
      if(ran == ""){
        ran = "sit"
      }
      if(gou == ""){
        gou = "sit"
      }
      if(info == ""){
        info = "sit"
      }
      if(pas == ""){
        pas = "sit"
      }
      if(cie == ""){
        cie = "sit"
      }
      if(out == ""){
        out = "sit"
      }
      if(pis == ""){
        pis = "sit"
      }
      if(qua == ""){
        qua = "sit"
      }
      if(ranch == ""){
        ranch = "sit"
      }
      if(insp == ""){
        insp = "sit"
      }      
    
    // TRATAMENTO DE ERRO TEMPORÁRIO PARA IPHONE E ANDROID
   

    //BLOQUEAR DATAS, HORÁRIOS E LOCAIS REPETIDOS
    if ( 
      this.form.dataNew === getFull && this.form.horariosFull === hFull && sal == salao ||
      this.form.dataNew === getFull && this.form.horariosFull === hFull && ag == agenda ||
      this.form.dataNew === getFull && this.form.horariosFull === hFull && jar == jardim ||  
      this.form.dataNew === getFull && this.form.horariosFull === hFull && ran == ranchinho ||
      this.form.dataNew === getFull && this.form.horariosFull === hFull && gou == gourmet ||
      this.form.dataNew === getFull && this.form.horariosFull === hFull && info == informatica || 
      this.form.dataNew === getFull && this.form.horariosFull === hFull && pas == pastoral ||
      this.form.dataNew === getFull && this.form.horariosFull === hFull && cie == ciencias ||
      this.form.dataNew === getFull && this.form.horariosFull === hFull && out == outros ||
      this.form.dataNew === getFull && this.form.horariosFull === hFull && pis == piscina ||
      this.form.dataNew === getFull && this.form.horariosFull === hFull && qua == quadra ||
      this.form.dataNew === getFull && this.form.horariosFull === hFull && ranch == rancho ||
      this.form.dataNew === getFull && this.form.horariosFull === hFull && insp == inspetor ||  
      this.form.dataNew === getFull && this.form.horariosFull === hFull && ing == ingles   
    
    ) 

    {
      this.loadLopping()      
                
    // //LAÇO DE REPETIÇAO PARA BLOQUEAR TODO O SEGUIMENTO, CASO ALGUÉM ESCOLHA SOMENTE UMA DATA.        
    } else if (
      this.form.dataNew === getFull && hFull === '07h10-12h' && sal == salao ||
      this.form.dataNew === getFull && hFull === '07h10-12h' && ag == agenda ||
      this.form.dataNew === getFull && hFull === '07h10-12h' && jar == jardim ||  
      this.form.dataNew === getFull && hFull === '07h10-12h' && ran == ranchinho ||
      this.form.dataNew === getFull && hFull === '07h10-12h' && gou == gourmet ||
      this.form.dataNew === getFull && hFull === '07h10-12h' && info == informatica || 
      this.form.dataNew === getFull && hFull === '07h10-12h' && pas == pastoral ||
      this.form.dataNew === getFull && hFull === '07h10-12h' && cie == ciencias ||
      this.form.dataNew === getFull && hFull === '07h10-12h' && out == outros ||
      this.form.dataNew === getFull && hFull === '07h10-12h' && pis == piscina ||
      this.form.dataNew === getFull && hFull === '07h10-12h' && qua == quadra ||
      this.form.dataNew === getFull && hFull === '07h10-12h' && ranch == rancho ||
      this.form.dataNew === getFull && hFull === '07h10-12h' && insp == inspetor ||
      this.form.dataNew === getFull && hFull === '07h10-12h' && ing == ingles
      ) 
      {
      if(
        this.form.horariosFull === '07h10-07h55' ||
        this.form.horariosFull === '07h55-08h40' ||
        this.form.horariosFull === '08h40-09h25' ||
        this.form.horariosFull === '09h-09h45' ||
        this.form.horariosFull === '09h25-10h10' ||
        this.form.horariosFull === '09h45-10h30' ||
        this.form.horariosFull === '10h30-11h15' ||
        this.form.horariosFull === '11h15-12h' 
      )
      {        
        this.loadLopBlock3()      
      } 
          
      } 

        // //LAÇO DE REPETIÇAO PARA BLOQUEAR TODO O SEGUIMENTO, HORÁRIO FULL 7H-21H.
      else if (

      this.form.dataNew === getFull && hFull === '07h10-21h' && sal == salao ||
      this.form.dataNew === getFull && hFull === '07h10-21h' && ag == agenda ||
      this.form.dataNew === getFull && hFull === '07h10-21h' && jar == jardim ||  
      this.form.dataNew === getFull && hFull === '07h10-21h' && ran == ranchinho ||
      this.form.dataNew === getFull && hFull === '07h10-21h' && gou == gourmet ||
      this.form.dataNew === getFull && hFull === '07h10-21h' && info == informatica || 
      this.form.dataNew === getFull && hFull === '07h10-21h' && pas == pastoral ||
      this.form.dataNew === getFull && hFull === '07h10-21h' && cie == ciencias ||
      this.form.dataNew === getFull && hFull === '07h10-21h' && out == outros ||
      this.form.dataNew === getFull && hFull === '07h10-21h' && pis == piscina ||
      this.form.dataNew === getFull && hFull === '07h10-21h' && qua == quadra ||
      this.form.dataNew === getFull && hFull === '07h10-21h' && ranch == rancho ||
      this.form.dataNew === getFull && hFull === '07h10-12h' && insp == inspetor ||
      this.form.dataNew === getFull && hFull === '07h10-12h' && ing == ingles      
     
      ) 
      {
      if(
        this.form.horariosFull === '07h10-07h55' ||
        this.form.horariosFull === '07h55-08h40' ||
        this.form.horariosFull === '08h40-09h25' ||
        this.form.horariosFull === '09h-09h45' ||
        this.form.horariosFull === '09h25-10h10' ||
        this.form.horariosFull === '09h45-10h30' ||
        this.form.horariosFull === '10h30-11h15' ||
        this.form.horariosFull === '11h15-12h' ||
        //ANOS INICIAIS
        this.form.horariosFull === '12h35-13h20' ||
        this.form.horariosFull === '13h20-14h05' ||
        this.form.horariosFull === '14h05-14h50' ||
        this.form.horariosFull === '14h25-15h10' ||
        this.form.horariosFull === '15h10-15h55' ||
        this.form.horariosFull === '15h55-16h50' ||               
        //INFANTIL
        this.form.horariosFull === '12h40-13h25' ||
        this.form.horariosFull === '13h25-14h10' ||
        this.form.horariosFull === '14h10-14h35' ||
        this.form.horariosFull === '14h35-15h20' ||
        this.form.horariosFull === '15h20-16h05' ||
        this.form.horariosFull === '16h05-16h50' ||
        this.form.horariosFull === '07h10-12h' ||
        this.form.horariosFull === '12h30-17h' ||
        this.form.horariosFull === '17h30-21h' ||
        this.form.horariosFull === '18h-21h' 
       

      )
      {        
        this.loadLopBlock1()
     
      } 
          
      } 

        // //LAÇO DE REPETIÇAO PARA BLOQUEAR TODO O SEGUIMENTO,DATA INVERTIDA, HORÁRIO FULL 7H-21H.
      else if (
      this.form.dataNew === getFull && this.form.horariosFull === '07h10-21h' && sal == salao ||
      this.form.dataNew === getFull && this.form.horariosFull === '07h10-21h' && ag == agenda ||
      this.form.dataNew === getFull && this.form.horariosFull === '07h10-21h' && jar == jardim ||  
      this.form.dataNew === getFull && this.form.horariosFull === '07h10-21h' && ran == ranchinho ||
      this.form.dataNew === getFull && this.form.horariosFull === '07h10-21h' && gou == gourmet ||
      this.form.dataNew === getFull && this.form.horariosFull === '07h10-21h' && info == informatica || 
      this.form.dataNew === getFull && this.form.horariosFull === '07h10-21h' && pas == pastoral ||
      this.form.dataNew === getFull && this.form.horariosFull === '07h10-21h' && cie == ciencias ||
      this.form.dataNew === getFull && this.form.horariosFull === '07h10-21h' && out == outros ||
      this.form.dataNew === getFull && this.form.horariosFull === '07h10-21h' && pis == piscina ||
      this.form.dataNew === getFull && this.form.horariosFull === '07h10-21h' && qua == quadra ||
      this.form.dataNew === getFull && this.form.horariosFull === '07h10-21h' && ranch == rancho ||
      this.form.dataNew === getFull && this.form.horariosFull === '07h10-21h' && insp == inspetor  ||   
      this.form.dataNew === getFull && this.form.horariosFull === '07h10-21h' && ing == ingles     
     
      ) 
      {
      if(
        hFull === '07h10-07h55' ||
        hFull === '07h55-08h40' ||
        hFull === '08h40-09h25' ||
        hFull === '09h-09h45' ||
        hFull === '09h25-10h10' ||
        hFull === '09h45-10h30' ||
        hFull === '10h30-11h15' ||
        hFull === '11h15-12h' ||
        //ANOS INICIAIS
        hFull === '12h35-13h20' ||
        hFull === '13h20-14h05' ||
        hFull === '14h05-14h50' ||
        hFull === '14h25-15h10' ||
        hFull === '15h10-15h55' ||
        hFull === '15h55-16h50' ||               
        //INFANTIL
        hFull === '12h40-13h25' ||
        hFull === '13h25-14h10' ||
        hFull === '14h10-14h35' ||
        hFull === '14h35-15h20' ||
        hFull === '15h20-16h05' ||
        hFull === '16h05-16h50' ||
        hFull === '07h10-12h' ||
        hFull === '12h30-17h' ||
        hFull === '17h30-21h' ||
        hFull === '18h-21h' 
       

      )
      {
        this.loadLopBlock2()     
      } 
          
      } 
      
      
      else if (      
      this.form.dataNew === getFull && hFull === '12h30-17h' && sal == salao ||
      this.form.dataNew === getFull && hFull === '12h30-17h' && ag == agenda ||
      this.form.dataNew === getFull && hFull === '12h30-17h' && jar == jardim ||  
      this.form.dataNew === getFull && hFull === '12h30-17h' && ran == ranchinho ||
      this.form.dataNew === getFull && hFull === '12h30-17h' && gou == gourmet ||
      this.form.dataNew === getFull && hFull === '12h30-17h' && info == informatica || 
      this.form.dataNew === getFull && hFull === '12h30-17h' && pas == pastoral ||
      this.form.dataNew === getFull && hFull === '12h30-17h' && cie == ciencias ||
      this.form.dataNew === getFull && hFull === '12h30-17h' && out == outros ||
      this.form.dataNew === getFull && hFull === '12h30-17h' && pis == piscina ||
      this.form.dataNew === getFull && hFull === '12h30-17h' && qua == quadra ||
      this.form.dataNew === getFull && hFull === '12h30-17h' && ranch == rancho ||
      this.form.dataNew === getFull && hFull === '12h30-17h' && insp == inspetor  ||  
      this.form.dataNew === getFull && hFull === '12h30-17h' && ing == ingles   

      )
        {
      if
        (
          //ANOS INICIAIS
          this.form.horariosFull === '12h35-13h20' ||
          this.form.horariosFull === '13h20-14h05' ||
          this.form.horariosFull === '14h05-14h50' ||
          this.form.horariosFull === '14h25-15h10' ||
          this.form.horariosFull === '15h10-15h55' ||
          this.form.horariosFull === '15h55-16h50' ||               
          //INFANTIL
          this.form.horariosFull === '12h40-13h25' ||
          this.form.horariosFull === '13h25-14h10' ||
          this.form.horariosFull === '14h10-14h35' ||
          this.form.horariosFull === '14h35-15h20' ||
          this.form.horariosFull === '15h20-16h05' ||
          this.form.horariosFull === '16h05-16h50' 
        )
        {
          this.loadLopBlock5()        
        } 

      }
      // //LAÇO DE REPETIÇAO PARA BLOQUEAR  A DATA FULL, CASO JÁ TENHA ESCOLHIDO UMA DATA SOMENTE. 
      else if (

      this.form.dataNew === getFull && this.form.horariosFull === '12h30-17h' && sal == salao ||
      this.form.dataNew === getFull && this.form.horariosFull === '12h30-17h' && ag == agenda ||
      this.form.dataNew === getFull && this.form.horariosFull === '12h30-17h' && jar == jardim ||  
      this.form.dataNew === getFull && this.form.horariosFull === '12h30-17h' && ran == ranchinho ||
      this.form.dataNew === getFull && this.form.horariosFull === '12h30-17h' && gou == gourmet ||
      this.form.dataNew === getFull && this.form.horariosFull === '12h30-17h' && info == informatica || 
      this.form.dataNew === getFull && this.form.horariosFull === '12h30-17h' && pas == pastoral ||
      this.form.dataNew === getFull && this.form.horariosFull === '12h30-17h' && cie == ciencias ||
      this.form.dataNew === getFull && this.form.horariosFull === '12h30-17h' && out == outros ||
      this.form.dataNew === getFull && this.form.horariosFull === '12h30-17h' && pis == piscina ||
      this.form.dataNew === getFull && this.form.horariosFull === '12h30-17h' && qua == quadra ||
      this.form.dataNew === getFull && this.form.horariosFull === '12h30-17h' && ranch == rancho ||
      this.form.dataNew === getFull && this.form.horariosFull === '12h30-17h' && insp == inspetor ||
      this.form.dataNew === getFull && this.form.horariosFull === '12h30-17h' && ing == ingles 
      ) 
        {
          if (
            //ANOS INICIAIS
          hFull === '12h35-13h20' ||
          hFull === '13h20-14h05' ||
          hFull === '14h05-14h50' ||
          hFull === '14h25-15h10' ||
          hFull === '15h10-15h55' ||
          hFull === '15h55-16h50' ||    
          //INFANTIL
          hFull === '12h40-13h25' ||
          hFull === '13h25-14h10' ||
          hFull === '14h10-14h35' ||
          hFull === '14h35-15h20' ||
          hFull === '15h20-16h05' ||
          hFull === '16h05-16h50' 
          )
          {
            this.loadLopBlock6()        
          } 

      } 
       // //LAÇO DE REPETIÇAO PARA BLOQUEAR  A DATA FULL, CASO JÁ TENHA ESCOLHIDO UMA DATA SOMENTE. 
      else if (
      
      this.form.dataNew === getFull && this.form.horariosFull === '07h10-12h' && sal == salao ||
      this.form.dataNew === getFull && this.form.horariosFull === '07h10-12h' && ag == agenda ||
      this.form.dataNew === getFull && this.form.horariosFull === '07h10-12h' && jar == jardim ||  
      this.form.dataNew === getFull && this.form.horariosFull === '07h10-12h' && ran == ranchinho ||
      this.form.dataNew === getFull && this.form.horariosFull === '07h10-12h' && gou == gourmet ||
      this.form.dataNew === getFull && this.form.horariosFull === '07h10-12h' && info == informatica || 
      this.form.dataNew === getFull && this.form.horariosFull === '07h10-12h' && pas == pastoral ||
      this.form.dataNew === getFull && this.form.horariosFull === '07h10-12h' && cie == ciencias ||
      this.form.dataNew === getFull && this.form.horariosFull === '07h10-12h' && out == outros ||
      this.form.dataNew === getFull && this.form.horariosFull === '07h10-12h' && pis == piscina ||
      this.form.dataNew === getFull && this.form.horariosFull === '07h10-12h' && qua == quadra ||
      this.form.dataNew === getFull && this.form.horariosFull === '07h10-12h' && ranch == rancho ||
      this.form.dataNew === getFull && this.form.horariosFull === '07h10-12h' && insp == inspetor ||
      this.form.dataNew === getFull && this.form.horariosFull === '07h10-12h' && ing == ingles 
     
      ) {
        if
        (
          hFull === '07h10-07h55' ||
          hFull === '07h55-08h40' ||
          hFull === '08h40-09h25' ||
          hFull === '09h-09h45' ||
          hFull === '09h25-10h10' ||
          hFull === '09h45-10h30' ||
          hFull === '10h30-11h15' ||
          hFull === '11h15-12h'         
        )
        {
          this.loadLopBlock4()        
        } 

      /********************************************************** */
      /*REGRAS DE BLOQUEIO PARA HORÁRIOS ESPECIAIS - ANOS FINAIS*/ 
      /************************************************************ */
      } 
      else if (
      this.form.dataNew === getFull && hFull === '08h40-09h25' && sal == salao ||
      this.form.dataNew === getFull && hFull === '08h40-09h25' && ag == agenda ||
      this.form.dataNew === getFull && hFull === '08h40-09h25' && jar == jardim ||  
      this.form.dataNew === getFull && hFull === '08h40-09h25' && ran == ranchinho ||
      this.form.dataNew === getFull && hFull === '08h40-09h25' && gou == gourmet ||
      this.form.dataNew === getFull && hFull === '08h40-09h25' && info == informatica || 
      this.form.dataNew === getFull && hFull === '08h40-09h25' && pas == pastoral ||
      this.form.dataNew === getFull && hFull === '08h40-09h25' && cie == ciencias ||
      this.form.dataNew === getFull && hFull === '08h40-09h25' && out == outros ||
      this.form.dataNew === getFull && hFull === '08h40-09h25' && pis == piscina ||
      this.form.dataNew === getFull && hFull === '08h40-09h25' && qua == quadra ||
      this.form.dataNew === getFull && hFull === '08h40-09h25' && ranch == rancho ||
      this.form.dataNew === getFull && hFull === '08h40-09h25' && insp == inspetor ||  
      this.form.dataNew === getFull && hFull === '08h40-09h25' && ing == ingles   

    
        ) 
        {
          if (this.form.horariosFull === '09h-09h45')
          {
            this.loadLopping()
          }           
      } else if (

      this.form.dataNew === getFull && hFull === '09h-09h45' && sal == salao ||
      this.form.dataNew === getFull && hFull === '09h-09h45' && ag == agenda ||
      this.form.dataNew === getFull && hFull === '09h-09h45' && jar == jardim ||  
      this.form.dataNew === getFull && hFull === '09h-09h45' && ran == ranchinho ||
      this.form.dataNew === getFull && hFull === '09h-09h45' && gou == gourmet ||
      this.form.dataNew === getFull && hFull === '09h-09h45' && info == informatica || 
      this.form.dataNew === getFull && hFull === '09h-09h45' && pas == pastoral ||
      this.form.dataNew === getFull && hFull === '09h-09h45' && cie == ciencias ||
      this.form.dataNew === getFull && hFull === '09h-09h45' && out == outros ||
      this.form.dataNew === getFull && hFull === '09h-09h45' && pis == piscina ||
      this.form.dataNew === getFull && hFull === '09h-09h45' && qua == quadra ||
      this.form.dataNew === getFull && hFull === '09h-09h45' && ranch == rancho ||
      this.form.dataNew === getFull && hFull === '09h-09h45' && insp == inspetor ||
      this.form.dataNew === getFull && hFull === '09h-09h45' && ing == ingles
     
        ) {
          if (this.form.horariosFull === '08h40-09h25' || this.form.horariosFull === '09h25-10h10' )
          {
            this.loadLopping()           
          }             
      } else if (

      this.form.dataNew === getFull && hFull === '09h25-10h10' && sal == salao ||
      this.form.dataNew === getFull && hFull === '09h25-10h10' && ag == agenda ||
      this.form.dataNew === getFull && hFull === '09h25-10h10' && jar == jardim ||  
      this.form.dataNew === getFull && hFull === '09h25-10h10' && ran == ranchinho ||
      this.form.dataNew === getFull && hFull === '09h25-10h10' && gou == gourmet ||
      this.form.dataNew === getFull && hFull === '09h25-10h10' && info == informatica || 
      this.form.dataNew === getFull && hFull === '09h25-10h10' && pas == pastoral ||
      this.form.dataNew === getFull && hFull === '09h25-10h10' && cie == ciencias ||
      this.form.dataNew === getFull && hFull === '09h25-10h10' && out == outros ||
      this.form.dataNew === getFull && hFull === '09h25-10h10' && pis == piscina ||
      this.form.dataNew === getFull && hFull === '09h25-10h10' && qua == quadra ||
      this.form.dataNew === getFull && hFull === '09h25-10h10' && ranch == rancho ||
      this.form.dataNew === getFull && hFull === '09h25-10h10' && insp == inspetor ||
      this.form.dataNew === getFull && hFull === '09h25-10h10' && ing == ingles
    
        ) {
          if (this.form.horariosFull === '09h45-10h30')
          {
            this.loadLopping()          
          }           
      } else if (

      this.form.dataNew === getFull && hFull === '09h45-10h30' && sal == salao ||
      this.form.dataNew === getFull && hFull === '09h45-10h30' && ag == agenda ||
      this.form.dataNew === getFull && hFull === '09h45-10h30' && jar == jardim ||  
      this.form.dataNew === getFull && hFull === '09h45-10h30' && ran == ranchinho ||
      this.form.dataNew === getFull && hFull === '09h45-10h30' && gou == gourmet ||
      this.form.dataNew === getFull && hFull === '09h45-10h30' && info == informatica || 
      this.form.dataNew === getFull && hFull === '09h45-10h30' && pas == pastoral ||
      this.form.dataNew === getFull && hFull === '09h45-10h30' && cie == ciencias ||
      this.form.dataNew === getFull && hFull === '09h45-10h30' && out == outros ||
      this.form.dataNew === getFull && hFull === '09h45-10h30' && pis == piscina ||
      this.form.dataNew === getFull && hFull === '09h45-10h30' && qua == quadra ||
      this.form.dataNew === getFull && hFull === '09h45-10h30' && ranch == rancho ||
      this.form.dataNew === getFull && hFull === '09h45-10h30' && insp == inspetor ||
      this.form.dataNew === getFull && hFull === '09h45-10h30' && ing == ingles
      ) 
        {
          if (this.form.horariosFull === '09h25-10h10')
          {
            this.loadLopping()           
          } 

      /********************************************************** */
      /*FIM DAS REGRAS DE BLOQUEIO PARA HORÁRIOS ESPECIAIS - ANOS INICIAIS*/ 
      /************************************************************ */

      //BLOQUEIOS DO ANOS INICIAIS - MUITOS HORÁRIOS PICADOS
      } else if (

      this.form.dataNew === getFull && hFull === '14h05-14h50' && sal == salao ||
      this.form.dataNew === getFull && hFull === '14h05-14h50' && ag == agenda ||
      this.form.dataNew === getFull && hFull === '14h05-14h50' && jar == jardim ||  
      this.form.dataNew === getFull && hFull === '14h05-14h50' && ran == ranchinho ||
      this.form.dataNew === getFull && hFull === '14h05-14h50' && gou == gourmet ||
      this.form.dataNew === getFull && hFull === '14h05-14h50' && info == informatica || 
      this.form.dataNew === getFull && hFull === '14h05-14h50' && pas == pastoral ||
      this.form.dataNew === getFull && hFull === '14h05-14h50' && cie == ciencias ||
      this.form.dataNew === getFull && hFull === '14h05-14h50' && out == outros ||
      this.form.dataNew === getFull && hFull === '14h05-14h50' && pis == piscina ||
      this.form.dataNew === getFull && hFull === '14h05-14h50' && qua == quadra ||
      this.form.dataNew === getFull && hFull === '14h05-14h50' && ranch == rancho ||
      this.form.dataNew === getFull && hFull === '14h05-14h50' && insp == inspetor ||
      this.form.dataNew === getFull && hFull === '14h05-14h50' && ing == ingles
      
        ) {
        if (  this.form.horariosFull === '14h25-15h10' ||
              this.form.horariosFull === '14h10-14h35' || 
              this.form.horariosFull === '14h35-15h20'){     
              
          this.loadLopping()        
        } 
      } else if (
      this.form.dataNew === getFull && hFull === '14h25-15h10' && sal == salao ||
      this.form.dataNew === getFull && hFull === '14h25-15h10' && ag == agenda ||
      this.form.dataNew === getFull && hFull === '14h25-15h10' && jar == jardim ||  
      this.form.dataNew === getFull && hFull === '14h25-15h10' && ran == ranchinho ||
      this.form.dataNew === getFull && hFull === '14h25-15h10' && gou == gourmet ||
      this.form.dataNew === getFull && hFull === '14h25-15h10' && info == informatica || 
      this.form.dataNew === getFull && hFull === '14h25-15h10' && pas == pastoral ||
      this.form.dataNew === getFull && hFull === '14h25-15h10' && cie == ciencias ||
      this.form.dataNew === getFull && hFull === '14h25-15h10' && out == outros ||
      this.form.dataNew === getFull && hFull === '14h25-15h10' && pis == piscina ||
      this.form.dataNew === getFull && hFull === '14h25-15h10' && qua == quadra ||
      this.form.dataNew === getFull && hFull === '14h25-15h10' && ranch == rancho ||
      this.form.dataNew === getFull && hFull === '14h25-15h10' && insp == inspetor ||
      this.form.dataNew === getFull && hFull === '14h25-15h10' && ing == ingles
    
        ) {
          if ( this.form.horariosFull === '14h05-14h50' || this.form.horariosFull === '14h35-15h20' || this.form.horariosFull === '14h10-14h35') 
          {         
            this.loadLopping()           
          } 
          // NOVAS FUNCIONALIDADES DE BLOQUEIO DE CONFLITO PARA HORÁRIOS DOS ANOS INICIAIS E EDUCAÇÃO INFANTIL
      }else if (
      this.form.dataNew === getFull && hFull === '14h35-15h20' && sal == salao ||
      this.form.dataNew === getFull && hFull === '14h35-15h20' && ag == agenda ||
      this.form.dataNew === getFull && hFull === '14h35-15h20' && jar == jardim ||  
      this.form.dataNew === getFull && hFull === '14h35-15h20' && ran == ranchinho ||
      this.form.dataNew === getFull && hFull === '14h35-15h20' && gou == gourmet ||
      this.form.dataNew === getFull && hFull === '14h35-15h20' && info == informatica || 
      this.form.dataNew === getFull && hFull === '14h35-15h20' && pas == pastoral ||
      this.form.dataNew === getFull && hFull === '14h35-15h20' && cie == ciencias ||
      this.form.dataNew === getFull && hFull === '14h35-15h20' && out == outros ||
      this.form.dataNew === getFull && hFull === '14h35-15h20' && pis == piscina ||
      this.form.dataNew === getFull && hFull === '14h35-15h20' && qua == quadra ||
      this.form.dataNew === getFull && hFull === '14h35-15h20' && ranch == rancho ||
      this.form.dataNew === getFull && hFull === '14h35-15h20' && insp == inspetor ||
      this.form.dataNew === getFull && hFull === '14h35-15h20' && ing == ingles

        ) {
        if (  this.form.horariosFull === '14h05-14h50' ||
              this.form.horariosFull === '14h25-15h10' || 
              this.form.horariosFull === '15h10-15h55' ){     
              
          this.loadLopping()        
        } 
      }else if (
      this.form.dataNew === getFull && hFull === '14h10-14h35' && sal == salao ||
      this.form.dataNew === getFull && hFull === '14h10-14h35' && ag == agenda ||
      this.form.dataNew === getFull && hFull === '14h10-14h35' && jar == jardim ||  
      this.form.dataNew === getFull && hFull === '14h10-14h35' && ran == ranchinho ||
      this.form.dataNew === getFull && hFull === '14h10-14h35' && gou == gourmet ||
      this.form.dataNew === getFull && hFull === '14h10-14h35' && info == informatica || 
      this.form.dataNew === getFull && hFull === '14h10-14h35' && pas == pastoral ||
      this.form.dataNew === getFull && hFull === '14h10-14h35' && cie == ciencias ||
      this.form.dataNew === getFull && hFull === '14h10-14h35' && out == outros ||
      this.form.dataNew === getFull && hFull === '14h10-14h35' && pis == piscina ||
      this.form.dataNew === getFull && hFull === '14h10-14h35' && qua == quadra ||
      this.form.dataNew === getFull && hFull === '14h10-14h35' && ranch == rancho ||
      this.form.dataNew === getFull && hFull === '14h10-14h35' && insp == inspetor ||
      this.form.dataNew === getFull && hFull === '14h10-14h35' && ing == ingles

        ) {
        if (  this.form.horariosFull === '14h05-14h50' ||
              this.form.horariosFull === '14h25-15h10' ){     
              
          this.loadLopping()        
        } 
      }        
      })       
    },        
      // FUNÇÃO DE BLOQUEIO PARA DATAS ATUAIS E ANTERIORES
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
                        
      } 
      /**DESABILITADO POR ESTA APRESENTADO ERRO NO IPHONE(AO CLICAR AO INVÉS DE ABRIR, MARCA COMO SELECIONADO) */
      // else if(dataNew == fullYearBlock){              
      //   this.$swal({
      //     icon:'info',
      //     title:'Marcar com 12hs de Antecedência!',
      //   })              
      //   setTimeout(() => {
      //     this.$router.go({name:'auth'})
      //   }, 2500);
      // }
    },
    // FIM FUNÇÃO BLOQUEIO

    clicado(){
      this.disabledUser = !this.disabledUser;
    },
    //  FUNÇÃO DE VALIDAÇÃO DE CAMPOS - FUNCIONANDO
    async clicar(){
    try{   
      const dbUser = getFirestore();
      const authentication = getAuth();
      const userConnected = authentication.currentUser.uid;  
      
      //  MENSAGEM APRESENTADA ANTES DE GRAVAR NO BANCO DE DADOS        
      this.$swal({
        title: 'As informações estão completas?',
        showCancelButton: true,
        confirmButtonText: 'Salvar'        
      }).then((result) => {
          if (result.isConfirmed) {
            const newCityRef = doc(collection(dbUser, "usuarios"));
            // const newCityRef = doc(collection(dbUser, "ambTest"));
            let data = {
              id:newCityRef.id,
              user_id:userConnected,
              nome:this.form.nome,
              dataAtual:this.fullData,
              diretora:this.form.diretora,
              horariosFull:this.form.horariosFull,
              responsavel: this.form.responsavel,
              salao: this.form.salao,
              jardim: this.form.jardim,
              agenda: this.form.agenda,
              ranchinho: this.form.ranchinho,
              gourmet: this.form.gourmet,
              informatica: this.form.informatica,
              pastoral: this.form.pastoral,
              ciencias: this.form.ciencias,
              outros: this.form.outros,
              piscina: this.form.piscina,
              quadra: this.form.quadra,
              rancho: this.form.rancho,
              inspetor: this.form.inspetor,
              ingles: this.form.ingles,
              seguimento:this.form.seguimento,
              motivo: this.form.motivo,
              link: this.form.link,
              info:this.form.info,
              coordFI:this.form.coordFI,
              coordFII:this.form.coordFII,
              coordEI:this.form.coordEI,
              social:this.form.social,
              diretoria:this.form.diretoria,
              secretaria:this.form.secretaria,
              tesouraria:this.form.tesouraria,
              data:new Date().toLocaleString(),
              horaEventos:this.form.horaEventos,
              dataNew:this.form.dataNew,
              evExternos: this.form.evExternos,
              hourExtFirst: this.form.hourExtFirst,
              hourExtSecund: this.form.hourExtSecund,
              userLogado : this.usuario      
            }           
            setDoc(newCityRef, data)           
            .then(()=>{
              setTimeout(() => {
                this.$router.replace({name: 'usertela'})                
              }, 1500);
            })
          } else if (result.isDenied) {         
            this.$swal('Não foi salvo', '', 'info')          
          }        
        })      
      }catch(error){
        this.error = error.message;
      }         
    },    
    // *****************************************************************//
    //BACKUP DO BANCO DE DADOS.
    async backUp(){       
      const dbUser = getFirestore();
      const authentication = getAuth();
      const userConnected = authentication.currentUser.uid;
      const newCityRefBackup = doc(collection(dbUser, "backup"));
            let data = {
              id:newCityRefBackup.id,
              user_id:userConnected,
              nome:this.form.nome,
              dataAtual:this.fullData,
              diretora:this.form.diretora,
              horariosFull:this.form.horariosFull,
              responsavel: this.form.responsavel,
              situacao: this.form.situacao,
              salao: this.form.salao,
              jardim: this.form.jardim,
              agenda: this.form.agenda,
              ranchinho: this.form.ranchinho,
              gourmet: this.form.gourmet,
              informatica: this.form.informatica,
              pastoral: this.form.pastoral,
              ciencias: this.form.ciencias,
              outros: this.form.outros,
              piscina: this.form.piscina,
              quadra: this.form.quadra,
              rancho: this.form.rancho,
              inspetor: this.form.inspetor,
              seguimento:this.form.seguimento,
              motivo: this.form.motivo,
              link: this.form.link,
              info:this.form.info,
              coordFI:this.form.coordFI,
              coordFII:this.form.coordFII,
              coordEI:this.form.coordEI,
              social:this.form.social,
              diretoria:this.form.diretoria,
              secretaria:this.form.secretaria,
              tesouraria:this.form.tesouraria,
              data:new Date().toLocaleString(),
              horaEventos:this.form.horaEventos,
              dataNew:this.form.dataNew,
              evExternos: this.form.evExternos,
              hourExtFirst: this.form.hourExtFirst,
              hourExtSecund: this.form.hourExtSecund,
              userLogado : this.usuario      
            }           
            setDoc(newCityRefBackup, data)           
            .then(()=>{})
            .catch((err)=>console.log(err))   
    } 
  }     
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,500;0,800;1,100&family=Prompt:ital,wght@0,100;0,200;0,400;0,700;0,800;1,500;1,900&display=swap');
input[type='checkbox']{
  display: none;
}  
.anime__full{
    animation: anima 0.8s forwards ease-in-out;
    width: 100%;
    position: fixed;
    top:-100px;
  }
  
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

  /* pop_up */
  /* .notification_popup{
    display: none;
    flex-direction:column;
    align-items: center; 
    justify-content: center; 
    position: absolute; 
    top: -10px; 
    left:0; 
    text-align: c0enter; 
    width:100%;
  }
  
  .notification_txt{
    background-color: #f00;
    width: 400px; 
    height: auto; 
    border-radius: 8px;
    padding: 15px;    
  }

  .notification_txt span{
    font-family: Roboto;
    font-size: 1rem;
    color: #fff;     
  }

  .notification_txt span::before{
    content: " \1F605";
    font-family: Roboto;
    font-size: 2.1rem;
    color: #fff;
    padding-right: 5px;
  }

  .arrow_box{
    display:flex;
    justify-content: end;
    width: 400px;
  }
  
  .arrow_box div{
    background-color: #f00;
    width: 25px;
    height: 25px;
    margin-right: 30px;
    transform: rotate(45deg);
    position: relative;
    top:15px;
  } */
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
    transition: all 3s;
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
    display: none;    
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
  .checked::after {
    content: "";
    position: absolute;
    background-image: url('../assets/check.png');
    background-size: cover;
    right: 5px;
    width: 25px;
    height: 25px;
    color: #0ff;
    
     
   
  }
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

.msgErroData{
  margin-top: 2px;
  border-radius: 3px;
  width:38%;
  color:rgb(255, 255, 255);
  background-color: #f51f1f;
  padding: 0 5px;  
}
  
 
  @media screen and (max-width:640px) {
    .wood::before{
      background-color: transparent;
    }
    .Poppins{
      font-size: 1.5em;
    }
    .msgErroData{
      margin-top: 2px;
      border-radius: 3px;
      width:100%;
      color:rgb(255, 255, 255);
      background-color: #f51f1f;
      padding: 0 5px; 
      font-size: .9em; 
    }    
  }
  @media screen and (min-width:640px) and (max-width: 1901px) {
   
    .msgErroData{
      margin-top: 2px;
      border-radius: 3px;
      width:100%;
      color:rgb(255, 255, 255);
      background-color: #f51f1f;
      padding: 0 5px; 
      font-size: .9em;       
  }
}
  
</style>
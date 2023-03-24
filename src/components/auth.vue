<template>
    <div id="loading">
      <div class="load-fill flex justify-center items-center h-screen">
        <div class="load flex flex-col justify-center items-center w-56 h-56 border rounded bg-gray-50">
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
            <div class=" flex items-center justify-end  m-1 w-full sm:w-9/12 md:w-7/12 lg:w-6/12 xl:w-5/12 2xl:w-3/12 ">
              <div>
                <div class="flex justify-between items-center sm:bg-Orange-200 w-full  ">
                  <div>
                    <p class="sm:bg-Orange-600 w-4 h-12 ">&nbsp;</p>
                  </div>
                  <div>
                    <h1 class="text-sm sm:text-base font-thin px-2">Olá<span class="font-bold text-red-600 px-1 ">{{ this.usuario }}</span> 
                      Seja Bem Vindo(a)
                    </h1>
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
                <h1 class="text-center Poppins text-Sky-600 ">
                  Cadastro de Eventos
                </h1>
              </div>
              <div class="mx-6 mb-6">
                <label class="flex opacity-70 text-lg " for="nameConnect">Eventos Agendados</label>
                 <DatePicker :attributes="attributes" is-expanded :timezone="timezone" locale="pt-BR" :mask ="masks" :first-day-of-week="2" />
              </div>
              <!-- formulario de arquivos logado -->
              <div  class="space-y-4 ml-2 font-thin text-lg mr-1 px-4 ">
                <form @submit.prevent="clicar(), backUp()" class="space-y-6 ">
                  <div>               
                    <label class="flex opacity-70 " for="nameConnect"> Nome do Colaborador: <p class="text-red-500 ml-1 font-extrabold ">*</p> </label>
                    <input placeholder=" Nome do Colaborador" required type="text" id="nameConnect" v-model="form.nome" class="border shadow-sm  w-full rounded-md" />
                  </div>                  
                  <div>
                    <div>
                      <label   for="data" class="flex opacity-70">Data do Evento:<p class="text-red-500 ml-1 font-extrabold">*</p></label> 
                      <input  type="date" ref="datanew" name="" id="data" v-model="form.dataNew" class="px-2 border shadow-sm rounded-md mr-2  ">
                    </div>
                  </div>
                    <!-- Horário do Evento -->
                  <div v-if="evExtOld === true">
                    <div>                      
                      <label class="flex opacity-70"  for="hora">Horário do Evento:<p class="text-red-500 ml-1 font-extrabold">*</p> </label>                      
                      <div class=" sm:flex md:justify-start lg:justify-start xl:justify-start 2xl:justify-start  sm:justify-center sm:items-center space-x-1">
                        <select @change="getDataNew" name="" id="hora" class="border rounded-md w-auto"  v-model="form.horariosFull" required>                          
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
                        <span class=" bg-red-700 rounded-full border border-red-600 text-xs text-red-100 px-2 cursor-pointer" 
                          title="Atenção colaboradores!!! Cuidado para não marcar em horários de outros seguimentos.">
                          ?
                        </span>
                      </div>                    
                    </div>
                  </div>
                  <!-- Seleção da Situação -->
                  <div>
                      <label class="flex opacity-70"  for="action">Local ou Situação:<p class="text-red-500 ml-1 font-extrabold">*</p> </label>
                      <select id="action" name="action" v-model="form.situacao" class="border w-full rounded-md select-after" required >
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
                      </select>
                  </div> 
                 
                  <!-- SETOR -->
                  <div>
                    <label class="flex opacity-70" for="setor">Função ou Setor do Colaborador:<p class="text-red-500 ml-1 font-extrabold">*</p> </label>
                    <select   id="setor" name="setor" v-model="form.responsavel" class="border w-full rounded-md" required >
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
                    <select  id="seg" name="seg" v-model="form.seguimento" class="border w-full rounded-md" title="Selecione o setor ou seguimento relacionados ao evento. " required >
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
                  <div @click.once="loading" class="border-gray-800 w-full ">
                    <label class="flex opacity-70" for="motivo">Descrição do Evento:<p class="text-red-500 ml-1 font-extrabold">*</p> </label>
                    <textarea                    
                      @click.once="getDataNew()"
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
                        title="Enviar formulário"
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
        <Footer/>
      </div>
    </div>
</template>
<script>
import {getAuth, onAuthStateChanged } from "firebase/auth";
import db from "../components/db/dbConfig";
import {  collection,  getFirestore, addDoc, getDocs } from "firebase/firestore";
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
          sHour:null
        }
      }
            
    },   
    async created(){
      //  APRESENTA NA TELA O USUÁRIO CONECTADO
      db;
      const dbuser = getAuth();
          onAuthStateChanged(dbuser, (user) => {     
            this.usuario = user.email   
            // if(user.displayName === null){
            //     this.usuario = user.email
            // }else{
            //   this.usuario = user.displayName
            // }           
      })        
      this.getDataNew()
    },

    watch:{
      'form.dataNew'(value){
        if(value){
          this.dataUser()
        }
      }
    },      
    methods: {
    async loading(){
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

    async loadLopping(){
      const loader = document.getElementById('loading')      
        loader.style.display = "none"
          setTimeout(()=>{
            this.$swal({
              icon: "error",
              title: "Oops...",
              text: "Data ou Horário já em uso!",
              showConfirmButton: false,
              timer: 3000,
              showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }                  
            });
          },2000)
    },     

    async getDataNew() { 
    const dbUser = getFirestore();
    const querySnapshot = await getDocs(collection(dbUser, "usuarios"));
      querySnapshot.forEach((doc) => {
      this.attributes[0].dates.push(doc.data().dataNew)
      const hFull = doc.data().horariosFull;
      const sitUser = doc.data().situacao;
      const getFull = doc.data().dataNew;
      this.postDataBlock.push(getFull)

    //BLOQUEAR DATAS, HORÁRIOS E LOCAIS REPETIDOS
    if (this.form.dataNew === getFull && this.form.horariosFull === hFull && this.form.situacao === sitUser ) {
      this.loadLopping()
      setTimeout(() => {
        this.$router.go({name:'auth'})
      }, 2500)              
                
    //LAÇO DE REPETIÇAO PARA BLOQUEAR TODO O SEGUIMENTO, CASO ALGUÉM USO A DATA FULL        
    } else if (this.form.dataNew === getFull && hFull === '07h10-12h' && this.form.situacao === sitUser) {
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
        this.loadLopping()
        setTimeout(() => {
          this.$router.go({name:'auth'})
        }, 2500)
      } 
          
      } else if (this.form.dataNew === getFull && hFull === '12h30-17h' && this.form.situacao === sitUser) {
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
          this.loadLopping()
          setTimeout(() => {
            this.$router.go({name:'auth'})
          }, 2500);
        } 

      } else if (this.form.dataNew === getFull && this.form.situacao === sitUser &&  this.form.horariosFull === '12h30-17h') {
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
            this.loadLopping()
            setTimeout(() => {
              this.$router.go({name:'auth'})
            }, 2500);
          } 

      } else if (this.form.dataNew === getFull && this.form.horariosFull === '07h10-12h' && this.form.situacao === sitUser) {
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
          this.loadLopping()
          setTimeout(() => {
            this.$router.go({name:'auth'})
          }, 2500);
        } 

      /********************************************************** */
      /*REGRAS DE BLOQUEIO PARA HORÁRIOS ESPECIAIS - ANOS FINAIS*/ 
      /************************************************************ */
      } else if (this.form.dataNew === getFull && hFull === '08h40-09h25' && this.form.situacao === sitUser) {
          if (this.form.horariosFull === '09h-09h45')
          {
            this.loadLopping()
            setTimeout(() => {
              this.$router.go({name:'auth'})
            }, 2500);
          }           
      } else if (this.form.dataNew === getFull && hFull === '09h-09h45' && this.form.situacao === sitUser) {
          if (this.form.horariosFull === '08h40-09h25' || this.form.horariosFull === '09h25-10h10' )
          {
            this.loadLopping()
            setTimeout(() => {
              this.$router.go({name:'auth'})
            }, 2500);
          }             
      } else if (this.form.dataNew === getFull && hFull === '09h25-10h10' && this.form.situacao === sitUser) {
          if (this.form.horariosFull === '09h45-10h30')
          {
            this.loadLopping()
            setTimeout(() => {
              this.$router.go({name:'auth'})
            }, 2500);
          }           
      } else if (this.form.dataNew === getFull && hFull === '09h45-10h30' && this.form.situacao === sitUser) {
          if (this.form.horariosFull === '09h25-10h10')
          {
            this.loadLopping()
            setTimeout(() => {
              this.$router.go({name:'auth'})
            }, 2500);
          } 

      /********************************************************** */
      /*FIM DAS REGRAS DE BLOQUEIO PARA HORÁRIOS ESPECIAIS - ANOS FINAIS*/ 
      /************************************************************ */

      //BLOQUEIOS DO ANOS INICIAIS - MUITOS HORÁRIOS PICADOS
      } else if (this.form.dataNew === getFull && hFull === '14h05-14h50' && this.form.situacao === sitUser) {
        if ( this.form.horariosFull === '14h25-15h10') 
        {            
          this.loadLopping()
          setTimeout(() => {
            this.$router.go({name:'auth'})
          }, 2500);
        } 
      } else if (this.form.dataNew === getFull && hFull === '14h25-15h10' && this.form.situacao === sitUser) {
          if ( this.form.horariosFull === '14h05-14h50') 
          {               
            this.loadLopping()                
            setTimeout(() => {
              this.$router.go({name:'auth'})
            }, 2500);
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
    // FIM FUNÇÃO BLOQUEIO

    clicado(){
      this.disabledUser = !this.disabledUser;
    },

    //  FUNÇÃO DE VALIDAÇÃO DE CAMPOS - FUNCIONANDO
    async pegarData(){},

    async clicar(){
    try{   
      const dbUser = getFirestore();
      const authentication = getAuth();
      const userConnected = authentication.currentUser.uid; 
      const usuarioDb = {
        user_id:userConnected,
        nome:this.form.nome,
        dataAtual:this.fullData,
        diretora:this.form.diretora,
        horariosFull:this.form.horariosFull,
        responsavel: this.form.responsavel,
        situacao: this.form.situacao,
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
      
      //  MENSAGEM APRESENTADA ANTES DE GRAVAR NO BANCO DE DADOS        
      this.$swal({
        title: 'As informações estão completas?',
        showCancelButton: true,
        confirmButtonText: 'Salvar'        
      }).then((result) => {
          if (result.isConfirmed) {
            addDoc(collection(dbUser, "usuarios"), usuarioDb)
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
    // BACKUP DO BANCO DE DADOS.
    async backUp(){       
      const dbUser = getFirestore();
      const authentication = getAuth();
      const userConnected = authentication.currentUser.uid;
      const usuarioBackup = {
        user_id:userConnected,
        nome:this.form.nome,
        dataAtual:this.fullData,
        diretora:this.form.diretora,
        horariosFull:this.form.horariosFull,
        responsavel: this.form.responsavel,
        situacao: this.form.situacao,
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
        userLogado : this.usuario,
        status: "backup"
      }
      await addDoc(collection(dbUser, "backup"), usuarioBackup)
      .then(()=>{})
      .catch((err)=>console.log(err))   
    } 
  }     
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,500;0,800;1,100&family=Prompt:ital,wght@0,100;0,200;0,400;0,700;0,800;1,500;1,900&display=swap');
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
  @media screen and (max-width:640px) {
      .wood::before{
      background-color: transparent;
    }
    .Poppins{
      font-size: 1.5em;
    }
  }
</style>
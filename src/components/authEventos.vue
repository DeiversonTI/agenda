<template>
    <div>
        <div v-if="textDoc===true" class="anime__full">
            <div class="w-80 sm:mt-1 flex justify-center items-center mx-auto h-8 bg-red-500 py-8 sm:rounded-md text-white ">{{textError}}</div>
        </div>        
      <div class=" w-full h-auto">
        <div class=" bg-gray-100 w-full">
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
            <div class=" bg-gray-50 sm:container sm:mx-auto sm:w-4/5 md:container md:mx-auto md:w-4/5 lg:container lg:mx-auto lg:w-3/5  xl:mx-auto xl:container  xl:w-7/12 xl:rounded-xl xl:border-2 2xl:mx-auto 2xl:container  2xl:w-6/12 2xl:rounded-md 2xl:border  flex flex-col justify-start">
              <!-- Cabeçalho do formulário -->
              <div class="mb-4 mt-8">
                <h1 class="text-center Poppins text-Sky-600 ">
                  Cadastro de Eventos
                </h1>
              </div>
              <!-- formulario de arquivos logado -->
              <div class="space-y-4 ml-2 font-thin text-lg mr-1 px-4 ">
                <form @submit.prevent="clicar()" class="space-y-6 ">
                  <!-- Data do Evento-->
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
                      <div class="sm:flex md:justify-start lg:justify-start xl:justify-start 2xl:justify-start  sm:justify-center sm:items-center space-x-1">
                        <select @change="getDataNew" name="" id="hora" class="border rounded-md w-auto"  v-model="form.horariosFull" required>
                          <option class="text-lg bg-red-600 text-bold text-white ">Fundamental II</option>
                          <option value="07h10-07h55">07h10-07h55</option>
                          <option value="07h55-08h40">07h55-08h40</option>
                          <option value="08h40-9h25">08h40-9h25</option>
                          <option value="09h25-10h10">09h25-10h10</option>
                          <option value="09h45-10h30">09h45-10h30</option>
                          <option value="10h30-11h15">10h30-11h15</option>
                          <option value="11h15-12h">11h15-12h</option>
                          <option value="12h-12h45">12h-12h45</option>
                        
                          <option class="text-lg bg-red-600 text-bold text-white">Fundamental I</option>
                          <option value="13h15-14h">13h15-14h</option>
                          <option value="14h-14h45">14h-14h45</option>
                          <option value="14h25-15h10">14h25-15h10</option>
                          <option value="14h20-15h15">14h20-15h15</option>
                          <option value="14h20-15h15">15h05-15h50</option>
                          <option value="15h10-15h55">15h10-15h55</option>
                          <option value="15h15-16h">15h15-16h</option>
                          <option value="16h-16h45">16h-16h45</option>
                          
                          <option class="text-lg bg-red-600 text-bold text-white">Educação Infantil</option>
                          <option value="12h30-13h15">12h30-13h15</option>
                          <option value="13h15-14h">13h15-14h</option>
                          <option value="14h-14h25">14h-14h25</option>
                          <option value="14h25-15h10">14h25-15h10</option>
                          <option value="15h10-15h55">15h10-15h55</option>
                          <option value="15h55-16h40">15h55-16h40</option>

                          <option class="text-lg bg-red-600 text-bold text-white">Horários de Eventos</option>
                          <option value="07h10-12h">07h10-12h</option>
                          <option value="12h30-17h">12h30-17h</option>
                          <option value="17h30-21h">17h30-21h</option>
                          <option value="18h-21h">18h-21h</option>
                        </select>
                      </div>
                    </div>
                  </div>


                  <!-- ******************************************************* -->

                  <!-- ARÉA RESTRITA A EVENTOS EXTERNOS -->
                  <div v-if="evExt === true" class="bg-Cyan-200 pl-1 space-y-2 rounded-md py-2 pr-1 ">
                    <div>
                      <label class="flex opacity-70"  for="hora2">Horário dos Eventos Externos:</label>
                      <div class="flex gap-2">
                        <div>
                          <span>Inicio </span><input class="px-2 border shadow-sm rounded-md mr-2" type="time" id="hora2" v-model="form.hourExtFirst" > 
                        </div>
                        <div>
                          <span>Término </span><input class="px-2 border shadow-sm rounded-md mr-2" type="time" id="hora3" v-model="form.hourExtSecund" >
                        </div>
                      </div>
                    </div>
                    <div>
                      <label class="flex opacity-70"  for="hora2">Local do Evento:</label>
                      <select id="action" name="action" @click.prevent="getDataNew()" v-model="form.evExternos" class="border w-full rounded-md mr-1">
                        <option value="Salão">Salão</option>
                        <option value="Area Gourmet">Aréa Gourmet</option>
                        <option value="Piscina">Piscina</option>
                        <option value="Parquinho">Parquinho</option>                        
                        <option value="Outros">Outros</option>                        
                        <option value="Salão com Aréa Gourmet">Salão + Aréa Gourmet</option>
                        <option value="Salão, Aréa Gourmet e Piscina">Salão + Aréa Gourmet + Piscina</option>
                        <option value="Salão, Aréa Gourmet, Piscina e Parquinho">Salão + Aréa Gourmet + Piscina + Parquinho</option>
                      </select>
                     
                    </div>
                  </div>


                  <!-- ******************************************************* -->



                  <!-- Seleção da Situação -->
                  <div v-if="evExtOld2 === true">
                    <div>
                      <label class="flex opacity-70"  for="action">Local ou Situação:<p class="text-red-500 ml-1 font-extrabold">*</p> </label>
                      <select   @click.prevent="getDataNew()" id="action" name="action" v-model="form.situacao" class="border w-full rounded-md" required >
                      <!-- <select v-if="getDat === true" @mouseout="pegarData()" id="action" name="action" v-model="form.situacao" class="border-2 border-gray-400 w-full rounded-md" required > -->
                        <option value="Salão">Salão</option>
                        <option value="Jardim Sensorial">Jardim Sensorial</option>
                        <option value="Agendamentos">Agendamentos</option>
                        <option value="Ranchinho de Maria">Ranchinho de Maria</option>
                        <option value="Área Gourmet">Área Gourmet</option>
                        <option value="Sala_Informatica">Sala Informática</option>
                        <option value="Outros">Outros</option>
                        <option value="Piscina">Piscina</option>
                        <option value="Quadra">Quadra</option>
                        <option value="Rancho">Rancho</option>
                        <option value="Inspetor">Inspetor</option>

                      </select>
                    </div> 
                  </div>
                  <!-- <Situacao/> -->

                  <!-- Setor -->
                  <div>
                    <label class="flex opacity-70" for="setor">Função ou Setor do Colaborador:<p class="text-red-500 ml-1 font-extrabold">*</p> </label>
                    <select  id="setor" name="setor" v-model="form.responsavel" class="border w-full rounded-md" required >
                      <option value="Diretoria">Diretora</option>
                      <option value="Assistente-Social">Assistente-Social</option>
                      <option value="Coordenadora Fundamental-I">Coordenadora Fundamental-I</option>
                      <option value="Coordenadora Fundamental-II">Coordenadora Fundamental-II</option>
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
                  <!-- <Setor/> -->

                  <!-- Seleção de Seguimento -->
                  <div>
                    <label class="flex opacity-70" for="seg">Segmento ou Setor Correspondente:<p class="text-red-500 ml-1 font-extrabold">*</p> </label>
                    <select  id="seg" name="seg" v-model="form.seguimento" class="border w-full rounded-md" title="Selecione o setor ou seguimento relacionados ao evento. " required >
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
                      class=" border w-full rounded-md pl-2 pt-1" 
                      v-model="form.motivo"
                      required>
                    </textarea>
                  </div>
                  <!-- <Motivo/> -->

                  <!-- link -->
                  <div>
                    <label class="opacity-70" for="linkEnviar">Link: </label>
                    <input
                      type="text"
                      name="linkEnviar"
                      id="linkEnviar"
                      class="  px-1   border  w-full rounded-md"
                      v-model="form.link"
                    />
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
import db from "./db/dbConfig";
import {  collection,  getFirestore, addDoc, getDocs } from "firebase/firestore";
import Logado from "./compLogado/userLogado.vue"
import Footer from "./footer.vue"

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
            // textDoc: true,
            // textError: "erro messangem!",
            evExt:false,
            evExtOld:true,
            evExtOld2:true,
            usr: null,
            

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
                  if(user.displayName === null){
                     this.usuario = user.email
                  }else{
                    this.usuario = user.displayName
                  }           
            });
           
            // CALCULO PARA DESCOBRIR 4 horas
            
            this.eventNew()
            
            
            
      },
  
     methods: {
      eventNew(){
        const dbUser = getAuth()
          onAuthStateChanged(dbUser, (user) => {                
            if(user.email === "compras@ersvp.g12.br"){
                this.evExt = true
                this.evExtOld = false
                this.evExtOld2 = false
            }
          })
          this.getDataNew()
      },
     
       async getDataNew() { 
        const dbUser = getFirestore();
         const querySnapshot = await getDocs(collection(dbUser, "eventos"));
            querySnapshot.forEach((doc) => {

            // ***********************************************************
            // BLOQUEIA DATAS NOS PERÍODOS ALEATÓRIOS
            // ***********************************************************
            let hourNew = doc.data().hourExtFirst
            if (hourNew) {
              let hourNewSplit = hourNew.split(":") 
              let h = ((Number(hourNewSplit[0]) * 60) + Number(hourNewSplit[1]))
              // console.log("hourNew", h)
              this.form.hHour = h
            }   

             let secNew = doc.data().hourExtSecund
            if (secNew) {
              let secNewSplit = secNew.split(":") 
              let s = ((Number(secNewSplit[0]) * 60) + Number(secNewSplit[1]))
              // console.log("SecNew", s)
              this.form.sHour = s
            }

            let sHour = this.form.sHour
            let hHour = this.form.hHour
            let hsTotal = hHour+sHour
            // console.log("TOTAL DE TUDO", hsTotal)

              let convertHour = this.form.hourExtFirst
              let h = convertHour.split(":")
               let convertSec = this.form.hourExtSecund
              let s = convertSec.split(":")
              let getHour = ((Number(s[0]) *60 ) + (Number(s[1]))) + ((Number(h[0]) *60 ) + (Number(h[1])))
              // let getHour = ((Number(h[0]) *60 ) + (Number(h[1])))
              // console.log("DENTRO DO H", getHour)
 
          

            //ESSE BLOCO PEGA O INTERVALO hHour DA DATA EX.: 08:00 ATÉ 10:00, ELE BLOQUEIA TUDO ENTRE ESSES HORÁRIOS 
            for (let i = getHour; i < hsTotal; i++) {
              console.log("TUDO DO I", i)
              
              // let convertHour = this.form.hourExtFirst
              // let h = convertHour.split(":")
              //  let convertSec = this.form.hourExtSecund
              // let s = convertSec.split(":")
              // let getHour = ((Number(s[0]) *60 ) + (Number(s[1]))) + ((Number(h[0]) *60 ) + (Number(h[1])))
              // // let getHour = ((Number(h[0]) *60 ) + (Number(h[1])))
              // console.log("DENTRO DO H", getHour)

              // let convertSec = this.form.hourExtSecund
              // let s = convertSec.split(":")
              // let getSec = ((Number(s[0]) *60 ) + (Number(s[1])))
              // // console.log("DENTRO DO S", getSec)
              
              if( i ){
                alert("Ok! Você está dentro do INTERVALO DE HORÁRIO!")
                return false
              }else if(i < getHour){
                console.log("Não passou")
              }
              // else if(i === getSec){
              //   alert("Dentro do OUTRO Intervalo")
              //   return false
              // }
            }

            // for (let x = sHour; x < hHour; x++) {
            //   console.log("TUDO DO X", x)
              
            //   // let convertHour = this.form.hourExtFirst
            //   // let h = convertHour.split(":")
            //   // let getHour = ((Number(h[0]) *60 ) + (Number(h[1])))
            //   // // console.log("DENTRO DO H", getHour)

            //   let convertSec = this.form.hourExtSecund
            //   let s = convertSec.split(":")
            //   let getSec = ((Number(s[0]) *60 ) + (Number(s[1])))
            //   // console.log("DENTRO DO S", getSec)
              
            //   // if( i === getHour){
            //   //   alert("Ok! Você está dentro do INTERVALO DE HORÁRIO!")
            //   //   return false
            //   // }
            //   if(x === getSec){
            //     alert("Dentro do OUTRO Intervalo")
            //     return false
            //   }

              
            // }


            // ESSE BLOCO DE COMANDO PEGA AS DATAS REPETIDAS      
            let h1 = this.form.hourExtFirst
            let h2 = this.form.hourExtSecund
            let h3 = h1.split(":")
            let h3m = h2.split(":")
            let h4 = ((Number(h3[0]) *60) + Number(h3[1])) + ((Number(h3m[0]) *60) + Number(h3m[1]))
            // console.log("TUDO DO H4", h4)
            
            if (h4 === hsTotal) {
              alert("Horário já marcado! BLOQUEADO!")
              
            } else {
              console.log("Tudo Ok! Pode passar...")
            }

            // ***********************************************************
            // FIM DO BLOQUEIO DAS DATAS NOS PERÍODOS ALEATÓRIOS
            // ***********************************************************

            // const hFull = doc.data().horariosFull;
            // const sitUser = doc.data().situacao;
            // const getFull = doc.data().dataNew;
            // console.log(doc.data())
      
          //BLOQUEAR DATAS , HORÁRIOS E LOCAIS REPETIDOS
          // if (this.form.dataNew === getFull && this.form.horariosFull === hFull && this.form.situacao === sitUser ) {
          //     this.textDoc = true
          //     this.textError = "Desculpe! Horários e Datas em uso!"
          //   // alert(`Não foi possível reservar a data: ${getFull}, pois os horários ${hFull} e o local: ${sitUser}, já estão em uso! `)
          //   setTimeout(() => {
          //     this.$router.go({name:'auth'})
          //   }, 2500);
                
                  
          // //LAÇO DE REPETIÇAO PARA BLOQUEAR TODO O SEGUIMENTO, CASO ALGUÉM USO A DATA FULL        
          // } else if (this.form.dataNew === getFull && hFull === '07h10-12h' && this.form.situacao === sitUser) {
          //     if
          //     (
          //       this.form.horariosFull === '07h10-07h55' ||
          //       this.form.horariosFull === '07h55-08h40' ||
          //       this.form.horariosFull === '08h40-9h25' ||
          //       this.form.horariosFull === '09h25-10h10' ||
          //       this.form.horariosFull === '09h45-10h30' ||
          //       this.form.horariosFull === '10h30-11h15' ||
          //       this.form.horariosFull === '11h15-12h' ||
          //       this.form.horariosFull === '12h-12h45'
          //     )
          //     {
          //       // alert('Desculpa! Infelizmente todo os horarios já estão reservados! Escolha outro!')
          //     this.textDoc = true
          //     this.textError = "Desculpe! Horários e Datas em uso!"
          //       setTimeout(() => {
          //       this.$router.go({name:'auth'})
          //     }, 2500);
          //     } 
            
          // } else if (this.form.dataNew === getFull && hFull === '12h30-17h' && this.form.situacao === sitUser) {
          //     if
          //     (
          //       //FUNDAMENTAL I
          //       this.form.horariosFull === '13h15-14h' ||
          //       this.form.horariosFull === '14h-14h45' ||
          //       this.form.horariosFull === '14h25-15h10' ||
          //       this.form.horariosFull === '14h20-15h15' ||
          //       this.form.horariosFull === '15h10-15h55' ||
          //       this.form.horariosFull === '15h05-15h50' ||
          //       this.form.horariosFull === '15h15-16h' ||
          //       this.form.horariosFull === '16h-16h45' ||
          //       //INFANTIL
          //       this.form.horariosFull === '12h30-13h15' ||
          //       this.form.horariosFull === '13h15-14h' ||
          //       this.form.horariosFull === '14h-14h25' ||
          //       this.form.horariosFull === '14h25-15h10' ||
          //       this.form.horariosFull === '15h10-15h55' ||
          //       this.form.horariosFull === '15h55-16h40' 
          //     )
          //     {
          //       // alert('Desculpa! Infelizmente todo os horarios já estão reservados! Escolha outro! - Inf e FundI')
          //     this.textDoc = true
          //     this.textError = "Desculpe! Horários e Datas em uso!"

          //       setTimeout(() => {
          //       this.$router.go({name:'auth'})
          //     }, 2500);
          //     } 
          // } else if (this.form.dataNew === getFull && this.form.situacao === sitUser &&  this.form.horariosFull === '12h30-17h') {
          //     if (
          //      //FUNDAMENTAL I
          //     hFull === '13h15-14h' ||
          //     hFull === '14h-14h45' ||
          //     hFull === '14h25-15h10' ||
          //     hFull === '14h20-15h15' ||
          //     hFull === '15h10-15h55' ||
          //     hFull === '15h05-15h50' ||
          //     hFull === '15h15-16h' ||
          //     hFull === '16h-16h45' ||
          //     //INFANTIL
          //     hFull === '12h30-13h15' ||
          //     hFull === '13h15-14h' ||
          //     hFull === '14h-14h25' ||
          //     hFull === '14h25-15h10' ||
          //     hFull === '15h10-15h55' ||
          //     hFull === '15h55-16h40' 
          //     )
          //     {
          //       //  if(this.textDoc === true){
          //     this.textDoc = true
          //     this.textError = "Desculpe! Horários e Datas em uso!"
          //         // }
          //       // alert('Desculpa! Horários e datas já em uso!')

          //       setTimeout(() => {
          //       this.$router.go({name:'auth'})
          //       }, 2500);
          //     } 
          // } else if (this.form.dataNew === getFull && this.form.horariosFull === '07h10-12h' && this.form.situacao === sitUser) {
          //   if
          //   (
          //     hFull === '07h10-07h55' ||
          //     hFull === '07h55-08h40' ||
          //     hFull === '08h40-09h25' ||
          //     hFull === '09h25-10h10' ||
          //     hFull === '09h45-10h30' ||
          //     hFull === '10h30-11h15' ||
          //     hFull === '11h15-12h' ||
          //     hFull === '12h-12h45'
          //   )
          //   {
          //     // alert('Desculpa! Datas em uso! - FundII')
          //     this.textDoc = true
          //     this.textError = "Desculpe! Horários e Datas em uso!"

          //     setTimeout(() => {
          //     this.$router.go({name:'auth'})
          //   }, 2500);
          //   } 
            
          // } else if (this.form.dataNew === getFull && hFull === '09h25-10h10' && this.form.situacao === sitUser) {
          //   if (this.form.horariosFull === '09h45-10h30')
          //   {
          //     // alert('Desculpa! Data em uso! - FundII ')
          //     this.textDoc = true
          //     this.textError = "Desculpe! Horários e Datas em uso!"

          //     setTimeout(() => {
          //     this.$router.go({name:'auth'})
          //   }, 2500);
          //   } 
            
          // } else if (this.form.dataNew === getFull && hFull === '09h45-10h30' && this.form.situacao === sitUser) {
          //   if (this.form.horariosFull === '09h25-10h10')
          //   {
          //     // alert('Desculpa! Data em uso! - FundII ')
          //     this.textDoc = true
          //     this.textError = "Desculpe! Horários e Datas em uso!"

          //     setTimeout(() => {
          //     this.$router.go({name:'auth'})
          //   }, 2500);
          //   } 
     
           
        })
       
       },
         
        
      // FUNÇÃO DE BLOQUEIO DA DATA ANTERIOR E DATA ATUAL PARA CADASTRO
      //  dataUser(){
      //   // const dataFull = new Date();
      //   // const dataDia = dataFull.getDate();
      //   // const mesDia = dataFull.getMonth()+1;
      //   // const anoFull = dataFull.getFullYear();
      //   // const fullData = mesDia+'/'+dataDia+'/'+anoFull;
      //   // this.anoFull = fullData;
      //   const newData = new Date().toDateString();
      //   // console.log(fullData)
      //   const dataNew = this.form.dataNew
            
      //    if(dataNew <= newData){
         
      //        this.$swal({
      //          icon:'warning',
      //          title:'Escolha a Data Recente ou Posterior!',
            
      //        })
                        
      //    }
      //   //  else if(dataNew === fullData){
         
      //   //      this.$swal({
      //   //        icon:'error',
      //   //        title:'Marcar com 12hs de antecedência!',
                    
      //   //      })
            
      //   //  }
      //  },
      // FIM FUNÇÃO BLOQUEIO
      //   clicado(){
      //     this.disabledUser = !this.disabledUser;
      // },
      //  FUNÇÃO DE VALIDAÇÃO DE CAMPOS - FUNCIONANDO
    
     async clicar() {
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
          // CONTEUDO DA TESOURARIA - EVENTOS EXTERNOS
          evExternos: this.form.evExternos,
          hourExtFirst: this.form.hourExtFirst,
          hourExtSecund: this.form.hourExtSecund,

        }
       
      
      //  MENSAGEM APRESENTADA ANTES DE GRAVAR NO BANCO DE DADOS
        
       this.$swal({
        title: 'As informações estão completas?',
        showCancelButton: true,
        confirmButtonText: 'Salvar',
        
      }).then((result) => {
          if (result.isConfirmed) {
          addDoc(collection(dbUser, "eventos"), usuarioDb)
       .then(()=>{
        setTimeout(() => {
            this.$router.replace({name: 'usertela'})
             
         }, 1500);
          })
          console.log("Salvo")
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
     async backUp() {
       
          const dbUser = getFirestore();
          const authentication = getAuth();
          const userConnected = authentication.currentUser.uid; 
          
          
          const usuarioBackup = {
              user_id:userConnected,
              nome:this.form.nome,
              dataAtual: this.fullData,
              responsavel: this.form.responsavel,
              situacao: this.form.situacao,
              seguimento:this.form.seguimento,
              motivo: this.form.motivo,
              link: this.form.link,
              data:new Date().toLocaleString(),
              horaEventos:this.form.horaEventos,
              horariosFull:this.form.horariosFull,
              dataNew:this.form.dataNew,
              evExternos: this.form.evExternos,
              hourExtFirst: this.form.hourExtFirst,
              hourExtSecund: this.form.hourExtSecund,
              
        }

        await addDoc(collection(dbUser, "backupEventos"), usuarioBackup)
    
      }
       //  FIM DO BACKUP DO BANCO DE DADOS
      //  **************************************************************************//
      
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

  @keyframes anima {
    to{
      top:0px;
      /* opacity:1; */
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
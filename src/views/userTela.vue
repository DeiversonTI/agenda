<template>
<div class="relative">
  <div class="w-full footer_page bg-gradient-to-l from-white via-Sky-100 to-white ">
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
            </div>
        </div>
        <div class="sm:bg-Orange-200 h-12 flex justify-center items-center">
          <Logado />
        </div>
      </div>
    </div>
      <!-- botão de logout -->    
      <!-- Navbar -->   
    <section>
      <!-- body aplicação -->
      <div class="w-full  bg-gray-50">           
            <div  class="  bg-gradient-to-l from-white via-Sky-100 to-white   2xl:justify-center  flex 2xl:flex-col 2xl:items-center flex-col ">
              <div class="flex flex-col w-11/12 md:w-8/12 2xl:w-1/2 mx-auto container ">
                <div class="pt-4 pb-0">
                  <h1 class="text-Sky-600 Poppins text-center">Agendamentos </h1>
                </div>    
                <div v-if="this.usuario === 'visitante@ersvp.g12.br'"  class="py-2"></div> 
                
                <div v-else class="py-2 flex  justify-between items-center">
                  <div v-if="this.usuario !== 'informatica@ersvp.g12.br'">
                    <span></span>
                  </div>
                  <div v-else>
                    <div v-if="selected_ckecked.length == 0" >
                        <span></span>
                    </div>
                    <div v-else class="box__del_all sm:w-52 w-36 bg-red-600 py-3 px-1 text-center text-xs md:py-3 md:text-base rounded text-white">
                      <button class="" @click.prevent="delAll()">Apagar Selecionados</button>
                    </div>                    
                  </div>
                 
                  <!-- <div>
                    
                  </div>                                  -->
                  <router-link to="/Auth">
                  <div title="Adicionar novo agendamento" class="bg-green-500  sm:w-52 w-36 float-right rounded-sm  sm:rounded-md flex justify-between items-center">    
                    <span class="pl-2 text-gray-50 text-xs sm:text-base">Adicionar Novo</span>         
                    <span class="bg-green-600 text-gray-50 py-2.5 sm:py-2 px-4 sm:px-4 rounded-r-sm sm:rounded-r-lg text-sm sm:text-2xl">+</span>                    
                  </div>
                </router-link>
                </div>                
                <div class="flex justify-between items-center pl-2 px-2 py-2 bg-Sky-300 rounded-md ">                  
                  <!--SEARCH-->
                  <!-- <div class="flex justify-start items-center  sm:w-4/6 md:w-96  "> -->
                  <div class="flex justify-start items-center  sm:w-4/6 md:w-3/4  ">
                    <!-- <button class=" bg-red-600 p-1 md:p-3 md:text-base text-xs rounded mr-2 text-white" @click.prevent="delAll()">Apagar Selecionados</button> -->
                    <svg xmlns="http://www.w3.org/2000/svg" class=" h-5 w-5 sm:h-7 sm:w-7 mr-2 text-gray-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input v-model="search" type="search"  class="  2xl:w-2/3 sm:w-full w-52 pl-4 border-b-2 border-gray-300 rounded place " placeholder="Data, Nome, Local, horário...">
                    
                  </div>
                  <!--SEARCH-->
                  <div>
                      <h1 class="text-xs font-bold text-white"><small>EVENTOS</small>: {{agenda.length}}</h1>                     
                  </div>              
                </div>  
                                         
                <!-- <div v-for="(item, key) in filteredAgendas" :key="key"  class="flex justify-end "></div> -->
              </div>             
              <div v-if="filteredAgendas.length == 0" class=" mb-1 2xl:w-1/2 lg:container lg:mx-auto  lg:w-2/3 w-11/12 mx-auto container flex flex-col mt-2 px-2 py-4  ">
                <div>
                  <p class="font__text">
                    Nenhum Evento criado!
                  </p>
                  <button class="px-4 bg-red-500 text-gray-50 mt-2 rounded" @click="refleshPage()">Reflesh</button>
                </div>
              </div>              
              <div id="ckecked__color" v-else class="bg__color__event mb-1 border border-gray-300 2xl:w-1/2 lg:container lg:mx-auto  lg:w-2/3 w-11/12 mx-auto container flex flex-col mt-2 px-2 py-4  rounded-lg shadow-xl" v-for="agendas, index in filteredAgendas" :key="index" >
                <!-- <div> -->
                  <div v-if="this.usuario !== 'informatica@ersvp.g12.br'" id="ckeck__box">
                      <span></span>                 
                  </div>
                  <div v-else>
                    <input class="cursor-pointer" type="checkbox" id="del_trash" :value="agendas.id" v-model="selected_ckecked" >
                  </div>
                  <ul class="  flex flex-col font-sans text-lg text-gray-900 space-y-1  ">
                    <li class=" font-bold text-lg text-red-600 border-red-300 rounded-md "><span class="text-xl font-bold text-gray-900 ">Dia do Evento: </span> {{agendas.dataNew}}</li>
                    <li class=""><span class="text-xl font-bold">Nome: </span>   {{agendas.nome}} </li>
                    <li class=""><span class="text-xl font-bold">Horário: </span>{{agendas.hourExtFirst }}  {{ agendas.hourExtSecund }}{{ agendas.horariosFull }}</li>              
                    <li class=""><span class="text-xl font-bold">Setor ou Função: </span> {{agendas.responsavel}}</li>                    
                    <li class="flex items-center flex-wrap gap-1"><span class=" flex text-xl font-bold">Local: </span>
                      <p v-if="agendas.salao" class="px-3 bg-Sky-500 mx-1 rounded text-gray-50"> {{agendas.salao}} </p> 
                      <p v-if="agendas.carrinho" class="px-3 bg-Sky-500 mx-1 rounded text-gray-50"> {{agendas.carrinho}} </p> 
                      <p v-if="agendas.piscina" class="px-3 bg-Sky-500 mx-1 rounded text-gray-50"> {{agendas.piscina}} </p>  
                      <p v-if="agendas.gourmet" class="px-3 bg-Sky-500 mx-1 rounded text-gray-50"> {{agendas.gourmet}} </p> 
                      <p v-if="agendas.agenda" class="px-3 bg-Sky-500 mx-1 rounded text-gray-50"> {{agendas.agenda }}</p>  
                      <p v-if="agendas.jardim" class="px-3 bg-Sky-500 mx-1 rounded text-gray-50"> {{agendas.jardim}} </p>    
                      <p v-if="agendas.ranchinho" class="px-3 bg-Sky-500 mx-1 rounded text-gray-50"> {{agendas.ranchinho}} </p>                           
                      <p v-if="agendas.informatica" class="px-3 bg-Sky-500 mx-1 rounded text-gray-50"> {{agendas.informatica}} </p>    
                      <p v-if="agendas.pastoral" class="px-3 bg-Sky-500 mx-1 rounded text-gray-50"> {{agendas.pastoral}} </p>    
                      <p v-if="agendas.ciencias" class="px-3 bg-Sky-500 mx-1 rounded text-gray-50"> {{agendas.ciencias}} </p>    
                      <p v-if="agendas.outros" class="px-3 bg-Sky-500 mx-1 rounded text-gray-50"> {{agendas.outros}} </p>      
                      <p v-if="agendas.quadra" class="px-3 bg-Sky-500 mx-1 rounded text-gray-50"> {{agendas.quadra}} </p>    
                      <p v-if="agendas.rancho" class="px-3 bg-Sky-500 mx-1 rounded text-gray-50"> {{agendas.rancho}} </p>    
                      <p v-if="agendas.inspetor" class="px-3 bg-Sky-500 mx-1 rounded text-gray-50"> {{agendas.inspetor}} </p>                        
                      <p v-if="agendas.ingles" class="px-3 bg-Sky-500 mx-1 rounded text-gray-50"> {{agendas.ingles}} </p>                        
                    </li>                     
                    <li class=""><span class="text-xl font-bold">Segmento: </span> {{agendas.seguimento}}</li>
                    <li class="break-words"><span class="text-xl font-bold">Evento: </span> {{agendas.motivo}}</li>
                    <li class="break-words"><span class="text-xl font-bold ">Link: </span> {{agendas.link}}</li>
                    <li style="margin-top:14px;" class="text-red-600 text-base font-bold text-center bg-Sky-100 shadow-sm rounded-md "><span class=" font-bold text-gray-600  ">Criado em: </span> {{ agendas.data}}</li>        
                      
                    <div>
                      <div class="text-sm" v-if="agendas.userLogado">Criado pelo Usuário: <b class="text-red-500"> {{agendas.userLogado}}</b></div>
                      <div v-else></div>
                    </div>

                    <div v-if="this.usuario == 'visitante@ersvp.g12.br'" class="flex  items-center space-x-1 pt-4"></div>                    
                    <div v-else class="flex  items-center space-x-1 pt-4">
                        <router-link :to="{path : `/edituser/${agendas.id}`}" class="bg-Teal-600 w-28 h-8 text-center text-white rounded">
                          <div title="Atualizar!" >
                            <span class="text-sm md:text-base">Editar</span>
                          </div>
                          </router-link>
                        <div v-if="isClose"  @click.prevent="marcar(agendas.id)" title="Botão de Marcar como Recebido!" class="cursor-pointer bg-Sky-600 w-28 h-8 text-center text-white rounded">
                          <span class="text-sm md:text-base">Visto</span>
                        </div>
                        
                        <div @click.prevent="deletar(agendas.id)" title="Deletar Publicação!" class="cursor-pointer bg-red-600 w-28 h-8 text-center text-white rounded">
                          <span class="text-sm md:text-base">Delete</span>
                        </div>
                        <div class=" py-1 px-2 mt-4 mr-2 w-full  text-right">
                          <div class=" sm:flex items-center justify-end  ">
                            <h1 class="sm:text-lg text-sm font-thin mr-1">Visualizado por: </h1>
                            <div class="pr-2 sm:text-lg text-sm font-bold text-blue-500">{{agendas.info}}</div> 
                            <div class="pr-2 sm:text-lg text-sm font-bold text-green-600">{{agendas.secretaria}}</div> 
                            <div class="pr-2 sm:text-lg text-sm font-bold text-pink-500">{{agendas.coordFI}}</div>
                            <div class="pr-2 sm:text-lg text-sm font-bold text-purple-500">{{agendas.coordFII}}</div>
                            <div class="pr-2 sm:text-lg text-sm font-bold text-green-500">{{agendas.coordEI}}</div>
                            <div class="pr-2 sm:text-lg text-sm font-bold text-yellow-500">{{agendas.social}}</div> 
                            <div class="pr-2 sm:text-lg text-sm font-bold text-red-600">{{agendas.diretoria}}</div>
                            <div class="pr-2 sm:text-lg text-sm font-bold text-Orange-800">{{agendas.diretora}}</div>
                            <div class="text-sm  font-bold text-red-600">{{agendas.tesouraria}}</div>
                          </div>
                          
                        </div>
                    </div>
                  </ul>
                <!-- </div> -->
              </div>
              <div @click="btnTop" id="btn_up">
                <div class="icon"></div>
              </div>
            </div>
      </div>
    </section>
  </div>  
  <div class="relative bottom-0 w-full">  
    <Footer />
  </div>
  </div>
 
</template>

<script>
import Logado from "../components/compLogado/userLogado.vue";
import { getDocs, getDoc,  collection,  getFirestore, doc, deleteDoc, updateDoc, query, orderBy} from "firebase/firestore";
import {getAuth, onAuthStateChanged } from "firebase/auth";
import Footer from "../components/footer.vue"


export default {
  name: "userLogado",
  data() {
    return {
      agenda: [],
      email: '',
      isLoggedIn: false,
      enviar:'',
      search: '',
      nome: false,
      isClose:true,
      usuario: '',
      dataDb:[],      
      trashAll:[],
      selected_ckecked:[],     

      checked:{
        salao: null,
        carrinho: null,
        jardim: null,
        agenda: null,
        piscina: null,
        gourmet: null,
        ranchinho: null,
        informatica: null,
        pastoral: null,
        ciencias: null,
        outros: null,
        quadra: null,
        rancho: null,
        inspetor: null,
        ingles: null

      },
    };
  },

  components: {
    Logado,
    Footer,
  },

  computed:{
    filteredAgendas: function(){

      var pegar = [];
      pegar = this.agenda.filter((item)=>{
                        
        return  item.nome.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
                item.seguimento.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||             
                item.horariosFull.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
                item.responsavel.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
                item.dataNew.toLowerCase().indexOf(this.search.toLowerCase()) > -1 
      });
        return pegar
    }
    // FIM DO CODIGO SEARCH
  },

 
   // COMANDO DE USUÁRIO LOGADO - DisplayName e Email
  async created() {

    const dbuser = getAuth();
    onAuthStateChanged(dbuser, (user) => {   
      // console.log(user)  
      // console.log(user.displayName) 
      if (user) {
        this.usuario = user.email
      }
    });    
  
  // CÓDIGO PARA ADICIONAR TELA FINAL PARA O USUARIO (userTela)
  const dbUser = getFirestore();
  const colleUser = collection(dbUser, 'usuarios')
  // const colleUser = collection(dbUser, 'ambTest')
  const q = query(colleUser, orderBy("dataNew",'asc'))
  const user = await getDocs(q); 
  user.forEach((doc) => {
    console.log(doc.data().salao)

    if(doc.data().salao){
      const salao = "Salão"
      this.checked.salao = salao
    }else{
      this.checked.salao  = null
    }
    if(doc.data().carrinho){
      const carrinho = "Carrinho(Projetor)"
      this.checked.carrinho = carrinho
    }else{
      this.checked.carrinho  = null
    }
    if(doc.data().ingles){
      const ingles = "Sala Bilíngue"
      this.checked.ingles = ingles
    }else{
      this.checked.ingles  = null
    }

    if(doc.data().agenda){
      const agenda = "Agendamento"
      this.checked.agenda = agenda
    }
    else{
      this.checked.agenda  = null
    }

    if(doc.data().jardim){
      const jardim = "Jardim Sensorial"
      this.checked.jardim = jardim
    }
    else{
      this.checked.jardim  = null
    }
    if(doc.data().piscina){
      const piscina = "Piscina"
      this.checked.piscina = piscina
    }
    else{
      this.checked.piscina  = null
    }
    if(doc.data().gourmet){
      const gourmet = "Área Gourmet"
      this.checked.gourmet = gourmet
    }
    else{
      this.checked.gourmet  = null
    }
    if(doc.data().ranchinho){
      const ranchinho = "Ranchinho"
      this.checked.ranchinho = ranchinho
    }
    else{
      this.checked.ranchinho  = null
    }
    if(doc.data().informatica){
      const informatica = "Sala de Informática"
      this.checked.informatica = informatica
    }
    else{
      this.checked.informatica  = null
    }
    if(doc.data().pastoral){
      const pastoral = "Sala de Pastoral"
      this.checked.pastoral = pastoral
    }
    else{
      this.checked.pastoral  = null
    }
    if(doc.data().ciencias){
      const ciencias = "Lab. Ciências"
      this.checked.ciencias = ciencias
    }
    else{
      this.checked.ciencias  = null
    }
    if(doc.data().outros){
      const outros = "Outros"
      this.checked.outros = outros
    }
    else{
      this.checked.outros  = null
    }
    if(doc.data().quadra){
      const quadra = "Quadra"
      this.checked.quadra = quadra
    }
    else{
      this.checked.quadra  = null
    }
    if(doc.data().rancho){
      const rancho = "Rancho"
      this.checked.rancho = rancho
    }
    else{
      this.checked.rancho  = null
    }
    if(doc.data().inspetor){
      const inspetor = "Inspetor"
      this.checked.inspetor = inspetor
    }
    else{
      this.checked.inspetor  = null
    }

  //  console.log(doc.data())
    // console.log('TUDO DO BANCO DE DADOS ==> ', doc.data())
 
    //****************************************************************************** */
    //GRAVA O ID DO ARQUIVO GERADO, DENTRO DO BD PARA PODER PEGAR E USAR VIA PARAMETRO
    //****************************************************************************** */
    let userData = doc.data()
    userData.id = doc.id    

    //****************************************************************************** */
    //CONVERTER A DATA DE INTERNACIONAL PARA PT-BR
    //AS VARIÁVES PEGAM A DATAS DO DB E SÃO CONVERTIDAS PARA APRESENTAR AO USUÁRIO
    //A DATA PADRÃO BRASIL
    //****************************************************************************** */
    let dia = new Date(doc.data().dataNew).getUTCDate(doc.data().dataNew)
    // let dia = new Date(doc.data().dataNew).getDate(doc.data().dataNew)+1
    let mes = new Date(doc.data().dataNew).getUTCMonth(doc.data().dataNew)+1
    let ano = new Date(doc.data().dataNew).getFullYear(doc.data().dataNew)

    let newDay = dia < 10 ? "0"+dia : ""+dia
    let newMonth = mes < 10 ? "0"+mes : ""+mes
    let todaData = newDay+"/"+newMonth+"/"+ano

    let dateString = todaData.toLocaleString('pt-BR', {}).replace(/\//g, '/')

    // ***********************************************************************/

    //****************************************************************************** */

    const dbAuth = getAuth().currentUser.uid;
    const dataUser = doc.data();
    const userTeste = doc.data().user_id;
    const emailUser = getAuth().currentUser.email;

    const social = process.env.VUE_APP_FIREBASE_EMAIL_SOCIAL
    const fundi = process.env.VUE_APP_FIREBASE_EMAIL_FUNDAMENTALI
    const fundii = process.env.VUE_APP_FIREBASE_EMAIL_FUNDAMENTALII
    const infantil = process.env.VUE_APP_FIREBASE_EMAIL_INFANTIL
    const diretora = process.env.VUE_APP_FIREBASE_EMAIL_DIRETORIA
    const inspetor = process.env.VUE_APP_FIREBASE_EMAIL_INSPETOR
    const diretoraNew = process.env.VUE_APP_FIREBASE_EMAIL_DIRETORANEW
    const tesouraria = process.env.VUE_APP_FIREBASE_EMAIL_TESOURARIA
    const irlucia = process.env.VUE_APP_FIREBASE_EMAIL_IRLUCIA
    const irservente = process.env.VUE_APP_FIREBASE_EMAIL_IRSERVENTE
    const manutencao = process.env.VUE_APP_FIREBASE_EMAIL_MANUTENCAO
    const pastoral = process.env.VUE_APP_FIREBASE_EMAIL_PASTORAL_NEW
    const visitante = process.env.VUE_APP_FIREBASE_EMAIL_VISITANTE

    
    // SOMENTE OS INFORMATICA SERÁ O ADMINISTRADOR E VAI VER TODAS AS PUBLICAÇÕES
    if(emailUser === process.env.VUE_APP_FIREBASE_EMAIL_INFORMATICA){

        const dbMonitorUser = {
        user_id: userTeste,
        id:doc.id,
        nome:doc.data().nome,
        dataNew:dateString,
        horariosFull:doc.data().horariosFull,
        responsavel: doc.data().responsavel,
        seguimento: doc.data().seguimento,   
        situacao: doc.data().situacao,
        // *****************************/
        //AMBIENTE DE TESTE
        salao: this.checked.salao,
        carrinho: this.checked.carrinho,
        jardim: this.checked.jardim,
        agenda: this.checked.agenda,           
        ranchinho: this.checked.ranchinho,
        gourmet: this.checked.gourmet,
        informatica: this.checked.informatica,
        pastoral: this.checked.pastoral,
        ciencias: this.checked.ciencias,
        outros: this.checked.outros,
        piscina: this.checked.piscina,
        quadra: this.checked.quadra,
        rancho: this.checked.rancho,
        inspetor: this.checked.inspetor,
        ingles: this.checked.ingles,
        //**************************** */
        motivo: doc.data().motivo,
        link: doc.data().link,
        social:doc.data().social,
        coordEI:doc.data().coordEI,
        coordFI:doc.data().coordFI,
        coordFII:doc.data().coordFII,
        info:doc.data().info,
        diretoria:doc.data().diretoria,
        tesouraria:doc.data().tesouraria,
        secretaria:doc.data().secretaria,
        data:doc.data().data,
        diretora:doc.data().diretora,
        evExternos: doc.data().evExternos,
        hourExtFirst:doc.data().hourExtFirst,
        hourExtSecund: doc.data(). hourExtSecund,
        userLogado:doc.data().userLogado //saber qual o usuário que criou o evento
        };

        this.agenda.push(dbMonitorUser);
    }  

  
    //ASSISTENTE SOCIAL -  RECEBE AS PUBLICAÇÕES DE AGENDAMETO DA SECRETARIA
    else if(emailUser === social && dataUser.situacao === "Agendamentos" && dataUser.seguimento === "Assistente-Social" ){
      

          const dbMonitorUser = {
          user_id: userTeste,
          id:doc.id,
          nome:doc.data().nome,
          dataNew:dateString,
          horariosFull:doc.data().horariosFull,
          responsavel: doc.data().responsavel,
          seguimento: doc.data().seguimento,
          situacao: doc.data().situacao,
          motivo: doc.data().motivo,
          social:doc.data().social,
          coordEI:doc.data().coordEI,
          coordFI:doc.data().coordFI,
          coordFII:doc.data().coordFII,
          info:doc.data().info,
          diretoria:doc.data().diretoria,
          tesouraria:doc.data().tesouraria,
          secretaria:doc.data().secretaria,
          link: doc.data().link,
          data:doc.data().data,
          diretora:doc.data().diretora,
          salao: this.checked.salao,
          carrinho: this.checked.carrinho,
          jardim: this.checked.jardim,
          agenda: this.checked.agenda,           
          ranchinho: this.checked.ranchinho,
          gourmet: this.checked.gourmet,
          informatica: this.checked.informatica,
          pastoral: this.checked.pastoral,
          ciencias: this.checked.ciencias,
          outros: this.checked.outros,
          piscina: this.checked.piscina,
          quadra: this.checked.quadra,
          rancho: this.checked.rancho,
          inspetor: this.checked.inspetor,
          ingles: this.checked.ingles,
        };

          this.agenda.push(dbMonitorUser);

    }

    //COORDENAÇÃO FUNDAMENTAL I -  RECEBE UMA CÓPIA DAS PUBLICAÇÕES DOS PROFESSORES
    // else if(emailUser === fundi && dataUser.seguimento === "Fundamental-I"){
    else if(emailUser === fundi){

          const dbMonitorUser = {
        user_id: userTeste,
        id:doc.id,
        nome:doc.data().nome,
        dataNew:dateString,
        horariosFull:doc.data().horariosFull,
        responsavel: doc.data().responsavel,
        seguimento: doc.data().seguimento,
        situacao: doc.data().situacao,
        motivo: doc.data().motivo,
        link: doc.data().link,
        social:doc.data().social,
        coordEI:doc.data().coordEI,
        coordFI:doc.data().coordFI,
        coordFII:doc.data().coordFII,
        info:doc.data().info,
        diretoria:doc.data().diretoria,
        tesouraria:doc.data().tesouraria,
        secretaria:doc.data().secretaria,
        data:doc.data().data,
        diretora:doc.data().diretora,
        evExternos: doc.data().evExternos,
        hourExtFirst:doc.data().hourExtFirst,
        hourExtSecund: doc.data(). hourExtSecund,
        salao: this.checked.salao,
        carrinho: this.checked.carrinho,
        jardim: this.checked.jardim,
        agenda: this.checked.agenda,           
        ranchinho: this.checked.ranchinho,
        gourmet: this.checked.gourmet,
        informatica: this.checked.informatica,
        pastoral: this.checked.pastoral,
        ciencias: this.checked.ciencias,
        outros: this.checked.outros,
        piscina: this.checked.piscina,
        quadra: this.checked.quadra,
        rancho: this.checked.rancho,
        inspetor: this.checked.inspetor,
        ingles: this.checked.ingles,
        };

        this.agenda.push(dbMonitorUser);

    }

     //COORDENAÇÃO FUNDAMENTAL II -  RECEBE UMA CÓPIA DAS PUBLICAÇÕES DOS PROFESSORES
    // else if(emailUser === fundii && dataUser.seguimento === "Fundamental-II"){
    else if(emailUser === fundii){
      

        const dbMonitorUser = {
        user_id: userTeste,
        id:doc.id,
        nome:doc.data().nome,
        dataNew:dateString,
        horariosFull:doc.data().horariosFull,
        responsavel: doc.data().responsavel,
        seguimento: doc.data().seguimento,
        situacao: doc.data().situacao,
        motivo: doc.data().motivo,
        link: doc.data().link,
        social:doc.data().social,
        coordEI:doc.data().coordEI,
        coordFI:doc.data().coordFI,
        coordFII:doc.data().coordFII,
        info:doc.data().info,
        diretoria:doc.data().diretoria,
        tesouraria:doc.data().tesouraria,
        secretaria:doc.data().secretaria,
        data:doc.data().data,
        diretora:doc.data().diretora,
        evExternos: doc.data().evExternos,
        hourExtFirst:doc.data().hourExtFirst,
        hourExtSecund: doc.data(). hourExtSecund,
        salao: this.checked.salao,
        carrinho: this.checked.carrinho,
        jardim: this.checked.jardim,
        agenda: this.checked.agenda,           
        ranchinho: this.checked.ranchinho,
        gourmet: this.checked.gourmet,
        informatica: this.checked.informatica,
        pastoral: this.checked.pastoral,
        ciencias: this.checked.ciencias,
        outros: this.checked.outros,
        piscina: this.checked.piscina,
        quadra: this.checked.quadra,
        rancho: this.checked.rancho,
        inspetor: this.checked.inspetor,
        ingles: this.checked.ingles,
        };

        this.agenda.push(dbMonitorUser);

    }

     //COORDENAÇÃO EDUCAÇÃO INFANTIL -  RECEBE UMA CÓPIA DAS PUBLICAÇÕES DOS PROFESSORES
    // else if(emailUser === infantil && dataUser.seguimento === "Edu-Infantil" && dataUser.responsavel === "Professor" || 
    //         emailUser === infantil && dataUser.seguimento === "Edu-Infantil" && dataUser.responsavel === "Assistente-Social" ){
        // else if(emailUser === infantil && dataUser.seguimento === "Edu-Infantil"){
        else if(emailUser === infantil){
      

          const dbMonitorUser = {
        user_id: userTeste,
        id:doc.id,
        nome:doc.data().nome,
        dataNew:dateString,
        horariosFull:doc.data().horariosFull,
        responsavel: doc.data().responsavel,
        seguimento: doc.data().seguimento,
        situacao: doc.data().situacao,
        motivo: doc.data().motivo,
        link: doc.data().link,
        social:doc.data().social,
        coordEI:doc.data().coordEI,
        coordFI:doc.data().coordFI,
        coordFII:doc.data().coordFII,
        info:doc.data().info,
        diretoria:doc.data().diretoria,
        tesouraria:doc.data().tesouraria,
        secretaria:doc.data().secretaria,
        data:doc.data().data,
        diretora:doc.data().diretora,
        evExternos: doc.data().evExternos,
        hourExtFirst:doc.data().hourExtFirst,
        hourExtSecund: doc.data(). hourExtSecund,
        salao: this.checked.salao,
        carrinho: this.checked.carrinho,
        jardim: this.checked.jardim,
        agenda: this.checked.agenda,           
        ranchinho: this.checked.ranchinho,
        gourmet: this.checked.gourmet,
        informatica: this.checked.informatica,
        pastoral: this.checked.pastoral,
        ciencias: this.checked.ciencias,
        outros: this.checked.outros,
        piscina: this.checked.piscina,
        quadra: this.checked.quadra,
        rancho: this.checked.rancho,
        inspetor: this.checked.inspetor,
        ingles: this.checked.ingles,
        };

        this.agenda.push(dbMonitorUser);

    }
     //COORDENAÇÃO FUNDAMENTAL I -  RECEBE UMA CÓPIA DAS PUBLICAÇÕES DOS PROFESSORES
    // else if(emailUser === fundi && dataUser.seguimento === "Fundamental-I"){
    else if(emailUser === pastoral){

          const dbMonitorUser = {
        user_id: userTeste,
        id:doc.id,
        nome:doc.data().nome,
        dataNew:dateString,
        horariosFull:doc.data().horariosFull,
        responsavel: doc.data().responsavel,
        seguimento: doc.data().seguimento,
        situacao: doc.data().situacao,
        motivo: doc.data().motivo,
        link: doc.data().link,
        social:doc.data().social,
        coordEI:doc.data().coordEI,
        coordFI:doc.data().coordFI,
        coordFII:doc.data().coordFII,
        info:doc.data().info,
        diretoria:doc.data().diretoria,
        tesouraria:doc.data().tesouraria,
        secretaria:doc.data().secretaria,
        data:doc.data().data,
        diretora:doc.data().diretora,
        evExternos: doc.data().evExternos,
        hourExtFirst:doc.data().hourExtFirst,
        hourExtSecund: doc.data(). hourExtSecund,
        salao: this.checked.salao,
        carrinho: this.checked.carrinho,
        jardim: this.checked.jardim,
        agenda: this.checked.agenda,           
        ranchinho: this.checked.ranchinho,
        gourmet: this.checked.gourmet,
        informatica: this.checked.informatica,
        pastoral: this.checked.pastoral,
        ciencias: this.checked.ciencias,
        outros: this.checked.outros,
        piscina: this.checked.piscina,
        quadra: this.checked.quadra,
        rancho: this.checked.rancho,
        inspetor: this.checked.inspetor,
        ingles: this.checked.ingles,
        };

        this.agenda.push(dbMonitorUser);

    }

     //COORDENAÇÃO FUNDAMENTAL I -  RECEBE UMA CÓPIA DAS PUBLICAÇÕES DOS PROFESSORES
    // else if(emailUser === fundi && dataUser.seguimento === "Fundamental-I"){
      else if(emailUser === visitante){

    const dbMonitorUser = {
      user_id: userTeste,
      id:doc.id,
      nome:doc.data().nome,
      dataNew:dateString,
      horariosFull:doc.data().horariosFull,
      responsavel: doc.data().responsavel,
      seguimento: doc.data().seguimento,
      situacao: doc.data().situacao,
      motivo: doc.data().motivo,
      link: doc.data().link,
      social:doc.data().social,
      coordEI:doc.data().coordEI,
      coordFI:doc.data().coordFI,
      coordFII:doc.data().coordFII,
      info:doc.data().info,
      diretoria:doc.data().diretoria,
      tesouraria:doc.data().tesouraria,
      secretaria:doc.data().secretaria,
      data:doc.data().data,
      diretora:doc.data().diretora,
      evExternos: doc.data().evExternos,
      hourExtFirst:doc.data().hourExtFirst,
      hourExtSecund: doc.data(). hourExtSecund,
      salao: this.checked.salao,
      carrinho: this.checked.carrinho,
      jardim: this.checked.jardim,
      agenda: this.checked.agenda,           
      ranchinho: this.checked.ranchinho,
      gourmet: this.checked.gourmet,
      informatica: this.checked.informatica,
      pastoral: this.checked.pastoral,
      ciencias: this.checked.ciencias,
      outros: this.checked.outros,
      piscina: this.checked.piscina,
      quadra: this.checked.quadra,
      rancho: this.checked.rancho,
      inspetor: this.checked.inspetor,
      ingles: this.checked.ingles,
    };

    this.agenda.push(dbMonitorUser);

}

    // DIRETORIA -  RECEBE UMA CÓPIA DAS PUBLICAÇÕES 
    // else if(emailUser === diretora && dataUser.situacao === "Agendamentos" && dataUser.seguimento === "Diretoria" || dataUser.seguimento === "Assistente-Social")
    else if(emailUser === diretora){

          const dbMonitorUser = {
          user_id: userTeste,
          id:doc.id,
          nome:doc.data().nome,
          dataNew:dateString,
          horariosFull:doc.data().horariosFull,
          responsavel: doc.data().responsavel,
          seguimento: doc.data().seguimento,
          situacao: doc.data().situacao,
          motivo: doc.data().motivo,
          social:doc.data().social,
          coordEI:doc.data().coordEI,
          coordFI:doc.data().coordFI,
          coordFII:doc.data().coordFII,
          info:doc.data().info,
          diretoria:doc.data().diretoria,
          tesouraria:doc.data().tesouraria,
          secretaria:doc.data().secretaria,
          link: doc.data().link,
          data:doc.data().data,
          diretora:doc.data().diretora,
          evExternos: doc.data().evExternos,
          hourExtFirst:doc.data().hourExtFirst,
          hourExtSecund: doc.data(). hourExtSecund,
          salao: this.checked.salao,
          carrinho: this.checked.carrinho,
          jardim: this.checked.jardim,
          agenda: this.checked.agenda,           
          ranchinho: this.checked.ranchinho,
          gourmet: this.checked.gourmet,
          informatica: this.checked.informatica,
          pastoral: this.checked.pastoral,
          ciencias: this.checked.ciencias,
          outros: this.checked.outros,
          piscina: this.checked.piscina,
          quadra: this.checked.quadra,
          rancho: this.checked.rancho,
          inspetor: this.checked.inspetor,
          ingles: this.checked.ingles,
        };

          this.agenda.push(dbMonitorUser);

    }
    // DIRETOR RENATA -  RECEBE UMA CÓPIA DAS PUBLICAÇÕES 
     else if(emailUser === diretoraNew){

          const dbMonitorUser = {
          user_id: userTeste,
          id:doc.id,
          nome:doc.data().nome,
          dataNew:dateString,
          horariosFull:doc.data().horariosFull,
          responsavel: doc.data().responsavel,
          seguimento: doc.data().seguimento,
          situacao: doc.data().situacao,
          motivo: doc.data().motivo,
          social:doc.data().social,
          coordEI:doc.data().coordEI,
          coordFI:doc.data().coordFI,
          coordFII:doc.data().coordFII,
          info:doc.data().info,
          diretoria:doc.data().diretoria,
          tesouraria:doc.data().tesouraria,
          secretaria:doc.data().secretaria,
          link: doc.data().link,
          data:doc.data().data,
          diretora:doc.data().diretora,
          salao: this.checked.salao,
          carrinho: this.checked.carrinho,
          jardim: this.checked.jardim,
          agenda: this.checked.agenda,           
          ranchinho: this.checked.ranchinho,
          gourmet: this.checked.gourmet,
          informatica: this.checked.informatica,
          pastoral: this.checked.pastoral,
          ciencias: this.checked.ciencias,
          outros: this.checked.outros,
          piscina: this.checked.piscina,
          quadra: this.checked.quadra,
          rancho: this.checked.rancho,
          inspetor: this.checked.inspetor,
          ingles: this.checked.ingles,
        };

          this.agenda.push(dbMonitorUser);

    }
    // INSPETOR MÁRCIO -  RECEBE UMA CÓPIA DAS PUBLICAÇÕES 
        else if(emailUser === inspetor){

          const dbMonitorUser = {
          user_id: userTeste,
          id:doc.id,
          nome:doc.data().nome,
          dataNew:dateString,
          horariosFull:doc.data().horariosFull,
          responsavel: doc.data().responsavel,
          seguimento: doc.data().seguimento,
          situacao: doc.data().situacao,
          motivo: doc.data().motivo,
          social:doc.data().social,
          coordEI:doc.data().coordEI,
          coordFI:doc.data().coordFI,
          coordFII:doc.data().coordFII,
          info:doc.data().info,
          diretoria:doc.data().diretoria,
          tesouraria:doc.data().tesouraria,
          secretaria:doc.data().secretaria,
          link: doc.data().link,
          data:doc.data().data,
          diretora:doc.data().diretora,
          evExternos: doc.data().evExternos,
          hourExtFirst:doc.data().hourExtFirst,
          hourExtSecund: doc.data(). hourExtSecund,
          salao: this.checked.salao,
          carrinho: this.checked.carrinho,
          jardim: this.checked.jardim,
          agenda: this.checked.agenda,           
          ranchinho: this.checked.ranchinho,
          gourmet: this.checked.gourmet,
          informatica: this.checked.informatica,
          pastoral: this.checked.pastoral,
          ciencias: this.checked.ciencias,
          outros: this.checked.outros,
          piscina: this.checked.piscina,
          quadra: this.checked.quadra,
          rancho: this.checked.rancho,
          inspetor: this.checked.inspetor,
          ingles: this.checked.ingles,
        };

          this.agenda.push(dbMonitorUser);

    }

     // TESOURARIA-  RECEBE UMA CÓPIA DAS PUBLICAÇÕES 
        else if(emailUser === tesouraria){
        
        const dbMonitorUser = {
        user_id: userTeste,
        id:doc.id,
        nome:doc.data().nome,
        dataNew:dateString,
        horariosFull:doc.data().horariosFull,
        responsavel: doc.data().responsavel,
        seguimento: doc.data().seguimento,
        situacao: doc.data().situacao,
        motivo: doc.data().motivo,
        link: doc.data().link,
        social:doc.data().social,
        coordEI:doc.data().coordEI,
        coordFI:doc.data().coordFI,
        coordFII:doc.data().coordFII,
        info:doc.data().info,
        diretoria:doc.data().diretoria,
        tesouraria:doc.data().tesouraria,
        secretaria:doc.data().secretaria,
        data:doc.data().data,
        diretora:doc.data().diretora,
        evExternos: doc.data().evExternos,
        hourExtFirst:doc.data().hourExtFirst,
        hourExtSecund: doc.data(). hourExtSecund,
        salao: this.checked.salao,
        carrinho: this.checked.carrinho,
        jardim: this.checked.jardim,
        agenda: this.checked.agenda,           
        ranchinho: this.checked.ranchinho,
        gourmet: this.checked.gourmet,
        informatica: this.checked.informatica,
        pastoral: this.checked.pastoral,
        ciencias: this.checked.ciencias,
        outros: this.checked.outros,
        piscina: this.checked.piscina,
        quadra: this.checked.quadra,
        rancho: this.checked.rancho,
        inspetor: this.checked.inspetor,
        ingles: this.checked.ingles,
        };
         
          this.agenda.push(dbMonitorUser);

    }

      // IRBERNADETE-  RECEBE UMA CÓPIA DAS PUBLICAÇÕES 
        else if(emailUser === irservente){
        
        const dbMonitorUser = {
        user_id: userTeste,
        id:doc.id,
        nome:doc.data().nome,
        dataNew:dateString,
        horariosFull:doc.data().horariosFull,
        responsavel: doc.data().responsavel,
        seguimento: doc.data().seguimento,
        situacao: doc.data().situacao,
        motivo: doc.data().motivo,
        link: doc.data().link,
        social:doc.data().social,
        coordEI:doc.data().coordEI,
        coordFI:doc.data().coordFI,
        coordFII:doc.data().coordFII,
        info:doc.data().info,
        diretoria:doc.data().diretoria,
        tesouraria:doc.data().tesouraria,
        secretaria:doc.data().secretaria,
        data:doc.data().data,
        diretora:doc.data().diretora,
        evExternos: doc.data().evExternos,
        hourExtFirst:doc.data().hourExtFirst,
        hourExtSecund: doc.data(). hourExtSecund,
        salao: this.checked.salao,
        carrinho: this.checked.carrinho,
        jardim: this.checked.jardim,
        agenda: this.checked.agenda,           
        ranchinho: this.checked.ranchinho,
        gourmet: this.checked.gourmet,
        informatica: this.checked.informatica,
        pastoral: this.checked.pastoral,
        ciencias: this.checked.ciencias,
        outros: this.checked.outros,
        piscina: this.checked.piscina,
        quadra: this.checked.quadra,
        rancho: this.checked.rancho,
        inspetor: this.checked.inspetor,
        ingles: this.checked.ingles,
        };
         
          this.agenda.push(dbMonitorUser);

    }
      // IR.LUCIA-  RECEBE UMA CÓPIA DAS PUBLICAÇÕES 
        else if(emailUser === irlucia){
        
        const dbMonitorUser = {
        user_id: userTeste,
        id:doc.id,
        nome:doc.data().nome,
        dataNew:dateString,
        horariosFull:doc.data().horariosFull,
        responsavel: doc.data().responsavel,
        seguimento: doc.data().seguimento,
        situacao: doc.data().situacao,
        motivo: doc.data().motivo,
        link: doc.data().link,
        social:doc.data().social,
        coordEI:doc.data().coordEI,
        coordFI:doc.data().coordFI,
        coordFII:doc.data().coordFII,
        info:doc.data().info,
        diretoria:doc.data().diretoria,
        tesouraria:doc.data().tesouraria,
        secretaria:doc.data().secretaria,
        data:doc.data().data,
        diretora:doc.data().diretora,
        evExternos: doc.data().evExternos,
        hourExtFirst:doc.data().hourExtFirst,
        hourExtSecund: doc.data(). hourExtSecund,
        salao: this.checked.salao,
        carrinho: this.checked.carrinho,
        jardim: this.checked.jardim,
        agenda: this.checked.agenda,           
        ranchinho: this.checked.ranchinho,
        gourmet: this.checked.gourmet,
        informatica: this.checked.informatica,
        pastoral: this.checked.pastoral,
        ciencias: this.checked.ciencias,
        outros: this.checked.outros,
        piscina: this.checked.piscina,
        quadra: this.checked.quadra,
        rancho: this.checked.rancho,
        inspetor: this.checked.inspetor,
        ingles: this.checked.ingles,
        };
         
          this.agenda.push(dbMonitorUser);

    }

     // REGINALDO MANUTENÇÃO-  RECEBE UMA CÓPIA DAS PUBLICAÇÕES 
        else if(emailUser === manutencao){
        
        const dbMonitorUser = {
        user_id: userTeste,
        id:doc.id,
        nome:doc.data().nome,
        dataNew:dateString,
        horariosFull:doc.data().horariosFull,
        responsavel: doc.data().responsavel,
        seguimento: doc.data().seguimento,
        situacao: doc.data().situacao,
        motivo: doc.data().motivo,
        link: doc.data().link,
        social:doc.data().social,
        coordEI:doc.data().coordEI,
        coordFI:doc.data().coordFI,
        coordFII:doc.data().coordFII,
        info:doc.data().info,
        diretoria:doc.data().diretoria,
        tesouraria:doc.data().tesouraria,
        secretaria:doc.data().secretaria,
        data:doc.data().data,
        diretora:doc.data().diretora,
        evExternos: doc.data().evExternos,
        hourExtFirst:doc.data().hourExtFirst,
        hourExtSecund: doc.data(). hourExtSecund,
        salao: this.checked.salao,
        carrinho: this.checked.carrinho,
        jardim: this.checked.jardim,
        agenda: this.checked.agenda,           
        ranchinho: this.checked.ranchinho,
        gourmet: this.checked.gourmet,
        informatica: this.checked.informatica,
        pastoral: this.checked.pastoral,
        ciencias: this.checked.ciencias,
        outros: this.checked.outros,
        piscina: this.checked.piscina,
        quadra: this.checked.quadra,
        rancho: this.checked.rancho,
        inspetor: this.checked.inspetor,
        ingles: this.checked.ingles,
        };
         
          this.agenda.push(dbMonitorUser);

    }



    // USUÁRIO RESTRITO - IRÃO VER SOMENTE SUAS PUBLICAÇÕES
      else if(userTeste === dbAuth){

        const dbMonitor = {
        user_id: userTeste,
        id:doc.id,
        nome:doc.data().nome,
        dataNew:dateString,
        horariosFull:doc.data().horariosFull,
        responsavel: doc.data().responsavel,
        seguimento: doc.data().seguimento,
        situacao: doc.data().situacao,
        motivo: doc.data().motivo,
        link: doc.data().link,
        social:doc.data().social,
        coordEI:doc.data().coordEI,
        coordFI:doc.data().coordFI,
        coordFII:doc.data().coordFII,
        info:doc.data().info,
        diretoria:doc.data().diretoria,
        tesouraria:doc.data().tesouraria,
        secretaria:doc.data().secretaria,
        data:doc.data().data,
        diretora:doc.data().diretora,
        evExternos: doc.data().evExternos,
        hourExtFirst:doc.data().hourExtFirst,
        hourExtSecund: doc.data(). hourExtSecund,
        salao: this.checked.salao,
        carrinho: this.checked.carrinho,
        jardim: this.checked.jardim,
        agenda: this.checked.agenda,           
        ranchinho: this.checked.ranchinho,
        gourmet: this.checked.gourmet,
        informatica: this.checked.informatica,
        pastoral: this.checked.pastoral,
        ciencias: this.checked.ciencias,
        outros: this.checked.outros,
        piscina: this.checked.piscina,
        quadra: this.checked.quadra,
        rancho: this.checked.rancho,
        inspetor: this.checked.inspetor,
        ingles: this.checked.ingles,
        
        };

        this.agenda.push(dbMonitor);
     
    }

    
   
  }); 
  
    const verUser = dbuser.currentUser
      if(verUser.uid){
      this.isLoggedIn =  true;
    }

    this.oculto()
    
  },
  
  // CODIGOS DO SEARCH
  
  methods:{ 

    refleshPage(){
      window.location.reload()
    },
    
    btnTop(){
      const btn = document.getElementById("btn_up")
      btn.addEventListener('click', ()=>{
        window.scrollTo(0,0)        
      })     
        
    }, 
    oculto(){
      const btn = document.getElementById("btn_up")
     btn.style.display = "none"
     document.addEventListener('scroll', function () {
        if(window.scrollY > 10){
          btn.style.display = "flex"
        }else{
          btn.style.display = "none"
        }
      })
    },
    async deletar(id){
      const db = getFirestore();
      const userAuth = getAuth().currentUser.uid;
      
      const docRef = doc(db, "usuarios", id);      
      // const docRef = doc(db, "ambTest", id);
      const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
        const snapShot = docSnap.data().user_id;
        const snapShotCoord = docSnap.data().seguimento;

        this.$swal({
          title: 'Deseja Realmente deletar?',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Sim, Quero Deletar!', 
                  
        }).then((result) => {
          if (result.isConfirmed) {
            if(userAuth === snapShot ||
              userAuth === 'mAjKyPE8CthkTvd4Dz0YFHvKvBo2' && snapShotCoord === "Anos-Finais" ||
              userAuth === 'mAjKyPE8CthkTvd4Dz0YFHvKvBo2' && snapShotCoord === "Anos-Iniciais" ||
              userAuth === 'mAjKyPE8CthkTvd4Dz0YFHvKvBo2' && snapShotCoord === "Edu-Infantil" ||
              userAuth === 'mAjKyPE8CthkTvd4Dz0YFHvKvBo2' && snapShotCoord === "Setor-TI" ||
              userAuth === 'mAjKyPE8CthkTvd4Dz0YFHvKvBo2' && snapShotCoord === "Tesouraria" ||
              userAuth === 'mAjKyPE8CthkTvd4Dz0YFHvKvBo2' && snapShotCoord === "Secretaria" ||
              userAuth === 'mAjKyPE8CthkTvd4Dz0YFHvKvBo2' && snapShotCoord === "Eventos-Externos" ||
              userAuth === 'mAjKyPE8CthkTvd4Dz0YFHvKvBo2' && snapShotCoord === "Diretoria" ||
              userAuth === 'mAjKyPE8CthkTvd4Dz0YFHvKvBo2' && snapShotCoord === "Inspetor" ||
              userAuth === 'mAjKyPE8CthkTvd4Dz0YFHvKvBo2' && snapShotCoord === "Pastoral" ||
              userAuth === 'mAjKyPE8CthkTvd4Dz0YFHvKvBo2' && snapShotCoord === "Ir-Servente" ||
              userAuth === 'mAjKyPE8CthkTvd4Dz0YFHvKvBo2' && snapShotCoord === "Bem-Estar" ||
              userAuth === 'mAjKyPE8CthkTvd4Dz0YFHvKvBo2' && snapShotCoord === "Todos-Seguimentos" ||
              userAuth === 'mAjKyPE8CthkTvd4Dz0YFHvKvBo2' && snapShotCoord === "Assistente-Social" ||
              userAuth === 'mAjKyPE8CthkTvd4Dz0YFHvKvBo2' && snapShotCoord === "Fundamental-II" )
            {     
            this.$swal(
              'Deletado!',
              'Seu Arquivo foi deletado.',
              'success'
            )                
            deleteDoc(doc(db, "usuarios", id))
            // deleteDoc(doc(db, "ambTest", id))
              .then(()=>{
                setTimeout(() => {
                  this.$router.go({name:'usertela'})
                }, 1000);
              })
            }
          }
        })
      }
    },    

    // FINAL DO DELETAR
/************************************************************************************** */

    // A FUNÇÃO SOMENTE PARA VER COMO O ARRAY ESTA FUNCIONANDO
    // getTrash(){ 
    //   console.log(this.selected_ckecked)    
    // },

    // FUNÇÃO DELETAR ITENS SELECIONADOS(VARIOS EVENTOS)
    delAll(){

      var sel_checked = this.selected_ckecked
     //se o array sel_checked for igual a 0 executa uma mensagem de erro, precisa ter pelo menos 1 evento selecionado      
      if(sel_checked.length == 0){
        this.$swal('Não Existe Eventos Selecionados','Precisa selecionar os eventos.', 'error')  
        return false
      }else{          
      this.$swal({
        title: 'Deseja Realmente Deletar os Itens Selecionados?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Deletar', 
      }).then((result) => {      
        if (result.isConfirmed) {
          const db = getFirestore();    
          var pp = this.selected_ckecked
          pp.forEach(async (Uid) => {           
            console.log("Dentro do isConfirmed",  Uid)               
            this.$swal('Deletado!','Seu Arquivo foi deletado co Sucesso.', 'success') 
            // await deleteDoc(doc(db, "ambTest", Uid))
            await deleteDoc(doc(db, "usuarios", Uid))
              .then(()=>{
                setTimeout(() => {
                  this.$router.go({name:'usertela'})                  
                }, 1000);
              })           
          })       
        }      
      })
    } 
    
    },
      
// INICIO VERIFICAR
// ***********************************************************/

    async marcar(id){
      const db = getFirestore();
      const docRefer = doc(db, "usuarios", id)
      const pegarUser = await getDoc(docRefer)
      console.log(pegarUser)
      if(pegarUser.exists()){
        const userName = getAuth()
        const pegarUserNew = userName.currentUser.email
        console.log(pegarUserNew)
        if(pegarUser.data().coordFI === null){
            if (pegarUserNew == "coordenadorafund1@ersvp.g12.br" && pegarUser.data().seguimento == "Anos-Iniciais" ) {
               await updateDoc(docRefer, {
                  coordFI: "Coord. Natália"
               });
        }
        if (pegarUser.data().info === null) {
           if(pegarUserNew == "informatica@ersvp.g12.br" && pegarUser.data().salao == true ||
              pegarUserNew == "informatica@ersvp.g12.br" && pegarUser.data().informatica == true ||
              pegarUserNew == "informatica@ersvp.g12.br" && pegarUser.data().ingles == true ) {
               await updateDoc(docRefer, {
                  info: "S.T.I"
             
               });
            }
        }
        
        if (pegarUser.data().coordFII === null) {
          if(pegarUserNew == "coordenadorafund2@ersvp.g12.br" && pegarUser.data().seguimento == "Anos-Finais" ) {
               await updateDoc(docRefer, {
                  coordFII: "Coord. Anamaria"
               });
            }
        }
        if (pegarUser.data().coordEI === null) {
           
           if (pegarUserNew == "coordenadoraEdInf@ersvp.g12.br" && pegarUser.data().seguimento == "Edu-Infantil" ) {
               await updateDoc(docRefer, {
                  coordEI: "Coord. Thais"
               });
              
            }
         }
        if (pegarUser.data().social === null) {
          if (pegarUserNew == "asocial@ersvp.g12.br" && pegarUser.data().seguimento == "Assistente-Social" && pegarUser.data().agenda == true ) {
               await updateDoc(docRefer, {
                  social: "Assit. Social"
               });
              
            }
        
        }
        if (pegarUser.data().secretaria === null) {
            if (pegarUserNew == "secretaria@ersvp.g12.br" && pegarUser.data().seguimento == "Secretaria" ) {
               await updateDoc(docRefer, {
                  secretaria: "Secretaria"
               });
              
            }
        }
        if (pegarUser.data().diretoria === null) {
           if (pegarUserNew == "diretoria@ersvp.g12.br" && pegarUser.data().seguimento == "Diretoria" ) {
               await updateDoc(docRefer, {
                  secretaria: "Diretoria"
               });
              
            }
        }
         if (pegarUser.data().tesouraria === null) {
          if (pegarUserNew == "tesouraria@ersvp.g12.br" && pegarUser.data().seguimento == "Tesouraria" ) {
               await updateDoc(docRefer, {
                  secretaria: "Tesouraria"
               });
              
            }
        } if (pegarUser.data().diretora === null) {
          if (pegarUserNew == "diretora-pedagogica@ersvp.g12.br" && pegarUser.data().seguimento == "Edu-Infantil" ||
              pegarUserNew == "diretora-pedagogica@ersvp.g12.br" && pegarUser.data().seguimento == "Anos-Finais" ||
              pegarUserNew == "diretora-pedagogica@ersvp.g12.br" && pegarUser.data().seguimento == "Anos-Iniciais") {
               await updateDoc(docRefer, {
                  diretora: "Dir. Renata"
               });
              
            }
        }
        
        this.$swal({
            icon: 'success',
            title: 'Marcado com Sucesso!',
            showConfirmButton:false,
            timer: 2000,
          })

          setTimeout(() => {
            this.$router.go({name:'usertela'})
          }, 2000);
           
        }else{
          alert("Sem autorização para marcar essa publicação!")
        }
 
      }else{
        alert("Procurar Suporte Técnico")
      }

    },
      fechamento(){
        this.isFechar = !this.isFechar
      }
    // FIM DO VERIFICAR
    //********************************************************/ 
  },
  
  }
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,500;0,800;1,100&family=Prompt:ital,wght@0,100;0,200;0,400;0,700;0,800;1,500;1,900&display=swap');

#del_trash{
  width:20px;
  height:20px; 
  /* position: absolute;
  z-index: 1000; 
  top:0;
  left:0;
   */
 
}
/* #ckeck__box{
  padding: 10px;
  background-color: brown !important;
  border-radius: 3px;
  cursor:pointer;
  width:33px;
  height: 33px;
  position: relative;
 
  z-index: 9999;
}
#ckeck__box input[type="checkbox"]{
  visibility: visible;
} */
/* .ckeck__box_checked{
  background-color: rgb(5, 167, 126);
  color:#fff;
  padding: 5px 15px;
  width:6%;
  border-radius: 8px;
  cursor:pointer
} */
.bg__color__event{
  --tw-bg-opacity: 1;
  background-color: rgba(249, 250, 251, var(--tw-bg-opacity));
}
.bg__color__checked{ 
  background-color: #fda4af;
}
.font__text{
  font-family: Poppins, sans-serif;
  font-weight: 300;
  color: rgb(31, 125, 179);
}
.footer_page{
  min-height: calc(100vh - 4.3rem);
}
.wood::before{
  content: "";
  height: 40px;
  width: 20px;
  font-size: 2em;
  margin-top: 4px;
  right: -10px;
  position: relative;
  background-color: rgb(255, 98, 0);
}
.Poppins{
  font-family: Poppins, sans;
  font-weight: 500;
  font-size: 2.1em;
}
.largura{
  width: 100%;
}
input[type='search']{
  background-color: #fff;
  border: 1px solid #fff;
  color:#000;
  height: 40px;
  
  
}
input[type='search']:hover{
  background-color: #fff;
  border: 2px solid rgb(49, 135, 248);
  color:#000;
  height: 40px;
  
  
}
input[type='search']::placeholder{
 color: #ccc;
}

input[type='search']:focus{
  outline: none;
}
@media screen and (max-width:640px) {
  .wood::before{
  background-color: transparent;
  }
  .footer_page{
    min-height: calc(100vh - 3.3rem);
  }
}



</style>
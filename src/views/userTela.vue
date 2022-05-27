<template>
<div>
  <div class="w-full h-full bg-gray-50">
    
    <section class="bg-blue-100 border-b-2 border-blue-200 ">
      <!--navbar -->
      <div
        class="w-full container mx-auto items-center justify-between sm:flex">

      <router-link to="/">
        <div class="flex items-center justify-center pt-4 ">
          <img src="../assets/escola.png" alt="" class="w-48 sm:w-64 md:w-64 lg:w-64 xl:w-64 2xl:w-64" />
        </div>
      </router-link>

        <div class="flex justify-center items-center pt-4 pb-2 ">
          <h1 class="font-medium text-3xl text-gray-700 text-center">
            <img src="../assets/Agendamentos.png" alt="" class="w-36 sm:w-44 md:w-44 lg:w-44 xl:w-44 2xl:w-44 "/>
          </h1>
        </div>
      </div>
    </section>
    <section>
      <!-- body aplicação -->
      <div class="w-full bg-gray-50">
        <div>
          <div class="">

            <!-- AGENDAMENTO E LOGADO -->
            <div class="w-full flex md:flex flex-col items-center justify-center">
                            
                <div class=" flex flex-col  sm:w-full items-center justify-center mt-7 ">
                  <div class="2xl:flex 2xl:items-center  xl:flex lg:flex lg:items-center xl:items-center md:items-center md:flex sm:items-center sm:flex ">

                      <h1 class="text-sm font-thin 2xl:mr-2 2xl:text-lg md:text-lg lg:text-lg xl:text-lg xl:mr-2 lg:mr-2 md:mr-2 sm:mr-2 mb-2">Olá <span class="font-bold text-red-600 px-1">{{this.usuario}}</span> seja bem vindo(a)</h1>

                    <div class="flex justify-center items-center  ">
                    <router-link to="/Auth">
                        <div title="Volta para a tela de cadastro" class="bg-blue-700 text-white flex items-center font-thin text-xs justify-center py-1 px-2 rounded-md cursor-pointer
                        shadow-md mr-2 ">
                        
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                          </svg>
                          VOLTAR
                          
                        </div>
                    </router-link>
                        <div title="Desconectar usuário ">
                          <Logado />
                        </div>
                      </div>
                  </div>
                </div>
              
            </div>
            <div  class="  bg-blue-100 w-full   border-t-2 border-blue-200 mt-6 2xl:justify-center  flex 2xl:flex-col 2xl:items-center flex-col ">
              <div class="flex flex-col  w-11/12 md:w-8/12 2xl:w-1/2   mx-auto container ">
                <div class="py-6">
                  <h1 class="text-red-700 font-sans text-4xl text-center"> Agendamentos </h1>
                </div>
                  
                <div class=" sm:flex justify-between items-center pl-2">
                  
                  <div class="flex justify-start items-center w-full sm:w-4/6 md:w-4/6">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  <input v-model="search" type="search"  class="  2xl:w-2/3 sm:w-full  w-full md:w-full pl-2 border-b-2 border-gray-300 rounded " placeholder="Data, Nome, Local, horário...">
                  </div>
                  
              
                </div>
                                  
                <!-- <div v-for="(item, key) in filteredAgendas" :key="key"  class="flex justify-end "></div> -->
              </div>
              
              <div class=" mb-1 border-2 border-gray-400 2xl:w-1/2 lg:container lg:mx-auto  lg:w-2/3 w-11/12 mx-auto container flex flex-col mt-2 px-2 py-4 bg-gray-50 rounded-lg shadow-xl" v-for="agendas, index in filteredAgendas" :key="index" >
                <div>
                  <ul class="  flex flex-col font-sans text-lg text-gray-900 space-y-1  ">
                      <li class=" font-bold text-lg text-red-600 border-red-300 rounded-md "><span class="text-xl font-bold text-gray-900 ">Dia do Evento: </span> {{agendas.dataNew}}</li>
                      <li class=""><span class="text-xl font-bold">Nome: </span>   {{agendas.nome}} </li>
                      <li class=""><span class="text-xl font-bold">Horário: </span>   {{agendas.horariosFull}}</li>
                      <!-- <li class=""><span class="text-xl font-bold">Eventos e Encontros: </span> {{agendas.horaEventos}}</li> -->
                      <li class=""><span class="text-xl font-bold">Setor ou Função: </span> {{agendas.responsavel}}</li>
                      <li class=""><span class="text-xl font-bold">Local: </span> {{agendas.situacao}}</li>
                      <li class=""><span class="text-xl font-bold">Segmento: </span> {{agendas.seguimento}}</li>
                      <li class="break-words"><span class="text-xl font-bold">Evento: </span> {{agendas.motivo}}</li>
                      <li class="break-words"><span class="text-xl font-bold ">Link: </span> {{agendas.link}}</li>
                      <li style="margin-top:14px;" class="text-red-600 text-base font-bold text-center bg-gray-200 rounded-md "><span class=" font-bold text-gray-600  ">Criado em:  </span> {{ agendas.data}}</li>        
                        <div class="flex  items-center space-x-1 pt-4">
                            <router-link :to="{path : `/edituser/${agendas.id}`}" class="bg-green-600 w-28 h-8 text-center text-white rounded">
                              <div title="Atualizar!" >
                                <span class="text-sm md:text-base">Editar</span>
                              </div>
                              </router-link>
                            <div v-if="isClose"  @click.prevent="marcar(agendas.id)" title="Botão de Marcar como Recebido!" class="cursor-pointer bg-blue-600 w-28 h-8 text-center text-white rounded">
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
                                <div class="text-sm  font-bold text-red-600">{{agendas.tesouraria}}</div>
                              </div>
                              
                            </div>
                        </div>
                  </ul>
                </div>
              </div>
            </div>
        </div>
      </div>
      </div>
    </section>
  </div>
  
  <div class="relative bottom-0 mt-2 ">
    <Footer />
  </div>
  </div>
</template>

<script>
import Logado from "../components/compLogado/userLogado.vue";
import { getDocs, getDoc,  collection,  getFirestore, doc, deleteDoc, updateDoc, query, orderBy } from "firebase/firestore";
import {getAuth, onAuthStateChanged} from "firebase/auth";
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
                  
        return item.nome.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
                item.seguimento.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
                item.situacao.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
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
      
      if (user) {
        if (user.displayName === null) {
          this.usuario = user.email
        } else {
          this.usuario = user.displayName
        }
    }

    });

  
  // CÓDIGO PARA ADICIONAR TELA FINAL PARA O USUARIO (userTela)
  const dbUser = getFirestore();
  const colleUser = collection(dbUser, 'usuarios')
  const q = query(colleUser, orderBy('dataNew', 'desc'))
  const user = await getDocs(q);
  
  user.forEach((doc) => {
 
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
    let dia = new Date(doc.data().dataNew).getDate(doc.data().dataNew)+1
    let mes = new Date(doc.data().dataNew).getMonth(doc.data().dataNew)+1
    let ano = new Date(doc.data().dataNew).getFullYear(doc.data().dataNew)
    let todaData = dia+"/"+mes+"/"+ano

    let dateString = todaData.toLocaleString('pt', {}).replace(/\//g, '/')

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
   
    // SOMENTE OS INFORMATICA SERÁ O ADMINISTRADOR E VAI VER TODAS AS PUBLICAÇÕES
    if(emailUser === process.env.VUE_APP_FIREBASE_EMAIL_INFORMATICA){

        const dbMonitorUser = {
        user_id: userTeste,
        id:doc.id,
        nome:doc.data().nome,
        dataNew:dateString,
        // horariosFundi:doc.data().horariosFundi,
        // horariosFundii:doc.data().horariosFundii,
        // horariosInfantil:doc.data().horariosInfantil,
        // horariosEventos:doc.data().horariosEventos,
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
        };

          this.agenda.push(dbMonitorUser);

    }

    //COORDENAÇÃO FUNDAMENTAL I -  RECEBE UMA CÓPIA DAS PUBLICAÇÕES DOS PROFESSORES
    else if(emailUser === fundi && dataUser.seguimento === "Fundamental-I"){

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
        };

          this.agenda.push(dbMonitorUser);

    }

     //COORDENAÇÃO FUNDAMENTAL II -  RECEBE UMA CÓPIA DAS PUBLICAÇÕES DOS PROFESSORES
    else if(emailUser === fundii && dataUser.seguimento === "Fundamental-II"){
      

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
        };

          this.agenda.push(dbMonitorUser);

    }

     //COORDENAÇÃO EDUCAÇÃO INFANTIL -  RECEBE UMA CÓPIA DAS PUBLICAÇÕES DOS PROFESSORES
    // else if(emailUser === infantil && dataUser.seguimento === "Edu-Infantil" && dataUser.responsavel === "Professor" || 
    //         emailUser === infantil && dataUser.seguimento === "Edu-Infantil" && dataUser.responsavel === "Assistente-Social" ){
        else if(emailUser === infantil && dataUser.seguimento === "Edu-Infantil"){
      

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
        };

        this.agenda.push(dbMonitor);
     
    }
   
  });
  
  
    const verUser = dbuser.currentUser
      if(verUser.uid){
      this.isLoggedIn =  true;
    }
 
  },
  

  // CODIGOS DO SEARCH
  
  methods:{
   
    async deletar(id){
      const db = getFirestore();
      const userAuth = getAuth().currentUser.uid;
      const docRef = doc(db, "usuarios", id);
      const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
        const snapShot = docSnap.data().user_id;
        const snapShotCoord = docSnap.data().seguimento;
          if(userAuth === snapShot ||
          userAuth === 'Tti6zOqlWRTxqDbT0DeA1aofPEs2' && snapShotCoord === "Fundamental-II" ||
          userAuth === 'q3whUxpWc5V8L0hkgoJNsrRZDXt1' && snapShotCoord === "Fundamental-I" || 
          userAuth === 'wG1FwC6ADOe9E81gN4XW5c4CzA32' && snapShotCoord === "Edu-Infantil" ||
          userAuth === 'mAjKyPE8CthkTvd4Dz0YFHvKvBo2' && snapShotCoord === "Fundamental-II" ||
          userAuth === 'mAjKyPE8CthkTvd4Dz0YFHvKvBo2' && snapShotCoord === "Fundamental-I" ||
          userAuth === 'mAjKyPE8CthkTvd4Dz0YFHvKvBo2' && snapShotCoord === "Edu-Infantil" )
          {        
            deleteDoc(doc(db, "usuarios", id))
                .then(()=>{
                  this.$swal({
                    icon:'success',
                    title: 'Excluido com Sucesso!',
                    showConfirmButton: false,
                    timer: 2500,

              }).then(()=>{
                  setTimeout(() => {
                    this.$router.go({name:'usertela'})
                  }, 1000);
            })
              })
          
        }else if(userAuth != snapShot){
              this.$swal({
                icon: 'error',
                title: 'Não tem permissão para excluir!',
                showConfirmButton: false,
                timer: 2000,
              })

        }

      }
        else {alert("Procure o Suporte Técnico")
      }
    },
    // FINAL DO DELETAR
   
// INICIO VERIFICAR
// ***********************************************************/

    async marcar(id){
      const db = getFirestore();
      const docRefer = doc(db, "usuarios", id)
      const pegarUser = await getDoc(docRefer)
      if(pegarUser.exists()){
        const userName = getAuth()
        const pegarUserNew = userName.currentUser.email
        if(pegarUser.data().coordFI === null){
            if (pegarUserNew == "coordenadorafund1@ersvp.g12.br" && pegarUser.data().seguimento == "Fundamental-I" ) {
               await updateDoc(docRefer, {
                  coordFI: "Coord. Natália"
               });
        }
        if (pegarUser.data().info === null) {
           if(pegarUserNew == "informatica@ersvp.g12.br" && pegarUser.data().situacao == "Salão" ||
              pegarUserNew == "informatica@ersvp.g12.br" && pegarUser.data().situacao == "Sala_Informatica" ) {
               await updateDoc(docRefer, {
                  info: "S.T.I"
             
               });
            }
        }
        
        if (pegarUser.data().coordFII === null) {
          if(pegarUserNew == "coordenadorafund2@ersvp.g12.br" && pegarUser.data().seguimento == "Fundamental-II" ) {
               await updateDoc(docRefer, {
                  coordFII: "Coord. Anamaria"
               });
            }
        }
        if (pegarUser.data().coordEI === null) {
           
           if (pegarUserNew == "coordenadora@ersvp.g12.br" && pegarUser.data().seguimento == "Edu-Infantil" ) {
               await updateDoc(docRefer, {
                  coordEI: "Coord. Juliana"
               });
              
            }
         }
        if (pegarUser.data().social === null) {
          if (pegarUserNew == "asocial@ersvp.g12.br" && pegarUser.data().seguimento == "Assistente-Social" && pegarUser.data().situacao == "Agendamentos" ) {
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
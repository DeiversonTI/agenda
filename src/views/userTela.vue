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

                      <h1 class="text-sm font-thin 2xl:mr-2 2xl:text-lg md:text-lg lg:text-lg xl:text-lg xl:mr-2 lg:mr-2 md:mr-2 sm:mr-2 mb-2">Olá <span class="font-bold text-red-600 px-1">{{this.email}}</span> seja bem vindo(a)</h1>

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
           
                <div  class="bg-blue-100 w-full   border-t-2 border-blue-200 mt-6 2xl:justify-center  flex 2xl:flex-col 2xl:items-center flex-col ">
                  
                   <!-- <button @click.prevent="clicar()" class="bg-blue-700 text-white py-2 px-8 mb-8 rounded-lg ml-4">Inserir</button> -->
                  <div class="flex flex-col  w-11/12 md:w-8/12 2xl:w-1/2   mx-auto container ">
                    <div class="py-6">
                      <h1 class="text-red-700 font-sans text-4xl text-center"> Agendamentos </h1>
                    </div>
                    
                    <div class="flex justify-end ">
                      <p class="font-sans text-lg">Pesquisar:</p> <input   type="search"  class=" ml-2 pl-2 border-2 border-gray-400 rounded-md   " placeholder="Pesquisar...">
                    </div>
                  </div>
                      <div class=" mb-1 border-2 border-gray-400 2xl:w-1/2 lg:container lg:mx-auto  lg:w-2/3 w-11/12 mx-auto container flex flex-col mt-2 px-2 py-4 bg-gray-50 rounded-lg shadow-xl" v-for="agendas in agenda" :key="agendas.id" >
                      
                        <div>
                              <ul   class=" flex flex-col font-sans text-lg text-gray-900 space-y-1  ">
                                  <li class=" font-bold text-lg text-red-600 border-red-300 rounded-md "><span class="text-xl font-bold text-gray-900 ">Dia do Evento: </span> {{agendas.dia}} de {{agendas.mes}} de {{agendas.ano}}</li>
                                  <li class=""><span class="text-xl font-bold">Nome: </span> {{agendas.nome}}</li>                           
                                  <li class=""><span class="text-xl font-bold">Horário: </span> {{agendas.horario}}</li>
                                  <li class=""><span class="text-xl font-bold">Setor ou Função: </span> {{agendas.responsavel}}</li>
                                  <li class=""><span class="text-xl font-bold">Local: </span> {{agendas.situacao}}</li>
                                  <li class=""><span class="text-xl font-bold">Seguimento: </span> {{agendas.seguimento}}</li>
                                  <li class="break-words"><span class="text-xl font-bold">Evento: </span> {{agendas.motivo}}</li>
                                  <!-- <li class=""><span class="text-xl font-bold">Upload: </span> {{agendas.arquivo}}</li> -->
                                  <li class="break-words"><span class="text-xl font-bold ">Link: </span> {{agendas.link}}</li>
                                  <li class="text-red-600 text-base font-bold text-center bg-gray-200 rounded-md"><span class=" font-bold text-gray-600 ">Data da Publicação :  </span> {{ agendas.data}}</li>        
                                  
                                 <div>
                                  <button  @click.prevent="deletar(agendas.id)" class=" shadow-md py-1 px-2 bg-red-600 text-lg text-gray-50 font-sans rounded-md mt-4 mr-2">Excluir</button>
                                </div>
                              </ul>
                             
                          </div>
                          <div>
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
import { getDocs, getDoc,  collection,  getFirestore, doc, deleteDoc} from "firebase/firestore";
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
      
      
    };
  },

  components: {
    Logado,
    Footer,
  },

  methods:{
    async deletar(id){

      const db = getFirestore();
      const userAuth = getAuth().currentUser.uid;

      const docRef = doc(db, "usuarios", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {

        const snapShot = docSnap.data().user_id;
       
        if(userAuth === snapShot){

          deleteDoc(doc(db, "usuarios", id))
          .then(()=>{
            this.$swal({
              icon:'success',
              title: 'Excluido com Sucesso!',

            })
              
            .then(()=>{
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

      } else {
       
       alert("Procure o Suporte Técnico")
      }


    },
    // FINAL DO DELETAR
    
  },
  
   // COMANDO DE USUÁRIO LOGADO
  async created() {
  const dbuser = getAuth();
  onAuthStateChanged(dbuser, (user) => {
   
        this.email = user.email;    

  });

  // COMANDO PARA ADICIONAR TELA FINAL PARA O USUARIO
  const dbUser = getFirestore();
  


  const user = await getDocs(collection(dbUser, "usuarios"));

  
  
  user.forEach((doc) => {
 
  const dbAuth = getAuth().currentUser.uid;
  const dataUser = doc.data(); 
  
  

    const userTeste = doc.data().user_id;
    const emailUser = getAuth().currentUser.email;

    // TRATAMENTO DA DATA PARA FORMATO BRASILEIRO
    const social = process.env.VUE_APP_FIREBASE_EMAIL_SOCIAL
    const fundi = process.env.VUE_APP_FIREBASE_EMAIL_FUNDAMENTALI
    const fundii = process.env.VUE_APP_FIREBASE_EMAIL_FUNDAMENTALII
    const infantil = process.env.VUE_APP_FIREBASE_EMAIL_INFANTIL
    const diretora = process.env.VUE_APP_FIREBASE_EMAIL_DIRETORIA
   
    // SOMENTE OS INFORMATICA SERÁ O ADMINISTRADOR E VAI VER TODAS AS PUBLICAÇÕES
    if(emailUser === process.env.VUE_APP_FIREBASE_EMAIL_INFORMATICA){
    
        const dbMonitorUser = {
         
        user_id: userTeste,
        id:doc.id,
        nome:doc.data().nome,
        dia: doc.data().dia,
        mes: doc.data().mes,
        ano: doc.data().ano,
        horario: doc.data().horario,
        responsavel: doc.data().responsavel,
        seguimento: doc.data().seguimento,
        situacao: doc.data().situacao,
        motivo: doc.data().motivo,
        // arquivo: doc.data().arquivo,
        link: doc.data().link,
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
          dia: doc.data().dia,
          mes: doc.data().mes,
          ano: doc.data().ano,
          horario: doc.data().horario,
          responsavel: doc.data().responsavel,
          seguimento: doc.data().seguimento,
          situacao: doc.data().situacao,
          motivo: doc.data().motivo,
          // arquivo: doc.data().arquivo,
          link: doc.data().link,
          data:doc.data().data,
        };

          this.agenda.push(dbMonitorUser);

    }

    //COORDENAÇÃO FUNDAMENTAL I -  RECEBE UMA CÓPIA DAS PUBLICAÇÕES DOS PROFESSORES
    else if(emailUser === fundi && dataUser.seguimento === "Fundamental-I" && dataUser.responsavel === "Assistente-Social" || dataUser.responsavel === "Professor"){
      

          const dbMonitorUser = {
          user_id: userTeste,
          id:doc.id,
          nome:doc.data().nome,
          dia: doc.data().dia,
          mes: doc.data().mes,
          ano: doc.data().ano,
          horario: doc.data().horario,
          responsavel: doc.data().responsavel,
          seguimento: doc.data().seguimento,
          situacao: doc.data().situacao,
          motivo: doc.data().motivo,
          // arquivo: doc.data().arquivo,
          link: doc.data().link,
          data:doc.data().data,
        };

          this.agenda.push(dbMonitorUser);

    }

     //COORDENAÇÃO FUNDAMENTAL II -  RECEBE UMA CÓPIA DAS PUBLICAÇÕES DOS PROFESSORES
    else if(emailUser === fundii && dataUser.seguimento === "Fundamental-II" && dataUser.responsavel === "Professor" || dataUser.responsavel === "Assistente-Social" ){
      

          const dbMonitorUser = {
          user_id: userTeste,
          id:doc.id,
          nome:doc.data().nome,
          dia: doc.data().dia,
          mes: doc.data().mes,
          ano: doc.data().ano,
          horario: doc.data().horario,
          responsavel: doc.data().responsavel,
          seguimento: doc.data().seguimento,
          situacao: doc.data().situacao,
          motivo: doc.data().motivo,
          // arquivo: doc.data().arquivo,
          link: doc.data().link,
          data:doc.data().data,
        };

          this.agenda.push(dbMonitorUser);

    }

     //COORDENAÇÃO EDUCAÇÃO INFANTIL -  RECEBE UMA CÓPIA DAS PUBLICAÇÕES DOS PROFESSORES
    else if(emailUser === infantil && dataUser.seguimento === "Edu-Infantil" && dataUser.responsavel === "Professor" || dataUser.responsavel === "Assistente-Social" ){
      

          const dbMonitorUser = {
          user_id: userTeste,
          id:doc.id,
          nome:doc.data().nome,
          dia: doc.data().dia,
          mes: doc.data().mes,
          ano: doc.data().ano,
          horario: doc.data().horario,
          responsavel: doc.data().responsavel,
          seguimento: doc.data().seguimento,
          situacao: doc.data().situacao,
          motivo: doc.data().motivo,
          // arquivo: doc.data().arquivo,
          link: doc.data().link,
          data:doc.data().data,
        };

          this.agenda.push(dbMonitorUser);

    }

    // DIRETORIA -  RECEBE UMA CÓPIA DAS PUBLICAÇÕES 
    else if(emailUser === diretora && dataUser.situacao === "Agendamentos" && dataUser.seguimento === "Diretoria" || dataUser.seguimento === "Assistente-Social"){
            
      

          const dbMonitorUser = {
          user_id: userTeste,
          id:doc.id,
          nome:doc.data().nome,
          dia: doc.data().dia,
          mes: doc.data().mes,
          ano: doc.data().ano,
          horario: doc.data().horario,
          responsavel: doc.data().responsavel,
          seguimento: doc.data().seguimento,
          situacao: doc.data().situacao,
          motivo: doc.data().motivo,
          // arquivo: doc.data().arquivo,
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
        dia: doc.data().dia,
        mes: doc.data().mes,
        ano: doc.data().ano,
        horario: doc.data().horario,
        responsavel: doc.data().responsavel,
        seguimento: doc.data().seguimento,
        situacao: doc.data().situacao,
        motivo: doc.data().motivo,
        // arquivo: doc.data().arquivo,
        link: doc.data().link,
        data:doc.data().data,
        };

          this.agenda.push(dbMonitor);
     
    }
   
  });
  
  
  const verUser = dbuser.currentUser
    if(verUser.uid){
     this.isLoggedIn =  true;
  }
 



  }
  
 
  }
</script>
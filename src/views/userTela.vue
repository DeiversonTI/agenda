<template>
  <div class="w-full h-full bg-gray-50">
    <section class="bg-blue-100 border-b-2 border-blue-200 ">
      <!--navbar -->
      <div
        class="
          w-full
          container
          mx-auto
          items-center
          justify-between
          sm:flex 
        "
      >
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
              
                <!-- <div>
                  <h1 class="py-8 sm:text-3xl font-thin text-5xl text-blue-600">
                    Agendamento
                  </h1>
                </div> -->
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
           
                <div  class="bg-blue-100 w-full   border-t-2 border-blue-200 mt-6 2xl:justify-center  flex 2xl:flex-col 2xl:items-center
                flex-col ">
                   <!-- <button @click.prevent="clicar()" class="bg-blue-700 text-white py-2 px-8 mb-8 rounded-lg ml-4">Inserir</button> -->
                   <div>
                   <h1 class="text-red-700 font-sans text-4xl mb-6 mt-6  text-center"> Agendamentos </h1>
                  </div>
                      <div class=" mb-1 border-2 border-gray-400 2xl:w-1/2 lg:container lg:mx-auto  lg:w-2/3 w-11/12 mx-auto container flex flex-col mt-6 px-2 py-4 bg-gray-50 rounded-lg shadow-xl" v-for="agendas in agenda" :key="agendas.id" >
                          <div>
                              <ul  class=" flex flex-col font-sans text-lg text-gray-900 space-y-1  ">
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
                              
                                
                              </ul>
                          </div>
                       <div>
                         
                         <!-- <button    class="py-2 px-4 bg-red-600 text-white rounded-md mt-4 mr-2">Excluir</button> -->
                         <!-- <input  type="submit" value="Esconder" class="py-2 px-4 bg-blue-600 text-white rounded-md mt-4 cursor-pointer"/> -->
                        
                       </div>
                  </div>
                         
                        
          </div>
        </div>
      </div>
      </div>
    </section>
  </div>
  <!-- <div class="w-full bg-gray-600 text-gray-50 ">
    <h3> Todos Diretos Reservados &copy; - {{new Date().getFullYear()}}  </h3>
  </div> -->
  <div class="relative bottom-0 mt-2 ">
    <Footer/>
  </div>
</template>

<script>
import Logado from "../components/compLogado/userLogado.vue";
import { getDocs, collection,  getFirestore} from "firebase/firestore";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import Footer from "../components/footer.vue"

// import * as firebase from "firebase/app";
// import db from "../components/db/dbConfig";


export default {
  name: "userLogado",
  data() {
    return {
      agenda: [],
      email: '',
      isLoggedIn: false,
      enviar:'',
      // esconder: true,
      

      
    };
  },

  components: {
    Logado,
    Footer,
  },

  // methods:{

    // esconderUser(){

    //   this.esconder = !this.esconder;

    // },

// ============|||||||||||| O CÓDIGO NÃO DEU CERTO, FICARÁ PARA FUTURAS ATUALIZÇÕES||||||||||||||||||| ==============

      // async deleteUser(){
      //   const db = getFirestore();
      //   const userId = getAuth().currentUser.uid;
      //   const querySnapshot = await getDocs(collection(db, "usuarios"));
      //   querySnapshot.forEach((daora) => {
         
         
      //     const userDb = daora._document.key.path.segments
          
      //     if(userDb[6] != userId){
      //       console.log("Lógica")

      //     }else{
      //       console.log("Não Lógico")
      //     }

        //  console.log(userDb[6])

          // console.log(user)
        
          // console.log(userDb)
         

          // deleteDoc(doc(db, "usuarios", `${userDb[6]}`));
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
        // });
        
        // deleteDoc(doc(db, "usuarios", buscar))

     
     
      

    
      //  for(let index = 0; index < this.agenda.length; index++ ){
      //    if(id == this.agenda[index].id){

      //      deleteDoc(doc(db, "usuarios", id))
      //      this.agenda.splice(index,1);
      //    }
      //  }
      //     console.log("excluido!")
          
  //   }
   

  // },

  // COMANDO DE USUÁRIO LOGADO
  async created() {
  const dbuser = getAuth();
  onAuthStateChanged(dbuser, (user) => {
   
        this.email = user.email;    

  });

  // function inData(data = new Date()){
  // const ano = data.getFullYear()
  // return ano
  // }
  // console.log(inData())


  // COMANDO PARA ADICIONAR TELA FINAL PARA O USUARIO
  const dbUser = getFirestore();
  const user = await getDocs(collection(dbUser, "usuarios"));
  
  user.forEach((doc) => {
 
  const dbAuth = getAuth().currentUser.uid;
  const dataUser = doc.data(); 

    const userTeste = doc.data().user_id;
    // const userData = doc.data().dia;
    const emailUser = getAuth().currentUser.email;



    // TRATAMENTO DA DATA PARA FORMATO BRASILEIRO
   



   

          // console.log(dataUser.responsavel);
          // console.log(dataUser.situacao);
         
    const social = process.env.VUE_APP_FIREBASE_EMAIL_SOCIAL
    const fundi = process.env.VUE_APP_FIREBASE_EMAIL_FUNDAMENTALI
    const fundii = process.env.VUE_APP_FIREBASE_EMAIL_FUNDAMENTALII
    const infantil = process.env.VUE_APP_FIREBASE_EMAIL_INFANTIL
    const diretora = process.env.VUE_APP_FIREBASE_EMAIL_DIRETORIA
   
    // SOMENTE OS INFORMATICA SERÁ O ADMINISTRADOR E VAI VER TODAS AS PUBLICAÇÕES
    if(emailUser === process.env.VUE_APP_FIREBASE_EMAIL_INFORMATICA){
    
        const dbMonitorUser = {
        user_id: userTeste,
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
    else if(emailUser === social && dataUser.situacao === "Agendamentos" && dataUser.responsavel === "Assistente-Social" ){
      

          const dbMonitorUser = {
          user_id: userTeste,
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
    else if(emailUser === fundi && dataUser.seguimento === "Fundamental-I" && dataUser.responsavel === "Professor" ){
      

          const dbMonitorUser = {
          user_id: userTeste,
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
    else if(emailUser === fundii && dataUser.seguimento === "Fundamental-II" && dataUser.responsavel === "Professor" ){
      

          const dbMonitorUser = {
          user_id: userTeste,
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
    else if(emailUser === infantil && dataUser.seguimento === "Edu-Infantil" && dataUser.responsavel === "Professor" ){
      

          const dbMonitorUser = {
          user_id: userTeste,
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
    else if(emailUser === diretora && dataUser.situacao === "Agendamento" && dataUser.responsavel === "Diretoria" ){
      

          const dbMonitorUser = {
          user_id: userTeste,
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


    // USUÁRIO RESTRITOR - IRÃO VER SOMENTE SUAS PUBLICAÇÕES
      else if(userTeste === dbAuth){

        const dbMonitor = {
        user_id: userTeste,
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

<template>

<!-- TELA DE LOGIN -->
  <div class=" container mx-auto w-1/2  h-72 bg-gray-100 flex justify-between  items-center mt-2 border-2">
    <div class=" flex flex-col items-center justify-center w-full container mx-auto border-r-2 border-gray-500">
        <h1 class="font-thin text-xl text-blue-900 mb-4">Login</h1>
    
        <form @submit.prevent="login" class="font-thin  ">
          
          login: <input type="email"  v-model="loginL" placeholder="nome ou email" ><br><br>
          senha: <input type="password" v-model="senhaL"><br><br>
          <input type="submit" value="Enviar" class="cursor-pointer bg-blue-700 text-lg text-blue-50 px-4 py-1 rounded-md ">
          <div class="mt-4 mb-2 flex items-center justify-end ">User: {{this.email}} 
              <div class="flex justify-end items-center py-1 pr-2 ">
            
              <button @click.prevent="signUp()" class="flex p-1 bg-red-500 rounded-md ml-2 text-gray-50 ">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
                  Sair
              </button>
          </div>
          </div>

        </form>
    </div>

    <!-- TELA DE CADASTRO -->
     <div class=" flex flex-col items-center justify-center w-full container mx-auto">
        <h1 class="font-thin text-xl  mb-4">Cadastrar</h1>
    
        <form @submit.prevent="register" class="font-thin text-gray-900 ">
          
          login: <input type="email" v-model="loginR"><br><br>
          senha: <input type="password" v-model="senhaR"><br><br>
          <input type="submit" value="Cadastrar" class="cursor-pointer bg-blue-700 text-lg text-blue-50 px-4 py-1 rounded-md ">
          

        </form>
    </div>
  </div>
  <!-- aqui vai o conteudo logado -->
  <div class="bg-gray-200 w-full h-full  mt-8 flex justify-start items-center py-2 px-2 ">
    <div class="w-1/4 flex  justify-start items-center border-r-2 border-gray-800">
          
          <div class="space-y-2">
              <form @submit="enviar" class="space-y-2">

                  <div>
                    Nome: <input type="text" v-model="form.dia" >
                  </div>
                  <div>
                    Usuário: <input type="text" v-model="form.horario">
                  </div>
                  <div>
                    item03: <input type="text" v-model="form.responsavel" >
                  </div>
                  <div>
                    item04: <input type="text" v-model="form.situacao" >
                  </div>
                  <div>
                    item05: <input type="text" v-model="form.motivo" >
                  </div>
                  <div>
                    item06: <input type="text" v-model="form.link" >
                  </div>
                  <input type="submit" value="Enviar" class="cursor-pointer bg-blue-700 text-lg text-blue-50 px-4 py-1 rounded-md ">
              </form>
          </div>
    </div>
    <div v-if="isLoggedIn" class="w-1/2 flex gap-4  ml-2   ">
       <ul  class="bg-yellow-500 px-8 flex flex-col justify-center items-center w-full" v-for="agendas in agenda" :key="agendas.id">
            <h2>lista</h2>
            <li>Nome = {{agendas.dia}} </li>
            <li>Usuário= {{agendas.horario}}</li>
            <li>user = {{agendas.responsavel}} </li>
            <li>user = {{agendas.situacao}} </li>
            <li>user = {{agendas.motivo}} </li>
            <li>user = {{agendas.link}} </li>
          </ul>
    </div>
  </div>
</template>
<script>
// import * as firebase from "firebase/app"
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from "firebase/auth"
import {getFirestore, collection,  getDocs, addDoc} from "firebase/firestore"
import "../db/dbConfig"
export default {
  name:'user',
  data(){
    return{
        loginL:null,
        senhaL:null,
       
        email:'',
        loginR:null,
        senhaR:null,

      user:{ },

      isLoggedIn: false,
      
      agenda:[],

      form:{
        dia: null,
        horario:null,
        responsavel: null,
        situacao: null,
        motivo: null,
        arquivo: null,
        link:null,
      }
    }
    
  },
  // COMANDO DE USUÁRIO LOGADO
  async created() {
  const dbuser = getAuth();
  onAuthStateChanged(dbuser, (user) => {
   
  this.email = user.email;    

  console.log(user.email)         
  });


  // COMANDO PARA ADICIONAR TELA FINAL PARA O USUARIO
  const dbUser = getFirestore();
  
  const user = await getDocs(collection(dbUser, "usuarios"));
  user.forEach((doc) => {

    const dbAuth = getAuth().currentUser.uid;

    const userTeste = doc.data().user_id;

    if(userTeste === dbAuth){

       const dbMonitor = {
      user_id: userTeste,
      dia: doc.data().dia,
      horario: doc.data().horario,
      responsavel: doc.data().responsavel,
      situacao: doc.data().situacao,
      motivo: doc.data().motivo,
      // arquivo: doc.data().arquivo,
      link: doc.data().link,
      };
      this.agenda.push(dbMonitor);
      console.log("Id do usuario dentro do form: ", userTeste)
      console.log("usuário conectado no sistema: ", dbAuth)
        console.log("ok")
    }
    // const userId = getAuth().currentUser;
    // const dbUserConnect = userId.uid;
    
   
      
  });
  
  

  const verUser = dbuser.currentUser
  if(verUser.uid){
    this.isLoggedIn =  true;
    console.log(verUser.uid)

  }

  },
  // CAMANDO PARA ENVIAR AO BANCO
    methods: {
    async enviar() {
    try{
     const dbUser = getFirestore();
     const authentication = getAuth();
     const userConnected = authentication.currentUser.uid; 
    
    
        const usuarioDb = {
        user_id:userConnected,
        dia: this.form.dia,
        horario: this.form.horario,
        responsavel: this.form.responsavel,
        situacao: this.form.situacao,
        motivo: this.form.motivo,
        link: this.form.link,
       }

       await addDoc(collection(dbUser, "usuarios"), usuarioDb)

       console.log(userConnected)

     
       

      .then(() =>{
          this.$swal({
            icon:'success',
            text:'Enviado com Sucesso!',
            showConfirmButton: false,
            timer: 2500,
          })
          .then(()=>{
              setTimeout(() => {
                  this.$router.replace({name: 'user'})
              }, 5000);
          })
          
        })}catch(error){
                  this.error = error.message;
          }
          
          console.log("Documento foi adicionado com Sucesso!!!! ");
     
    },

    // COMANDO CRIAR USUARIO
     async register(){
      try{
        const dev = getAuth()
        // const dbUser = getFirestore();
        await createUserWithEmailAndPassword(dev, this.loginR, this.senhaR)
        
       
            
        .then (() =>{
            this.$swal({
            icon:"success",
            title:"Registrado com sucesso!", 
            showConfirmButton: false, 
            timer: 2000
                        
          })
                        
        }).then(()=>{
            setTimeout(() => {
                this.$router.push({name: 'user'})
            }, 2000);
        })
       
       }catch(error){
         this.error = error.message; 
       }
            
           
     },
      //  COMANDO DE LOGOUT(DESLOGAR)
       signUp(){
       const auth = getAuth();
       signOut(auth)
       .then(() => {
        this.$swal({
            icon:'success',
            title: 'Desconectado com sucesso!!',
            text: 'Obrigado, volte sempre!!!!',
            showConfirmButton: false,
            timer: 2000
        }).then(()=>{
              setTimeout(() => {
                this.$router.replace({name: 'user'})
              }, 2000);
        })            
      }).catch((error) => {
          this.error = error.message
      });
      },


      // COMANDO PARA LOGAR
      async login(){
            try{
                
                    const dev = getAuth()
                   await signInWithEmailAndPassword(dev, this.loginL, this.senhaL)
                  
                    .then(()=>{
                        this.$swal({
                        icon:'success',
                        title: "conectado com sucesso!",
                        showConfirmButton:false,
                        timer:2000
                             })
                        })
                        .then(()=>{
                            setTimeout(() => {
                                this.$router.replace({name: 'user'})
                        }, 2000);
                     })
                
                   
            }catch(error){

                        const erro = error.code
                        switch(erro){
                            case "auth/invalid-password":
                                this.$swal({
                                    icon:'error',
                                    title:'Senha Inválida!',
                                })
                                break
                             case "auth/invalid-email":
                                this.$swal({
                                    icon:'error',
                                    title:'Email Inválido!',
                                })
                                break
                             case "auth/user-not-found":
                                this.$swal({
                                    icon:'error',
                                    title:'Usuário não encontrado!',
                                })
                                break
                                case "auth/email-already-exists":
                                this.$swal({
                                    icon:'error',
                                    title:'Email já existe, tente outro',
                                })
                                break
                                 case "auth/wrong-password":
                                this.$swal({
                                    icon:'error',
                                    title:'Senha Incorreta!',
                                })
                                break
                                case "auth/null-user":
                                this.$swal({
                                    icon:'error',
                                    title:'Usuário Nulo!',
                                })
                                break
                                 case "auth/invalid-claims":
                                this.$swal({
                                    icon:'error',
                                    title:'Usuário Claims!',
                                })
                                break
                                  case "auth/too-many-requests":
                                this.$swal({
                                    icon:'error',
                                    title:'Solicitação bloqueadas, tente mas tarde!',
                                })
                                break
                                
                                default:
                                    this.error = error.message
                                  
                                
                                }
                    }
                     
        },
  },
 
 
}
</script>
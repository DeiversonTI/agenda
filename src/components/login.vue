<template>  
  <div class="modal__alert" @load="carregar()">
    <div class="modal__links">
      <p>
        <i class="fa-solid fa-triangle-exclamation fa-lg fa-beat-fade" ></i>Atenção</p>
        <hr>
      <span><i class="fa-solid fa-desktop"></i> Atualize a página <q>Ctrl</q>+<q>f5</q></span>
      <span><i class="fa-solid fa-mobile-screen"></i> Usuário mobile, arraste a tela para baixo</span>
    </div>
  </div>
  <!-- TELA DE LOGIN -->
  <div class=" w-full flex justify-center items-center  bg__dark ">
    <div class="flex gap-4 items-center justify-center w-full lg:h-auto">
      <div class="w-full h-screen  ">
        <div class="flex w-full justify-end items-center gap-1 sm:gap-2 sm:mt-2 mt-2 sm:pr-6 pr-4 ">          
          <div @click="isViewTrocar()" v-if="isView===true">
            <p
              @click.prevent="trocarView()"
              class="
                text-Sky-500
                font-bold
                sm:text-md
                text-sm
                border
                cursor-pointer
                sm:py-2
                py-1
                sm:px-12
                px-2
                border-Sky-500
                rounded-md
                shadow-none
                hover:bg-Sky-500 
                hover:text-white
                hover:border-transparent
              "
            >
              Login              
            </p>
          </div>
          <div @click="isViewTrocar()" v-else>            
            <p
              @click.prevent="trocarView()"
              class="
              text__white
                font-bold
                sm:text-md
                text-sm
                border
                sm:py-2
                cursor-pointer
                py-1
                sm:px-12
                px-2
                border-gray-50
                rounded-md
                shadow-none
                hover:bg-red-600
                hover:text-white
                hover:border-transparent
              "
            >
              Cadastrar              
            </p>
          </div>
        </div>

        <div class="h-36 sm:h-28 2xl:h-1/4 my-1 sm:mb-8 2xl:my-1 mx-auto items-center flex justify-center anima z-30  ">
          <img class="w-40 agenda" src="../assets/logo_new_agenda_blue.png" alt="" />
        </div>

        <!-- FORMULÁRIO LOGIN -->
        <!-- sm:bg-Cyan-950 -->
        <div
          class="       
            bg__form__dark
            px-8            
            sm:w-1/3
            2xl:w-1/4
            w-full
            sm:py-2
            sm:pb-4           
            md:mx-auto
            sm:rounded-lg                      
            animate            
          "
        >
          <form  v-if="trocar == true" >
            <div class="text-center">
              <p class="text-2xl fonte text__white pb-2 ">Login</p>
            </div>
            <div class="mb-2">
              <label
                class="block text__white text-md  font-bold mb-0"
                for="username"
              >
                Email
              </label>
              <input
                v-model="email"
                required
                class="                  
                  appearance-none
                  rounded
                  border-2                 
                  w-full
                  py-1
                  px-2
                  bg-white
                  text-gray-700
                  opacity-100
                  leading-light
                  focus:outline-none focus:shadow-outline
                "
                id="email"
                type="email"
                placeholder="Entre com o Email"
              />
            </div>

            <div>
              <label class="block text__white text-md font-bold mb-0" for="password">Senha</label>
              <div class="rounded border-2">
                <div class=" text-gray-700 bg-white flex justify-end items-center w-full relative ">
                  <input
                    v-model="password"
                    required
                    class="                      
                      appearance-none   
                      relative                   
                      focus:border-red-500                     
                      w-full
                      py-1
                      px-2                     
                      opacity-100
                      leading-tight
                      focus:outline-none focus:shadow-outline
                    "
                    id="password"
                    type= "password"
                    placeholder="Digite sua Senha"
                  />
                  <div id="eye_view" class="view cursor-pointer absolute mr-2 " @click="eyeView()"></div>
                </div>
                <!-- <div id="eye_view" class="view cursor-pointer " @click="eyeView()"></div> -->
              </div>             
            </div>
            <div class="mb-3">
              <div class="w-full text-left">
                <router-link to="resetPassword">
                  <p
                    class="
                      cursor-pointer
                      inline-block
                      align-baseline
                      font-bold
                      text-xs
                      md:text-sm
                      text__white
                      hover:text-red-600"
                  >
                    Esqueceu a Senha?
                  </p>
                </router-link>
              </div>
            </div>

            <!-- BOTÕES DO FORMULÁRIO -->
            <div
              class="
                w-full
                text-center
                m-auto
                md:flex md:items-center md:justify-start
                gap-2
                sm:pt-1
              "
            >
              <div class="sm:w-full bg-gradient-to-r from-Sky-400 to-Sky-600 rounded">
                <button
                  @click.prevent="login"
                  class="
                    w-full
                    sm:text-xl
                    sm:bg-gradient-to-r
                    sm:from-Sky-400
                    sm:to-Sky-600
                    text-white
                    font-bold
                    py-3
                    px-16
                    rounded
                    focus:outline-none focus:shadow-outline
                    hover:bg-gradient-to-l hover:from-Sky-600 hover:to-Sky-400
                  "
                >
                  ENTRAR
                </button>
              </div>
            </div>
          </form>

          <!-- FORMULÁRIO REGISTRAR -->
          <div v-if="trocar=== false">
            <RegisterView />
          </div>
        </div>
      </div>
    </div>
     <!-- BOTÃO DE AJUDA -->

  </div>
  <div class="flex items-center justify-between w-full z-50" style="position: fixed; bottom: 5px; padding: 2px 8px">
    <infoFooterHome />
    <!-- <div class="text__dark text__copyright text-xs font-thin sm:text-sm">
      &copy; {{ new Date().getFullYear() }} Escola Rural São Vicente de Paulo - Todos os direitos Resevados.
    </div>
    <div>
      <router-link
         to="/help">
        <p class="font-mono text-red-500 font-bold">Ajuda</p>
      </router-link>
    </div> -->
  </div>

  <!-- <svg
    class="z-10 sm:hidden"
    style="position: fixed; bottom: -200px; right: -250px; width:500px;"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#fb923c"
      d="M45.6,-58.6C51,-49.8,41.8,-27.8,42.7,-9.5C43.6,8.8,54.6,23.4,52.7,33.9C50.8,44.4,35.8,51,19.4,59.8C2.9,68.7,-15.2,80,-26.5,75C-37.9,69.9,-42.6,48.6,-45.2,32C-47.7,15.4,-48.1,3.4,-40.4,-1.3C-32.6,-6,-16.7,-3.5,-8.6,-11.8C-0.6,-20.1,-0.3,-39.2,9.9,-51C20.1,-62.8,40.2,-67.3,45.6,-58.6Z"
      transform="translate(100 100)"
    />
  </svg> -->
  
    <!-- <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 text-red-500 cursor-pointer"
      title="Ajuda"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg> -->
  
  <!-- <div v-show="model === true" class=" flex justify-center items-center h-screen fixed z-40 w-full  " style="background-color: rgba(0, 0, 0, .8);">
    <div class="w-full lg:w-1/2 xl:w-1/3  h-auto py-4 rounded-md bg-gray-900 text-center flex-col justify-center items-start mx-2 border-2 border-gray-100 ">
       <div class="text-right mb-2 ">
          <button @click="closeBtn" class="bg-red-700 py-1 px-3 rounded-md text-white mr-4 border">X</button>
        </div> 
      <div class="font-sans text-gray-50 text-xs md:text-lg px-2 "><b class=" text-gray-50 text-xl md:text-2xl">Caro Usuário</b>,<br>Para que possamos ter um melhor aproveitamento do sistema,<br> 
        faça a limpeza periódica dos cookies e históricos do navegador.<br> Segue abaixo um pequeno tutorial. <br>
        Qualquer dúvida procure o setor de TI.
      </div>
      <div class="flex-col justify-center items-center w-full ">
        <div class="w-full px-4 ">
          <div class="flex justify-center items-center gap-12 pt-4 pb-2 text-gray-800">
            <div @click="androidMet"  class="cursor-pointer  bg-Sky-500 px-4 rounded-md font-bold border border-Sky-400 shadow-2xl">Android</div>
            <div @click="androidMet"  class="cursor-pointer bg-Sky-500 px-4 rounded-md font-bold">iPhone</div>
          </div>
          <hr>
          <div class=" w-full  mx-auto" >
            <div v-if="android === false"  class="text-sm w-full space-y-1 pt-4">
              <div class="text-lg text-gray-50 text-left">Apagar todos os cookies do <b>Android</b></div>
                <ul class="text-left text-xs space-y-1 text-gray-50">               
                    <div>Se você remover os cookies, sairá dos sites, e suas preferências salvas poderão ser excluídas.</div>
                    <li>1. No smartphone ou tablet Android, abra o app Chrome.</li>
                    <div class="flex flex-wrap">
                        <li>2. À direita da barra de endereço, toque em Mais </li>
                        <li>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                          </svg>
                        </li>
                        <li> > <b>Configurações.</b></li>
                    </div>
                    
                    <li>3. Toque em<b> Privacidade e segurança</b> > <b>Remover dados de navegação.</b></li>
                    <li>4. Escolha um intervalo de tempo, <b>como Última hora</b> ou <b>Todo o período.</b></li>
                    <li>5. Marque <b>Cookies e dados do site</b> e desmarque todos os outros itens.</li>
                    <li>6. Toque em <b>Limpar dados</b> > <b>Limpar.</b></li>
                </ul>
            </div>
              
            <div v-if="android === true" class="text-sm w-full space-y-1 pt-4">
                <div class="text-lg text-left text-gray-50">Apagar todos os cookies do <b>iPhone</b></div>
                  <ul class="text-left text-xs space-y-1 text-gray-50">               
                    <div>Se você remover os cookies, precisará fazer login em sites novamente, e as preferências salvas poderão ser excluídas.</div>
                      <li>1. No iPhone ou iPad, abra o Chrome.</li>
                      <div class="flex flex-wrap justify-start items-center">
                        <li>2. Toque em Mais </li>
                        <li>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                          </svg>
                        </li>
                        <li> > Configurações.</li>
                        
                      </div>
                      <li>3. Toque em <b>Privacidade e segurança</b> > <b>Remover dados de navegação.</b></li>
                      <li>4. Marque a opção <b>Dados do site e arquivos "cookies".</b></li>
                      <li>5. Desmarque os outros itens.</li>
                      <li>6. Toque em <b>Remover dados de navegação</b> > <b>Remover dados de navegação.</b></li>
                      <li>7. Toque em <b>Concluído.</b></li>
                  </ul>
            </div>
            
          </div>
        </div>
         
        </div>  
           
      </div>
     
    </div> -->
 
</template>
<script>
import * as firebase from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import RegisterView from "../components/Registrar.vue"; 
import infoFooterHome from "../components/infoFooterHome.vue"

export default {
  components: {
    RegisterView,
    infoFooterHome
  },

  // created(){
  //   this.model = true
  // },
  name: "login",
  data() {
    return {
      showPassword: true,
      // passField: "password",
      email: "",
      password: null,
      isDesabled: true,
      trocar: true,
      isView: false,
      model: false,
      android: false,
      modelClose: false
      // password: '',
      // isPwd: true,
      
    };
  },
  created(){
   this.carregar();
  },
  
  methods: {
    carregar(){
      setTimeout(()=>{
        const load = document.querySelector(".modal__alert");
        load.style.display = "none";
      }, 6000)
    },
     // FUNÇÃO MOSTRAR A SENHA
     eyeView(){
      const eyeView = document.getElementById("eye_view");
      const passwordEye = document.getElementById("password");
      if(passwordEye.type === "password"){
        passwordEye.setAttribute("type", "text");
        eyeView.classList.add("hide")
      }else{
        passwordEye.setAttribute("type", "password");
        eyeView.classList.remove("hide");
      }
     },
     
    //  },
    // FUNÇÃO MOSTRAR A SENHA
    // toggleShow(){
    //   this.passField = this.passField === "password" ? "text" : "password"
    // },
    // closeBtn(){
    //   this.model = false
    // },
    // androidMet(){
    //   this.android = !this.android
    // },
   
    // FUNÇÃO ALTERAR O EYE VIEW (ABERTO OU FECHADO)
    //  passFieldNew(){
    //    this.showPassword = !this.showPassword;
    // },
  
    isViewTrocar() {
      this.isView = !this.isView;
    },
    
    trocarView() {
      this.trocar = !this.trocar;
    },
    async login() {
      try {
        firebase;
        const dev = getAuth();
        await signInWithEmailAndPassword(dev, this.email, this.password)
        .then(() => {
            const userGet = dev.currentUser.emailVerified;
            // const userEmail = dev.currentUser.email

            if(this.email === 'visitante@ersvp.g12.br'){
              this.$swal({
                icon: "success",
                title: "Visitante, seja bem-vindo!",
                showConfirmButton: false,
                timer: 2500,
              });
              setTimeout(() => {
                this.$router.replace({ name: "AuthVis" });
              }, 2000);
            }

            else if (userGet === false) {
              this.$swal({
                icon: "warning",
                title: "NEGADO! Verifique seu email!",
                showConfirmButton: false,
                timer: 2500,
              });
            } else if (userGet != false) {
              this.$swal({
                icon: "success",
                title: "Conectado com Sucesso!!!",
                showConfirmButton: false,
                timer: 2500,
              });

              setTimeout(() => {
                this.$router.replace({ name: "actiontela" });
              }, 2000);
            } else {
              alert("Por favor, entre em contato com o suporte!");
            }
          }
        );
      } catch (error) {
        const erro = error.code;
        switch (erro) {
          case "auth/invalid-password":
            this.$swal({
              icon: "error",
              title: "Senha Inválida!",
            });
            break;
          case "auth/invalid-email":
            this.$swal({
              icon: "error",
              title: "Email Inválido!",
            });
            break;
          case "auth/user-not-found":
            this.$swal({
              icon: "error",
              title: "Usuário Não Encontrado!",
            });
            break;
          case "auth/email-already-exists":
            this.$swal({
              icon: "error",
              title: "Email já existe!",
            });
            break;
          case "auth/wrong-password":
            this.$swal({
              icon: "error",
              title: "Senha Incorreta!",
            });
            break;
          case "auth/MISSING_PASSWORD":
            this.$swal({
              icon: "error",
              title: "Digite a Senha!",
            });
            break;
          case "auth/invalid-claims":
            this.$swal({
              icon: "error",
              title: "Usuário Claims!",
            });
            break;
          case "auth/too-many-requests":
            this.$swal({
              icon: "error",
              title: "Solicitação Bloqueadas, tente mas tarde!",
            });
            break;

          default:
            this.error = error.message;
        }
      }
    },
  },
};
</script>
<style scoped>
/*  */
@import url("https://fonts.googleapis.com/css2?family=Fredoka+One&family=Roboto:ital,wght@0,300;0,700;1,400;1,900&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700&family=Open+Sans:wght@300;400;500;600;700&family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;1,200;1,300&family=Prompt:wght@300;400;500;600;700&family=Roboto:wght@400;500;700&display=swap');


.view{  
  background: url('../assets/eye/hide1.png');
  width: 20px;
  height: 20px;
  background-size: cover;
  cursor: pointer;
  
  
}
.hide{
  background: url('../assets/eye/view1.png');
  width: 20px;
  height: 20px;
  background-size: cover;
  cursor: pointer;
  
}
.fonte {
  font-family: Fredoka + One;
  font-weight: 700;
  
}
.anima .logo{
  position: relative;
  animation: logo 1.5s ease-in-out forwards ;
}

.anima .agenda{
  position: relative;
  animation: agenda 2s ease-in-out forwards;
}
.animate{
  position: relative;
  animation: animate 1.2s ease-in-out forwards;  
}


@keyframes logo {
  0%{
    left: -850px;
  }
  100%{
    left: 0;
  }
}
@keyframes agenda {
  0%{
    right: -650px;
  }
  100%{
    right: 0;
  }
}
@keyframes animate {
  0%{
    right: -930px;
  }
  100%{
    right: 0;
  }
}
.modal__alert{
  position: absolute;
  left: 0;
  top:0;
  width: 100%;
  min-height: 100vh;
  background-color: rgba(19, 19, 19, 0.6);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.modal__alert .modal__links{
  background-color: rgb(155, 0, 0);
  width: auto;
  height: auto;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  animation: load 1.5s ease forwards;

}
@keyframes load {
 0%{
  transform: translateY(-50px);
  opacity: 0;
 }
100%{
  transform: translateY(50px);
  opacity: 1;
 }
 
}
.modal__alert .modal__links p{
  font-family: Poppins, sans-serif;
  font-weight: 500;
  font-size: 1.5rem;
  color: #dddddd;
  margin-bottom: 5px;
  
  display: flex;
  justify-content: flex-start;
  align-items:center;
  gap: 10px;
}

.modal__alert .modal__links span{
  font-family: Open Sans;
  font-size: 1.1rem;
  font-weight: 100;
  color: #e2e2e2;
  padding:5px 0;  
}
hr{
  margin-bottom: 15px;
  color: #e00909;
}
.btn_dark{
  background-color: rgb(124, 123, 123);
  width: 65px;
  height: 30px;
  border-radius: 50px;
  position: relative;
}
.btn_dark::before{
  content: "";
  border-radius: 100%;
  width: 30px;
  height: 30px;
  background-color: #dddddd;
  position: absolute;  
  right: 0;
}


</style>

 
<template>
  <svg
    class="z-10 sm:hidden"
    style="position: absolute; top: -170px; left: -170px"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#38bdf8"
      d="M30.9,-48.6C38.6,-43.2,42.3,-32.1,50.2,-21.1C58.1,-10.1,70.1,0.9,70.4,11.2C70.6,21.6,59.1,31.5,48.6,40.1C38,48.8,28.4,56.4,15.8,65.4C3.2,74.4,-12.4,84.8,-22.8,80.4C-33.2,76,-38.4,56.9,-50,43.4C-61.7,29.9,-79.9,22,-83.6,10.7C-87.4,-0.6,-76.7,-15.4,-66.3,-26.9C-55.8,-38.5,-45.6,-46.8,-34.6,-50.7C-23.6,-54.6,-11.8,-54,-0.1,-53.9C11.6,-53.7,23.3,-54,30.9,-48.6Z"
      transform="translate(100 100)"
    />
  </svg>

  <!-- TELA DE LOGIN -->
  <div class=" flex justify-center items-center absolute z-30">
    <div class="flex gap-4 items-center justify-center w-full lg:h-auto">
      <div class="hidden md:visible md:flex justify-center items-center w-full">
        <div>
          <img src="../assets/home-logo.jpg" alt="" style="max-width: 90%" />
        </div>
      </div>

      <div class="w-full h-screen sm:bg-gradient-to-l from-Sky-50">
        <div class="flex w-full justify-end items-center gap-1 sm:gap-2 sm:mt-2 mt-2 sm:pr-6 pr-4 ">
          
          <div @click="isViewTrocar()" v-if="isView===true">
            <p
              @click.prevent="trocarView()"
              class="
                text-Sky-600
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
                hover:bg-Sky-600 hover:text-white
              "
            >
              Login
              
            </p>
          </div>
          <div @click="isViewTrocar()" v-else>            
            <p
              @click.prevent="trocarView()"
              class="
                text-red-600
                font-bold
                sm:text-md
                text-sm
                border
                sm:py-2
                cursor-pointer
                py-1
                sm:px-12
                px-2
                border-red-500
                rounded-md
                shadow-none
                hover:bg-red-600 hover:text-white
              "
            >
              Cadastrar
              
            </p>
          </div>
        </div>

        <div class="h-36 sm:h-7/6 2xl:h-2/5 mx-auto items-center flex justify-center">
          <img class="w-52 md:w-2/5 " src="../assets/Agendamentos.png" alt="" />
        </div>

        <!-- FORMULÁRIO LOGIN -->
        <div
          class="
            sm:bg-white
            px-8
            sm:py-2
            mx-1
            md:mx-8
            sm:rounded-lg
            sm:shadow-xl
            sm:border-l
            sm:border-t
            sm:border-opacity-80
            border-gray-200
          "
        >
          <form v-if="trocar == true">
            <div class="text-center">
              <p class="text-4xl fonte text-blue-900 pb-6 pt-2">login</p>
            </div>
            <div class="mb-4">
              <label
                class="block text-Sky-800 text-md md:text-xl font-bold mb-1"
                for="username"
              >
                Email
              </label>
              <input
                v-model="email"
                required
                class="
                  shadow
                  appearance-none
                  rounded
                  w-full
                  py-4
                  px-3
                  text-gray-700
                  opacity-80
                  leading-tight
                  focus:outline-none focus:shadow-outline
                "
                id="email"
                type="email"
                placeholder="Entre com o Email"
              />
            </div>

            <div>
              <label
                class="block text-Sky-800 text-md md:text-xl font-bold mb-1"
                for="password"
              >
                Senha
              </label>
              <div class="flex justify-between items-center  rounded shadow">
                <div>
                  <input
                    v-model="password"
                    required
                    class="
                      
                      appearance-none
                      focus:border-red-500
                     
                      w-full
                      py-4
                      px-3
                      text-gray-700
                      opacity-80
                      leading-tight
                      focus:outline-none focus:shadow-outline
                    "
                    id="password"
                    :type="passField"
                    placeholder="Digite sua Senha"
                  />
                  </div>
                  <div class="pr-2">
                    <button @click="toggleShow">
                      <i @click="passFieldNew" class="opacity-20 text-Sky-900" :class="{'fa-solid fa-eye-slash': showPassword, 'fa-solid fa-eye': !showPassword}"></i>
                    </button>
                    
                  </div>
              </div>
             
            </div>
            <div class="mb-6">
              <div class="w-full text-left">
                <router-link to="resetPassword">
                  <p
                    class="
                      cursor-pointer
                      inline-block
                      align-baseline
                      font-bold
                      text-xs
                      md:text-lg
                      text-blue-500
                      hover:text-blue-800"
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
                sm:pt-4
              "
            >
              <div class="sm:w-0 bg-gradient-to-r from-Sky-400 to-Sky-600 rounded">
                <button
                  @click.prevent="login()"
                  class="
                    sm:bg-gradient-to-r
                    sm:from-Sky-400
                    sm:to-Sky-600
                    text-white
                    font-bold
                    py-2
                    px-16
                    rounded
                    focus:outline-none focus:shadow-outline
                    hover:bg-gradient-to-l hover:from-Sky-600 hover:to-Sky-400
                  "
                >
                  Logar
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
  </div>

  <svg
    class="z-30 sm:hidden"
    style="position: fixed; bottom: -150px; right: -170px"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#fb923c"
      d="M45.6,-58.6C51,-49.8,41.8,-27.8,42.7,-9.5C43.6,8.8,54.6,23.4,52.7,33.9C50.8,44.4,35.8,51,19.4,59.8C2.9,68.7,-15.2,80,-26.5,75C-37.9,69.9,-42.6,48.6,-45.2,32C-47.7,15.4,-48.1,3.4,-40.4,-1.3C-32.6,-6,-16.7,-3.5,-8.6,-11.8C-0.6,-20.1,-0.3,-39.2,9.9,-51C20.1,-62.8,40.2,-67.3,45.6,-58.6Z"
      transform="translate(100 100)"
    />
  </svg>

  <!-- BOTÃO DE AJUDA -->
  <router-link
    class="flex items-center justify-center z-50"
    style="position: fixed; bottom: 5px; right: 8px"
    to="/help"
  >
    <p class="font-mono text-red-500 font-bold">Ajuda</p>
    <svg
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
    </svg>
  </router-link>
  <div v-show="model === true" class=" flex justify-center items-center h-screen fixed  z-40 w-full" style="background-color: rgba(0, 0, 0, .8);">
    <div class="w-full  lg:w-1/2 xl:w-1/3 h-auto  py-4 rounded-md bg-white   text-center flex-col justify-center items-start mx-2 ">
       <div class="text-right mb-2 ">
          <button @click="closeBtn" class="bg-red-700 py-1 px-3 rounded-md text-white mr-4 ">X</button>
        </div> 
      <div class="font-sans text-xs md:text-lg px-4 "><b class=" text-xl md:text-2xl">Caro Usuário</b>,<br>Para que possamos ter um melhor aproveitamento do sistema,<br> 
        faça a limpeza periódica dos cookies e históricos do navegador.<br> Segue abaixo um pequeno tutorial. <br>
        Qualquer dúvida procure o setor de TI.
      </div>
      <div class="flex-col justify-center items-center w-full ">
        <div class="w-full px-4 ">
          <div class="flex justify-center items-center gap-12 pt-4 pb-2">
            <div @click="androidMet"  class="cursor-pointer  bg-gray-300 px-4 rounded-md font-bold">Android</div>
            <div @click="androidMet"  class="cursor-pointer bg-gray-300 px-4 rounded-md font-bold">iPhone</div>
          </div>
          <hr>
          <div class=" w-full  mx-auto" >
            <div v-if="android === false"  class="text-sm w-full space-y-2 pt-4">
              <div class="text-lg md:text-xl text-left">Apagar todos os cookies</div>
                <ul class="text-left text-xs md:text-sm space-y-2">               
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
              
            <div v-if="android === true" class="text-sm w-full space-y-2 pt-4">
                <div class="text-xl text-left">Apagar todos os cookies</div>
                  <ul class="text-left text-xs md:text-sm space-y-2">               
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
     
    </div>
 
</template>
<script>
import * as firebase from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import RegisterView from "../components/Registrar.vue";


export default {
  components: {
    RegisterView,
  },

  created(){
    this.model = true
  },
  name: "login",
  data() {
    return {
      showPassword: true,
      passField: "password",
      email: "",
      password: null,
      isDesabled: true,
      trocar: true,
      isView: false,
      model: false,
      android: false,
      modelClose: false
      
    };
  },
  
  methods: {
    // FUNÇÃO MOSTRAR A SENHA
    toggleShow(){
      this.passField = this.passField === "password" ? "text" : "password"
    },
    closeBtn(){
      this.model = false
    },
    androidMet(){
      this.android = !this.android
    },
   
    // FUNÇÃO ALTERAR O EYE VIEW (ABERTO OU FECHADO)
     passFieldNew(){
       this.showPassword = !this.showPassword;
    },
  
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
        await signInWithEmailAndPassword(dev, this.email, this.password).then(
          () => {
            const userGet = dev.currentUser.emailVerified;

            if (userGet === false) {
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
          case "auth/null-user":
            this.$swal({
              icon: "error",
              title: "Usuário Nulo!",
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
@import url("https://fonts.googleapis.com/css2?family=Fredoka+One&family=Roboto:ital,wght@0,300;0,700;1,400;1,900&display=swap");

.fonte {
  font-family: Fredoka + One;
  font-weight: 700;
  
}


</style>

 
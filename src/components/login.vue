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

  <div class="flex justify-center items-center relative z-40">
    <div class="flex gap-4 items-center justify-center w-full">
      <!-- <div class="lg:px-40 xl:px-56 lg:h-80 md:h-80 sm:h-80 xl:h-80 xl:w-3/4 2xl:h-80  2xl:w-3/5 sm:px-11 w-full mx-4 sm:flex sm:justify-center sm:items-center bg-gray-300  "> -->
      <div class="hidden md:visible md:flex justify-center items-center w-full">
        <div>
          <img src="../assets/home-logo.jpg" alt="" style="max-width: 95%" />
        </div>
      </div>

      <div class="w-full h-screen sm:bg-gradient-to-l from-Sky-50">
        <div class="h-48 mx-auto items-center flex justify-center">
          <img class="w-52 md:w-2/5" src="../assets/Agendamentos.png" alt="" />
        </div>

        <div
          class="
            sm:bg-white
            px-8
            sm:py-4
            mx-1
            md:mx-8
            sm:rounded-lg sm:shadow-xl sm:border-l sm:border-t sm:border-opacity-80
            border-gray-200
          "
        >
          <form>
            <div class="text-center">
              <p class="text-3xl fonte text-blue-900 pb-6 pt-2">login</p>
            </div>
            <div class="mb-4">
              <label
                class="block text-Sky-800 text-sm font-bold mb-1"
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
                  py-2
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
                class="block text-Sky-800 text-sm font-bold mb-1"
                for="password"
              >
                Senha
              </label>
              <input
                v-model="password"
                required
                class="
                  shadow
                  appearance-none
                  focus:border-red-500
                  rounded
                  w-full
                  py-2
                  px-3
                  text-gray-700
                  opacity-80
                  leading-tight
                  focus:outline-none focus:shadow-outline
                "
                id="password"
                type="password"
                placeholder="Digite sua Senha"
              />
              <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
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
                      
                      text-xs text-blue-500
                      hover:text-blue-800
                    "
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
                md:flex md:items-center md:justify-center gap-2
                sm:pt-4
                
              "
            >
              <div>
                <button
                  @click.prevent="login()"
                  class="
                    bg-gradient-to-r
                    from-Sky-400
                    to-Sky-600
                    text-white
                    font-bold
                    py-2
                    px-16
                    rounded
                    focus:outline-none focus:shadow-outline
                  "
                >
                  Logar
                </button>
              </div>
             
               <div class="flex items-center w-full justify-center md:justify-end sm:mt-0 mt-4">
                <p
                  class="
                    text-red-600
                    font-bold
                    text-md
                    border
                    py-2
                    px-12
                    border-red-500
                    rounded-md
                    shadow-none
                    hover:bg-red-600 hover:text-white
                  "
                >
                  <router-link to="/Registrar">Cadastrar</router-link>
                </p>
              </div>
            </div>
            <!-- <div
              class="
                justify-evenly
                sm:justify-between
                text-gray-900
                items-center
                flex
                text-center
                w-full
                sm:mt-3
                mt-4
                2xl:mt-5
              "
            >
              <div class="flex items-center w-full justify-end">
                <p
                  class="
                    text-red-600
                    font-bold
                    text-md
                    border
                    py-1
                    px-8
                    border-red-500
                    rounded-md
                    shadow-none
                    hover:bg-red-600 hover:text-white
                  "
                >
                  <router-link to="/Registrar">Cadastrar</router-link>
                </p>
              </div>
            </div> -->
          </form>
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
  <router-link class="flex items-center justify-center z-50" style="position:fixed; bottom: 5px; right: 8px;" to="/help">
  <p class="font-mono text-red-500 font-bold">Ajuda</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6  text-red-500 cursor-pointer"
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
  
</template>
<script>
import * as firebase from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      isDesabled: true,
    };
  },
  methods: {
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
        //    .then(()=>{
        //        this.$swal({
        //            icon:'success',
        //            title: "conectado com sucesso!"
        //        })
        //    })
        //    this.$router.push({name: 'Auth'})
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
          // then(()=>{
          //     this.$swal({
          //         icon:'success',
          //         title: "conectado com sucesso!"
          //     })
          // })
          // .then(()=>{
          //     setTimeout(() => {
          //         this.$router.replace({name: 'Auth'})
          //     }, 2000);
          // })
          // this.$router.push({name: 'Auth'})
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

/* input[type="email"] {
  background-image: url(../assets/mail.png);
  background-size: 1.2em;
  background-repeat: no-repeat;
  background-position: 7px 9px;
}

input[type="password"] {
  background-image: url(../assets/cadeado.png);
  background-size: 1.2em;
  background-repeat: no-repeat;
  background-position: 7px 9px;
} */
</style>

 
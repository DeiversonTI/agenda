<template>
  <div
    class="
      sm:w-full
      h-full
      sm:h-80 sm:rounded-r-lg sm:rounded-bl-none
      rounded-b-lg
      h-tratado
      md:h-auto
      pb-5
    "
  >
    <form
      @submit.prevent="login()"
      class="dark__bg__mode rounded-lg sm:h-96 px-3 pt-1 pb-10 mb-2 w-full h-full"
    >
      <h2 class="text-xl sm:text-2xl fonte text__white pb-2 pt-1 text-center">
        CADASTRO
      </h2>
      <div class="mb-4">
        <label
          class="block text__white text-md md:text-xl font-bold mb-1"
          for="email"
          >Nome</label
        >
        <input
          v-model="name"
          type="text"
          title="Entre seu nome "
          required
          class="
            border-2
            appearance-none
            rounded
            w-full
            sm:py-2
            py-2
            px-3
            text-gray-700
            opacity-100
            leading-tight
            focus:outline-none focus:shadow-outline
          "
          placeholder="Seu Nome"
        />
      </div>
      <div class="mb-4">
        <label
          class="block text__white text-md md:text-xl font-bold mb-1"
          for="email"
          >Email</label
        >
        <input
          v-model="email"
          type="email"
          title="Entre com o email da escola "
          required
          class="
            border-2
            appearance-none
            rounded
            w-full
            sm:py-2
            py-2
            px-3
            text-gray-700
            opacity-100
            leading-tight
            focus:outline-none focus:shadow-outline
          "
          placeholder="Seu Email @ersvp.g12.br"
          pattern=".+@ersvp\.g12\.br"
        />
      </div>
      <div class="mb-8 sm:mb-6">
        <label
          class="block text__white text-md md:text-xl font-bold mb-1"
          for="password"
        >
          Senha
        </label>
        <div class="rounded border-2 " >
          <div class=" text-gray-700 bg-white flex justify-end items-center w-full relative ">
            <input
              v-model="password"
              required
              class="                      
                appearance-none   
                relative                   
                focus:border-red-500                     
                w-full
                py-2
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
      <!-- <div class="mb-6 sm:mb-2">
        <label
          class="block text-Sky-800 text-md md:text-xl font-bold mb-1"
          for="password"
          >Senha</label
        >
        <input
          v-model="password"
          required
          class="
            shadow
            appearance-none
            rounded
            w-full
            sm:py-3
            py-2
            px-3
            text-gray-700
            opacity-80
            leading-tight
            focus:outline-none focus:shadow-outline
          "
          id="password"
          :type="password"
          title="Cadastre uma senha no mínimo com 8 digitos"
          placeholder="Cadastre sua senha com 8 digitos"
        />
      </div> -->
      
      <!-- <div class="flex items-center justify-center sm:justify-start sm:pt-1 xl:mt-1 sm:w-full bg-red-600 rounded "> -->
      <div class=" sm:w-full bg-red-600 rounded ">
        <div>
          <button 
          class="
          cursor-pointer
              bg-red-600
              hover:bg-red-500
              text-white
              font-bold
              py-4
              px-16
              sm:text-xl              
              w-full
              rounded
              focus:outline-none focus:shadow-outline
          "
          >
            CADASTRAR
          </button>
          <!-- <input
            type="submit"
            value="Cadastrar"
            class="
              cursor-pointer
              bg-red-600
              hover:bg-red-500
              text-white
              font-bold
              py-4
              px-16
              sm:text-xl              
              w-full
              rounded
              focus:outline-none focus:shadow-outline
            "
          /> -->
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import * as firebase from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";

export default {
  name: "login",
  data() {
    return {
      showPassword: true,
      passField: "password",
      email: "",
      password: "",
      name: "",
    };
  },

  methods: {
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
    // toggleShow(){
    //   this.passField = this.passField === "password" ? "text" : "password"
    // },
    // FUNÇÃO ALTERAR O EYE VIEW (ABERTO OU FECHADO)
    //  passFieldNew(){
    //    this.showPassword = !this.showPassword;
    // },
    async login() {
      firebase;
      const userId = getAuth();

      await createUserWithEmailAndPassword(userId, this.email, this.password)
        .then(() => {
          const userGet = userId.currentUser;

          const actionCodeSettings = {
            // PRECISA SER ALTERADO SEMPRE ANTES DO BUILD

            // url: 'http://localhost:8080/#/',
            url: "https://agenda.ersvp.g12.br/#/",
          };

          sendEmailVerification(userGet, actionCodeSettings).then(() => {
            this.$swal({
              html:
                '<h1 style="font-size:1.4em; font-family:sans-serif;">ACESSE O WEBMAIL</h1>' +
                '<a href="https://www.ersvp.g12.br:2096/" target="_blank"><strong style="color:white; font-size:0.9em; background:red; border-radius:5px; padding: 1px 50px;">CLICK AQUI</strong></a>',
              showConfirmButton: false,
              timer: 12000,
              icon: "success",
              // text:"Enviamos uma CONFIRMAÇÃO para seu email!",
              footer:
                '<strong style="color:red">**Enviamos uma CONFIRMAÇÃO para seu email!</strong>',
            }).then(() => {
              setTimeout(() => {
                this.$router.go({ name: "Home" });
              }, 2000);
            });
          });
          updateProfile(userId.currentUser, {
            displayName: this.name,
          })
            .then(() => {
              console.log("Uhuu Gravou!");
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          const erro = error.code;
          switch (erro) {
            case "auth/email-already-in-use":
              this.$swal({
                icon: "error",
                title: "Email em uso, tente outro!",
                showConfirmButton: false,
                timer: 2000,
              });
              break;

            default:
              this.$swal({
                icon: "error",
                title: "Digite uma senha válida!",
                showConfirmButton: false,
                timer: 2000,
              });
          }
        });
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
.h-tratado {
  height: auto;
}
.view{  
  background: url('../assets/eye/hide1.png');
  width: 20px;
  height: 20px;
  background-size: cover;
  cursor: pointer;
  margin-right: 10px;
}
.hide{
  background: url('../assets/eye/view1.png');
  width: 20px;
  height: 20px;
  background-size: cover;
  cursor: pointer;
  margin-right: 10px;
}
</style>


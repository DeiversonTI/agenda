<template>

<div>
    <!-- navbar -->
    <div class="bg-red-700 flex justify-between items-center md:pl-12 sm:pr-12 pr-4 pl-4 text-white">
        
            <div>
                <img src="@/assets/logo.png" alt="" class="w-36 py-4">
            </div>
            <div>
                <h1 class="font-thin text-2xl">Documentação</h1>
            </div>
       
    </div>

    <!--Body  -->
    <div class=" bg-gray-200 h-screen">
        <div class=" flex-col mx-auto container w-full sm:w-full md:w-1/2 bg-gray-50 sm:pl-8 sm:pr-8 pl-2 pr-2 h-screen pt-4 mt-1">
            <div>
                <h3 class="font-medium text-2xl">Criando um cadastro novo</h3>
                <p class="break-words text-justify text-base">Por padrão no primeiro acesso é necessário criar um novo cadastro para logar no sistema. </p>
                <br>
                <h3 class="font-medium text-xl"><span class="font-extrabold font-sans text-2xl">Etapa 1</span> -  Criar um novo cadastro </h3>
                <p class="break-words text-justify text-base">Para criar o cadastro, click em <span class="font-semibold text-xl">1º ACESSO</span> e execute o cadastro.</p>
                <p class="text-justify font-thin text-lg"><span class="text-red-700 font-extrabold ">Obs:. </span>O email usado para o cadastro é o da instituição (xxxx@ersvp.g12.br) e a senha poderá criar um novo ou usar o existente.</p>
                <br>
                <h3 class="font-medium text-xl"><span class="font-extrabold font-sans text-2xl">Etapa 2</span> -  Confirmação do Email </h3>
                <p class="break-words text-justify text-base">Após ter feito o cadastro, verifique seu email e click no link que foi enviado, após isso siga as instruções.</p>
                 
                 <br>
                <h3 class="font-medium text-xl"><span class="font-extrabold font-sans text-2xl">Etapa 3</span> -  Logando no Sistema </h3>
                <p class="break-words text-justify text-base">Após executar todo o processo anterior, você será redirecionado para a tela de login, faça o login com as dados que acabou de criar.</p>
            </div>
          <div class=" flex items-end justify-around mt-8">
              <div class=" flex justify-center w-36 bg-blue-700 text-white py-2 rounded-md text-lg cursor-pointer">
                  <router-link to="/login" >Voltar</router-link>
              </div>
               <div class=" flex justify-center w-36 bg-red-600 text-white py-2 rounded-md text-lg cursor-pointer">
                  <router-link to="/Registrar" >Cadastrar</router-link>
              </div>
          </div>

        </div>
    </div>


</div>
    
</template>
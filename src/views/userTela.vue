<template>
  <div class="w-full h-screen bg-gray-50">
    <section class="bg-blue-100">
      <!--navbar -->
      <div
        class="
          w-full
          container
          mx-auto
          items-center
          justify-between
          py-2
          sm:flex
        "
      >
        <div class="flex items-center justify-center">
          <img src="../assets/escola.png" alt="" class="w-72" />
        </div>
        <div class="flex justify-center items-center">
          <h1 class="font-medium text-3xl text-gray-700 text-center">
            Agenda-Online
          </h1>
        </div>
      </div>
     
    </section>
    <section>
        <!-- body aplicação -->
      <div class="w-full bg-gray-50">
        <div>
          <div class="container mx-auto">
              <div class="flex items-center justify-between">
                <div>
                    <h1 class="py-8 font-thin text-5xl text-blue-600">Agendamento</h1>
                </div>
                <div class="flex items-center">
                    <h1 class="font-thin text-xl">Bem vindo(a), <span class="font-bold text-lg">Verônica</span></h1>
                   
                    <h1 class="border-2 py-1 px-1 ml-2 bg-blue-600 rounded-md text-white">logout</h1>
                
                </div>
                
              </div>
              

            <table class="table-auto w-full bg-gray-50 border-collapse border border-gray-800 text-center text-lg">
              <thead class="bg-gray-200">
                <tr class="border border-gray-800">
                  <th class="w-1/12 border border-gray-800">Nome</th>
                  <th class="w-1/12 border border-gray-800 ...">Dia</th>
                  <th class="w-1/12 border border-gray-800 ...">Horário</th>
                  <th class="w-1/12 border border-gray-800 ...">Local</th>
                  <th class="w-1/12 border border-gray-800 ...">Setor</th>
                  <th class="w-1/1 border border-gray-800 ...">Motivo</th>
                  <th class="w-1/12 border border-gray-800 ...">Upload</th>
                  <th class="w-1/12 border  border-gray-800">Link</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-gray-800">Verônica</td>
                  <td class="border border-gray-800">31/02/2025</td>
                  <td class="border border-gray-800">08h/10h10</td>
                  <td class="border border-gray-800">Salão</td>
                  <td class="border border-gray-800">Professor</td>
                  <td class="border border-gray-800">Vou precisar do salão para projetar um projeto para os alunos do 8º e 9º ano.</td>
                  <td class="border border-gray-800">Sem upload</td>
                  <td class="border border-gray-800">http://oi.com.br</td>
                 
                </tr>
                 <tr>
                  <td class="border border-gray-800">Verônica</td>
                  <td class="border border-gray-800">31/02/2025</td>
                  <td class="border border-gray-800">08h/10h10</td>
                  <td class="border border-gray-800">Salão</td>
                  <td class="border border-gray-800">Professor</td>
                  <td class="border border-gray-800">Vou precisar do salão para projetar um projeto para os alunos do 8º e 9º ano.</td>
                  <td class="border border-gray-800">Sem upload</td>
                  <td class="border border-gray-800">http://oi.com.br</td>
                 
                </tr>
                 <tr>
                  <td class="border border-gray-800">Verônica</td>
                  <td class="border border-gray-800">31/02/2025</td>
                  <td class="border border-gray-800">08h/10h10</td>
                  <td class="border border-gray-800">Salão</td>
                  <td class="border border-gray-800">Professor</td>
                  <td class="border border-gray-800">Vou precisar do salão para projetar um projeto para os alunos do 8º e 9º ano.</td>
                  <td class="border border-gray-800">Sem upload</td>
                  <td class="border border-gray-800">http://oi.com.br</td>
                 
                </tr>
               
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
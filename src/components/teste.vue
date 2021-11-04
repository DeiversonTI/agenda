<template>

<!-- <div>
   -->
        <!-- Breakpoint prefix	Minimum width	CSS

        sm	640px	@media (min-width: 640px) { ... }

        md	768px	@media (min-width: 768px) { ... }

        lg	1024px	@media (min-width: 1024px) { ... }

        xl	1280px	@media (min-width: 1280px) { ... }
        
        2xl	1536px	@media (min-width: 1536px) { ... } -->

<!-- </div> -->
<div>
    <div class="container my-4">
  <form>  
    <div class="input-group mb-3">
    <span class="input-group-text">Nombre</span>
    <input v-model="usuario.nombre" type="text" class="form-control">
    </div>
    <!-- Correo -->
    <div class="input-group mb-3">
    <span class="input-group-text">Correo</span>
    <input v-model="usuario.correo" type="text" class="form-control">
    </div>
    <!-- Botone Guardar -->
    <div class="mt-3">  
    <button @click.prevent="agregarDato()" 
            class="btn btn-primary">Guardar
    </button>
    </div>
  </form>
  </div>
<div class="container">
    <table class="table">
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">Nombre</th>
        <th scope="col">Correo</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in usuarios" :key="index">
        <th scope="row">{{index}}</th>
        <td>{{item.nombre}}</td>
        <td>{{item.correo}}</td>
      </tr>
    </tbody>
    </table>
  </div>
  <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</div>

   
 
 
</template>
<script>
// import Navbar from '../components/Navbar'
import { collection, getDocs, addDoc } from 'firebase/firestore';
// import { db } from "../main";
import {db}from "./db/dbConfig";


export default {
  name: 'Home',
  
  data() {
    return {
      usuarios: [],
      usuario: {
            nombre: '',
            correo: ''
    }
    }
  },
  methods:{

      async agregarDato(){
    const docRef = await addDoc(collection(db, "usuarios"), {
       
    nombre: this.usuario.nombre,
    correo: this.usuario.correo
  })
    .then(() => {
      console.log("Documento añadido");
    })
    .catch(function(error) {
      console.error("Error al añadir el documento: ", error);
    });
     console.log(docRef)
},
      
  // GET / OBTENER / Consulta instantánea 

  
    async obtenerDatos () { 
      const querySnapshot = await getDocs(collection(db, "usuarios"));
        querySnapshot.forEach((doc) => {
        let usuario = doc.data()
        usuario.id = doc.id
        this.usuarios.push(usuario)
        console.log(usuario)
      });
    },
  },
    mounted() {
      this.obtenerDatos();
    },
}
</script>


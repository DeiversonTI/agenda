<template>
<section  style="background-color:#000; margin:0 auto; color: white; width:930px;">
        <div style="padding:50px;">
                <div>
                        <form @submit.prevent="setDocument()">
                                <div style="margin:5px 0 30px 0;"><h1>ADICIONAR NOVO USUÁRIO</h1></div>
                                <div style="padding-bottom: 10px; ">
                                <label style="margin-right: 10px;" for="01">Nome: </label>
                                <input style="padding-left: 10px; border-radius: 5px; color:#000" type="text" id="01" v-model="teste.nome">     
                                </div>
                                <div style="padding-bottom: 10px; ">
                                <label style="margin-right: 10px;" for="02">Sobrenome: </label>
                                <input style="padding-left: 10px; border-radius: 5px; color:#000" type="text" id="02" v-model="teste.sobrenome">     
                                </div>
                                <div style="padding-bottom: 10px; ">
                                <label  style="margin-right: 10px;" for="03">Cidade: </label>
                                <input style="padding-left: 10px; border-radius: 5px; color:#000" type="text" id="03" v-model="teste.cidade">     
                                </div>
                                <button style="margin-top:45px; background-color: blue; width:120px; text-align: center; height: 27px; border-radius: 5px; color:#fff" type="submit">GRAVAR</button>
                         </form>
                </div>
                <hr style="margin: 25px 0">
                <div style="margin:5px 0 15px 0;"><h1>USUÁRIO  GRAVADOS</h1></div>
                <div class="get" style="margin-bottom: 10px; border: 1px solid #000; width: 280px; padding: 10px" v-for="teste in guarda" :key="teste.id">
                        <div style="display: flex; align-items: center;   "><h1 style="margin-right:8px;">Nome: </h1> {{ teste.nome}}</div>
                        <div style="display: flex; align-items: center;  "><h1  style="margin-right:8px;">Sobrenome: </h1> {{ teste.sobrenome}}</div>
                        <div style="display: flex; align-items: center;  "><h1  style="margin-right:8px;">Cidade:  </h1> {{ teste.cidade}}</div>
                        <button @click="editProd(teste)" style="margin-top:15px; margin-right: 10px; background-color: blue; width:120px; text-align: center; height: 27px; border-radius: 5px; color:#fff">EDITAR</button>
                        <button @click.prevent="delUser(teste.id)" style="margin-top:15px; background-color: red; width:120px; text-align: center; height: 27px; border-radius: 5px; color:#fff">DELETE</button>
                </div>

               <hr style="margin: 50px 0">
                <div class="block" style=" padding: 20px" >
                        <form @submit.prevent="update()" >
                                <div style="margin:5px 0 30px 0;"><h1>EDITAR USUÁRIO</h1></div>
                                <div  style="padding-bottom: 10px; " >
                                        <label  style="margin-right: 10px;" for="terra">Nome: </label>
                                        <input style="padding-left: 10px; border-radius: 5px; color:#000;" type="text" name="" id="terra" v-model="teste.nome" >
                                        </div>
                                <div style="padding-bottom: 10px; ">
                                        <label style="margin-right: 10px;" for="ceu">Sobrenome: </label>
                                        <input style="padding-left: 10px; border-radius: 5px; color:#000; display:inline-flex; align-items: flex-end;" type="text" name="" id="ceu" v-model="teste.sobrenome">
                                        </div>
                                <div style="padding-bottom: 10px; ">
                                        <label style="margin-right: 10px;" for="azul">Cidade: </label>
                                        <input style="padding-left: 10px; border-radius: 5px; color:#000; ;" type="text" name="" id="azul" v-model="teste.cidade">
                                </div>
                                <div  style="margin-top:45px; background-color: blue; width:120px; text-align: center; height: 27px; border-radius: 5px; color:#fff">
                                        <button type="submit">SALVAR</button>
                                </div>
                        </form>
                        
                </div>
        </div>
</section>

</template>

<script>
import {  getDocs,  collection, getFirestore, addDoc, doc,  setDoc, deleteDoc} from "firebase/firestore";

export default {
        name: 'Teste',
        data(){
                return{
                        guarda:[],
                        teste:{
                                nome:null,
                                sobrenome: null,
                                cidade: null,
                        },
                        userId: null,
                }
        },
                // ***************************************************
                // CARREGA TODOS OS USUÁRIO NA INICIALIZAÇÃO DA PÁGINA
                // ***************************************************
        async created() {
                const db  = getFirestore()
                const querySnapshot = await getDocs(collection(db, "ambTest"))
                console.log(this.guarda.id)
                 let cities = []
                querySnapshot.forEach((doc) => {
                       
                        let cityData = doc.data()
                        cityData.id = doc.id
                        cities.push(cityData)
                        // this.guarda = cities
                        
                });
                console.log(cities)
                 this.guarda = cities

        },
        methods:{
                // ********************************************************
                // TRÁS OS USUÁRIO DO BANCO E APRESENTA NA TELA DO USUÁRIO
                // *******************************************************
                editProd(teste){
                        this.teste = teste
                        console.log('UId ==> ', this.userId)
                        console.log('NOME ==> ', this.teste.nome) 
                        console.log('MOTIVO ==> ', this.teste.sobrenome)
                        console.log('RESPONSAVEL ==> ', this.teste.cidade)
                        console.log('TUDO DO TESTE NO EDITPROD', teste)
 
                },
                // ***************************
                // ATUALIZA O USUÁRIO NO BANCO
                // ***************************
                 async update(){
                        const db  = getFirestore()
                        const docRef = doc(db, "ambTest", this.userId);
                        await setDoc(docRef, this.teste)
                        .then(()=>{
                                alert('Atualizado com Sucesso!')
                         }).then(()=>{
                                 setTimeout(() => {
                                       this.$router.go({name: 'teste'})
                                 }, 2000);
                         }).catch((error)=>{
                                alert(error.message)
                        })
                },
                // **************************************
                // ADICIONA NOVO USUARIO AO BANCO ambTest
                // **************************************
                async setDocument(){
                        const db = getFirestore()
                        await addDoc(collection(db, "ambTest"), {
                        nome: this.teste.nome ,
                        sobrenome: this.teste.sobrenome,
                        cidade: this.teste.cidade,
                         }).then(()=>{
                                alert(`Adicionado com Sucesso!!!`)
 
                        }).then(()=>{
                                 setTimeout(() => {
                                       this.$router.go({name: 'teste'})
                                 }, 2000);
                        })
                         .catch((error)=>{
                                alert(error.message)
                        })
                       
                },
                // ********************************************
                // DELETA USUÁRIO PELO ID PASSADO POR PARAMETRO
                // ********************************************
                 delUser(id){
                        const db = getFirestore()
                         deleteDoc(doc(db, "ambTest", id))
                         .then(()=>{
                                alert('Deletado com Sucesso!')
                                
                        }).then(()=>{
                                 setTimeout(() => {
                                        this.$router.go({name: 'teste'})
                                 }, 2000);
                        }).catch((error)=>{
                                alert(error.message)

                        })
                }
        }
 
}
</script>
<style scoped>
input{
       border: 1px solid

}
.get div h1{
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 1.2em;
        color: rgb(99, 99, 99);
}

</style>>




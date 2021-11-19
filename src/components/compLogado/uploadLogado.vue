<template>
<div>
     <div>
        <input @change="previewImage" type="file" accept="image/*">
     </div>
     <div>
        Progresso:{{uploadValue.toFixed()+"%"}}
         <progress :value="uploadValue" max="100"></progress>
     </div>
     <div>
        <img class="preview" :src="picture">
        <br>
        <button @click="onUpload">UpLoad</button>
     </div>
</div>
</template>
<script>
import firebase from "firebase/app"
// import db from "../db/dbConfig"

export default {
   name:'Upload',
   data(){
      return{
         imgData:null,
         picture:null,
         uploadValue:0

      }
   },
   methods:{
      previewImage(event){
         this.uploadValue=0,
         this.picture=null,
         this.imgData=event.target.files[0];
      },
      onUpload(){
         this.picture=null;
         const storageRef = firebase.storage().ref(`${this.imgData.name}`).put(this.imageData);
         storageRef.on(`state_changed`,snapshot=>{
            this.uploadValue=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
         }, error=>{console.log(error.message)},
         ()=>{this.uploadValue=100;
         storageRef.snapshot.ref.getDownloadURL().then((url)=>{
            this.picture=url;
         });
         })
         
      }
   
   }
   
}
</script>
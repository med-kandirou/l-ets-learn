<template>
  
  <h1>Index</h1>
 

  <input type="text" v-model="form.email"><br>
  <input type="text" v-model="form.password"><br>
  <button @click="login">login</button>

</template>

<script setup>
import axios from 'axios';
import { onMounted,ref } from 'vue';

const form=ref({
  email:null,
  password:null,
})

function login(){
  console.log(form.email.value);
}

onMounted(() => {
  axios.get('http://localhost:8000/sanctum/csrf-cookie')
  .then((res)=>{
    console.log('ekt');
  })
})


</script>
<template>
  
  <h1>Index</h1>
 

  <input type="text" v-model="form.email"><br>
  <input type="text" v-model="form.password"><br>
  <button @click="login">login</button>

  {{ user }}

</template>

<script setup>
import axios from 'axios';
import { onMounted,ref } from 'vue';

const form=ref({
  email:null,
  password:null,
})
const user=ref();
async function login(){
  axios.defaults.withCredentials=true;
  await axios.get('http://localhost:8000/sanctum/csrf-cookie')
  await axios.post('http://localhost:8000/login',{
    email:form.value.email,
    password:form.value.password
  })

  await axios.get('http://localhost:8000/api/user')
  .then(res=>{
    user.value=res.data
  })

}

onMounted(() => {

})


</script>
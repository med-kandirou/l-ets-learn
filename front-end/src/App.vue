<template>
  
<h1>Index</h1>

</template>

<script setup>
import axios from 'axios';
import { onMounted } from 'vue';

onMounted(() => {
  axios.get('http://localhost:8000/sanctum/csrf-cookie')
  .then((res)=>{
    console.log('ekt');
  })
})




</script>
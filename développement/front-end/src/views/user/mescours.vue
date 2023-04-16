<template>
    <Header />
    <h1 class="text-center mb-4 mt-10 text-3xl font-bold leading-none text-black dark:text-white">Ma collection</h1>


</template>

<script setup>
import Header from '@/components/header.vue'
import {getCours} from '@/api/user.js'
import {userStore} from '@/stores/user.js'
import { onMounted,ref } from 'vue';
const user=userStore();
const courses=ref({})
onMounted(async ()=>{
    courses.value=await getCours(user.id)
    console.log(courses.value)
})


</script>
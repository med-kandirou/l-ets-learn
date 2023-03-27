<template>
    <Header />
    <h1 class="text-center mb-4 mt-10 text-3xl font-bold leading-none text-black dark:text-white">Mes favories</h1>

    <div v-for="favorie in favories">
        
    </div>

</template>

<script setup>
import Header from '@/components/header.vue'
import {getFavories} from '@/api/user.js'
import { userStore } from "@/stores/user.js";
import { onMounted,ref } from 'vue';
const user=userStore();

const favories=ref();

onMounted(()=>{
    getFavories(user.id).then(res=>{
        favories.value=res;
    })
})


</script>
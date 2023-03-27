<template>
    <Header />
    <h1 class="text-center mb-4 mt-10 text-3xl font-bold leading-none text-black dark:text-white">Mes favories</h1>

    

    <div class="grid grid-cols-1 gap-6 justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        <div v-for="favorie in favories">
            <Favorie @show="show" :id="favorie.pivot.cour_id" :title="favorie.title" :subtitle="favorie.subtitle" :image="favorie.image" :price="favorie.price" :nom_formateur="favorie.formateur.nom" :prenom_formateur="favorie.formateur.prenom" />
        </div>
    </div>

</template>

<script setup>
import Header from '@/components/header.vue'
import Favorie from '@/components/favorie.vue'
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
<template>
    <Dashbord title="Mes etudiants">
        <div>
            <label for="cours" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Selectionnez un cour</label>
            <select @change="getEtudiants" v-model="id_cour" id="cours" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>--Seletionnez--</option>
                <option v-for="cour in cours" :value="cour.id">{{ cour.title }}</option>
            </select>
        </div>
    </Dashbord>
</template>


<script setup>

import Dashbord from '@/components/dashboardForm.vue'
import {getMesCours} from '@/api/formateur.js'
import {getEtudiantbyCour} from '@/api/cour.js'

import { onMounted,ref } from 'vue';
const cours=ref({});
const id_cour=ref();
onMounted(async()=>{
    let res=await getMesCours();
    cours.value=res;
})
async function getEtudiants(){
    let res=await getEtudiantbyCour(id_cour.value);
    console.log(res)
}
</script>
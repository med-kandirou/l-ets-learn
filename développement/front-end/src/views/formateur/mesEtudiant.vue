<template>
    <Dashbord title="Mes etudiants">
        <div class="mb-11">
            <label for="cours" class="block mb-11 text-sm font-medium text-gray-900 dark:text-white">Selectionnez un
                cour</label>
            <select @change="getEtudiants" v-model="id_cour" id="cours"
                class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>--Seletionnez--</option>
                <option v-for="cour in cours" :value="cour.id">{{ cour.title }}</option>
            </select>
        </div>

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                            Image
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Nom
                        </th>
                        <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                            Prenom
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Email
                        </th>
                    </tr>
                </thead>
                <tbody>
                    
                    <tr class="border-b border-gray-200 dark:border-gray-700" v-for="etuadiant in etuadiants">
                        <th scope="row" class="px-6 py-4 text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                            <img :src="etuadiant.image" class="rounded-full w-32 h-32" alt="pic user">
                        </th>
                        <td class="px-6 py-4">
                            {{etuadiant.nom}}
                        </td>
                        <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                            {{etuadiant.prenom}}
                        </td>
                        <td class="px-6 py-4">
                            {{etuadiant.email}}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>


    </Dashbord>
</template>


<script setup>

import Dashbord from '@/components/dashboardForm.vue'
import { getMesCours } from '@/api/formateur.js'
import { getEtudiantbyCour } from '@/api/cour.js'

import { onMounted, ref } from 'vue';
const cours = ref({});
const etuadiants = ref({});
const id_cour = ref();
onMounted(async () => {
    let res = await getMesCours();
    cours.value = res;
})
async function getEtudiants() {
    let res = await getEtudiantbyCour(id_cour.value);
    etuadiants.value=res;
}
</script>
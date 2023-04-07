<template>
    <Dashbord title="Mes etudiants">
        <div>
            <label for="cours" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Selectionnez un
                cour</label>
            <select @change="getEtudiants" v-model="id_cour" id="cours"
                class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>--Seletionnez--</option>
                <option v-for="cour in cours" :value="cour.id">{{ cour.title }}</option>
            </select>
        </div>

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-11">
            <div class="flex items-center justify-between pb-4 bg-white dark:bg-gray-900">
                <div></div>
                <label for="table-search" class="sr-only">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <input type="text" id="table-search-users"
                        class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search for users">
                </div>
            </div>
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <tbody>
                    <tr
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row"
                            class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-2.jpg"
                                alt="Jese image">
                            <div class="pl-3">
                                <div class="text-base font-semibold">Jese Leos</div>
                                <div class="font-normal text-gray-500">jese@flowbite.com</div>
                            </div>
                        </th>
                        <td class="px-6 py-4">
                            Vue JS Developer
                        </td>
                        <td class="px-6 py-4">
                            <div class="flex items-center">
                                <div class="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> Online
                            </div>
                        </td>
                    </tr>
                    <tr
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row"
                            class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg"
                                alt="Jese image">
                            <div class="pl-3">
                                <div class="text-base font-semibold">Thomas Lean</div>
                                <div class="font-normal text-gray-500">thomes@flowbite.com</div>
                            </div>
                        </th>
                        <td class="px-6 py-4">
                            UI/UX Engineer
                        </td>
                        <td class="px-6 py-4">
                            <div class="flex items-center">
                                <div class="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> Online
                            </div>
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
const id_cour = ref();
onMounted(async () => {
    let res = await getMesCours();
    cours.value = res;
})
async function getEtudiants() {
    let res = await getEtudiantbyCour(id_cour.value);
    console.log(res)
}
</script>
<template>
    <Dashboad title="Espaces Etudiants">         
        <div class="mt-10 relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                    Le nombre des etudiant dans la platforme est :  ({{ total }}) 
                </caption>
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr >
                        <th scope="col" class="px-6 py-3">
                           image
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Nom 
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Prenom
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Total des achats
                        </th>
                    </tr>
                </thead>
                <tbody v-for="etudiant in etudiants">
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <img class="h-8 w-8 rounded-full" :src="etudiant.image" >
                        </th>
                        <td class="px-6 py-4">
                            {{etudiant.nom}} 
                        </td>
                        <td class="px-6 py-4">
                            {{etudiant.prenom}}
                        </td>
                        <td class="px-6 py-4">
                            {{etudiant.email}}
                        </td>
                        <td class="px-6 py-4">
                            {{etudiant.course_count}}
                        </td>
                        <td class="px-6 py-4 text-right">
                            <button @click="detailsuser(etudiant.id)" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">voir plus</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </Dashboad>
</template>

<script setup>
    import Dashboad from '@/components/dashboardAdmin.vue'
    import {getAllEtudiant} from '@/api/admin.js'
    import router from '@/router/index'
    import { onMounted,ref } from 'vue';
    const etudiants=ref({});
    const total=ref();
    onMounted(()=>{
        getetudiant()
    })
    async function getetudiant(){
        let res=await getAllEtudiant();
        etudiants.value=res;
        total.value=res.length;
    }
    function detailsuser(id){
        router.push('/admin/detailsuser/'+id+'')
    }
</script>
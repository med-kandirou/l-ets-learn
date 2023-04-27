<template>
        <DashboadAdmin title="Espaces formateures">         
            <div class="mt-10 relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                        Tous les formateurs 
                        <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p>
                    </caption>
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
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
                                <span class="sr-only">Details</span>
                            </th>

                        </tr>
                    </thead>
                    <tbody v-for="formateur in fromateurs">
                        <tr  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <img class="h-8 w-8 rounded-full" :src="formateur.image" >
                            </th>
                            <td class="px-6 py-4">
                                {{formateur.nom}} 
                            </td>
                            <td class="px-6 py-4">
                                {{formateur.prenom}}
                            </td>
                            <td class="px-6 py-4">
                                {{formateur.email}}
                            </td>
                            <td class="px-6 py-4 text-right">
                                <button @click="detailsFormateur(formateur.id)" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Details</button>
                            </td>
                            <td class="px-6 py-4 text-right">
                                <button @click="supprimerFormateur(formateur.id)" class="font-medium text-red-600 hover:underline">supprimer</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </DashboadAdmin>
</template>

<script setup>
    import DashboadAdmin from '@/components/dashboardAdmin.vue'
    import {getAllFormateur} from '@/api/admin.js'
    import {deleteFormateur} from '@/api/formateur.js'

    import router from '@/router/index'
    import { onMounted,ref } from 'vue';
    const fromateurs=ref({});
    onMounted(()=>{
        getformateurs()
    })
    async function getformateurs(){
        let res=await getAllFormateur();
        fromateurs.value=res;
    }
    function detailsFormateur(id){
        router.push('/admin/detailsFormateur/'+id+'')
    }

    function supprimerFormateur(id){
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await deleteFormateur(id); 
                    getformateurs();
                    Swal.fire(
                        'Deleted!',
                        'Formateur supprimé avec succes',
                        'success'
                )
            }
        })
    } 

    
</script>
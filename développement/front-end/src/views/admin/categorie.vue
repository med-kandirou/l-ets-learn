<template>
    <Dashboad title="Espaces categories">
        
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div class="flex items-center justify-between pb-4 bg-white dark:bg-gray-900">
                <div>
                </div>
                <label for="table-search" class="sr-only">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    </div>
                    <input type="text" id="table-search-users" class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="rechercher une categorie">
                </div>
            </div>
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Nom du categorie
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Date de creation    
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Date de modification    
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="categorie in categories" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td class="px-6 py-4">
                            {{categorie.nom}}
                        </td>
                        <td class="px-6 py-4">
                            {{categorie.created_at.slice(0,10)}}
                        </td>
                        <td class="px-6 py-4">
                            {{categorie.updated_at.slice(0,10)}}
                        </td>
                        <td class="px-6 py-4">
                            <button @click="details(categorie.id)" class="font-medium text-blue-600 hover:underline">details</button>
                        </td>
                        <td class="px-6 py-4">
                            <button @click="supprimer(categorie.id)" class="font-medium text-red-600 hover:underline">supprimer</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </Dashboad>

</template>

<script setup>
    import Dashboad from '@/components/dashboardAdmin.vue' 
    import {onMounted,ref} from 'vue' 
    import {getCategories,deleteCat} from '@/api/categorie.js' 
import router from '../../router';
    const categories=ref();
    onMounted(()=>{
        getCate();
    })
    
    async function getCate(){
        let res=await getCategories();
        categories.value=res
    }

    function details(id){
        router.push("/admin/DetailsCategorie/"+id+"")
    }

    async function supprimer(id_cat){
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    deleteCat(id_cat);
                    getCate();
                    Swal.fire(
                        'Deleted!',
                        'Cour supprimé avec succes',
                        'success'
                    )
                }
            })
        }
</script>
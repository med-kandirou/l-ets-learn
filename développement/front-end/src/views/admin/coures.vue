<template>
    <Dashboad title="Espaces Courses">
        
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <div class="flex items-center justify-between pb-4 bg-white dark:bg-gray-900">
        <div>
        </div>
        <label for="table-search" class="sr-only">Search</label>
        <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input type="text" id="table-search-users" class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users">
        </div>
    </div>
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Title
                </th>
                <th scope="col" class="px-6 py-3">
                    price
                </th>
                <th scope="col" class="px-6 py-3">
                    Formateur
                </th>
                <th scope="col" class="px-6 py-3">
                   Categorie    
                </th>
                <th scope="col" class="px-6 py-3">
                    Date creation
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="cour in cours" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                    <img class="w-10 h-10 rounded-full" :src="cour.image" alt="Jese image">
                    <div class="pl-3">
                        <div class="text-base font-semibold">{{cour.title}}</div>
                        <div class="font-normal text-gray-500">{{cour.subtitle}}</div>
                    </div>  
                </th>
                <td class="px-6 py-4">
                    {{cour.price}}
                </td>
                <td class="px-6 py-4">
                    {{cour.formateur.nom}}
                </td>
                <td class="px-6 py-4">
                    {{cour.categorie.nom}}
                </td>
                <td class="px-6 py-4">
                    {{cour.created_at.slice(0,10)}}
                </td>
                <td class="px-6 py-4">
                    <button @click="details(cour.id)" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">videos</button>
                </td>
                <td class="px-6 py-4">
                    <button @click="supprimer(cour.id)" class="font-medium text-red-600 hover:underline">supprimer</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>

    </Dashboad>

</template>

<script setup>
    import Dashboad from '@/components/dashboardAdmin.vue' 
    import {getCours} from '@/api/cour.js' 
    import {deletecour} from '@/api/admin.js' 
    import router from '../../router';
    import {onMounted,ref} from 'vue' 
    const cours=ref();
    onMounted(()=>{
        getcoures();
    })
    function details(id){
        router.push('/admin/detailsCour/'+id);
    }
    async function getcoures(){
        let res=await getCours();
        cours.value=res
    }
    function supprimer(id){
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    deletecour(id);
                    getcoures();
                    Swal.fire(
                        'Deleted!',
                        'Cour supprimé avec succes',
                        'success'
                    )
                }
            })
    }
</script>
<template>
    <Dashboard title="Details d'apprenant ">
        <div class="flex">
            <div>
                <img class="rounded-t-lg"  alt="image" />
            </div>
            <div>
                    <input type="text" class="border placeholder-gray-400 focus:outline-none
                    focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                    border-gray-300 rounded-md"/>
                    <input type="text" class="border placeholder-gray-400 focus:outline-none
                    focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                    border-gray-300 rounded-md"/>
                    <input type="text" class="border placeholder-gray-400 focus:outline-none
                    focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                    border-gray-300 rounded-md"/>
            </div>
        </div>
        <div class="grid grid-cols-1 gap-6 justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
            <div v-for="cour in cours" class="max-w-sm mb-7 bg-gray-100 border shadow-xl group hover:border-red-700 border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="rounded-t-lg" :src="cour.image" alt="image" />
                </a>
            <div class="p-4">
                <a href="#">
                    <h6 class="mb-2 text-xl font-bold tracking-tight text-blue-900 dark:text-white group-hover:text-red-500">{{cour.title}}</h6>
                </a>
                <p class="mb-3 font-normal text-blue-500 dark:text-gray-400">{{cour.subtitle}}</p> 
            </div>
            <div class="flex justify-around mb-7">
                <div class="flex">
                    <img :src="cour.formateur.image" class="w-10 h-10 rounded-full">
                    <p class="ml-2 mt-auto mb-auto font-light">{{cour.formateur.nom}} {{cour.formateur.prenom}}</p>
                </div>
                <div>
                    <p class="text-red-500 font-extrabold"><span class="text-2xl">{{cour.price}} </span>MAD</p>
                </div>
            </div>
        </div>
    </div>
    </Dashboard>
</template>

<script setup>
    import Dashboard from '@/components/dashboardAdmin.vue'
    import {details} from '@/api/user.js'
    import { onMounted,ref } from 'vue';
    import { useRoute } from 'vue-router';
    const route = useRoute()
    const cours=ref({})
    onMounted(async()=>{
        cours.value=await details(route.params.id)
    })

</script>
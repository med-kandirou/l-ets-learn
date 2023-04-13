<template>
    <Dashboard title="Details d'apprenant">
        <h1 class="text-center mb-10">Informations</h1>
        <div class="flex justify-around w-full mt-20">
            <div>
                <img class="rounded-full w-40 h-w-40" :src="users.image" alt="image profile" >
            </div>
            <div>
                <input type="text" v-model="users.nom" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 " disabled ><br>
                <input type="text" v-model="users.prenom" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 " disabled ><br>
                <input type="text" v-model="users.email" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 " disabled ><br>
            </div>
        </div>
        <h1 class="text-center mb-10 mt-10">Les cours de {{ users.nom }} </h1>
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
    import {details,getuser} from '@/api/user.js'
    import { onMounted,ref } from 'vue';
    import { useRoute } from 'vue-router';
    const route = useRoute()
    const cours=ref({})
    const users=ref({
        nom:'',
        prenom:'',
        email:''
    })
    onMounted(async()=>{
        cours.value=await details(route.params.id)
        users.value=await getuser(route.params.id)
    })

</script>
<template>
    <div class="max-w-sm mb-7 bg-gray-100 border shadow-xl group hover:border-red-700 border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img @click="show(id)" class="rounded-t-lg" :src="image" alt="image" />
        </a>
        <div class="p-4">
            <a href="#">
                <h6 class="mb-2 text-xl font-bold tracking-tight text-blue-900 dark:text-white group-hover:text-red-500">{{title}}</h6>
            </a>
            <p class="mb-3 font-normal text-blue-500 dark:text-gray-400">{{subtitle}}</p> 
        </div>
        <div class="flex justify-around mb-7">
            <div class="flex">
                <img src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" class="w-10 h-10 rounded-full">
                <p class="ml-2 mt-auto mb-auto font-light">{{nom_formateur}} {{prenom_formateur}}</p>
            </div>
            <div>
                <p class="text-red-500 font-extrabold"><span class="text-2xl">{{ price }} </span>MAD</p>
            </div>
        </div>
        <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Supprimer</button>
    </div>
</template>

<script setup>
import router from '@/router/index';
defineProps({
    id:Number,
    title: String,
    subtitle: String,
    image: String,
    price: Number,
    nom_formateur: String,
    prenom_formateur: String,
})

function show(id){
    router.push('/course/'+id+'')
}
</script>
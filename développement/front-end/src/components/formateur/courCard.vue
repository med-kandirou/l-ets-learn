<template>

    <div @click="" class="max-w-sm mb-7 bg-gray-100 border shadow-xl group hover:border-red-700 border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class="rounded-t-lg" :src="image" alt="image" />
            </a>
            <div class="p-4">
                <a href="#">
                    <h6 class="mb-2 text-xl font-bold tracking-tight text-blue-900 dark:text-white group-hover:text-red-500">{{title}}</h6>
                </a>
                <p class="mb-3 font-normal text-blue-500 dark:text-gray-400">{{subtitle}}</p> 
            </div>
            <div class="flex justify-around mb-7">
                <div>
                    <p class="text-red-500 font-extrabold"><span class="text-2xl">{{ price }} </span>MAD</p>
                </div>  
            </div>
            <div class="flex justify-around mb-7">
                <div>
                    <button @click="ShowCour(id)" data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                        Modifier
                    </button>
                </div> 
                <div>
                    <button @click="supprimer(id)" type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Supprimer</button>
                </div> 
            </div>
        </div>
        <Popup @hide="visible=false" :visible="visible" />
</template>

<script setup>
import router from '@/router/index'
import Popup from '@/components/popupDelete.vue'
import { deleteCour } from '@/api/cour.js';
import { ref } from 'vue';
const visible=ref(false)
    defineProps({
        id:Number,
        title: String,
        subtitle: String,
        image: String,
        price: Number,
    })
    function ShowCour(id){
        router.push('/formateur/updateCour/'+id+'')
    }
    function supprimer(id){
        // console.log(deleteCour(id));
        visible.value=true;
    }
</script>
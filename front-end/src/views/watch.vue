<template>
    <div class="w-full grid grid-cols-[auto_1fr] ">
        <div class="w-96 h-screen border-r-2 border-withe bg-gray-100">
            <div class="header h-20 flex justify-between items-center">
                <router-link to="/" class="ml-2">
                    <img src="/images/home.png" class="h-10">
                </router-link>
                <button class="mr-2">
                    <img src="/images/settings.png" class="h-10">
                </button>
            </div>
            <div class="">
                <h1 class="mx-auto w-4/5 mt-4 mb-8 text-xl font-normal tracking-tight leading-none text-black md:text-xl lg:text-xl dark:text-white">{{ c.cour.title }}</h1>
                <div v-for="video in c.videos">
                    <videoTitle @getvideo="chnageVideo" :id_video="video.id" :NomVideo="video.nom" :Taille="video.taille"  />  
                </div>      
            </div>
            
        </div>
        <div class="w-full">
            <div class="header h-20 flex justify-end items-center">
                <button class="inline-flex items-center text-white bg-red-500 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3">
                    Precedent
                    <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
                <button class="inline-flex items-center text-white bg-red-500 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3">
                    Suivant
                    <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
                
            </div>
            <div>
                <div v-if="u.id==''">
                     <p class="mx-auto w-4/5 mt-11 mb-11 text-2xl font-bold text-black dark:text-white">{{ video.nom }}</p>
                    <img class="block mx-auto h-36 w-36" src="/images/lock.png" alt="">
                    <p class="mx-auto w-3/5 mt-11 text-2xl text-gray-500">Vous n'avez pas l'acces a ce cour !</p>
                    <p class="mx-auto w-3/5 mt-11 mb-11 text-2xl text-black">Vous Avez deja ce cour ?, <router-link to="/login" class="underline text-red-500">Connectez-vous</router-link></p>
                    <button class="btn text-white inline-flex bg-red-500 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        Complete and continue
                        <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button> 
                </div>
                <div v-else>
                    <img src="/images/video.png" class="mr-3 ml-4 h-9" alt="video icon"><p class="mx-auto w-4/5 mt-11 mb-11 text-2xl font-bold text-black dark:text-white">{{ video.nom }}</p>
                    <video controls class="video w-4/5 h-2/5">
                        <source :src="video.video" type="video/mp4">
                    </video><br><br>
                    <button class="btn text-white inline-flex bg-red-500 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        Complete and continue
                        <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>   
                </div>
                
            </div>
        </div>
    </div>
</template>

<script setup>

import videoTitle from '@/components/videoTitle.vue'
import { CourseStore } from "@/stores/course.js";
import { userStore } from "@/stores/user.js";
import { ref } from 'vue';
const c=CourseStore()
const u=userStore()

const video=ref({
    nom:'',
    video:'',
    poster:''
})

function chnageVideo(id){
    for(let i=0;i<c.videos.length;i++){
        if(id==c.videos[i].id){
            video.value.nom=c.videos[i].nom;
            video.value.video=c.videos[i].video;
            video.value.poster=c.videos[i].poster;
        }
    }
}


</script>

<style scoped>
.header{
    background-color: #003679;
}
.video {
  display: block;
  margin: auto;
}
.btn{
    display: block;
    margin: auto;
}
</style>
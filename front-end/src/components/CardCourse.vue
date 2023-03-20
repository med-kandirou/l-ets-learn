<template>
    <table class="mx-auto w-3/5 text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-800 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3 text-xl">
                    Playlist
                </th>
                <th scope="col" class="px-6 py-3">
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="video in Videos" class="bg-withe border-b hover:bg-red-100 dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-blue-800 whitespace-nowrap dark:text-white flex items-center">
                    <img src="/images/video.png"> <span class="ml-2">{{video.nom}} <span class="ml-1">({{video.taille}})</span> </span> 
                </th>
                <td class="px-6 py-4">
                    <button type="button" @click="test(video.id)" class="block m-auto focus:outline-none text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Start</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>


<script setup>

    defineProps({
        Videos:Array
    })

    function test(id){
        alert(id);
    }


</script>
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
                <div>
                    <button>delete</button>
                </div>
                <div>
                    <button>update details</button>
                </div>
            </div>
        </div>
</template>

<script setup>


</script>
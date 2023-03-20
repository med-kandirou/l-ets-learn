<template>

    <div class="mx-auto mt-10 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div class="flex flex-col items-center pb-10">
            <img class="w-24 mt-4 h-24 mb-3 rounded-full shadow-lg" src="https://res.cloudinary.com/demo/image/twitter_name/BillClinton.jpg" alt="Bonnie image"/>
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{{nom}} {{prenom}}</h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">{{email}}</span>
            <span class="text-sm text-gray-500 dark:text-gray-400">{{tele}}</span><br>
            <span class="text-center text-gray-500 dark:text-black">{{description}}</span>
        </div>
    </div> 
</template>

<script setup>
    defineProps({
        nom:String,
        prenom:String,
        email:String,
        tele:String,
        description:String,
    })
</script>
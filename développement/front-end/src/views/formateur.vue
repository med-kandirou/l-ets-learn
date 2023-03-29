<template>
    <Header />

    <div class="flex items-center h-screen bg-[url('https://s.udemycdn.com/teaching/billboard-desktop-v4.jpg')] bg-no-repeat bg-center bg-cover">
        <div class="lg:col-span-7 ml-6">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Ayez un impact global</h1>
            <p class="max-w-2xl mb-6 text-black lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Construisez votre cours en ligne et monétisez votre expertise en partageant votre savoir partout dans le monde.</p>
            <router-link to="/signupform" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                Devenir formateur
            </router-link>
        </div>
    </div>
    
</template>

<script setup>
    import Header from '@/components/header.vue'


</script>
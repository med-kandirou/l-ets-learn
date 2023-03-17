<template>
    <Header />

    <div class="flex items-center h-screen bg-[url('https://s.udemycdn.com/teaching/billboard-desktop-v4.jpg')] bg-no-repeat bg-center bg-cover">
        <div class="lg:col-span-7 ml-6">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Ayez un impact global</h1>
            <p class="max-w-2xl mb-6 text-black lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Construisez votre cours en ligne et monétisez votre expertise en partageant votre savoir partout dans le monde.</p>
            <button class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Ayez un impact global
            </button>
        </div>
    </div>
</template>

<script setup>
    import Header from '@/components/header.vue'

</script>
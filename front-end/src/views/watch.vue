<template>
    <div class="w-full grid grid-cols-[auto_1fr] ">
        <div class="w-96 h-screen border-r-2 border-withe">
            <div class="header h-20 flex justify-between items-center">
                <button class="ml-2">
                    <img src="/images/home.png" class="h-10">
                </button>
                <button class="mr-2">
                    <img src="/images/settings.png" class="h-10">
                </button>
            </div>
            <h1 class="mb-4 text-xl font-extrabold tracking-tight leading-none text-black md:text-xl lg:text-xl dark:text-white">Tout ce que vous devez savoir sur les Hooks et le Redux Toolkit avec ReactJS 2022</h1>
        </div>
        <div class="w-full">
            <div class="header h-20 flex justify-end items-center">
                <button class="inline-flex items-center text-white bg-red-500 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3">
                    Complete and continue
                    <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.header{
    background-color: #003679;
}
</style>
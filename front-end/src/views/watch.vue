<template>
    <!-- <div class="flex w-screen h-screen text-gray-400 bg-blue-500">

            <div class="flex flex-col w-56 border-r border-white">
                <div class="flex flex-col flex-grow p-4 overflow-auto">
                    <a class="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-800" href="#">
                        <span class="leading-none">Item 1</span>
                    </a>
                    <a class="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-800" href="#">
                        <span class="leading-none">Item 2</span>
                    </a>
                    
                </div>
            </div>
            <div class="flex flex-col flex-grow">
                <div class="flex items-center flex-shrink-0 h-16 px-8 border-b border-white">
                    <h1 class="text-lg font-medium">Home</h1>
                    <button class="flex items-center justify-center h-10 px-4 ml-auto text-sm font-medium rounded hover:bg-gray-800">
                        Action 1
                    </button>
                    <button class="flex items-center justify-center h-10 px-4 ml-2 text-sm font-medium bg-gray-800 rounded hover:bg-gray-700">
                        Action 2
                    </button>
                    <button class="relative ml-2 text-sm focus:outline-none group">
                        <div class="flex items-center justify-between w-10 h-10 rounded hover:bg-gray-800">
                            <svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                        </div>
                        <div class="absolute right-0 flex-col items-start hidden w-40 mt-1 pb-1 bg-gray-800 border border-gray-800 shadow-lg group-focus:flex">
                            <a class="w-full px-4 py-2 text-left hover:bg-gray-900" href="#">Menu Item 1</a>
                            <a class="w-full px-4 py-2 text-left hover:bg-gray-900" href="#">Menu Item 2</a>
                            <a class="w-full px-4 py-2 text-left hover:bg-gray-900" href="#">Menu Item 3</a>
                        </div>
                    </button>
                </div>
                <div class="flex-grow p-6 overflow-auto bg-white">
                    
                </div>
            </div>
</div> -->


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
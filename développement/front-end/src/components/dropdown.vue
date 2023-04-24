<template>
    <button type="button" id="dropdownbtn" class="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown">
      <span class="sr-only">Open user menu</span>
      <img class="w-8 h-8 rounded-full" :src="user.image" alt="user photo">
    </button>
    <!-- Dropdown menu -->
    <div class="hidden z-50 my-4 w-56 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown">
        <div class="py-3 px-4">
            <span class="block text-sm font-semibold text-gray-900 dark:text-white">{{user.nom}} {{user.prenom}}</span>
            <span class="block text-sm font-light text-gray-500 truncate dark:text-gray-400">{{user.email}}</span>
        </div>
        <ul class="py-1 font-light text-gray-500 dark:text-gray-400" aria-labelledby="dropdown">
            <li>
                <router-link to="/user/profile" class="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Mon profile</router-link>
            </li>
        </ul>
        <ul class="py-1 font-light text-gray-500 dark:text-gray-400" aria-labelledby="dropdown">
            <li>
                <router-link to="/mesFavories" class="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" ><svg class="mr-2 w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path></svg> Mes favories</router-link>
            </li>
            <li>
                <router-link to="/mesCours"  class="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><svg class="mr-2 w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg> Collections</router-link>
            </li> 
        </ul>
        <ul class="py-1 font-light text-gray-500 dark:text-gray-400" aria-labelledby="dropdown">
            <li>
                <button @click="logout" class="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</button>
            </li>
        </ul>
    </div>
</template>


<script setup>
 import { initCarousels, initCollapses, initDials, initDismisses, initDrawers, initDropdowns, initModals, initPopovers, initTabs, initTooltips } from 'flowbite'
 import { onMounted } from 'vue';
 import { userStore } from "@/stores/user.js";
 import router from '@/router/index'
  import {deconnecter} from '@/api/user.js'
 const user=userStore();
 onMounted(() => {
        initCarousels();
        initCollapses();
        initDials();
        initDismisses();
        initDrawers();
        initDropdowns();
        initModals();
        initPopovers();
        initTabs();
        initTooltips();
    })
    function logout(){
        deconnecter();
        user.$reset();
        router.push('/');
    }

</script>
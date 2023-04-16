<template>
    <Dashboard title="Mes courses">
        <div class="grid grid-cols-1 gap-6 justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
            <div v-for="cour in cours">
                <courCard @deleted="getCours" :id="cour.id" :title="cour.title" :subtitle="cour.subtitle" :image="cour.image" :price="cour.price" />
            </div>
        </div>

        <div data-dial-init data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" class="fixed right-6 bottom-6 group">
            <button type="button" class="flex items-center justify-center text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
                <svg aria-hidden="true" class="w-8 h-8 transition-transform group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                <span class="sr-only">Open actions menu</span>
            </button>
        </div>
        <addCour />
    </Dashboard>
</template>

<script setup>
    import Dashboard from '@/components/dashboardForm.vue'
    import courCard from '@/components/formateur/courCard.vue'
    import addCour from '@/components/formateur/addCour.vue'
    import {getMesCours} from '@/api/formateur.js'
    import { onMounted,ref } from 'vue';
    const cours =ref({});
    

    async function getCours(){
        let res = await getMesCours();
        cours.value=res;
    }
    onMounted(async ()=>{
        getCours();
    })
</script>
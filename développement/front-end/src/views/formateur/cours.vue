<template>
    <Dashboard title="Mes courses">
        <div class="grid grid-cols-1 gap-6 justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
            <div v-for="cour in cours">
                <Cour :id="cour.id" :title="cour.title" :subtitle="cour.subtitle" :image="cour.image" :price="cour.price" />
            </div>
        </div>
    </Dashboard>
</template>

<script setup>
    import Dashboard from '@/components/dashboardForm.vue'
    import Cour from '@/components/formateur/courCard.vue'
    import {getMesCours} from '@/api/formateur.js'
    import { onMounted,ref } from 'vue';
    const cours =ref({});
    
    onMounted(async ()=>{
        let res = await getMesCours();
        cours.value=res;
    })
</script>
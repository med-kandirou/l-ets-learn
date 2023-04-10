<template>
        <DashboadAdmin title="Dashboad">
            
        </DashboadAdmin>
</template>

<script setup>
    import DashboadAdmin from '@/components/dashboardAdmin.vue'
    import {getAllFormateur} from '@/api/admin.js'
    import { onMounted,ref } from 'vue';
    const fromateurs=ref({});
    onMounted(()=>{
        getformateurs()
    })
    async function getformateurs(){
        let res=await getAllFormateur();
        fromateurs.value=res;
        console.log(fromateurs.value)
    }
</script>
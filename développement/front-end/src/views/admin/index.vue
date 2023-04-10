<template>
        <DashboadAdmin title="Dashboad">
            
        </DashboadAdmin>
</template>

<script setup>
    import DashboadAdmin from '@/components/dashboardAdmin.vue'
    import getAllFormateur from '@/api/admin.js'
    import { onMounted } from 'vue';
    const fromateurs=ref({});
    onMounted(()=>{
        
    })
    async function getformateurs(){
        let res=await getformateur();
        fromateurs=res;
    }
</script>
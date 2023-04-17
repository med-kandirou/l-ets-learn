<template>
    <Dashboard title="Espaces Quiz">
        
    </Dashboard>
</template>

<script setup>
    import Dashboard from '@/components/DashboardForm.vue'
    import {mesQuiz} from '@/api/quiz.js'
    import { onMounted,ref } from 'vue';
    import { formateurStore } from "@/stores/formateur";
    const form=formateurStore()
    const quiz=ref({})
    onMounted(async ()=>{
        quiz.value=await mesQuiz(form.id)
        console.log(quiz.value)
    })
    
</script>
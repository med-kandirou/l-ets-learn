<template>
    <Dashboard title="Espaces Quiz">
        
    </Dashboard>
</template>

<script setup>
    import Dashboard from '@/components/DashboardForm.vue'
    import {mesQuiz} from '@/api/quiz.js'
    import { onMounted,ref } from 'vue';
    const quiz=ref({})
    onMounted(async ()=>{
        quiz.value=mesQuiz(localStorage.get('token'))
        console.log('quiz.value')
    })
    
</script>
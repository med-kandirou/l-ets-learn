<template>
    <Dashboard title="Espaces Quiz">
        <table class="w-full mt-14 text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                  <th scope="col" class="px-6 py-3">
                      Image
                  </th>
                  <th scope="col" class="px-6 py-3">
                      Nom
                  </th>
                  <th scope="col" class="px-6 py-3">
                      Taille    
                  </th>
                  <th scope="col" class="px-6 py-3">
                      Date creation
                  </th>
                  <th scope="col" class="px-6 py-3">
                      Action
                  </th>
              </tr>
          </thead>
          <tbody>
              <!-- <tr v-for="q in quiz" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td class="px-6 py-4">
                      <img class="h-11 w-11 rounded-full" :src="vid.poster" >
                  </td>
                  <td class="px-6 py-4">
                      {{vid.nom}}
                  </td>
                  <td class="px-6 py-4">
                      {{vid.taille}}
                  </td>
                  <td class="px-6 py-4">
                      {{vid.created_at.slice(0,10)}}
                  </td>
                  <td class="px-6 py-4">
                      <button @click="supprimer(vid.id)" class="font-medium text-red-600 hover:underline">supprimer</button>
                  </td>
              </tr> -->
          </tbody>
      </table>
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
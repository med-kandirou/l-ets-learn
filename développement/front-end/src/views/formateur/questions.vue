<template>
    <Dashboard title="Espaces question">
        <table class="w-full mt-14 text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                  <th scope="col" class="px-6 py-3">
                      Question
                  </th>
                  <th scope="col" class="px-6 py-3">
                      Proposition 1
                  </th>
                  <th scope="col" class="px-6 py-3">
                      Proposition 2 
                  </th>
                  <th scope="col" class="px-6 py-3">
                      Proposition 3
                  </th>
                  <th scope="col" class="px-6 py-3">
                      Reponse
                  </th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="q in questions" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td class="px-6 py-4">
                      {{q.question}}
                  </td>
                  <td class="px-6 py-4">
                      {{q[1]}}
                  </td>
                  <td class="px-6 py-4">
                      {{q[2]}}
                  </td>
                  <td class="px-6 py-4">
                      {{q[3]}}
                  </td>
              </tr>
          </tbody>
      </table>
    </Dashboard>
</template>

<script setup>
    import Dashboard from '@/components/DashboardForm.vue'
    import {useRoute} from 'vue-router'
    import {onMounted,ref} from 'vue'
    import {getQuestions} from '@/api/quiz.js'
    const route=useRoute()
    const questions=ref({})
    onMounted(async ()=>{
        questions.value=await getQuestions(route.params.id);
    })

</script>
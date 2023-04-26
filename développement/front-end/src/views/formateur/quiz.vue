<template>
    <Dashboard title="Espaces Quiz">
        <table class="w-full mt-14 text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                  <th scope="col" class="px-6 py-3">
                      Nom de Quiz
                  </th>
                  <th scope="col" class="px-6 py-3">
                      Non du cour
                  </th>
                  <th scope="col" class="px-6 py-3">
                      date de creation    
                  </th>
                  <th scope="col" class="px-6 py-3">
                      Action
                  </th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="q in quiz" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  
                  <td class="px-6 py-4">
                      {{q.Nom}}
                  </td>
                  <td class="px-6 py-4">
                      {{q.cour.title}}
                  </td>
                  <td class="px-6 py-4">
                      {{q.created_at.slice(0,10)}}
                  </td>
                  <td class="px-6 py-4">
                      <button @click="supprimer(q.id)" class="font-medium text-red-600 hover:underline">supprimer</button>
                  </td>
                  <td class="px-6 py-4">
                      <button @click="details(q.id)" class="font-medium text-blue-600 hover:underline">Questions</button>
                  </td>
              </tr>
          </tbody>
      </table>
    </Dashboard>
</template>

<script setup>
    import Dashboard from '@/components/DashboardForm.vue'
    import {mesQuiz,deleteQuiz} from '@/api/quiz.js'
    import { onMounted,ref } from 'vue';
    import { formateurStore } from "@/stores/formateur";
    import router  from "@/router/index";
    const form=formateurStore()
    const quiz=ref({})
    onMounted(async ()=>{
        quiz.value=await mesQuiz(form.id)
    })
    function details(id){
        router.push('/formateur/quiz/'+id+'')
    }
    function supprimer(id){
        Swal.fire({
          title: 'Are you sure?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
          }).then(async (result) => {
            if (result.isConfirmed) {
                deleteQuiz(id)
                Swal.fire(
                    'Deleted!',
                    'Quiz supprimé avec succes',
                    'success'
                )
            }
          })
    }
    
</script>
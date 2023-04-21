<template>
    <Dashboard title="details course">
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
              <tr v-for="vid in videos" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
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
              </tr>
          </tbody>
      </table>
    </Dashboard>
</template>

<script setup>
  import Dashboard from '@/components/dashboardForm.vue';
  import {VideosByCourse} from '@/api/cour.js';
  import {DeleteVideo} from '@/api/video.js';
  import { useRoute } from 'vue-router';
  import { ref,onMounted } from 'vue';
  const route=useRoute()
  const videos=ref({});
  onMounted(()=>{
      getvideos()
  })
  async function getvideos(){
      let res = await VideosByCourse(route.params.id)
      videos.value=res
  }
  async function supprimer(id){
      Swal.fire({
          title: 'Are you sure?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
          }).then(async (result) => {
              if (result.isConfirmed) {
                  DeleteVideo(id)
                  getvideos();
                  Swal.fire(
                      'Deleted!',
                      'video supprimé avec succes',
                      'success'
                  )
              }
          })
  }
</script>

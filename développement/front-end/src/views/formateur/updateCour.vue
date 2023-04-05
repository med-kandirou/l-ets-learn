<template>
    <Dashboard title="Modification des informations">
        <div class="w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
            <div class="block mx-auto w-full h-full max-w-md md:h-auto">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div class="px-6 py-6 lg:px-8">
                        <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Modifier les informations du cours</h3>
                        <form class="space-y-6">
                            <div>
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                                <input type="text" v-model="data.title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required>
                            </div>
                            <div>
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subtitle</label>
                                <input type="text" v-model="data.subtitle" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                            </div>
                            <div>
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">base</label>
                                <textarea rows="6" v-model="data.base" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" ></textarea>
                            </div>
                            <div>
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">But</label>
                                <textarea rows="6" v-model="data.but" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" ></textarea>
                            </div>
                            <div>
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                                <input type="number" v-model="data.price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                            </div>
                            <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Modifier</button>
                        </form>
                    </div>
                </div>
            </div>
        </div> 
    </Dashboard>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getCourByid } from '@/api/cour.js';
import { useRoute } from 'vue-router';
import Dashboard from '@/components/dashboardForm.vue';
const route = useRoute();
    const data=ref({
        title: '',
        subtitle: '',
        image: '',
        price: '',
        base:'',
        but:'',
        video:'',
    })
    onMounted(async ()=>{
        let res=await getCourByid(route.params.id);
        data.value.title=res[0].title
        data.value.subtitle=res[0].subtitle
        data.value.base=res[0].base
        data.value.but=res[0].but
        data.value.price=res[0].price
    })
</script>
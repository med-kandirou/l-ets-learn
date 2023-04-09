<template>
    <Header />
    <div class="flex justify-center bg-gray-100 py-10 p-14">
        <div class="container mx-auto pr-4">
            <div class="w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
            <div class="h-20 bg-red-400 flex items-center justify-between">
                <p class="mr-0 text-white text-lg pl-5">COURSES</p>
            </div>
            <div class="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
                <p>TOTAL</p>
            </div>
            <p class="py-4 text-3xl ml-5">20,456</p>
            </div>
        </div>

        <div class="container mx-auto pr-4">
            <div class="w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
            <div class="h-20 bg-blue-500 flex items-center justify-between">
                <p class="mr-0 text-white text-lg pl-5">CERTIFICATS</p>
            </div>
            <div class="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
                <p>TOTAL</p>
            </div>
            <p class="py-4 text-3xl ml-5">19,694</p>
            </div>
        </div>
        <div class="container mx-auto pr-4">
            <div class="w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
            <div class="h-20 bg-purple-400 flex items-center justify-between">
                <p class="mr-0 text-white text-lg pl-5">BT OPT OUTS</p>
            </div>
            <div class="flex justify-between pt-6 px-5 mb-2 text-sm text-gray-600">
                <p>TOTAL</p>
            </div>
            <p class="py-4 text-3xl ml-5">711</p>
            </div>
        </div>
    </div>

        <div class="overflow-hidden bg-white shadow sm:rounded-lg w-3/4 block mx-auto mt-6">
            <div class="px-4 py-5 sm:px-6">
                <h3 class="text-base font-semibold leading-6 text-gray-900">Applicant Information</h3>
                <p class="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
            </div>
            <div class="border-t border-gray-200">
                <dl>
                    <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">Image</dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"><img class="rounded-full w-32 h-32"
                                :src="data.image"
                                alt="image description"></dd>
                    </div>
                    <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">Nom</dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"><input type="text" v-model="data.nom"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Nom"></dd>
                    </div>
                    <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">Prenom</dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"><input type="text" v-model="data.prenom"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Prenom"></dd>
                    </div>
                    <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">Email address</dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"><input type="text" v-model="data.email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Email"></dd>
                    </div>
                </dl>
                <button type="button" @click="modifier" class="block mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Modifier</button>
        </div>
    </div>
</template>

<script setup>
import { userStore } from "@/stores/user";
import Header from "@/components/header.vue";
import { modifierprofile } from "@/api/user.js";
import { ref } from 'vue';
const user = userStore();
const data=ref({
    id:user.id,
    image:user.image,
    nom:user.nom,
    prenom:user.prenom,
    email:user.email,
})
async function modifier(){
    let res = await modifierprofile(data.value);
    if(res.data="success"){
        Swal.fire(
            'succes!',
            'Votre compte a été bien modifier',
            'success'
        )
    }
}
</script>
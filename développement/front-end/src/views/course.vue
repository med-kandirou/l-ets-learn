<template>
    <Header />

    <div
        class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 h-auto bg-[url('https://www.filepicker.io/api/file/mQLwC8UTUiyjsDnRRBgN')] bg-no-repeat bg-center bg-cover bg-fixed">
        <div>
            <h1 class="mb-4 text-6xl font-bold leading-none text-white dark:text-white">{{ course.cour.title }}</h1>
            <p class="mb-8 text-lg font-normal text-white lg:text-2xl sm:px-16 xl:px-48 dark:text-gray-400">
                {{ course.cour.subtitle }}</p>
            <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <button @click="pannier"
                    class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    Ajouter au favories
                </button>
                <button @click="acheter"
                    class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    <svg class="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z">
                        </path>
                    </svg>
                    Acheter maintenant ({{ course.cour.price }} MAD)
                </button>
            </div>

        </div>
    </div>

    <h1 class="text-center mb-10 mt-12 text-3xl font-sans leading-none text-black dark:text-white">A propos de ce cour</h1>
    <video class="mx-auto mb-36" width="700" height="700" controls :poster="course.cour.image">
        <source :src="course.cour.video" type="video/mp4">
    </video>

    <div class="bg-slate-100 mb-11 pt-12 pb-12">
        <div
            class="w-3/5 mx-auto mt-11 mb-11 bg-white border border-gray-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div class="sm:hidden">
                <label for="tabs" class="sr-only">Select tab</label>
                <select id="tabs"
                    class="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>Statistics</option>
                    <option>Services</option>
                    <option>FAQ</option>
                </select>
            </div>
            <ul class="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400"
                id="fullWidthTab" data-tabs-toggle="#fullWidthTabContent" role="tablist">
                <li class="w-full">
                    <button id="stats-tab" data-tabs-target="#stats" type="button" role="tab" aria-controls="stats"
                        aria-selected="true"
                        class="inline-block w-full p-4 rounded-tl-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600">Pre-requis</button>
                </li>
                <li class="w-full">
                    <button id="about-tab" data-tabs-target="#about" type="button" role="tab" aria-controls="about"
                        aria-selected="false"
                        class="inline-block w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600">Ce
                        que vous apprendrez</button>
                </li>
            </ul>
            <div id="fullWidthTabContent" class="border-t border-gray-200 dark:border-gray-600">
                <div class="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="stats" role="tabpanel"
                    aria-labelledby="stats-tab">
                    <ul role="list" class="space-y-4 text-gray-500 dark:text-gray-400">
                        <li class="flex space-x-2">
                            <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span class="font-light leading-tight">{{ course.cour.base }}</span>
                        </li>
                    </ul>
                </div>
                <div class="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="about" role="tabpanel"
                    aria-labelledby="about-tab">
                    <ul role="list" class="space-y-4 text-gray-500 dark:text-gray-400">
                        <li class="flex space-x-2">
                            <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span class="font-light leading-tight">{{ course.cour.but }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <cardCourse :Videos="course.videos" />

    <h1 class="text-center mb-4 text-3xl font-bold leading-none text-black">Formateur</h1>
    <cardFormateur :nom="course.formateur.nom" :prenom="course.formateur.prenom" :email="course.formateur.email"
        :tele="course.formateur.tele" :description="course.formateur.description" />
    <Footer />
</template>


<script setup>
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
import cardFormateur from '@/components/cardFormateur.vue'
import cardCourse from '@/components/CardCourse.vue'
import { addtofavorie } from '@/api/cour.js'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { userStore } from "@/stores/user.js";
import { CourseStore } from "@/stores/course.js";
const user = userStore()
const course = CourseStore()
const route = useRoute()
//ajouter au pannier
function pannier() {
    if (user.id == '') {
        Swal.fire(
            'info!',
            'Merci de se connecter !',
            'info'
        )
    }
    else {
        addtofavorie(route.params.id, user.id)
        Swal.fire(
            'Success!',
            'Cour est sauvgardé',
            'success'
        )
    }
}
onMounted(() => {
    course.getCoursbyId(route.params.id)
})
</script>
<template>
    <Header />
        <div class="z-50 w-full p-4 mt-11 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
            <div class="block mr-auto ml-auto relative w-full h-full max-w-md md:h-auto">
                <!-- Modal content -->
                <div class="bg-white rounded-lg shadow dark:bg-gray-700">
                    <div class="px-6 py-6 lg:px-8">
                        <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
                        <form class="space-y-6">
                            <div>
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" v-model="formateur.email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com">
                            </div>
                            <div>
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                <input type="password" v-model="formateur.password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                            </div>
                            <div class="flex justify-between">
                                <div class="flex items-start">
                                    <div class="flex items-center h-5">
                                        <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800">
                                    </div>
                                    <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                                </div>
                                <a href="#" class="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                            </div>
                            <button type="button" @click="loginform" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                            <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                                Not registered? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    </div> 
</template>

<script setup>
import Header from '@/components/header.vue'
import axios from 'axios';
import {login,getformateur} from '@/api/formateur.js'
import { ref } from 'vue';
import router from '../router/index'
const formateur=ref({
    email:'',
    password:''
})

async function loginform(){
    await axios.get('/sanctum/csrf-cookie')
    await login(formateur.value).then(res=>{
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        if(res.token!=null){
            Toast.fire({
            icon: 'success',
            title: 'Signed in successfully'
            })
            localStorage.setItem('token',res.token);
            getformateur();
            router.push('/formateur')
        }
        else{
            Toast.fire({
                icon: 'error',
                title: 'Email ou password invalid'
            })
        }
    })
}

</script>
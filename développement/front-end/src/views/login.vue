<template>
  
  <Header />
  <div class="bg-white relative">
    <div class="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl
        xl:px-5 lg:flex-row">
      <div class="flex flex-col items-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row">
        <div class="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
          <div class="flex flex-col items-center justify-center w-full h-full relative lg:pr-10">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/authentication/illustration.svg" class="btn-"/>
          </div>
        </div>
        <div class="w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
          <div class="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl
              relative z-10">
            <p class="w-full text-4xl font-medium text-center leading-snug font-serif">Bienvennue, se connecter</p>
            <div class="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
              <div class="relative">
                <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Email</p>
                <input placeholder="exemple@gmail.com" v-model="form.email" type="text" class="border placeholder-gray-400 focus:outline-none
                    focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                    border-gray-300 rounded-md"/>
                  <p class="text-red-600" v-text="errors.email"></p>
              </div>
              <div class="relative">
                <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                    absolute">Password</p>
                <input placeholder="Password" v-model="form.password" type="password" class="border placeholder-gray-400 focus:outline-none
                    focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                    border-gray-300 rounded-md"/>
                <p class="text-red-600" v-text="errors.password"></p>
              </div>
              <div class="flex justify-end">
                <router-link to="/loginformateur" class="block py-2 pl-3 pr-4 underline text-blue-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-800 md:p-0">Se connecter avec formateur</router-link>
               </div>
              <div class="relative">
                <button @click="login" class="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-indigo-500
                    rounded-lg transition duration-200 hover:bg-indigo-600 ease">Submit</button>
              </div>
            </div>
          </div>
          <Design />
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
  import { ref } from "vue";
  import Header from "@/components/header.vue";
  import Design from "@/components/design.vue";
  import {userStore} from "@/stores/user";
  import axios from 'axios';

  const form=ref({
    email:null,
    password:null,
  })

  const storeUser=userStore();
  const errors=ref({});

  async function login(){
    await axios.get('/sanctum/csrf-cookie')
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
    try {
        await axios.post("/login",{
          email:form.value.email,
          password:form.value.password,
        });
        let res=await axios.get('/api/user');
        storeUser.id=res.data.id;
        storeUser.nom=res.data.nom;
        storeUser.image=res.data.image;
        storeUser.prenom=res.data.prenom;
        storeUser.email=res.data.email;
        storeUser.role=res.data.role;
        storeUser.redirect();
    } catch(error){
        Toast.fire({
          icon: 'error',
          title: 'Email or password invalid'
        })
        errors.value=error.response.data.errors;
        console.log(errors.value);
    }

  }

</script>
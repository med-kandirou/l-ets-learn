<template>
        <!--  ----------------------------------------------------------------------  -->
    <!--  NOTE: Please add the following <META> element to your page <HEAD>.      -->
    <!--  If necessary, please modify the charset parameter to specify the        -->
    <!--  character set of your HTML page.                                        -->
    <!--  ----------------------------------------------------------------------  -->
        <Header />
   

    <div class="mx-auto w-full max-w-xs">
        <form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"  method="POST">
    <div class="mb-4">
      <label for="first_name" class="block text-gray-700 text-sm font-bold mb-2">
        Nom
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="first_name" maxlength="40" name="first_name" size="20" type="text" />
    </div>
    <div class="mb-4">
      <label for="last_name" class="block text-gray-700 text-sm font-bold mb-2" >
        Prenom
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="last_name" maxlength="80" name="last_name" size="20" type="text" />
    </div>
    <div class="mb-4">
      <label for="email" class="block text-gray-700 text-sm font-bold mb-2">
        Email
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" maxlength="80" name="email" size="20" type="text" />
    </div>
    <div class="mb-4">
      <label for="mobile" class="block text-gray-700 text-sm font-bold mb-2" >
        Mobile
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="mobile" maxlength="40" name="mobile" size="20" type="text" />
    </div>
    <div class="mb-4">
      <label for="description" class="block text-gray-700 text-sm font-bold mb-2">
        Question
      </label>
      <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="description" ></textarea>
    </div>
    <div class="flex items-center justify-between">
      <button type="submit" name="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
        submit
      </button>
    </div>
  </form>
  
</div>
</template>

<script setup>
    import Header from '@/components/header.vue'


</script>
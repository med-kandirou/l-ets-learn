import axios from 'axios'
import { defineStore } from 'pinia'
export const formateurStore = defineStore('formateurStore', {
  state: () => {
    return {
        id:'',
        nom:'',
        prenom:'',
        email:'',
        image:'',
    }
  },
  actions:{
    //logout
    logout:async function(){
      try{
        await axios.post('/logout');
      }
      catch(error){
        console.log(error);
      }
    }
  },
  persist: true,
})
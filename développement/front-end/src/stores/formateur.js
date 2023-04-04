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
    //check if user for toggling navbar in partie user
    checkifUser:function(){
      let isUser=false;
      if(this.role==0 && this.id!=''){
        isUser=true;
      }
      return isUser;
    },
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
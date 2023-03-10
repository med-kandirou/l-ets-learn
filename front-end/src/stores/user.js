import axios from 'axios'
import { defineStore } from 'pinia'
import router from '../router/index'
export const userStore = defineStore('userStore', {
  state: () => {
    return {
        id:'',
        nom:'',
        prenom:'',
        email:'',
        role:'',
    }
  },
  actions:{
    redirect:function(){
        if(this.role==0){
            router.push('/')
        }else if(this.role==1){
            router.push('/formateur')
        }
        else if(this.role==2){
            router.push('/admin')
        }
    },
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
        this.$state.id='';
        this.$state.nom='';
        this.$state.prenom='';
        this.$state.email='';
        this.$state.role='';
        router.push('/');
      }
      catch(error){
        console.log(error);
      }
    }

  },
  persist: true,
})
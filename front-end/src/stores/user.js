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
            router.push('/users/')
        }else if(this.role==1){
            router.push('/formateur/')
        }
        else if(this.role==2){
            router.push('/admin/')
        }
    },
    //check if user for toggling navbar in partie user
    checkifUser:function(){
      let isUser=false;
      if(this.role==0 && this.id!='1'){
        isUser=true;
      }
      return isUser;
    }

  },
  persist: true,
})
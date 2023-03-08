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
            //router.push('/users/')
            console.log('user');
        }else if(this.role==1){
            // router.push('/formateur/')
            console.log('formateur');
        }
        else if(this.role==2){
            // router.push('/admin/')
            console.log('admin');
        }
    }
  },
  persist: true,
})
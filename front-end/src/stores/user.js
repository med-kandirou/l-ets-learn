import { defineStore } from 'pinia'

export const userStore = defineStore('userStore', {
  state: () => {
    return {
        id:'',
        nom:'',
        prenom:'',
        email:'',
        role:-1,
    }
  },
  persist: true,
})
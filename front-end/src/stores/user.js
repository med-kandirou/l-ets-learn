import { defineStore } from 'pinia'

export const userStore = defineStore('userStore', () => {
    state: () => ({ 
        id:'',
        nom:'',
        prenom:'',
        email:'',
        password:'',
        role:-1,
    })
    persist:true
})

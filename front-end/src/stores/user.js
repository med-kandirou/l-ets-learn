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


// export const userStore = defineStore('userStore', {
//     state: () => ({ 
//         id:'',
//         nom:'',
//         prenom:'',
//         email:'',
//         password:'',
//         role:-1,
//     }),
//     persist: true,
//   })

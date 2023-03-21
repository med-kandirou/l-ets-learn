import axios from 'axios'
import { defineStore } from 'pinia'
import router from '../router/index'
export const Course = defineStore('Course', {
  state: () => {
    return {
        cour:{
          nom:'',
          
        },
        videos:[]
    }
  },
  actions:{
  },
  persist: true,
})
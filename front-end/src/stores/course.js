import axios from 'axios'
import { defineStore } from 'pinia'
import router from '../router/index'
export const Course = defineStore('Course', {
  state: () => {
    return {
        cour:{
          cour:'',
          title:'',
        },
        videos:[]
    }
  },
  actions:{
  },
  persist: true,
})
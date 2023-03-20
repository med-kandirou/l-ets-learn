import axios from 'axios'
import { defineStore } from 'pinia'
import router from '../router/index'
export const Course = defineStore('Course', {
  state: () => {
    return {
        Course:[]
    }
  },
  actions:{
  },
  persist: true,
})
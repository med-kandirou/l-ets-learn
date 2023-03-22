import axios from 'axios'
import { defineStore } from 'pinia'
import {getCourByid,VideosByCourse} from '@/api/cour.js'
import router from '../router/index'
export const CourseStore = defineStore('CourseStore', {
  state: () => {
    return {
        cour:{
          title:'',
          subtitle:'',
          image:'',
          video:'',
          base:'',
          but:'',
          price:'',
        },
        videos:[],
        formateur:{
          nom:'',
          prenom:'',
          email:'',
          description:'',
          tele:''
        }
        
    }
  },
  actions:{
    getCoursbyId:async function(id){
      let course = await getCourByid(id);
      let videos = await VideosByCourse(id);
      this.cour.title=course[0].title;
      this.cour.subtitle=course[0].subtitle;
      this.cour.image=course[0].image;
      this.cour.video=course[0].video;
      this.cour.base=course[0].base;
      this.cour.but=course[0].but;
      this.cour.price=course[0].price;

      this.formateur.nom=course[0].formateur.nom;
      this.formateur.prenom=course[0].formateur.prenom;
      this.formateur.email=course[0].formateur.email;
      this.formateur.description=course[0].formateur.description;
      this.formateur.tele=course[0].formateur.tele;

      this.videos=videos;
    }
  },
  persist: true,
})
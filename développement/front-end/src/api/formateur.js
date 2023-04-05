import axios from 'axios'
import { formateurStore } from "@/stores/formateur";
async function signup(data){
    try{
        const response = await axios.post("/api/formateurs",data);
        return response.data;
    }
    catch(error){
        console.log(error);
    }
}

async function login(data){
    try{
        const response = await axios.post("/api/formateurs/login",data);
        return response.data;
    }
    catch(error){
        console.log(error);
    }
}

async function getformateur(){
    try{
        const response = await axios.get("/api/formateur",{
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
          });
        const formateur=formateurStore();
        formateur.id=response.data.data.id
        formateur.nom=response.data.data.nom
        formateur.prenom=response.data.data.prenom
        formateur.email=response.data.data.email
    }
    catch(error){
        console.log(error);
    }
}

async function getMesCours(id){
    try{
        const response = await axios.get("/api/formateur/"+id+"/cours",{
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });
    }
    catch(error){
        console.log(error);
    }
}
export {signup,login,getformateur}
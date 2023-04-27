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
        formateur.image=response.data.data.image
        formateur.telephone=response.data.data.tele
        formateur.email=response.data.data.email
        formateur.niveau=response.data.data.niveau
        formateur.description=response.data.data.description
    }
    catch(error){
        console.log(error);
    }
}

async function getMesCours(){
    try{
        const formateur=formateurStore();
        const response = await axios.get("/api/formateurs/"+formateur.id+"/cours",{
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });
        return response.data;
    }
    catch(error){
        console.log(error);
    }
}
async function modifierprofile(data){
    try{
        const response = await axios.put("/api/formateurs/"+data.id+"",data,{
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });
        return response.data;
    }
    catch(error){
        console.log(error);
    }
}


async function getformateurbyId(id_f){
    try{
        const response = await axios.get("/api/formateurs/"+id_f+"");
        return response.data;

    }
    catch(error){
        console.log(error);
    }
}

async function getcoursebyFormateur(id_f){
    try{
        const response = await axios.get("/api/formateurs/"+id_f+"/cours");
        return response.data;
    }
    catch(error){
        console.log(error);
    }
}
async function statistiques(id_f){
    try{
        const response = await axios.get("/api/formateurs/"+id_f+"/stats");
        return response.data;
    }
    catch(error){
        console.log(error);
    }
}

async function deleteFormateur(id_f){
    try{
        const response = await axios.delete("/api/formateurs/"+id_f+"");
        return response.data;
    }
    catch(error){
        console.log(error);
    }
}

export {statistiques,signup,login,getformateur,getMesCours,modifierprofile,getformateurbyId,getcoursebyFormateur,deleteFormateur}
import axios from "axios";

async function getAllFormateur(){
    try{
        const response = await axios.get("/api/formateurs");
        return response.data;
    }
    catch(error){
        console.log(error);
    }
}
async function getAllEtudiant(){
    try{
        const response = await axios.get("/api/users");
        return response.data;
    }
    catch(error){
        console.log(error);
    }
}
async function deletecour(cour_id){
    try{
        const response = await axios.delete("/api/cours/"+cour_id+"");
        return response.data;
    }
    catch(error){
        console.log(error);
    }
}

export {getAllFormateur,getAllEtudiant,deletecour}
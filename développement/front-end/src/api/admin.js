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

export {getAllFormateur,getAllEtudiant}
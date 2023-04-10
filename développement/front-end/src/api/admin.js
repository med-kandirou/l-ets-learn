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

export {getAllFormateur}
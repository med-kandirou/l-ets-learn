import axios from 'axios'

async function getFavories(user_id){
    try{
        const response = await axios.get("/api/cours/"+cour_id+"/videos");
        return response.data;
    }
    catch(error){
        console.log(error);
    }
}
export {getFavories}
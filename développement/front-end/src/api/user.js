import axios from 'axios'

async function getFavories(user_id){
    try{
        const response = await axios.get("/api/favories/"+user_id+"");
        return response.data;
    }
    catch(error){
        console.log(error);
    }
}
export {getFavories}
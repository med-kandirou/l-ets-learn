import axios from 'axios'

async function signup(data){
    try{
        const response = await axios.post("/api/formateur/signup");
        return response.data;
    }
    catch(error){
        console.log(error);
    }
}
export {getFavories}
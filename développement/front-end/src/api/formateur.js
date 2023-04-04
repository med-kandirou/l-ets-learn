import axios from 'axios'

async function signup(data){
    try{
        const response = await axios.post("/api/formateurs",data);
        return response.data;
        // console.log(data.nom);
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
export {signup,login}
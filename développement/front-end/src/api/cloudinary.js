import axios from 'axios'

async function signature(){
    try{
        const response = await axios.get("/api/getsignature");
        return response.data;
    }
    catch(error){
        console.log(error);
    }
}

export{signature}
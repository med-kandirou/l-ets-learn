import axios from 'axios'

async function getCours(){
    try{
        const response = await axios.get("/api/cours");
        return response.data;
    }
    catch(error){
        console.log(error);
    }
}

async function getCourByid(id){
    try{
        const response = await axios.get("/api/cours/"+id);
        return response.data;
    }
    catch(error){
        console.log(error);
    }
}
export {getCours,getCourByid}
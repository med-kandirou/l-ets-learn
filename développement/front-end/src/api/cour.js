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

async function addtofavorie(cour_id,user_id){
    try{
        const response = await axios.post("/api/favories/",{
            user_id:user_id,
            cour_id:cour_id
        });
        return response.data;
    }
    catch(error){
        console.log(error);
    }
}

async function VideosByCourse(cour_id){
    try{
        const response = await axios.get("/api/cours/"+cour_id+"/videos");
        return response.data;
    }
    catch(error){
        console.log(error);
    }
}
export {getCours,getCourByid,addtofavorie,VideosByCourse}
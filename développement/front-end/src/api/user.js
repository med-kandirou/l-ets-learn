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

async function modifierprofile(data){
    try{
        const response = await axios.put("/api/users/"+data.id+"",data,{
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });
        return response.data;
    }
    catch(error){
        console.log(error);
    }
}

async function getuser(id_user){
    try{
        const response = await axios.get("/api/user/"+id_user+"");
        return response.data;
    }
    catch(error){
        console.log(error);
    }
}

async function details(id_user){
    try{
        const response = await axios.get("/api/users/"+id_user+"");
        return response.data;
    }
    catch(error){
        console.log(error);
    }
}
async function getCours(user_id){
    try{
        const response = await axios.get("/api/user/"+user_id+"/courses");
        return response.data;
    }
    catch(error){
        console.log(error);
    }
}
export {getFavories,modifierprofile,details,getuser,getCours}
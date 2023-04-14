import axios from 'axios'

async function DeleteVideo(id){
    try{
        const response = await axios.delete("/api/videos/"+id+"");
        return response.data;
    }
    catch(error){
        console.log(error);
    }
}


export{DeleteVideo}
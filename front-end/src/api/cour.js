import axios from 'axios'

async function getCours(){
    try{
        let res= await axios.get("/");
        return res;
    }
    catch(error){
        console.log(error);
    }
}

export default {getCours}
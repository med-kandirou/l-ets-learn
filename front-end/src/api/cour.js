import axios from 'axios'

async function getCours(){
    try{
        let res= await axios.get("/api/cour");
        return res;
    }
    catch(error){
        console.log(error);
    }
}

export {getCours}
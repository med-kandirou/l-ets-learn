import axios from 'axios'
import { formateurStore } from "@/stores/formateur";
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

async function getformateur(){
    try{
        const response = await axios.get("/api/formateur",{
            headers: {
              'Authorization': 'Bearer ' + "40|fRJxmG8W50GgtrKTQsWKZu3KlmeArQkaEwAhQJbh"
            }
          });
        // const formateur=formateurStore();
        console.log(response.data);
    }
    catch(error){
        console.log(error);
    }
}
export {signup,login,getformateur}
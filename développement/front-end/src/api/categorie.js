import { data } from 'autoprefixer';
import axios from 'axios'

async function getCategories(){
    try{
        const response = await axios.get("/api/categories");
        return response.data;
    }
    catch(error){
        console.log(error);
    }
}

async function deleteCat(id_cat){
    try{
        const response = await axios.delete("/api/categories/"+id_cat+"");
        return response.data;
    }
    catch(error){
        console.log(error);
    }
}
async function updateCat(id_cat,data){
    try{
        const response = await axios.put("/api/categories/"+id_cat+"",data);
        return response.data;
    }
    catch(error){
        console.log(error);
    }
}



export {getCategories,deleteCat,updateCat}
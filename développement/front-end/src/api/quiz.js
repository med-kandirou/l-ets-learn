import axios from 'axios'

async function mesQuiz(id_f){
    try{
        const response = await axios.get("/api/quiz/"+id_f+"",{
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
async function deleteQuiz(id_f){
    try{
        const response = await axios.delete("/api/quiz/"+id_f+"",{
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
async function getQuestions(id_q){
    try{
        const response = await axios.get("/api/questions/"+id_q+"",{
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

export {mesQuiz,deleteQuiz,getQuestions}
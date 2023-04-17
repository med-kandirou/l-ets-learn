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

export {mesQuiz}
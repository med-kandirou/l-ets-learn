import axios from 'axios'

async function getsignature(){
    try{
        const response = await axios.get("/api/getsignature");
        return response.data;
    }
    catch(error){
        console.log(error);
    }
}

async function uploadFile(signature,file){
    let form = new FormData();
    form.append('file',file);
    form.append("api_key", 296547854239657)
    form.append("signature",signature.signature)
    form.append("timestamp",signature.timestamp)
    form.append("folder", "book");
    await axios.post("https://api.cloudinary.com/v1_1/dxn7gskyn/auto/upload", form, {
        headers: {
           "Access-Control-Allow-Origin": "http://localhost:3000",
           "Access-Control-Allow-Credentials": "true"
        }
    })
    .then((res) => {
        return res.data.url;
    })
}



export{getsignature,uploadFile}
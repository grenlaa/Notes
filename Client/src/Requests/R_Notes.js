import axios from "axios"

export default async function createImage(image){
    
    let file = new FormData();
    file.append("file", image);
    const response =await axios.post(
        "http://localhost:8081/api/CreateImage", file,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },

        }
    )
    
     if (response) {
        console.log(response)
        return response.data;
    }
}

export const createNotes = async(title,descr)=>{
    axios.post(
        "http://localhost:8081/api/CreateNotes",null,
        {
            params: {
                title: title,
                descr: descr
            },
        },
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    )
        .then(res => {
            console.log(`Success` + res.data);
        })
        .catch(err => {
            console.log(err);
        })
}

export const editNotes = async(id,title,descr)=>{
    console.log(id,title,descr)
    axios.post(
        ("http://localhost:8081/api/EditNotes/"+id),null,
        {
            params: {
                title: title,
                descr: descr
            },
        },
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    )
        .then(res => {
            return (`Success` + res.data);
        })
        .catch(err => {
            return  (err);
        })
}

export const deletNote = async(id)=>{
    axios.get("http://localhost:8081/api/DelNotes/"+id)
        .then(res => {
            console.log(`Success` + res.data);
        })
        .catch(err => {
            console.log(err);
        })
}
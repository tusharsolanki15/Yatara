import axios from "axios"

const token = import.meta.env.VITE_AUTHTOKEN;

export const fetchData = async() =>{
    try{
    const response =  await axios.get(import.meta.env.VITE_API_INCIDENTS, {
        headers: {
          'Authorization': token
        }
    });
    console.log("data",response)
    return response.data
    } catch(error){
        console.log("Some error in data fetching", error)
    }
}  
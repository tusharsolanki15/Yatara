import axios from "axios"

const token = import.meta.env.VITE_AUTHTOKEN;
const header = `Authorization: Bearer ${token}`
export const fetchData = async() =>{
    try{
    const response = await axios.get(import.meta.env.VITE_API_INCIDENTS, {headers: {header}})
    return response
    } catch(error){
        console.log("Some error in data fetching", error)
    }
}  
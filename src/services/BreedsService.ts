import axios from "axios"
const API_URL="https://dog.ceo/api"



export const getAllBreeds = () => {
    console.log(API_URL)
    return axios.get(`${API_URL}/breeds/list/all`, { headers:{"Accept":"application/json, text/plain, /","Content-Type": "multipart/form-data"} })
}
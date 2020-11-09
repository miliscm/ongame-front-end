import axios from "axios"

const api = axios.create({
  baseURL: "https://br.ongame.net/api/challenge/", 
  

})
export default api;
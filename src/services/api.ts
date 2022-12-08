import axios from "axios";

const api = axios.create({
  baseURL: "https://laravelweb2022.herokuapp.com/api",
  // baseURL: "http://192.168.15.145:8001/api",
  headers: {
    Accept: 'application/json',
  }
})

export default api;

import axios from "axios";

//api para criar uma conexão
const api = axios.create({
    baseURL: 'http://localhost:3333'
});

export default api;
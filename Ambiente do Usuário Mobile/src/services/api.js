import axios from 'axios';

//api parar criar uma conexão com API
const api = axios.create({
    baseURL: 'http://10.0.0.107:3333'
});

export default api;
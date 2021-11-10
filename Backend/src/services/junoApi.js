const axios = require('axios');

//api para criar uma conexão
const junoApi = axios.create({
    baseURL: 'https://api.juno.com.br'
});

module.exports = junoApi;
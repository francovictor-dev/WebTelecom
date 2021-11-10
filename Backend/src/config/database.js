const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/webtelecom';
//fazer a conexão de banco de dados
mongoose.connect(url, {
    useNewUrlParser: true
});

module.exports = mongoose;
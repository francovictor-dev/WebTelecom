const express = require('express');
const AdminRoutes = require('./routes/AdminRoutes');
const UserRoutes = require('./routes/UserRoutes');
const JunoRoutes = require('./routes/JunoRoutes');

const cors = require('cors');
//utilizar o express como servidor
const server = express();

server.use(cors());
//fazer entender json
server.use(express.json());
//usar as rotas criados no admin
server.use('/admin', AdminRoutes);
//usar as rotas criados no user
server.use('/user', UserRoutes);
//usar as rotas criados no Juno
server.use('/juno', JunoRoutes);

server.listen(3333, () => {
    console.log('API ONLINE');
});
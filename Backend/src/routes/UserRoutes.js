//exportando express
const express = require('express');
const { auth } = require('../controller/ControllerUser');
//exṕortando Controller do User
const ControllerUser = require('../controller/ControllerUser');

//validações de User
const CreateValidationUser = require('../middlewares/CreateValidationUser');
const UpdateValidationUser = require('../middlewares/UpdateValidationUser');

//validação de token
const TokenValidationUser = require('../middlewares/TokenValidationUser');

//expres.Router consegue ideitificar as rotas
const router = express.Router();

//########rotas de User#########

//cadastrar
router.post('/',CreateValidationUser, ControllerUser.create);
//atualizar
router.put('/:id', UpdateValidationUser, ControllerUser.update);
//mostrar todos registros
router.get('/all', ControllerUser.all);
//mostrar um registro específico
router.get('/name/:name', ControllerUser.show);
router.get('/cpf/:cpf', ControllerUser.show);
router.get('/plan/:plan', ControllerUser.show);
router.get('/address/:address', ControllerUser.show);
//date deve ser estudado
router.get(`/date/:date`, ControllerUser.show);
//encontrar por ID
router.get('/select/:id', ControllerUser.select);
//deletar
router.delete('/:id', ControllerUser.delete);
//autenticação
router.post('/auth', ControllerUser.auth);
//autenticação de token
router.get('/token', TokenValidationUser, ControllerUser.token);
module.exports = router;
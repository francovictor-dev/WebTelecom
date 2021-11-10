//exportando express
const express = require('express');
const { auth } = require('../controller/ControllerAdmin');

//exportando Controller do Admin
const ControllerAdmin = require('../controller/ControllerAdmin');

//validações de Admin
const CreateValidationAdmin = require('../middlewares/CreateValidationAdmin');
const UpdateValidationAdmin = require('../middlewares/UpdateValidationAdmin');

//validação de token
const TokenValidationAdmin = require('../middlewares/TokenValidationAdmin');

//expres.Router consegue ideitificar as rotas
const router = express.Router();

//########rotas de Admin#########

//cadastrar
router.post('/',CreateValidationAdmin, ControllerAdmin.create);
//atualizar
router.put('/update/:id', ControllerAdmin.update);
//mostrar todos os registros
router.get('/all', ControllerAdmin.all);
//mostrar um registro específico
router.get('/show', ControllerAdmin.show);
//mostrar um usuario selecionado
router.get('/select/:id', ControllerAdmin.select);
//deletar
router.delete('/:id', ControllerAdmin.delete);
//autenticação de login
router.post('/auth', ControllerAdmin.auth);
//autenticação de token
router.get('/token', TokenValidationAdmin, ControllerAdmin.token);

console.log();

module.exports = router;
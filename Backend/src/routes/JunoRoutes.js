//exportando express
const express = require('express');
const ControllerJuno = require('../controller/ControllerJuno');

//expres.Router consegue ideitificar as rotas
const router = express.Router();

router.get('/accessToken', ControllerJuno.accessToken);
router.get('/charge/:cpf', ControllerJuno.charge);

module.exports = router;